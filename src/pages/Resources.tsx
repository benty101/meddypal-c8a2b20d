import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ModernResourceCenter from '@/components/resources/ModernResourceCenter';

const Resources = () => {
  return (
    <DashboardLayout
      title="Health Resources & Education"
      subtitle="Access trusted health information, educational content, and wellness resources"
    >
      <ModernResourceCenter />
    </DashboardLayout>
  );
};

export default Resources;
