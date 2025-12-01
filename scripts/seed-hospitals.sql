-- Seed Hospitals for Nigerian Hospital Directory
-- Run this in your Supabase SQL Editor

-- Delete existing hospitals (optional - comment out if you want to keep existing data)
-- DELETE FROM hospitals;

-- Insert Nigerian Hospitals
INSERT INTO hospitals (name, address, city, state, phone, email, website, type, specialties, rating, beds, is_active, latitude, longitude)
VALUES
  -- LAGOS HOSPITALS
  (
    'Lagos University Teaching Hospital (LUTH)',
    'Idi-Araba, Mushin',
    'Lagos',
    'Lagos',
    '+234 1 7743720',
    'info@luth.gov.ng',
    'https://luth.gov.ng',
    'Teaching Hospital',
    ARRAY['General Medicine', 'Surgery', 'Pediatrics', 'Obstetrics & Gynecology', 'Cardiology', 'Neurology', 'Oncology'],
    4.3,
    761,
    true,
    6.5095,
    3.3711
  ),
  (
    'Reddington Hospital',
    '12 Idowu Martins Street, Victoria Island',
    'Lagos',
    'Lagos',
    '+234 1 4617090',
    'info@reddingtonhospital.com',
    'https://reddingtonhospital.com',
    'Private Hospital',
    ARRAY['General Medicine', 'Surgery', 'Cardiology', 'Orthopedics', 'Dermatology', 'Ophthalmology'],
    4.6,
    120,
    true,
    6.4281,
    3.4219
  ),
  (
    'Eko Hospital',
    '31 Mobolaji Bank Anthony Way, Ikeja',
    'Lagos',
    'Lagos',
    '+234 1 2716400',
    'info@ekohospital.com',
    'https://ekohospital.com',
    'Private Hospital',
    ARRAY['General Medicine', 'Surgery', 'Cardiology', 'Neurology', 'Oncology', 'Pediatrics', 'Obstetrics'],
    4.5,
    200,
    true,
    6.5927,
    3.3485
  ),
  (
    'St. Nicholas Hospital',
    '57 Campbell Street, Lagos Island',
    'Lagos',
    'Lagos',
    '+234 1 2635109',
    'info@saintnicholashospital.com',
    'https://saintnicholashospital.com',
    'Private Hospital',
    ARRAY['General Medicine', 'Pediatrics', 'Obstetrics & Gynecology', 'Surgery', 'Internal Medicine'],
    4.4,
    150,
    true,
    6.4488,
    3.3947
  ),
  (
    'The Cardiovascular Centre',
    '15 Idowu Martins Street, Victoria Island',
    'Lagos',
    'Lagos',
    '+234 1 4617000',
    'info@cardiovascularcentre.com',
    'https://cardiovascularcentre.com',
    'Specialist Hospital',
    ARRAY['Cardiology', 'Cardiac Surgery', 'Vascular Surgery', 'Interventional Cardiology'],
    4.7,
    80,
    true,
    6.4281,
    3.4219
  ),

  -- ABUJA HOSPITALS
  (
    'National Hospital Abuja',
    'Plot 132, Central District',
    'Abuja',
    'FCT',
    '+234 9 4616100',
    'info@nationalhospitalabuja.gov.ng',
    'https://nationalhospitalabuja.gov.ng',
    'Teaching Hospital',
    ARRAY['General Medicine', 'Surgery', 'Cardiology', 'Neurology', 'Pediatrics', 'Oncology', 'Nephrology'],
    4.4,
    500,
    true,
    9.0579,
    7.4951
  ),
  (
    'Cedarcrest Hospitals',
    'Gwarimpa, Abuja',
    'Abuja',
    'FCT',
    '+234 803 304 5000',
    'info@cedarcrest.org',
    'https://cedarcrest.org',
    'Private Hospital',
    ARRAY['General Medicine', 'Surgery', 'Pediatrics', 'Obstetrics', 'Cardiology', 'Orthopedics'],
    4.5,
    150,
    true,
    9.1026,
    7.4113
  ),
  (
    'Garki Hospital',
    'Area 8, Garki',
    'Abuja',
    'FCT',
    '+234 9 4606700',
    'info@garkihospital.gov.ng',
    NULL,
    'General Hospital',
    ARRAY['General Medicine', 'Surgery', 'Pediatrics', 'Obstetrics & Gynecology', 'Emergency Medicine'],
    4.0,
    200,
    true,
    9.0354,
    7.4915
  ),

  -- PORT HARCOURT HOSPITALS
  (
    'University of Port Harcourt Teaching Hospital',
    'East-West Road, Alakahia',
    'Port Harcourt',
    'Rivers',
    '+234 84 464048',
    'info@upth.gov.ng',
    'https://upth.gov.ng',
    'Teaching Hospital',
    ARRAY['General Medicine', 'Surgery', 'Pediatrics', 'Obstetrics', 'Cardiology', 'Neurology', 'Orthopedics'],
    4.2,
    400,
    true,
    4.9041,
    6.9308
  ),
  (
    'Kelsey Harrison Hospital',
    '156 Trans Amadi Industrial Layout',
    'Port Harcourt',
    'Rivers',
    '+234 84 239000',
    'info@kelseyharrison.com',
    NULL,
    'Private Hospital',
    ARRAY['General Medicine', 'Surgery', 'Obstetrics', 'Pediatrics', 'Dermatology'],
    4.3,
    100,
    true,
    4.8156,
    7.0498
  ),

  -- IBADAN HOSPITALS
  (
    'University College Hospital (UCH)',
    'Queen Elizabeth Road, Oritamefa',
    'Ibadan',
    'Oyo',
    '+234 2 2410088',
    'info@uch-ibadan.org.ng',
    'https://uch-ibadan.org.ng',
    'Teaching Hospital',
    ARRAY['General Medicine', 'Surgery', 'Pediatrics', 'Obstetrics', 'Cardiology', 'Neurology', 'Oncology', 'Nephrology'],
    4.3,
    850,
    true,
    7.3775,
    3.9470
  ),
  (
    'Ring Road State Hospital',
    'Ring Road, Ibadan',
    'Ibadan',
    'Oyo',
    '+234 2 2411560',
    'info@ringroad.hospital.gov.ng',
    NULL,
    'General Hospital',
    ARRAY['General Medicine', 'Surgery', 'Pediatrics', 'Obstetrics & Gynecology', 'Emergency Care'],
    4.0,
    250,
    true,
    7.3986,
    3.9093
  ),

  -- KANO HOSPITALS
  (
    'Aminu Kano Teaching Hospital',
    'Zaria Road, Kano',
    'Kano',
    'Kano',
    '+234 64 668730',
    'info@akth.gov.ng',
    'https://akth.gov.ng',
    'Teaching Hospital',
    ARRAY['General Medicine', 'Surgery', 'Pediatrics', 'Obstetrics', 'Cardiology', 'Neurology', 'Orthopedics'],
    4.1,
    500,
    true,
    11.9989,
    8.5320
  ),
  (
    'Murtala Muhammad Specialist Hospital',
    'Kofar Mata, Kano',
    'Kano',
    'Kano',
    '+234 64 632710',
    'info@mmsh.gov.ng',
    NULL,
    'Specialist Hospital',
    ARRAY['General Medicine', 'Surgery', 'Internal Medicine', 'Pediatrics', 'Orthopedics'],
    4.0,
    300,
    true,
    11.9955,
    8.5264
  ),

  -- ENUGU HOSPITALS
  (
    'University of Nigeria Teaching Hospital (UNTH)',
    'Ituku-Ozalla, Enugu',
    'Enugu',
    'Enugu',
    '+234 42 253680',
    'info@unth.org',
    'https://unth.org',
    'Teaching Hospital',
    ARRAY['General Medicine', 'Surgery', 'Pediatrics', 'Obstetrics', 'Cardiology', 'Neurology', 'Oncology'],
    4.2,
    400,
    true,
    6.4267,
    7.5044
  ),
  (
    'Memfys Hospital for Neurosurgery',
    '28 Ezeilo Avenue, Enugu',
    'Enugu',
    'Enugu',
    '+234 803 701 5555',
    'info@memfyshospital.com',
    'https://memfyshospital.com',
    'Specialist Hospital',
    ARRAY['Neurosurgery', 'Neurology', 'Spine Surgery', 'Pain Management'],
    4.6,
    60,
    true,
    6.4431,
    7.4953
  ),

  -- KADUNA HOSPITALS
  (
    'Barau Dikko Teaching Hospital',
    'Zaria Road, Kaduna',
    'Kaduna',
    'Kaduna',
    '+234 62 244001',
    'info@bdth.gov.ng',
    NULL,
    'Teaching Hospital',
    ARRAY['General Medicine', 'Surgery', 'Pediatrics', 'Obstetrics', 'Internal Medicine', 'Orthopedics'],
    4.0,
    350,
    true,
    10.5105,
    7.4165
  ),

  -- BENIN CITY HOSPITALS
  (
    'University of Benin Teaching Hospital (UBTH)',
    'PMB 1111, Ugbowo',
    'Benin City',
    'Edo',
    '+234 52 600940',
    'info@ubth.gov.ng',
    'https://ubth.gov.ng',
    'Teaching Hospital',
    ARRAY['General Medicine', 'Surgery', 'Pediatrics', 'Obstetrics', 'Cardiology', 'Neurology', 'Nephrology'],
    4.2,
    550,
    true,
    6.3350,
    5.6037
  ),

  -- SPECIALIST CENTERS
  (
    'Paelon Memorial Hospital',
    'Plot 21 Wumba Street, Garki 2, Abuja',
    'Abuja',
    'FCT',
    '+234 9 4613032',
    'info@paelonhospital.com',
    NULL,
    'Private Hospital',
    ARRAY['Obstetrics & Gynecology', 'Pediatrics', 'Surgery', 'Internal Medicine'],
    4.4,
    90,
    true,
    9.0260,
    7.4889
  ),
  (
    'Lily Hospitals',
    '1 Lily Close, Gbagada Phase 2, Lagos',
    'Lagos',
    'Lagos',
    '+234 1 7743666',
    'info@lilyhospitals.net',
    'https://lilyhospitals.net',
    'Private Hospital',
    ARRAY['General Medicine', 'Surgery', 'Pediatrics', 'Obstetrics & Gynecology', 'Cardiology'],
    4.5,
    130,
    true,
    6.5467,
    3.3825
  );

-- Verify the insert
SELECT COUNT(*) as total_hospitals,
       COUNT(DISTINCT state) as states_covered,
       COUNT(DISTINCT type) as hospital_types,
       ROUND(AVG(rating), 2) as avg_rating
FROM hospitals
WHERE is_active = true;
