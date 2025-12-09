# MeddyPal Platform Architecture v3.0
## Complete Blueprint for Nigeria's Healthcare Infrastructure Platform

**Version:** 3.0
**Date:** December 9, 2024
**Document Owner:** Basani Digital Innovations Limited
**Technical Lead:** Forric Technologies

---

## Executive Summary

MeddyPal is evolving from a demo/MVP into a **production-ready, two-sided healthcare marketplace** that serves as the "Operating System for Nigerian Healthcare." This document outlines the complete platform architecture incorporating:

1. **Patient PHR Platform** (B2C) - Personal health records + insurance marketplace
2. **Provider Operating System** (B2B) - Multi-HMO billing + practice management
3. **Corporate Health Portal** (B2B2C) - Enterprise HR insurance management *(NEW)*
4. **Genomics Integration** (B2G) - NABDA partnership for national genomics

### Key Strategic Additions (Based on Halcyon Consulting Insight)

The corporate/enterprise B2B channel represents a **massive opportunity**:
- Most health insurance in Nigeria is purchased through corporate/employer channels
- HR teams need tools to search, compare, and bulk-enroll employees
- This creates a high-volume, low-CAC acquisition channel

---

## Part 1: Platform Overview

### The Three-Sided Marketplace

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        MEDDYPAL ECOSYSTEM                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐             │
│   │   PATIENTS   │    │  PROVIDERS   │    │  CORPORATES  │             │
│   │   (B2C)      │    │   (B2B)      │    │   (B2B2C)    │             │
│   │              │    │              │    │              │             │
│   │ meddypal.com │    │ providers.   │    │ corporate.   │             │
│   │              │    │ meddypal.com │    │ meddypal.com │             │
│   └──────┬───────┘    └──────┬───────┘    └──────┬───────┘             │
│          │                   │                   │                      │
│          └───────────────────┼───────────────────┘                      │
│                              │                                          │
│                    ┌─────────▼─────────┐                               │
│                    │   SHARED API      │                               │
│                    │   LAYER           │                               │
│                    └─────────┬─────────┘                               │
│                              │                                          │
│          ┌───────────────────┼───────────────────┐                      │
│          │                   │                   │                      │
│   ┌──────▼──────┐    ┌───────▼───────┐   ┌──────▼──────┐              │
│   │  Insurance  │    │   Genomics    │   │   Provider  │              │
│   │  Engine     │    │   Pipeline    │   │   Registry  │              │
│   └─────────────┘    └───────────────┘   └─────────────┘              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Platform Domains

| Platform | Domain | Target User | Core Value |
|----------|--------|-------------|------------|
| Patient PHR | meddypal.com | Individuals/Families | Health records, insurance comparison, care access |
| Provider OS | providers.meddypal.com | Hospitals, Clinics, Labs, Pharmacies | Multi-HMO billing, practice management |
| Corporate Portal | corporate.meddypal.com | HR Teams, Employers | Bulk insurance comparison, employee enrollment |
| Admin Portal | admin.meddypal.com | MeddyPal Staff, NABDA | Platform management, analytics |

---

## Part 2: Insurance Comparison Engine (GoCompare Model)

### The GoCompare Approach

GoCompare's success comes from:
1. **Aggregation** - Multiple insurance providers in one place
2. **Comparison** - Side-by-side feature/price comparison
3. **Simplified Purchase** - One-click enrollment flow
4. **Commission Model** - Revenue from successful conversions

### MeddyPal Insurance Engine Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    INSURANCE COMPARISON ENGINE                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │                    AGGREGATION LAYER                            │    │
│  │                                                                  │    │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐  │    │
│  │  │Reliance │ │  AXA    │ │ Hygeia  │ │ AIICO   │ │  Avon   │  │    │
│  │  │  HMO    │ │ Mansard │ │   HMO   │ │         │ │   HMO   │  │    │
│  │  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘  │    │
│  │       │           │           │           │           │        │    │
│  │       └───────────┴───────────┼───────────┴───────────┘        │    │
│  │                               │                                 │    │
│  │                    ┌──────────▼──────────┐                     │    │
│  │                    │  Unified Plan API   │                     │    │
│  │                    └──────────┬──────────┘                     │    │
│  └───────────────────────────────┼────────────────────────────────┘    │
│                                  │                                      │
│  ┌───────────────────────────────▼────────────────────────────────┐    │
│  │                    COMPARISON LAYER                             │    │
│  │                                                                  │    │
│  │  • Side-by-side comparison (up to 5 plans)                      │    │
│  │  • Smart filtering (budget, coverage, family size, conditions)  │    │
│  │  • AI recommendations ("Based on your profile...")              │    │
│  │  • Price calculator (monthly vs annual, add-ons)                │    │
│  │  • Network hospital checker                                      │    │
│  └───────────────────────────────┬────────────────────────────────┘    │
│                                  │                                      │
│  ┌───────────────────────────────▼────────────────────────────────┐    │
│  │                    PURCHASE LAYER                               │    │
│  │                                                                  │    │
│  │  • Individual enrollment (single, couple, family)               │    │
│  │  • Corporate bulk enrollment (CSV upload, HR dashboard)         │    │
│  │  • Payment gateway (Paystack, Flutterwave, bank transfer)       │    │
│  │  • Digital insurance card generation                            │    │
│  │  • Policy document delivery                                      │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Insurance Plan Data Model

```typescript
interface InsurancePlan {
  id: string;
  provider: {
    id: string;
    name: string;           // "Reliance HMO", "AXA Mansard"
    logo: string;
    rating: number;
    totalEnrollees: number;
    networkHospitals: number;
  };

  planDetails: {
    name: string;           // "Essential Plan", "Premium Family"
    type: 'individual' | 'family' | 'corporate' | 'micro';
    tier: 'basic' | 'standard' | 'premium' | 'platinum';
  };

  pricing: {
    premiumMonthly: number;
    premiumAnnual: number;
    premiumQuarterly?: number;
    corporatePerHead?: number;  // For corporate plans
    discounts: {
      annual: number;         // e.g., 10% for annual payment
      corporate: number;      // e.g., 15% for 50+ employees
      family: number;         // e.g., 5% for 4+ family members
    };
  };

  coverage: {
    maxCoverage: number;      // Total coverage amount
    inpatient: number;        // Hospitalization limit
    outpatient: number;       // Clinic visits limit
    dental?: number;
    optical?: number;
    maternity?: number;
    pharmacy: number;
    labTests: number;
  };

  benefits: {
    consultations: number | 'unlimited';
    hospitalDays: number;
    surgeries: string[];      // Types covered
    chronicConditions: boolean;
    preExisting: 'covered' | 'waiting_period' | 'excluded';
    waitingPeriod: number;    // Days before coverage starts
    emergencyEvacuation: boolean;
    internationalCoverage: boolean;
  };

  network: {
    hospitalIds: string[];
    pharmacyIds: string[];
    labIds: string[];
    statesCovered: string[];  // Lagos, Abuja, etc.
  };

  eligibility: {
    minAge: number;
    maxAge: number;
    minFamilySize?: number;
    maxFamilySize?: number;
    minEmployees?: number;    // For corporate plans
  };

  metadata: {
    popularity: number;       // For sorting
    conversionRate: number;   // Internal metric
    customerSatisfaction: number;
    claimApprovalRate: number;
    avgClaimTime: number;     // Days to process
  };
}
```

### Comparison Algorithm

```typescript
interface ComparisonCriteria {
  budget: {
    min: number;
    max: number;
    paymentPreference: 'monthly' | 'annual' | 'quarterly';
  };

  coverage: {
    minCoverage: number;
    priorities: ('maternity' | 'dental' | 'optical' | 'chronic' | 'emergency')[];
  };

  demographics: {
    type: 'individual' | 'family' | 'corporate';
    familySize?: number;
    ages: number[];
    preExistingConditions?: string[];
    employeeCount?: number;   // For corporate
  };

  location: {
    state: string;
    preferredHospitals?: string[];
  };

  preferences: {
    prioritizePrice: boolean;
    prioritizeCoverage: boolean;
    prioritizeNetwork: boolean;
    includeInternational: boolean;
  };
}

function rankPlans(plans: InsurancePlan[], criteria: ComparisonCriteria): RankedPlan[] {
  return plans
    .filter(plan => meetsEligibility(plan, criteria))
    .filter(plan => withinBudget(plan, criteria.budget))
    .filter(plan => hasRequiredCoverage(plan, criteria.coverage))
    .filter(plan => coversLocation(plan, criteria.location))
    .map(plan => ({
      plan,
      score: calculateMatchScore(plan, criteria),
      highlights: generateHighlights(plan, criteria),
      warnings: generateWarnings(plan, criteria)
    }))
    .sort((a, b) => b.score - a.score);
}
```

---

## Part 3: Corporate Health Portal (B2B2C) - NEW

### The Halcyon Insight

> "Most insurance is bought through corporate. How do we enable HR teams to search, compare, and bulk onboard?"

This is a **game-changing** insight because:
1. **Volume**: One corporate client = 50-5000 employees enrolled
2. **Low CAC**: One sale = hundreds of customers
3. **Sticky**: Annual renewals, multi-year contracts
4. **Premium**: Corporate plans have higher premiums = higher commissions

### Corporate Portal Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CORPORATE HEALTH PORTAL                               │
│                    corporate.meddypal.com                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │                    COMPANY DASHBOARD                            │    │
│  │                                                                  │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │    │
│  │  │  Company    │  │  Employee   │  │   Health    │             │    │
│  │  │  Profile    │  │   Census    │  │   Analytics │             │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘             │    │
│  │                                                                  │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │    │
│  │  │  Insurance  │  │   Billing   │  │   Support   │             │    │
│  │  │  Management │  │   & Invoices│  │   Tickets   │             │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘             │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │                    INSURANCE COMPARISON                         │    │
│  │                                                                  │    │
│  │  • Corporate plan comparison (tailored for business)            │    │
│  │  • Bulk pricing calculator (discounts for volume)               │    │
│  │  • Benefit comparison across tiers                              │    │
│  │  • Network coverage by office location                          │    │
│  │  • RFQ/RFP submission to multiple HMOs                          │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │                    BULK ENROLLMENT                              │    │
│  │                                                                  │    │
│  │  • CSV/Excel upload for employee data                           │    │
│  │  • Employee self-enrollment portal                              │    │
│  │  • Dependent addition workflow                                  │    │
│  │  • ID card generation (bulk)                                    │    │
│  │  • Onboarding/offboarding automation                           │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │                    WELLNESS & ANALYTICS                         │    │
│  │                                                                  │    │
│  │  • Aggregated health metrics (anonymized)                       │    │
│  │  • Utilization reports (claims, hospital visits)                │    │
│  │  • Cost analysis (per employee, per department)                 │    │
│  │  • Wellness program integration                                 │    │
│  │  • ROI calculator (reduced absenteeism)                         │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Corporate Data Model

```typescript
interface CorporateAccount {
  id: string;
  company: {
    name: string;
    rcNumber: string;        // CAC registration
    industry: string;
    size: 'startup' | 'sme' | 'mid' | 'enterprise';
    employeeCount: number;
    headquarters: string;
    branches: {
      name: string;
      state: string;
      employeeCount: number;
    }[];
  };

  contacts: {
    hrAdmin: {
      name: string;
      email: string;
      phone: string;
    };
    finance: {
      name: string;
      email: string;
    };
    executiveSponsor?: {
      name: string;
      title: string;
      email: string;
    };
  };

  insurance: {
    currentProvider?: string;
    currentPlanId?: string;
    renewalDate?: Date;
    annualBudget?: number;
    budgetPerEmployee?: number;
    priorities: string[];    // "maternity", "dental", etc.
  };

  employees: {
    totalEnrolled: number;
    byTier: {
      executive: number;
      management: number;
      staff: number;
    };
    demographics: {
      avgAge: number;
      genderRatio: number;   // Male percentage
      withDependents: number;
    };
  };

  billing: {
    paymentMethod: 'invoice' | 'direct_debit' | 'card';
    paymentCycle: 'monthly' | 'quarterly' | 'annual';
    creditLimit?: number;
    outstandingBalance: number;
  };

  metadata: {
    createdAt: Date;
    accountManager?: string;
    acquisitionChannel: string;
    lifetimeValue: number;
    churnRisk: 'low' | 'medium' | 'high';
  };
}

interface BulkEnrollment {
  id: string;
  corporateAccountId: string;
  insurancePlanId: string;

  enrollment: {
    totalEmployees: number;
    status: 'draft' | 'pending_payment' | 'processing' | 'active' | 'completed';
    startDate: Date;
    endDate: Date;
  };

  employees: {
    id: string;
    employeeId: string;      // Company's internal ID
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: Date;
    gender: 'male' | 'female';
    department: string;
    tier: 'executive' | 'management' | 'staff';
    dependents: {
      name: string;
      relationship: 'spouse' | 'child' | 'parent';
      dateOfBirth: Date;
    }[];
    insuranceCardNumber?: string;
    status: 'pending' | 'active' | 'terminated';
  }[];

  pricing: {
    perEmployeeRate: number;
    perDependentRate: number;
    totalMonthly: number;
    totalAnnual: number;
    discount: number;
    commission: number;      // MeddyPal's cut
  };

  documents: {
    masterPolicy?: string;   // URL to policy document
    employeeList?: string;   // URL to uploaded CSV
    signedContract?: string;
  };
}
```

### Corporate User Journeys

#### Journey 1: HR Comparing Plans
```
1. HR Admin signs up at corporate.meddypal.com
2. Enters company details (size, budget, priorities)
3. System shows recommended corporate plans
4. HR compares 3-5 plans side-by-side
5. HR requests quotes from top 3 providers
6. Receives customized quotes within 24-48 hours
7. Selects plan and proceeds to enrollment
```

#### Journey 2: Bulk Employee Enrollment
```
1. HR downloads employee template (CSV/Excel)
2. Fills in employee data (name, DOB, dependents)
3. Uploads to MeddyPal Corporate Portal
4. System validates data, flags errors
5. HR reviews and confirms employee list
6. Generates invoice for approval
7. Finance approves and pays
8. System generates insurance cards for all employees
9. Employees receive welcome email with MeddyPal app invite
```

#### Journey 3: Employee Self-Enrollment
```
1. HR shares enrollment link with employees
2. Employee clicks link, creates MeddyPal account
3. Employee selects coverage tier (if options available)
4. Employee adds dependents
5. Employee confirms personal details
6. System validates against company's plan rules
7. HR reviews and approves enrollments
8. Insurance cards generated automatically
```

---

## Part 4: Provider Operating System (B2B)

### Multi-HMO Billing Engine

The core value proposition for providers: **Accept 20+ insurance plans through one dashboard.**

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PROVIDER OPERATING SYSTEM                             │
│                    providers.meddypal.com                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │                    PROVIDER DASHBOARD                           │    │
│  │                                                                  │    │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │    │
│  │  │ Today's  │  │ Pending  │  │  Revenue │  │ Approval │       │    │
│  │  │ Patients │  │  Claims  │  │  This Mo │  │   Rate   │       │    │
│  │  │    42    │  │    18    │  │  ₦2.4M   │  │   94%    │       │    │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │                    PATIENT CHECK-IN                             │    │
│  │                                                                  │    │
│  │  • Scan patient MeddyPal QR code                                │    │
│  │  • Instant insurance verification                               │    │
│  │  • View coverage limits & remaining balance                     │    │
│  │  • Pre-authorization check                                      │    │
│  │  • Access patient health record (with consent)                  │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │                    CLAIMS SUBMISSION                            │    │
│  │                                                                  │    │
│  │  • Unified claim form (works for all HMOs)                      │    │
│  │  • AI validation before submission                              │    │
│  │  • ICD-10/CPT code auto-suggest                                │    │
│  │  • Attachment upload (prescriptions, labs)                      │    │
│  │  • Batch submission (end of day)                                │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │                    CLAIMS TRACKING                              │    │
│  │                                                                  │    │
│  │  Claim #MP-2024-0892 | Hygeia HMO | ₦45,000                    │    │
│  │  ○ Submitted (Dec 5) → ● Processing → ○ Approved → ○ Paid      │    │
│  │                                                                  │    │
│  │  Claim #MP-2024-0891 | Reliance HMO | ₦28,500                  │    │
│  │  ● Submitted (Dec 5) → ● Processing → ● Approved → ○ Paid      │    │
│  │  Est. Payment: Dec 20                                           │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │                    REVENUE ANALYTICS                            │    │
│  │                                                                  │    │
│  │  • Revenue by HMO (pie chart)                                   │    │
│  │  • Days to payment by HMO                                       │    │
│  │  • Rejection reasons breakdown                                  │    │
│  │  • Outstanding receivables                                      │    │
│  │  • Monthly trend analysis                                       │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### HMO Connector Architecture

```typescript
interface HMOConnector {
  hmoId: string;
  hmoName: string;
  integrationMethod: 'api' | 'rpa' | 'email' | 'manual';

  // Core operations
  verifyEligibility(patientId: string, insuranceId: string): Promise<EligibilityResult>;
  submitClaim(claim: UnifiedClaim): Promise<ClaimSubmissionResult>;
  getClaimStatus(claimId: string): Promise<ClaimStatus>;
  preAuthorize(procedure: string, patientId: string): Promise<PreAuthResult>;

  // Batch operations
  submitBatchClaims(claims: UnifiedClaim[]): Promise<BatchSubmissionResult>;
  reconcilePayments(dateRange: DateRange): Promise<PaymentReconciliation>;
}

// Connector implementations
class RelianceHMOConnector implements HMOConnector {
  // API-based integration
  async verifyEligibility(patientId, insuranceId) {
    const response = await fetch(`${RELIANCE_API}/eligibility`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${this.apiKey}` },
      body: JSON.stringify({ enrollee_id: insuranceId })
    });
    return this.mapToUnifiedFormat(response);
  }
}

class ManualHMOConnector implements HMOConnector {
  // For HMOs without APIs - uses email/portal
  async submitClaim(claim) {
    // Generate PDF claim form
    const pdfForm = await this.generateClaimPDF(claim);

    // Email to HMO
    await this.emailService.send({
      to: this.hmoClaimsEmail,
      subject: `Claim Submission: ${claim.id}`,
      attachments: [pdfForm, ...claim.supportingDocs]
    });

    // Store for manual follow-up
    return { status: 'submitted_manual', followUpDate: addDays(new Date(), 3) };
  }
}
```

---

## Part 5: Patient PHR Platform (B2C)

### Core Modules

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PATIENT PHR PLATFORM                                  │
│                    meddypal.com                                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  MODULE 1: HEALTH RECORDS                                        │   │
│  │  • Personal health profile (demographics, blood type, allergies) │   │
│  │  • Document vault (prescriptions, lab results, imaging)          │   │
│  │  • Health timeline (chronological view of all health events)     │   │
│  │  • Medication tracker (current meds, reminders, refills)         │   │
│  │  • Family health hub (manage dependents' records)                │   │
│  │  • Emergency QR code (critical info for first responders)        │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  MODULE 2: INSURANCE MARKETPLACE                                 │   │
│  │  • Plan comparison (GoCompare style)                             │   │
│  │  • Smart recommendations (AI-powered)                            │   │
│  │  • Online enrollment (individuals & families)                    │   │
│  │  • Digital insurance wallet (all policies in one place)          │   │
│  │  • Claims status tracking                                        │   │
│  │  • Renewal management                                            │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  MODULE 3: CARE ACCESS                                           │   │
│  │  • Hospital directory (geolocation, insurance accepted)          │   │
│  │  • Pharmacy marketplace (order meds, compare prices)             │   │
│  │  • Lab booking (tests, home sample collection)                   │   │
│  │  • Doctor directory (specialists, ratings, availability)         │   │
│  │  • Appointment booking                                           │   │
│  │  • Telemedicine (video consultations)                            │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  MODULE 4: HEALTH INTELLIGENCE                                   │   │
│  │  • Vitals tracking (BP, glucose, weight - manual + wearables)    │   │
│  │  • Symptom checker (AI triage)                                   │   │
│  │  • Health insights (trends, patterns, recommendations)           │   │
│  │  • Medication interaction checker                                │   │
│  │  • Health goals (weight loss, fitness, chronic management)       │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  MODULE 5: GENOMICS (NABDA Integration)                          │   │
│  │  • Consent management (tiered, blockchain-backed)                │   │
│  │  • Sample tracking (collection → lab → results)                  │   │
│  │  • Genomic reports (ancestry, carrier status, pharmacogenomics)  │   │
│  │  • Genetic counseling (video sessions with counselors)           │   │
│  │  • Commercial tests (ancestry, carrier screening, WGS)           │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Part 6: Technical Architecture

### Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS | Modern, fast, type-safe UI |
| State Management | TanStack Query, Zustand | Server state + client state |
| Backend | Supabase (PostgreSQL, Auth, Edge Functions) | Serverless, real-time, secure |
| File Storage | Supabase Storage, Cloudflare R2 | Documents, images, VCF files |
| Payments | Paystack, Flutterwave | Nigerian payment processing |
| SMS/USSD | Termii, Africa's Talking | Nigerian market access |
| Email | Resend, SendGrid | Transactional emails |
| Analytics | Mixpanel, PostHog | User behavior tracking |
| Monitoring | Sentry, LogRocket | Error tracking, session replay |
| CDN | Cloudflare | Global distribution |
| Hosting | Vercel, Railway | Edge deployment |

### Database Schema (Core Tables)

```sql
-- ============================================
-- USER MANAGEMENT
-- ============================================

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  full_name TEXT,
  avatar_url TEXT,
  user_type TEXT CHECK (user_type IN ('patient', 'provider', 'corporate_admin', 'super_admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES users(id),
  date_of_birth DATE,
  gender TEXT,
  blood_type TEXT,
  genotype TEXT,
  state TEXT,
  city TEXT,
  address TEXT,
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  metadata JSONB DEFAULT '{}'
);

-- ============================================
-- INSURANCE PLANS
-- ============================================

CREATE TABLE insurance_providers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  logo_url TEXT,
  website TEXT,
  claims_email TEXT,
  api_endpoint TEXT,
  api_key_encrypted TEXT,
  integration_type TEXT CHECK (integration_type IN ('api', 'rpa', 'email', 'manual')),
  is_active BOOLEAN DEFAULT TRUE,
  metadata JSONB DEFAULT '{}'
);

CREATE TABLE insurance_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  provider_id UUID REFERENCES insurance_providers(id),
  name TEXT NOT NULL,
  plan_type TEXT CHECK (plan_type IN ('individual', 'family', 'corporate', 'micro')),
  tier TEXT CHECK (tier IN ('basic', 'standard', 'premium', 'platinum')),

  -- Pricing
  premium_monthly NUMERIC NOT NULL,
  premium_annual NUMERIC,
  premium_quarterly NUMERIC,
  corporate_per_head NUMERIC,

  -- Coverage
  max_coverage NUMERIC NOT NULL,
  inpatient_limit NUMERIC,
  outpatient_limit NUMERIC,
  dental_limit NUMERIC,
  optical_limit NUMERIC,
  maternity_limit NUMERIC,
  pharmacy_limit NUMERIC,

  -- Benefits (JSONB for flexibility)
  benefits JSONB NOT NULL,

  -- Network
  network_hospital_ids UUID[],
  states_covered TEXT[],

  -- Eligibility
  min_age INTEGER DEFAULT 0,
  max_age INTEGER DEFAULT 100,
  min_employees INTEGER,  -- For corporate

  -- Metadata
  is_active BOOLEAN DEFAULT TRUE,
  popularity_score INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- PATIENT INSURANCE
-- ============================================

CREATE TABLE patient_insurance (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  insurance_plan_id UUID REFERENCES insurance_plans(id),

  -- Policy details
  policy_number TEXT,
  member_id TEXT,
  enrollment_date DATE NOT NULL,
  expiry_date DATE,
  status TEXT CHECK (status IN ('active', 'expired', 'cancelled', 'pending')),

  -- Coverage tracking
  coverage_used NUMERIC DEFAULT 0,
  coverage_remaining NUMERIC,

  -- Documents
  insurance_card_url TEXT,
  policy_document_url TEXT,

  -- For corporate enrollments
  corporate_enrollment_id UUID,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- CORPORATE ACCOUNTS
-- ============================================

CREATE TABLE corporate_accounts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_name TEXT NOT NULL,
  rc_number TEXT,
  industry TEXT,
  company_size TEXT CHECK (company_size IN ('startup', 'sme', 'mid', 'enterprise')),
  employee_count INTEGER,

  -- Contact info
  headquarters_state TEXT,
  headquarters_address TEXT,

  -- HR Admin
  hr_admin_id UUID REFERENCES users(id),
  hr_admin_email TEXT,
  hr_admin_phone TEXT,

  -- Insurance preferences
  annual_budget NUMERIC,
  budget_per_employee NUMERIC,
  priorities TEXT[],

  -- Billing
  payment_method TEXT,
  payment_cycle TEXT,
  billing_email TEXT,

  -- Status
  status TEXT CHECK (status IN ('prospect', 'active', 'churned')),
  account_manager TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE corporate_enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  corporate_account_id UUID REFERENCES corporate_accounts(id),
  insurance_plan_id UUID REFERENCES insurance_plans(id),

  -- Enrollment details
  total_employees INTEGER,
  status TEXT CHECK (status IN ('draft', 'pending_payment', 'processing', 'active', 'completed')),
  start_date DATE,
  end_date DATE,

  -- Pricing
  per_employee_rate NUMERIC,
  per_dependent_rate NUMERIC,
  total_monthly NUMERIC,
  total_annual NUMERIC,
  discount_percentage NUMERIC,
  commission_amount NUMERIC,

  -- Documents
  master_policy_url TEXT,
  employee_list_url TEXT,
  signed_contract_url TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE corporate_employees (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  corporate_enrollment_id UUID REFERENCES corporate_enrollments(id),
  user_id UUID REFERENCES users(id),

  -- Employee details
  employee_id TEXT,  -- Company's internal ID
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  date_of_birth DATE,
  gender TEXT,
  department TEXT,
  tier TEXT CHECK (tier IN ('executive', 'management', 'staff')),

  -- Insurance details
  insurance_card_number TEXT,
  status TEXT CHECK (status IN ('pending', 'active', 'terminated')),

  -- Dependents (JSONB array)
  dependents JSONB DEFAULT '[]',

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- PROVIDERS
-- ============================================

CREATE TABLE providers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),  -- Provider admin user

  -- Basic info
  name TEXT NOT NULL,
  provider_type TEXT CHECK (provider_type IN ('hospital', 'clinic', 'pharmacy', 'lab', 'dental', 'optical')),
  cac_number TEXT,

  -- Location
  state TEXT,
  city TEXT,
  address TEXT,
  coordinates POINT,

  -- Contact
  phone TEXT,
  email TEXT,
  website TEXT,

  -- Operations
  operating_hours JSONB,
  services TEXT[],
  specialties TEXT[],

  -- Insurance
  accepted_insurance_ids UUID[],
  hmo_provider_codes JSONB,  -- {"reliance": "REL-001", "axa": "AXA-002"}

  -- Ratings
  rating NUMERIC DEFAULT 0,
  review_count INTEGER DEFAULT 0,

  -- Status
  is_verified BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- CLAIMS
-- ============================================

CREATE TABLE insurance_claims (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  claim_number TEXT UNIQUE NOT NULL,

  -- Parties
  provider_id UUID REFERENCES providers(id),
  patient_id UUID REFERENCES users(id),
  patient_insurance_id UUID REFERENCES patient_insurance(id),
  insurance_provider_id UUID REFERENCES insurance_providers(id),

  -- Service details
  service_date DATE NOT NULL,
  service_type TEXT,
  diagnosis_code TEXT,  -- ICD-10
  procedure_code TEXT,  -- CPT
  description TEXT,

  -- Financial
  amount NUMERIC NOT NULL,
  amount_approved NUMERIC,
  amount_paid NUMERIC,
  patient_copay NUMERIC,

  -- Status tracking
  status TEXT CHECK (status IN ('draft', 'submitted', 'processing', 'approved', 'rejected', 'paid', 'appealed')),
  hmo_claim_id TEXT,
  hmo_status TEXT,
  rejection_reason TEXT,

  -- Timeline
  submitted_at TIMESTAMPTZ,
  processed_at TIMESTAMPTZ,
  approved_at TIMESTAMPTZ,
  paid_at TIMESTAMPTZ,

  -- Documents
  attachments JSONB DEFAULT '[]',

  -- AI validation
  ai_validation_score NUMERIC,
  ai_validation_notes JSONB,

  -- Audit
  submitted_by UUID REFERENCES users(id),
  status_history JSONB DEFAULT '[]',

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- HEALTH RECORDS
-- ============================================

CREATE TABLE health_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  provider_id UUID REFERENCES providers(id),

  record_type TEXT CHECK (record_type IN (
    'consultation', 'diagnosis', 'prescription', 'lab_result',
    'imaging', 'procedure', 'immunization', 'vital_sign', 'allergy', 'condition'
  )),

  title TEXT,
  description TEXT,
  data JSONB NOT NULL,  -- Structured data based on record_type

  -- For documents
  document_url TEXT,
  document_type TEXT,

  -- Metadata
  record_date DATE,
  is_verified BOOLEAN DEFAULT FALSE,
  source TEXT CHECK (source IN ('provider', 'patient', 'import', 'ocr')),

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE medications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),

  name TEXT NOT NULL,
  dosage TEXT,
  frequency TEXT,
  instructions TEXT,

  start_date DATE,
  end_date DATE,

  prescribing_provider_id UUID REFERENCES providers(id),
  prescription_record_id UUID REFERENCES health_records(id),

  is_active BOOLEAN DEFAULT TRUE,
  reminder_enabled BOOLEAN DEFAULT FALSE,
  reminder_times JSONB,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- GENOMICS
-- ============================================

CREATE TABLE genomic_samples (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),

  sample_type TEXT CHECK (sample_type IN ('blood', 'saliva', 'cord_blood', 'heel_prick')),
  barcode TEXT UNIQUE NOT NULL,

  collection_date TIMESTAMPTZ,
  collection_provider_id UUID REFERENCES providers(id),
  collected_by TEXT,

  -- Chain of custody
  custody_log JSONB DEFAULT '[]',

  -- Lab processing
  lab_partner TEXT,
  lab_received_date TIMESTAMPTZ,
  processing_started_date TIMESTAMPTZ,
  processing_completed_date TIMESTAMPTZ,

  -- Results
  vcf_url TEXT,
  report_url TEXT,

  status TEXT CHECK (status IN ('collected', 'in_transit', 'received', 'processing', 'completed', 'failed')),

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE genomic_consents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),

  consent_type TEXT CHECK (consent_type IN ('clinical', 'research', 'family_sharing', 'commercial')),
  is_granted BOOLEAN NOT NULL,
  granted_at TIMESTAMPTZ,
  revoked_at TIMESTAMPTZ,

  -- Blockchain proof (future)
  blockchain_hash TEXT,

  ip_address TEXT,
  user_agent TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES
-- ============================================

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_patient_insurance_user ON patient_insurance(user_id);
CREATE INDEX idx_patient_insurance_status ON patient_insurance(status);
CREATE INDEX idx_corporate_accounts_status ON corporate_accounts(status);
CREATE INDEX idx_corporate_employees_enrollment ON corporate_employees(corporate_enrollment_id);
CREATE INDEX idx_providers_type ON providers(provider_type);
CREATE INDEX idx_providers_state ON providers(state);
CREATE INDEX idx_insurance_claims_provider ON insurance_claims(provider_id);
CREATE INDEX idx_insurance_claims_patient ON insurance_claims(patient_id);
CREATE INDEX idx_insurance_claims_status ON insurance_claims(status);
CREATE INDEX idx_health_records_user ON health_records(user_id);
CREATE INDEX idx_health_records_type ON health_records(record_type);
```

---

## Part 7: Revenue Model

### Revenue Streams by Platform

| Platform | Revenue Stream | Model | Target (Year 1) |
|----------|---------------|-------|-----------------|
| **Patient PHR** | Insurance commissions | 10-15% of premiums | ₦50M |
| | Premium subscriptions | ₦500/month | ₦12M |
| | Telemedicine commissions | 20% of consultation fee | ₦18M |
| | Pharmacy/Lab commissions | 10-15% of orders | ₦30M |
| | Genomics products | Direct sale | ₦15M |
| **Provider OS** | SaaS subscriptions | ₦15K-200K/month | ₦180M |
| | Transaction fees | ₦100-200 per claim | ₦48M |
| | API licensing | Enterprise contracts | ₦24M |
| **Corporate** | Insurance commissions | 8-12% of premiums | ₦120M |
| | Platform fees | ₦500 per employee/year | ₦30M |
| | Wellness programs | Custom pricing | ₦12M |
| **Total** | | | **₦539M (~$700K)** |

### Corporate Pricing Model

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CORPORATE PRICING TIERS                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  STARTER (10-50 employees)                                              │
│  • Insurance comparison & enrollment                                     │
│  • Basic HR dashboard                                                    │
│  • Employee self-service portal                                          │
│  • Email support                                                         │
│  Price: FREE (commission on insurance only)                              │
│                                                                          │
│  GROWTH (51-200 employees)                                               │
│  • Everything in Starter                                                 │
│  • Bulk enrollment tools                                                 │
│  • Utilization reports                                                   │
│  • Dedicated account manager                                             │
│  • Phone support                                                         │
│  Price: ₦300/employee/year + commission                                  │
│                                                                          │
│  ENTERPRISE (201+ employees)                                             │
│  • Everything in Growth                                                  │
│  • Custom integrations (HRIS, payroll)                                   │
│  • Wellness program integration                                          │
│  • Advanced analytics & benchmarking                                     │
│  • SLA guarantees                                                        │
│  • Quarterly business reviews                                            │
│  Price: Custom (typically ₦500/employee/year + reduced commission)       │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Part 8: Implementation Roadmap

### Phase 1: Foundation (Months 1-3)

**Goal:** Production-ready insurance marketplace for individuals AND corporates

| Month | Patient Platform | Provider Platform | Corporate Platform |
|-------|-----------------|-------------------|-------------------|
| **1** | Insurance comparison engine | Provider signup flow | Corporate signup flow |
| | Plan data model | Basic dashboard | Company profile |
| | Side-by-side comparison | Claims form (manual) | Employee census |
| | Individual enrollment | | |
| **2** | Payment integration | First HMO integration | Bulk enrollment (CSV) |
| | Digital card generation | Eligibility verification | Bulk pricing calculator |
| | Policy management | Claims tracking | Employee self-enrollment |
| | | | |
| **3** | Health profile | 3 more HMO integrations | HR analytics dashboard |
| | Document vault | AI claims validation | Utilization reports |
| | Provider directory | Revenue analytics | Invoice management |

### Phase 2: Scale (Months 4-6)

| Month | Patient Platform | Provider Platform | Corporate Platform |
|-------|-----------------|-------------------|-------------------|
| **4** | Telemedicine MVP | Batch claims | HRIS integrations |
| | Lab booking | Payment reconciliation | Wellness programs |
| | Mobile app (PWA) | Staff management | Corporate health analytics |
| **5** | SMS/USSD access | All major HMOs (8+) | Enterprise API |
| | Multi-language | Inventory management | Custom reporting |
| | Offline mode | | |
| **6** | Family health hub | EMR integrations | Account management |
| | AI recommendations | Performance analytics | SLA dashboard |
| | Medication tracker | | |

### Phase 3: Genomics & Growth (Months 7-12)

- NABDA genomics integration
- Maternal health workflow
- Population health dashboard
- Commercial genomics products
- Pan-African expansion planning

---

## Part 9: Success Metrics

### Key Performance Indicators (Year 1)

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Patients** | 50,000 registered | Monthly signups |
| **Providers** | 1,000 active | Monthly active providers |
| **Corporates** | 100 companies | Signed contracts |
| **Corporate Employees** | 20,000 enrolled | Bulk enrollments |
| **Insurance Policies Sold** | 5,000 individual + 20,000 corporate | Monthly conversions |
| **Insurance GMV** | ₦500M | Total premiums processed |
| **Claims Processed** | 50,000 | Monthly volume |
| **Revenue** | ₦539M | Monthly recurring revenue |
| **Provider NPS** | >50 | Quarterly survey |
| **Patient NPS** | >40 | Quarterly survey |

---

## Part 10: Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| HMO API resistance | High | Build RPA/manual fallbacks, leverage patient demand |
| Corporate sales cycle | Medium | Start with SMEs, land-and-expand |
| Provider adoption | Medium | Free trial, demonstrate ROI |
| Regulatory (NHIA) | Medium | Proactive engagement, compliance-first |
| Competition | Low | Focus on two-sided marketplace moat |
| Technical scalability | Medium | Modern cloud architecture, autoscaling |

---

## Conclusion

MeddyPal v3.0 represents a strategic evolution from a demo platform to a **production-ready healthcare infrastructure** that serves three distinct but interconnected markets:

1. **Patients** get a complete health record system with the best insurance comparison in Nigeria
2. **Providers** get a single dashboard to accept all insurance plans and grow revenue
3. **Corporates** get the easiest way to compare, purchase, and manage employee health insurance

The **corporate B2B channel** (Halcyon insight) is a game-changer that enables high-volume, low-CAC customer acquisition while building sticky enterprise relationships.

Combined with the **NABDA genomics partnership**, MeddyPal is positioned to become Nigeria's essential healthcare infrastructure platform.

---

**Document Owner:** Basani Digital Innovations Limited (RC 8103328)
**Technical Lead:** Forric Technologies (RC 1939381)
**Last Updated:** December 9, 2024
**Next Review:** January 15, 2025
