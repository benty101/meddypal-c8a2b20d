-- Seed Insurance Plans for Nigerian Health Insurance Marketplace
-- Run this in your Supabase SQL Editor

-- Delete existing plans (optional - comment out if you want to keep existing data)
-- DELETE FROM insurance_plans;

-- Insert Nigerian Health Insurance Plans
INSERT INTO insurance_plans (name, provider, plan_type, premium_monthly, premium_annual, coverage_amount, features, terms, is_active)
VALUES
  -- RELIANCE HMO PLANS
  (
    'Reliance Basic Plan',
    'Reliance HMO',
    'HMO',
    5000,
    55000,
    500000,
    ARRAY[
      'General Consultations (Unlimited)',
      'Basic Laboratory Tests',
      'Malaria Treatment',
      'Typhoid Treatment',
      'Minor Surgical Procedures',
      'Accident & Emergency Care',
      'Annual Medical Check-up'
    ],
    'Terms and conditions apply. Subject to provider approval.',
    true
  ),
  (
    'Reliance Family Plan',
    'Reliance HMO',
    'Family',
    15000,
    165000,
    2000000,
    ARRAY[
      'Covers up to 4 family members',
      'General & Specialist Consultations',
      'Comprehensive Lab Tests',
      'Dental Care (Basic)',
      'Eye Care & Prescription Glasses',
      'Physiotherapy Sessions',
      'Maternity Care (Antenatal)',
      'Emergency Ambulance Service'
    ],
    'Family members must be registered. Terms apply.',
    true
  ),

  -- HYGEIA HMO PLANS
  (
    'Hygeia Classic',
    'Hygeia HMO',
    'HMO',
    7500,
    82500,
    1000000,
    ARRAY[
      'Unlimited GP Consultations',
      'Specialist Consultations (4 per year)',
      'Laboratory & Diagnostic Tests',
      'Prescription Medications',
      'Dental Care (Basic)',
      'Minor Surgeries',
      'Health Screening (Annual)'
    ],
    'Pre-existing conditions have a 6-month waiting period.',
    true
  ),
  (
    'Hygeia Premium',
    'Hygeia HMO',
    'Premium',
    20000,
    220000,
    5000000,
    ARRAY[
      'Unlimited Consultations (GP & Specialist)',
      'Comprehensive Diagnostic Tests',
      'Major & Minor Surgeries',
      'Maternity Care (Full Coverage)',
      'Dental & Optical Care',
      'Physiotherapy & Rehabilitation',
      'International Health Cover (Emergency)',
      'Personal Health Manager',
      'Home Care Services'
    ],
    'Premium benefits with comprehensive coverage.',
    true
  ),

  -- AVON HMO PLANS
  (
    'Avon Essential',
    'Avon HMO',
    'HMO',
    4500,
    49500,
    750000,
    ARRAY[
      'General Consultations',
      'Basic Laboratory Tests',
      'Common Illness Treatment',
      'Accident Coverage',
      'Emergency Services',
      'Health Education & Counseling'
    ],
    'Basic coverage for essential health needs.',
    true
  ),
  (
    'Avon Silver',
    'Avon HMO',
    'HMO',
    10000,
    110000,
    2500000,
    ARRAY[
      'Unlimited GP Visits',
      'Specialist Consultations (6 per year)',
      'Full Laboratory Services',
      'Radiology & Imaging',
      'Surgical Procedures',
      'Dental Care',
      'Optical Services',
      'Maternity Care (Antenatal only)',
      'Annual Health Check'
    ],
    'Comprehensive health coverage with maternity benefits.',
    true
  ),

  -- TOTAL HEALTH TRUST PLANS
  (
    'Total Health Starter',
    'Total Health Trust',
    'HMO',
    3500,
    38500,
    500000,
    ARRAY[
      'Basic Consultations',
      'Essential Lab Tests',
      'Malaria & Typhoid Treatment',
      'Emergency Care',
      'Health Talks & Wellness Programs'
    ],
    'Affordable starter plan for individuals.',
    true
  ),
  (
    'Total Health Executive',
    'Total Health Trust',
    'Premium',
    25000,
    275000,
    10000000,
    ARRAY[
      'Unlimited Specialist Access',
      'Executive Health Screening',
      'All Surgical Procedures',
      'Complete Maternity Coverage',
      'International Treatment (Emergency)',
      'Home Nursing Services',
      'Dental & Optical (Full)',
      'Gym Membership',
      'Mental Health Support',
      '24/7 Telemedicine'
    ],
    'Executive plan with premium benefits and services.',
    true
  ),

  -- MEDICARE HMO PLANS
  (
    'Medicare Value Plan',
    'Medicare HMO',
    'HMO',
    6000,
    66000,
    1500000,
    ARRAY[
      'General Consultations (Unlimited)',
      'Specialist Visits (4 annually)',
      'Laboratory & Radiology',
      'Prescription Drugs',
      'Minor Surgeries',
      'Dental Screening',
      'Annual Medical Check-up'
    ],
    'Value for money with essential coverage.',
    true
  ),
  (
    'Medicare Platinum',
    'Medicare HMO',
    'Premium',
    18000,
    198000,
    7500000,
    ARRAY[
      'Unlimited Consultations',
      'All Specialist Services',
      'Major & Minor Surgeries',
      'Full Maternity Package',
      'Advanced Diagnostics',
      'Dental & Optical Care',
      'Cancer Screening',
      'Chronic Disease Management',
      'Telemedicine Services'
    ],
    'Platinum coverage with comprehensive benefits.',
    true
  ),

  -- AIICO INSURANCE PLANS
  (
    'AIICO Health Shield',
    'AIICO Insurance',
    'Insurance',
    8500,
    93500,
    3000000,
    ARRAY[
      'Inpatient & Outpatient Care',
      'Surgical Procedures',
      'Specialist Consultations',
      'Laboratory Services',
      'Emergency Ambulance',
      'Pre & Postnatal Care',
      'Optical Services',
      'Dental Care'
    ],
    'Insurance-based health coverage.',
    true
  ),
  (
    'AIICO Family Shield',
    'AIICO Insurance',
    'Family',
    22000,
    242000,
    8000000,
    ARRAY[
      'Covers family of up to 6',
      'Comprehensive Inpatient Care',
      'All Outpatient Services',
      'Maternity Coverage',
      'Pediatric Care',
      'Vaccination Programs',
      'Dental & Optical',
      'Chronic Disease Management',
      'Health Coaching'
    ],
    'Family insurance with extended coverage.',
    true
  ),

  -- AXA MANSARD PLANS
  (
    'AXA Basic Care',
    'AXA Mansard',
    'HMO',
    5500,
    60500,
    1200000,
    ARRAY[
      'General Consultations',
      'Basic Investigations',
      'Common Treatments',
      'Emergency Services',
      'Annual Health Screening',
      'Health & Wellness Tips'
    ],
    'Basic health coverage from a trusted provider.',
    true
  ),
  (
    'AXA Premium Care',
    'AXA Mansard',
    'Premium',
    30000,
    330000,
    15000000,
    ARRAY[
      'Global Health Coverage',
      'Unlimited Consultations',
      'All Medical Procedures',
      'International Treatment',
      'Complete Maternity Care',
      'Executive Health Screening',
      'Mental Health Services',
      'Home Healthcare',
      'Personal Health Concierge',
      '24/7 Medical Hotline',
      'Wellness & Fitness Programs'
    ],
    'Premium international health coverage.',
    true
  );

-- Verify the insert
SELECT COUNT(*) as total_plans,
       COUNT(DISTINCT provider) as total_providers,
       ROUND(AVG(premium_monthly)) as avg_monthly_premium
FROM insurance_plans
WHERE is_active = true;
