import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import HospitalDirectory from '@/components/HospitalDirectory';

const Hospitals = () => {
  return (
    <DashboardLayout 
      title="Hospital Directory"
      subtitle="Find and connect with hospitals and healthcare facilities across Nigeria"
    >
      <HospitalDirectory />
    </DashboardLayout>
  );
};

export default Hospitals;
