import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AvailableDoctors from '@/components/telemedicine/AvailableDoctors';
import ConsultationBooking from '@/components/telemedicine/ConsultationBooking';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Calendar, Clock, Users } from 'lucide-react';

const Telemedicine = () => {
  return (
    <DashboardLayout 
      title="Telemedicine Services" 
      subtitle="Connect with qualified healthcare providers through secure video consultations"
    >
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex items-center p-4">
              <Video className="h-6 w-6 text-primary mr-3" />
              <div>
                <p className="text-lg font-bold">24/7</p>
                <p className="text-xs text-muted-foreground">Available</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-4">
              <Users className="h-6 w-6 text-primary mr-3" />
              <div>
                <p className="text-lg font-bold">50+</p>
                <p className="text-xs text-muted-foreground">Doctors</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-4">
              <Calendar className="h-6 w-6 text-primary mr-3" />
              <div>
                <p className="text-lg font-bold">Same Day</p>
                <p className="text-xs text-muted-foreground">Booking</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-4">
              <Clock className="h-6 w-6 text-primary mr-3" />
              <div>
                <p className="text-lg font-bold">15 min</p>
                <p className="text-xs text-muted-foreground">Average Wait</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="book" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="book">Book Consultation</TabsTrigger>
            <TabsTrigger value="doctors">Browse Doctors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="book" className="mt-6">
            <ConsultationBooking />
          </TabsContent>
          
          <TabsContent value="doctors" className="mt-6">
            <AvailableDoctors />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Telemedicine;
