# MeddyPal Comprehensive Audit Report

## A. SERVICE DIRECTORY DATABASE AUDIT

### 1. Core Directory Counts
```json
{
  "hospitals": 0,
  "e_hospitals": 0,
  "pharmacies": 0,
  "e_pharmacies": 0,
  "labs": 0,
  "e_labs": 0,
  "insurance": 0,
  "status": "not_implemented"
}
```
*Note: The database tables exist (e.g., `public.hospitals`, `public.pharmacies`), but they currently contain 0 entries in the connected environment.*

### 2. Other Directory-Like Datasets
```json
[
  {
    "name": "public.telemedicine_providers",
    "description": "Directory of providers offering remote consultations (e-Hospitals/e-Doctors).",
    "count": 0
  },
  {
    "name": "public.insurance_plans",
    "description": "Catalog of available insurance plans from various HMOs.",
    "count": 0
  },
  {
    "name": "public.hospital_staff",
    "description": "Link table associating users (staff) with specific hospitals.",
    "count": 0
  },
  {
    "name": "public.lab_tests",
    "description": "Catalog of available diagnostic tests offered by labs.",
    "count": 0
  },
  {
    "name": "public.medical_records",
    "description": "User-owned longitudinal health records (documents, results, prescriptions).",
    "count": 0
  }
]
```

---

## B. FEATURE & CURRENT USER FLOW AUDIT

### 1. Key Features & Surfaces
*   **Onboarding**: `src/pages/Onboarding.tsx` - Initial user setup and preference collection.
*   **Dashboard**: `src/pages/Dashboard.tsx` - Central hub with health metrics, appointments, and quick links.
*   **Hospital Directory**: `src/pages/Hospitals.tsx` - Searchable directory of hospitals (Fully wired to Supabase).
*   **Lab Services**: `src/pages/Labs.tsx` - Lab test booking and home kit ordering (Partially supported with static data).
*   **AI Symptom Checker**: `src/components/ai/SimpleSymptomChecker.tsx` - Rule-based symptom analysis (Client-side logic).
*   **Emergency**: `src/pages/Emergency.tsx` - Quick access to emergency contacts and services.
*   **Insurance**: `src/pages/Insurance.tsx` - Insurance plan comparison and management.

### 2. Mapped Current User Flows

**Entry & Onboarding**
`Homepage` → (Sign Up) → `Auth` → `Onboarding` → `Dashboard` [implemented]

**Service Access**
`Dashboard` → `Hospitals` → `HospitalDirectory` → [Hospital Profile] → `Booking Modal` [implemented]
`Dashboard` → `Labs` → [Test Catalog] → `Booking Modal` [partially_supported] (Static data)
`Dashboard` → `Pharmacy` → [Pharmacy List] [partially_supported] (Inferred static/placeholder)
`Dashboard` → `Telemedicine` → [Provider List] [partially_supported]

**AI & Health Intelligence**
`Dashboard` → `AI Symptom Checker` → [Symptom Input] → `Analysis Result` [partially_supported] (Rule-based)
`Dashboard` → `Health Timeline` → [Timeline View] [implemented]

**Emergency**
`Dashboard` → `Floating Emergency Button` → `Emergency Page` [implemented]

---

## C. IDEAL USER FLOW REDESIGN PROPOSAL

### 1. Dashboard as the Universal Router
**Rationale**: The dashboard currently scatters services. It should act as a unified "Grand Central Station" where the user's intent (e.g., "I feel sick") is immediately routed to the right service (Telemed, Hospital, or Pharmacy) without them guessing.

**Flow**:
`Dashboard` → `Unified Services Hub` → `Service Type Selector` (Doctor/Nurse/Lab/Drug) → `Filter & Context` (Near me/Online) → `Provider` → `Booking` → `QR Share`

### 2. Emergency Mode (One-Tap Access)
**Rationale**: In an emergency, navigation is a failure. The "Emergency" mode should be a distinct state of the app, not just a page, instantly surfacing critical data (Allergies, Blood Type) via QR for first responders, working offline.

**Flow**:
`Dashboard` → `Emergency Mode Toggle` → `QR Share` (Medical ID) → `Auto-Provider Suggestions` (Nearest Emergency-Ready) → `Booking/Navigation`

### 3. Wallet-First Insurance Integration
**Rationale**: Insurance shouldn't be an afterthought. It's the "Passport" that unlocks care. The flow should start with eligibility ("Can I afford this?") before showing providers, reducing anxiety and rejection at the point of care.

**Flow**:
`Dashboard` → `Wallet` → `Insurance Card` → `Check Eligibility` → `Nearest In-Network Provider` → `Booking`

### 4. AI-Driven Triage to Care
**Rationale**: The Symptom Checker shouldn't just end with advice. It should be the "Front Door" that triages the user and hands them off directly to the appropriate service (e.g., "High urgency" → Emergency Map; "Low urgency" → Telemedicine).

**Flow**:
`Dashboard` → `AI Symptom Checker` → `Triage Result` → `Recommended Service Type` (e.g., Telemed) → `Provider` → `Booking`

---

## D. MASTER SUMMARY

### Final Instruction Block
“The dashboard is the map. The wallet is the passport. The QR is the voice.”
