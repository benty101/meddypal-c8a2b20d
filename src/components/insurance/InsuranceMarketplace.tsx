import React, { useState, useEffect } from 'react';
import { insuranceService, InsurancePlan } from '@/services/InsuranceService';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, Shield, TrendingUp, Users, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import EnhancedInsuranceSearch from './EnhancedInsuranceSearch';
import InsuranceComparison from './InsuranceComparison';
import InsuranceFilters from './InsuranceFilters';

const InsuranceMarketplace = () => {
  const [plans, setPlans] = useState<InsurancePlan[]>([]);
  const [filteredPlans, setFilteredPlans] = useState<InsurancePlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPlans, setSelectedPlans] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [filters, setFilters] = useState({
    priceRange: [1000, 50000],
    coverage: 'all',
    type: 'all',
    features: [] as string[],
    rating: 0
  });

  useEffect(() => {
    fetchPlans();
    fetchStats();
  }, []);

  useEffect(() => {
    filterAndSortPlans();
  }, [plans, searchTerm, sortBy]);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await insuranceService.getAllInsurancePlans();
      setPlans(data);
      setFilteredPlans(data);
    } catch (err: any) {
      console.error('Error fetching insurance plans:', err);
      setError(err.message || 'Failed to load insurance plans. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const statsData = await insuranceService.getInsuranceStats();
      setStats(statsData);
    } catch (err) {
      console.error('Error fetching insurance stats:', err);
    }
  };

  const filterAndSortPlans = () => {
    let result = [...plans];

    // Search filter
    if (searchTerm) {
      result = result.filter(plan =>
        plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plan.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plan.plan_type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.premium_monthly - b.premium_monthly);
        break;
      case 'price-high':
        result.sort((a, b) => b.premium_monthly - a.premium_monthly);
        break;
      case 'coverage':
        result.sort((a, b) => b.coverage_amount - a.coverage_amount);
        break;
      default:
        // Keep original order for 'popular'
        break;
    }

    setFilteredPlans(result);
  };

  const handleAddToComparison = (plan: InsurancePlan) => {
    if (selectedPlans.length >= 3) {
      alert('You can only compare up to 3 plans at a time');
      return;
    }

    // Transform to match comparison component's expected format
    const comparisonPlan = {
      id: plan.id,
      name: plan.name,
      type: plan.plan_type,
      monthlyPremium: `₦${plan.premium_monthly.toLocaleString()}`,
      coverage: `₦${plan.coverage_amount.toLocaleString()}`,
      rating: 4.5, // You might want to add this to your database
      features: plan.features || [],
      popular: false
    };

    setSelectedPlans([...selectedPlans, comparisonPlan]);
  };

  const handleRemovePlan = (planId: string) => {
    setSelectedPlans(selectedPlans.filter(p => p.id !== planId));
  };

  const handleClearComparison = () => {
    setSelectedPlans([]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading insurance plans...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <div className="text-center mt-4">
          <Button onClick={fetchPlans}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

        {/* Header with Stats */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Shield className="h-4 w-4" />
            <span>Health Insurance Marketplace</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Find Your Perfect Health Coverage
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare plans from top providers and get covered in minutes
          </p>

          {stats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">{stats.totalPlans}</div>
                    <div className="text-sm text-muted-foreground">Available Plans</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">{stats.providers}</div>
                    <div className="text-sm text-muted-foreground">Trusted Providers</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">₦{stats.averagePremium?.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Avg. Monthly Premium</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Search and Sort */}
        <EnhancedInsuranceSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
          resultsCount={filteredPlans.length}
          totalCount={plans.length}
          showFilters={showFilters}
          onToggleFilters={() => setShowFilters(!showFilters)}
        />

        {/* Filters */}
        {showFilters && (
          <InsuranceFilters
            filters={filters}
            onFiltersChange={setFilters}
            onClearFilters={() => setFilters({
              priceRange: [1000, 50000],
              coverage: 'all',
              type: 'all',
              features: [],
              rating: 0
            })}
          />
        )}

        {/* Comparison Section */}
        {selectedPlans.length > 0 && (
          <div className="animate-fade-in">
            <InsuranceComparison
              selectedPlans={selectedPlans}
              onRemovePlan={handleRemovePlan}
              onClearComparison={handleClearComparison}
            />
          </div>
        )}

        {/* Plans Grid */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            All Insurance Plans ({filteredPlans.length})
          </h2>

          {filteredPlans.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No insurance plans found matching your criteria.</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlans.map((plan) => (
                <Card key={plan.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <CardDescription>{plan.provider}</CardDescription>
                      </div>
                      <Badge variant="outline">{plan.plan_type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-primary">
                        ₦{plan.premium_monthly.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">per month</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        ₦{plan.premium_annual.toLocaleString()} annually
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="text-sm font-medium mb-2">Coverage</div>
                      <div className="text-lg font-semibold text-green-600">
                        Up to ₦{plan.coverage_amount.toLocaleString()}
                      </div>
                    </div>

                    {plan.features && plan.features.length > 0 && (
                      <div className="pt-4 border-t">
                        <div className="text-sm font-medium mb-2">Key Features</div>
                        <ul className="text-sm space-y-1">
                          {plan.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                          {plan.features.length > 4 && (
                            <li className="text-xs text-muted-foreground italic">
                              +{plan.features.length - 4} more features
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 space-y-2">
                      <Button className="w-full" variant="default">
                        Get This Plan
                      </Button>
                      <Button
                        className="w-full"
                        variant="outline"
                        onClick={() => handleAddToComparison(plan)}
                        disabled={selectedPlans.some(p => p.id === plan.id)}
                      >
                        {selectedPlans.some(p => p.id === plan.id) ? 'Added to Compare' : 'Add to Compare'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsuranceMarketplace;
