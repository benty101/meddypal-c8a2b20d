import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, Clock, MapPin, Star, Plus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { AppointmentService, Appointment } from '@/services/AppointmentService';
import { telemedicineService, TelemedicineProvider } from '@/services/TelemedicineService';
import { adminService } from '@/services/AdminService';
import { useToast } from '@/hooks/use-toast';
import BookAppointmentModal from '@/components/dashboard/BookAppointmentModal';

const Appointments = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [doctors, setDoctors] = useState<TelemedicineProvider[]>([]);
  const [hospitals, setHospitals] = useState<any[]>([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    loadPageData();
  }, [user]);

  const loadPageData = async () => {
    if (!user) return;

    try {
      setLoading(true);
      
      const [doctorsData, hospitalsData, appointmentsData] = await Promise.all([
        telemedicineService.getAllTelemedicineProviders(),
        adminService.getAllHospitals(),
        AppointmentService.getUserAppointments(user.id)
      ]);

      setDoctors(doctorsData.slice(0, 6));
      setHospitals(hospitalsData);
      
      const now = new Date();
      const upcoming = appointmentsData.filter(apt => {
        const appointmentDateTime = new Date(apt.scheduled_at);
        return appointmentDateTime > now && apt.status !== 'cancelled';
      });
      
      setUpcomingAppointments(upcoming.slice(0, 3));
    } catch (error) {
      console.error('Error loading page data:', error);
      toast({
        title: "Error",
        description: "Failed to load appointment data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBookAppointment = (doctorId?: string) => {
    setIsBookingModalOpen(true);
  };

  const handleBookingSuccess = () => {
    loadPageData();
    toast({
      title: "Success",
      description: "Appointment booked successfully!"
    });
  };

  const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return {
      date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      time: date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
    };
  };

  if (loading) {
    return (
      <DashboardLayout title="Loading Appointments...">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout 
      title="Book Medical Appointments"
      subtitle="Schedule appointments with qualified healthcare providers across Nigeria"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar and Upcoming Appointments */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-base">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Select Date
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                Upcoming Appointments
                <Button onClick={() => handleBookAppointment()} size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Book
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingAppointments.length === 0 ? (
                  <div className="text-center py-4">
                    <CalendarIcon className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">No upcoming appointments</p>
                    <Button onClick={() => handleBookAppointment()} variant="outline" size="sm" className="mt-2">
                      Book Your First Appointment
                    </Button>
                  </div>
                ) : (
                  upcomingAppointments.map((appointment) => {
                    const { date, time } = formatDateTime(appointment.scheduled_at);
                    return (
                      <div key={appointment.id} className="p-3 bg-primary/5 rounded-lg">
                        <div className="font-medium text-sm">{appointment.doctor_name || 'General Consultation'}</div>
                        <div className="text-xs text-muted-foreground">{appointment.specialization || appointment.consultation_type}</div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-xs text-primary">{date}</div>
                          <Badge variant="outline">{time}</Badge>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Doctors */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Available Doctors</h2>
          {doctors.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No doctors available</h3>
                  <p className="text-muted-foreground">Please check back later for available healthcare providers</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {doctors.map((doctor) => (
                <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-semibold">
                            {doctor.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold">Dr. {doctor.name}</h3>
                          <p className="text-primary text-sm">{doctor.specialization || 'General Practice'}</p>
                          <div className="flex items-center space-x-3 mt-1 text-xs text-muted-foreground">
                            <div className="flex items-center"><MapPin className="h-3 w-3 mr-1" />Telemedicine</div>
                            {doctor.rating && (
                              <div className="flex items-center"><Star className="h-3 w-3 mr-1 text-yellow-400 fill-current" />{doctor.rating}</div>
                            )}
                            {doctor.experience_years && <div>{doctor.experience_years} yrs exp</div>}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Fee</div>
                        <div className="text-green-600 font-medium">₦{doctor.consultation_fee?.toLocaleString() || '5,000'}</div>
                        <Button size="sm" className="mt-2" onClick={() => handleBookAppointment(doctor.id)}>
                          Book
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <BookAppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSuccess={handleBookingSuccess}
      />
    </DashboardLayout>
  );
};

export default Appointments;
