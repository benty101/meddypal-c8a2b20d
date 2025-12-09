# MeddyPal Technical Architecture
**Insurance Clearinghouse + Genomics Platform**

---

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        MEDDYPAL PLATFORM                         │
│                                                                  │
│  ┌────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │   Patient App  │  │ Enterprise App  │  │  Admin Portal   │ │
│  │   (Web/Mobile) │  │  (Hospitals)    │  │  (NBRDA)        │ │
│  └───────┬────────┘  └────────┬────────┘  └────────┬────────┘ │
│          │                    │                     │          │
│          └────────────────────┴─────────────────────┘          │
│                               │                                │
│                    ┌──────────▼──────────┐                     │
│                    │   API GATEWAY       │                     │
│                    │  (Supabase Edge)    │                     │
│                    └──────────┬──────────┘                     │
│                               │                                │
└───────────────────────────────┼────────────────────────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
┌───────▼────────┐   ┌──────────▼──────────┐   ┌──────▼──────┐
│  INSURANCE     │   │    GENOMICS         │   │   CORE      │
│  CLEARINGHOUSE │   │    PIPELINE         │   │   SERVICES  │
└────────────────┘   └─────────────────────┘   └─────────────┘
```

---

## Component Architecture

### 1. Frontend Applications

#### Patient Web App
**Tech Stack**: React + TypeScript + Vite
**Key Pages**:
- [Insurance.tsx](src/pages/Insurance.tsx) - Insurance marketplace
- [Dashboard.tsx](src/pages/Dashboard.tsx) - Personal health dashboard
- [Appointments.tsx](src/pages/Appointments.tsx) - Book consultations
- [HealthTimeline.tsx](src/pages/HealthTimeline.tsx) - Medical history
- [Records.tsx](src/pages/Records.tsx) - Health records & genomics

**Features**:
- Insurance plan comparison (up to 3 plans)
- Real-time insurance verification
- Appointment booking with insurance pre-authorization
- Genomic report viewing
- Medication reminders
- Telemedicine consultations

#### Enterprise Dashboard (Hospitals/Clinics)
**Tech Stack**: React + TypeScript + Vite
**Key Components**:
- [ModernHospitalDashboard.tsx](src/components/hospital/ModernHospitalDashboard.tsx)
- [PatientRecords.tsx](src/components/hospital/PatientRecords.tsx)
- [ConsultationScheduler.tsx](src/components/hospital/ConsultationScheduler.tsx)

**Features**:
- **Unified Insurance Billing** (core value proposition)
  - Single interface to submit claims to ALL HMOs
  - Real-time claim status tracking
  - Payment reconciliation dashboard
  - Batch claims processing
- Doctor/staff management
- Patient records (FHIR-compliant)
- Appointment scheduling
- Financial analytics

#### Admin Portal (Government/NBRDA)
**Features**:
- Population health dashboard
- Genomics data aggregation (anonymized)
- Maternal health program monitoring
- MAMA Fund eligibility tracking
- Research-ready datasets

---

### 2. Insurance Clearinghouse Architecture

```
┌───────────────────────────────────────────────────────────────┐
│                   INSURANCE CLEARINGHOUSE                      │
└───────────────────────────────────────────────────────────────┘
                               │
           ┌───────────────────┼───────────────────┐
           │                   │                   │
    ┌──────▼──────┐   ┌────────▼────────┐   ┌─────▼──────┐
    │ Eligibility │   │ Claims          │   │ Payment    │
    │ Verification│   │ Processing      │   │ Reconcile  │
    └──────┬──────┘   └────────┬────────┘   └─────┬──────┘
           │                   │                   │
           └───────────────────┼───────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │   HMO CONNECTORS    │
                    │   (API Adapters)    │
                    └──────────┬──────────┘
                               │
       ┌───────────┬───────────┼───────────┬───────────┐
       │           │           │           │           │
   ┌───▼───┐   ┌──▼───┐   ┌───▼───┐   ┌──▼───┐   ┌───▼───┐
   │Reliance│  │ AXA  │   │Hygeia │   │AIICO │   │ Avon  │
   │  HMO   │  │Mansard│  │  HMO  │   │      │   │  HMO  │
   └────────┘  └───────┘   └───────┘   └──────┘   └───────┘
```

#### HMO Connector Layer
**Purpose**: Translate unified MeddyPal API to each HMO's specific format

**Implementation**:
```typescript
// src/services/InsuranceApiService.ts (enhanced)

interface HMOConnector {
  name: string;
  baseUrl: string;
  authType: 'oauth2' | 'api_key' | 'basic';

  verifyEligibility(
    patientId: string,
    insuranceId: string
  ): Promise<EligibilityResponse>;

  submitClaim(
    claim: UnifiedClaimFormat
  ): Promise<ClaimSubmissionResponse>;

  getClaimStatus(
    claimId: string
  ): Promise<ClaimStatusResponse>;
}

class RelianceHMOConnector implements HMOConnector {
  name = "Reliance HMO";
  baseUrl = "https://api.reliancehmo.com/v1";
  authType = "api_key";

  async verifyEligibility(patientId, insuranceId) {
    // Translate to Reliance API format
    const response = await fetch(`${this.baseUrl}/verify`, {
      method: 'POST',
      headers: {
        'X-API-Key': process.env.RELIANCE_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        enrollee_id: insuranceId,
        // Reliance-specific fields
      })
    });

    // Translate response back to unified format
    return this.parseEligibilityResponse(await response.json());
  }

  async submitClaim(claim: UnifiedClaimFormat) {
    // Map unified format to Reliance format
    const relianceClaim = this.mapToRelianceFormat(claim);

    const response = await fetch(`${this.baseUrl}/claims`, {
      method: 'POST',
      headers: {
        'X-API-Key': process.env.RELIANCE_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(relianceClaim)
    });

    return this.parseClaimResponse(await response.json());
  }

  private mapToRelianceFormat(claim: UnifiedClaimFormat) {
    return {
      claim_number: claim.id,
      enrollee_code: claim.patientInsuranceId,
      provider_code: claim.hospitalCode,
      service_date: claim.serviceDate,
      diagnosis_code: claim.icd10Code,
      amount: claim.amount,
      // Reliance-specific fields
      service_category: this.mapServiceCategory(claim.serviceType),
      sub_category: this.mapSubCategory(claim.serviceType)
    };
  }
}

// Similar connectors for AXA, Hygeia, AIICO, Avon, etc.
```

#### Unified Claim Format (FHIR-inspired)
```typescript
interface UnifiedClaimFormat {
  id: string;
  hospitalId: string;
  hospitalCode: string; // HMO-assigned provider code
  patientId: string;
  patientInsuranceId: string; // Patient's insurance member ID
  insuranceProvider: string; // "Reliance HMO", "AXA Mansard", etc.

  serviceDate: string; // ISO 8601
  serviceType: 'consultation' | 'laboratory' | 'pharmacy' | 'procedure' | 'admission';

  // Clinical info
  icd10Code: string; // Diagnosis code
  cptCode?: string; // Procedure code
  description: string;

  // Financial
  amount: number; // In Naira
  currency: 'NGN';

  // Supporting docs
  attachments?: {
    type: 'prescription' | 'lab_result' | 'invoice';
    url: string;
  }[];

  // Metadata
  submittedBy: string; // Hospital staff user ID
  submittedAt: string;
  status: 'draft' | 'submitted' | 'processing' | 'approved' | 'rejected' | 'paid';
}
```

#### Claims Processing Workflow
```typescript
// Supabase Edge Function: process-insurance-claim

export async function processInsuranceClaim(claim: UnifiedClaimFormat) {
  // 1. Validate claim data
  const validation = await validateClaim(claim);
  if (!validation.valid) {
    throw new Error(`Invalid claim: ${validation.errors.join(', ')}`);
  }

  // 2. Check patient eligibility
  const connector = getHMOConnector(claim.insuranceProvider);
  const eligibility = await connector.verifyEligibility(
    claim.patientId,
    claim.patientInsuranceId
  );

  if (!eligibility.isEligible) {
    throw new Error('Patient not eligible for coverage');
  }

  // 3. Submit claim to HMO
  const submission = await connector.submitClaim(claim);

  // 4. Store in database
  await supabase.from('insurance_claims').insert({
    ...claim,
    hmo_claim_id: submission.claimId,
    hmo_status: submission.status,
    estimated_payment_date: submission.estimatedPaymentDate
  });

  // 5. Set up webhook listener for status updates
  await registerWebhook(claim.insuranceProvider, submission.claimId);

  // 6. Send notification to hospital
  await notificationService.sendClaimSubmitted(claim.hospitalId, claim.id);

  return {
    success: true,
    claimId: claim.id,
    hmoClaimId: submission.claimId,
    estimatedPaymentDate: submission.estimatedPaymentDate
  };
}
```

---

### 3. Genomics Pipeline Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    GENOMICS PIPELINE                         │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
  ┌─────▼──────┐   ┌────────▼────────┐   ┌─────▼──────┐
  │  Sample    │   │  VCF Processing │   │  Clinical  │
  │  Tracking  │   │  & Annotation   │   │  Reporting │
  └────────────┘   └─────────────────┘   └────────────┘
                            │
                   ┌────────┴────────┐
                   │                 │
            ┌──────▼──────┐   ┌──────▼──────┐
            │  Research   │   │  Population │
            │  Database   │   │  Analytics  │
            └─────────────┘   └─────────────┘
```

#### Sample Collection Workflow
**Integrated with Maternal Health Journey**:

1. **Antenatal Visit (Week 8-12)**
   - Patient consents to genomics study ([ConsentService.ts](src/services/ConsentService.ts))
   - Maternal blood sample collected (10mL EDTA tube)
   - Sample labeled with unique barcode
   - Chain of custody tracking begins

2. **Delivery (Week 40)**
   - Cord blood collected (if consented)
   - Newborn heel prick sample (Guthrie card)
   - Samples linked to maternal record

3. **Lab Processing**
   - Sample received at partner lab
   - DNA extraction
   - Library preparation
   - Whole genome sequencing (30x coverage)
   - VCF file generation

4. **Bioinformatics**
   - VCF upload to MeddyPal platform ([GenomicsService.ts](src/services/GenomicsService.ts))
   - Variant calling & quality control
   - Annotation (ClinVar, gnomAD, OMIM)
   - Clinical significance assessment
   - Pharmacogenomics analysis

5. **Clinical Reporting**
   - Genetic counselor review
   - Patient-friendly report generation
   - Physician notification
   - Counseling session scheduling

#### VCF Processing at Scale
**Current**: [GenomicsService.ts](src/services/GenomicsService.ts) (client-side processing)
**Future** (Phase 2): Cloud-based pipeline

```typescript
// Supabase Edge Function: process-genomic-vcf

import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { BatchClient, SubmitJobCommand } from '@aws-sdk/client-batch';

export async function processGenomicVCF(vcfUrl: string, patientId: string) {
  // 1. Download VCF from storage
  const s3 = new S3Client({ region: 'us-east-1' });
  const vcfFile = await s3.send(new GetObjectCommand({
    Bucket: 'meddypal-genomics',
    Key: vcfUrl
  }));

  // 2. Submit to AWS Batch for processing
  const batch = new BatchClient({ region: 'us-east-1' });
  const job = await batch.send(new SubmitJobCommand({
    jobName: `vcf-process-${patientId}`,
    jobQueue: 'genomics-processing-queue',
    jobDefinition: 'vcf-annotation-pipeline',
    parameters: {
      vcf_url: vcfUrl,
      patient_id: patientId,
      reference_genome: 'GRCh38',
      annotation_sources: 'clinvar,gnomad,omim,pharmgkb'
    }
  }));

  // 3. Job runs Docker container with:
  //    - bcftools for VCF processing
  //    - VEP (Variant Effect Predictor) for annotation
  //    - Custom Nigerian allele frequency database

  // 4. Store annotated variants in database
  await supabase.from('genomic_variants').insert({
    patient_id: patientId,
    vcf_url: vcfUrl,
    processing_job_id: job.jobId,
    status: 'processing'
  });

  // 5. Generate alerts for pathogenic variants
  await genomicsService.generateAlertsForReport({
    patient_id: patientId,
    variants: annotatedVariants
  });

  return {
    jobId: job.jobId,
    estimatedCompletionTime: '2 hours'
  };
}
```

---

### 4. Data Architecture

#### Database Schema (Supabase PostgreSQL)

**Core Tables**:

```sql
-- Users & Authentication
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  role TEXT CHECK (role IN ('patient', 'hospital_admin', 'doctor', 'genetic_counselor', 'nbrda_admin')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insurance Plans
CREATE TABLE insurance_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  provider TEXT NOT NULL, -- "Reliance HMO", "AXA Mansard", etc.
  name TEXT NOT NULL,
  plan_type TEXT, -- "Individual", "Family", "Premium"
  premium_monthly NUMERIC NOT NULL,
  premium_annual NUMERIC,
  coverage_amount NUMERIC NOT NULL,
  features JSONB,
  terms TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Patient Insurance Enrollment
CREATE TABLE patient_insurance (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  insurance_plan_id UUID REFERENCES insurance_plans(id),
  insurance_member_id TEXT NOT NULL, -- HMO-assigned member ID
  policy_number TEXT,
  enrollment_date DATE NOT NULL,
  expiry_date DATE,
  status TEXT CHECK (status IN ('active', 'expired', 'cancelled')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insurance Claims (CORE CLEARINGHOUSE TABLE)
CREATE TABLE insurance_claims (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  hospital_id UUID REFERENCES hospitals(id),
  hospital_code TEXT NOT NULL, -- HMO-assigned provider code
  patient_id UUID REFERENCES users(id),
  patient_insurance_id UUID REFERENCES patient_insurance(id),
  insurance_provider TEXT NOT NULL,

  -- Clinical info
  service_date DATE NOT NULL,
  service_type TEXT,
  icd10_code TEXT,
  cpt_code TEXT,
  description TEXT,

  -- Financial
  amount NUMERIC NOT NULL,
  currency TEXT DEFAULT 'NGN',

  -- HMO interaction
  hmo_claim_id TEXT, -- Claim ID from HMO system
  hmo_status TEXT, -- 'submitted', 'processing', 'approved', 'rejected', 'paid'
  hmo_rejection_reason TEXT,
  estimated_payment_date DATE,
  actual_payment_date DATE,

  -- Metadata
  submitted_by UUID REFERENCES users(id),
  submitted_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  -- Audit trail
  status_history JSONB, -- Array of {status, timestamp, notes}
  attachments JSONB -- Array of {type, url}
);

-- Genomic Samples
CREATE TABLE genomic_samples (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_id UUID REFERENCES users(id),
  sample_type TEXT CHECK (sample_type IN ('maternal_blood', 'cord_blood', 'heel_prick')),
  barcode TEXT UNIQUE NOT NULL,
  collection_date TIMESTAMP NOT NULL,
  collection_location TEXT, -- Hospital name
  collected_by UUID REFERENCES users(id), -- Staff who collected

  -- Chain of custody
  custody_log JSONB, -- [{timestamp, location, handler, notes}]

  -- Lab processing
  lab_partner TEXT,
  lab_received_date TIMESTAMP,
  sequencing_started_date TIMESTAMP,
  sequencing_completed_date TIMESTAMP,
  vcf_url TEXT, -- S3 or Supabase Storage URL

  -- Status
  status TEXT CHECK (status IN ('collected', 'in_transit', 'received', 'processing', 'completed', 'failed')),

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Genomic Variants (from VCF)
CREATE TABLE genomic_variants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_id UUID REFERENCES users(id),
  sample_id UUID REFERENCES genomic_samples(id),

  -- Variant location
  chromosome TEXT NOT NULL,
  position BIGINT NOT NULL,
  reference TEXT NOT NULL,
  alternate TEXT NOT NULL,

  -- Variant details
  gene TEXT,
  variant_type TEXT CHECK (variant_type IN ('SNV', 'INDEL', 'CNV', 'SV')),
  clinical_significance TEXT CHECK (clinical_significance IN ('pathogenic', 'likely_pathogenic', 'uncertain', 'likely_benign', 'benign')),

  -- Quality metrics
  quality_score NUMERIC,
  depth INTEGER,
  allele_frequency NUMERIC,
  genotype TEXT,

  -- Clinical annotations
  associated_conditions JSONB, -- Array of condition names
  drug_interactions JSONB, -- Array of drug names
  recommendations JSONB, -- Array of clinical recommendations
  inheritance_pattern TEXT,

  -- Population frequency
  nigerian_allele_frequency NUMERIC, -- Custom Nigerian database
  african_allele_frequency NUMERIC,
  global_allele_frequency NUMERIC,

  created_at TIMESTAMP DEFAULT NOW()
);

-- Genomic Alerts
CREATE TABLE genomic_alerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_id UUID REFERENCES users(id),
  variant_id UUID REFERENCES genomic_variants(id),

  alert_type TEXT CHECK (alert_type IN ('high_risk', 'drug_interaction', 'carrier_status', 'family_history')),
  severity TEXT CHECK (severity IN ('critical', 'high', 'moderate', 'low')),

  title TEXT NOT NULL,
  description TEXT,
  recommendations JSONB,

  requires_counseling BOOLEAN DEFAULT FALSE,
  acknowledged BOOLEAN DEFAULT FALSE,
  acknowledged_by UUID REFERENCES users(id),
  acknowledged_at TIMESTAMP,

  created_at TIMESTAMP DEFAULT NOW()
);

-- Maternal Health Journey
CREATE TABLE maternal_health_journeys (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_id UUID REFERENCES users(id),

  -- Timeline
  lmp_date DATE, -- Last menstrual period
  edd_date DATE, -- Estimated delivery date
  actual_delivery_date DATE,

  -- Visits
  antenatal_visits JSONB, -- [{visit_number, date, gestational_age, notes, vitals}]

  -- Genomics
  genomics_consent BOOLEAN DEFAULT FALSE,
  genomics_consent_date TIMESTAMP,
  samples_collected UUID[], -- Array of genomic_samples IDs

  -- Insurance & MAMA Fund
  insurance_id UUID REFERENCES patient_insurance(id),
  mama_fund_eligible BOOLEAN DEFAULT FALSE,
  mama_fund_amount NUMERIC,

  -- Status
  status TEXT CHECK (status IN ('registered', 'antenatal', 'delivered', 'postpartum', 'completed')),

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Row-Level Security (RLS) Policies

```sql
-- Patients can only see their own data
CREATE POLICY patients_own_data ON insurance_claims
  FOR SELECT
  USING (auth.uid() = patient_id);

-- Hospitals can only see claims they submitted
CREATE POLICY hospitals_own_claims ON insurance_claims
  FOR ALL
  USING (auth.uid() IN (
    SELECT user_id FROM hospital_staff WHERE hospital_id = insurance_claims.hospital_id
  ));

-- NBRDA admins can see aggregated anonymized data
CREATE POLICY nbrda_population_health ON genomic_variants
  FOR SELECT
  USING (
    auth.jwt() ->> 'role' = 'nbrda_admin'
    AND patient_id IS NULL -- Only anonymized data
  );

-- Genetic counselors can see data with patient consent
CREATE POLICY counselor_access ON genomic_variants
  FOR SELECT
  USING (
    auth.uid() IN (
      SELECT counselor_id FROM genomic_access_grants
      WHERE patient_id = genomic_variants.patient_id
      AND expiry_date > NOW()
    )
  );
```

---

### 5. API Architecture

#### REST API Endpoints (Supabase)

**Insurance Clearinghouse APIs**:
```
POST   /api/insurance/verify-eligibility
POST   /api/insurance/submit-claim
GET    /api/insurance/claims/:claimId
GET    /api/insurance/claims (with filters)
PATCH  /api/insurance/claims/:claimId/status
POST   /api/insurance/claims/batch-submit
GET    /api/insurance/analytics/approval-rate
```

**Genomics APIs**:
```
POST   /api/genomics/upload-vcf
GET    /api/genomics/samples/:sampleId
GET    /api/genomics/variants/:patientId
GET    /api/genomics/alerts/:patientId
POST   /api/genomics/consent
GET    /api/genomics/reports/:patientId
POST   /api/genomics/population-query (NBRDA only)
```

**Maternal Health APIs**:
```
POST   /api/maternal/register
PATCH  /api/maternal/:journeyId/visit
POST   /api/maternal/:journeyId/sample-collection
GET    /api/maternal/:journeyId/timeline
POST   /api/maternal/mama-fund-check
```

#### Webhook Endpoints (for HMO status updates)
```
POST   /webhooks/insurance/reliance-hmo
POST   /webhooks/insurance/axa-mansard
POST   /webhooks/insurance/hygeia
POST   /webhooks/genomics/lab-partner
```

---

### 6. Security Architecture

#### Authentication & Authorization
```
┌─────────────────────────────────────────────────────────┐
│                  SUPABASE AUTH                          │
│  ┌────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   Email    │  │    Phone    │  │   OAuth     │     │
│  │  Password  │  │  (OTP/SMS)  │  │  (Google)   │     │
│  └────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
          ┌──────────────────────────┐
          │      JWT Token           │
          │  + Role Claims           │
          │  + Hospital Affiliation  │
          └──────────────────────────┘
                         │
                         ▼
          ┌──────────────────────────┐
          │  Row-Level Security      │
          │  (PostgreSQL RLS)        │
          └──────────────────────────┘
```

**Role Hierarchy**:
- `patient` - Can view own health data, compare insurance, book appointments
- `hospital_admin` - Manage hospital staff, submit claims, view analytics
- `doctor` - Access patient records, prescribe, order tests
- `genetic_counselor` - Interpret genomic variants, counsel patients
- `lab_technician` - Upload VCF files, update sample status
- `nbrda_admin` - View population health data, export research datasets
- `super_admin` - Full platform access (Basani/Forric only)

#### Data Encryption
- **At Rest**: PostgreSQL transparent encryption (Supabase)
- **In Transit**: TLS 1.3 for all API calls
- **Genomic Files**: AES-256 encryption for VCF files in storage
- **PHI Fields**: Application-level encryption for sensitive fields (SSN, genomic data)

#### Compliance
- **NDPR** (Nigeria Data Protection Regulation): Data sovereignty, consent management
- **GDPR** (for EU collaborations): Right to erasure, data portability
- **HIPAA-equivalent**: PHI access logging, breach notification
- **Genomic Data Governance**: Tiered consent, research ethics approval

---

### 7. Integration Architecture

#### Third-Party Integrations

**Payment Gateways**:
- Paystack (for insurance premium payments)
- Flutterwave (alternative payment method)
- Bank transfer webhooks

**SMS/USSD**:
- Africa's Talking (primary)
- Twilio (backup)
- USSD shortcodes: `*347*123#` (insurance balance), `*347*124#` (claims status)

**Lab Partners** (Future):
- 54gene infrastructure (if acquired/partnered)
- International sequencing providers (Illumina, BGI)
- Local diagnostic labs for sample collection

**Government Systems**:
- NIN (National Identity Number) verification
- NHIA (National Health Insurance Authority) integration
- MAMA Fund API (when available)

---

## Deployment Architecture

### Current (MVP)
```
┌────────────────────────────────────────┐
│         Lovable.dev / Vercel           │
│  (React app hosting)                   │
└────────────────┬───────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────┐
│          Supabase Cloud                │
│  - PostgreSQL Database                 │
│  - Authentication                      │
│  - Edge Functions                      │
│  - Storage (for VCF files)             │
│  - Realtime subscriptions              │
└────────────────────────────────────────┘
```

### Future (Scale)
```
┌──────────────────────────────────────────────────────────┐
│                    Cloudflare CDN                        │
└───────────────────────┬──────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
┌───────▼────────┐ ┌────▼────────┐ ┌───▼────────────┐
│  Web App       │ │  API Gateway│ │  Admin Portal  │
│  (Vercel)      │ │  (Supabase) │ │  (Vercel)      │
└────────────────┘ └────┬────────┘ └────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
┌───────▼────────┐ ┌────▼────────┐ ┌───▼────────────┐
│  Primary DB    │ │  Genomics   │ │  Cache Layer   │
│  (Supabase)    │ │  Compute    │ │  (Redis)       │
│  + Read        │ │  (AWS Batch)│ └────────────────┘
│  Replicas      │ └─────────────┘
└────────────────┘
```

**Scaling Considerations**:
- Read replicas for analytics queries
- Connection pooling (PgBouncer)
- CDN for static assets
- Horizontal scaling for Edge Functions
- Queue system for batch processing (BullMQ + Redis)

---

## Performance Targets

### Page Load Times
- **Insurance marketplace**: <2 seconds (first contentful paint)
- **Enterprise dashboard**: <1.5 seconds
- **Genomic report**: <3 seconds (VCF parsing is heavy)

### API Response Times
- **Eligibility verification**: <500ms (cached), <2s (live HMO check)
- **Claim submission**: <1s (async processing)
- **Patient record fetch**: <300ms

### Throughput
- **Concurrent users**: 10,000 (target for 90 days)
- **Claims per day**: 1,000+
- **VCF processing**: 50 genomes per day (Phase 2)

---

## Monitoring & Observability

### Tools
- **Supabase Dashboard** - Database metrics, API logs
- **Sentry** - Error tracking & performance monitoring
- **Mixpanel** - User analytics (insurance conversions, claim submissions)
- **UptimeRobot** - Uptime monitoring (99.9% SLA target)

### Key Metrics
- Insurance plan comparison rate
- Claim submission success rate
- Average claim processing time
- HMO API uptime (per provider)
- Genomic variant annotation accuracy

---

**Document Owner**: Basani Digital Innovations Limited (RC 8103328)
**Technical Lead**: Forric (RC 1939381)
**Last Updated**: November 28, 2024
**Version**: 1.0
