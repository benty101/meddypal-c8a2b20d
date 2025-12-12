import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import UserProfile from '@/components/UserProfile';

const Profile = () => {
  return (
    <DashboardLayout 
      title="My Profile" 
      subtitle="Manage your personal information and health preferences"
    >
      <div className="max-w-4xl mx-auto">
        <UserProfile />
      </div>
    </DashboardLayout>
  );
};

export default Profile;
