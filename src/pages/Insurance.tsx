import React from 'react';
import Navbar from '@/components/landing-new/Navbar';
import InsuranceMarketplace from '@/components/insurance/InsuranceMarketplace';

const Insurance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <InsuranceMarketplace />
      </main>
    </div>
  );
};

export default Insurance;
