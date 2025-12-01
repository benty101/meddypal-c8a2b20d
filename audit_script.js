import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://zjiuajfoimfmavezpmob.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqaXVhamZvaW1mbWF2ZXpwbW9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MTE4NzUsImV4cCI6MjA2NTQ4Nzg3NX0.E-ZonT-pGSg545O9N2cmblqb_pdYq_TdL5LPmiNRm44";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function audit() {
  const tables = [
    'hospitals',
    'pharmacies',
    'labs',
    'insurance_plans',
    'telemedicine_providers',
    'profiles',
    'medical_records',
    'lab_tests'
  ];

  const results = {};

  for (const table of tables) {
    try {
      const { count, error } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true });
      
      if (error) {
        // console.error(`Error counting ${table}:`, error.message);
        results[table] = -1; // Mark as error/inaccessible
      } else {
        results[table] = count;
      }
    } catch (e) {
      // console.error(`Exception counting ${table}:`, e);
      results[table] = -1;
    }
  }
  console.log(JSON.stringify(results, null, 2));
}

audit();
