import { 
  Stethoscope, 
  Activity, 
  Droplets, 
  HeartPulse, 
  ShieldPlus, 
  Bone, 
  Baby, 
  Flame, 
  Brain, 
  Scissors,
  LucideIcon
} from "lucide-react";

import imgGeneralMedicine from "@/assets/spec-general-medicine.jpg";
import imgDiabetology from "@/assets/spec-diabetology.jpg";
import imgNephrology from "@/assets/spec-nephrology.jpg";
import imgCriticalCare from "@/assets/spec-critical-care.jpg";
import imgUrology from "@/assets/spec-urology.jpg";
import imgOrthopedics from "@/assets/spec-orthopedics.jpg";
import imgObstetricsGynecology from "@/assets/spec-obstetrics-gynecology.jpg";
import imgGastroenterology from "@/assets/spec-gastroenterology.jpg";
import imgNeurology from "@/assets/spec-neurology.jpg";
import imgGeneralSurgery from "@/assets/spec-general-surgery.jpg";

export type Specialty = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  conditions: string[];
  diagnostics: string[];
  icon: LucideIcon;
  image: string;
};

export const specialties: Specialty[] = [
  {
    slug: "general-medicine",
    name: "General Medicine",
    tagline: "Everyday care, expertly handled",
    description:
      "Diagnosis and management of fevers, infections, hypertension, thyroid disorders and complex multi-system illnesses for adults of all ages.",
    highlights: ["Preventive health checks", "Infectious disease care", "Chronic illness management", "Adult vaccinations", "Travel medicine consultation"],
    conditions: ["Hypertension", "Type 2 Diabetes", "Viral Fevers", "Thyroid Disorders", "Common Cold & Flu", "Anemia"],
    diagnostics: ["Comprehensive Blood Panels", "Thyroid Function Tests", "Vitamin Screenings", "Digital X-Ray", "Urine Analysis"],
    icon: Stethoscope,
    image: imgGeneralMedicine,
  },
  {
    slug: "diabetology",
    name: "Diabetology",
    tagline: "Living well with diabetes",
    description:
      "Structured diabetes care combining medical treatment, nutrition counselling, foot care and continuous glucose monitoring.",
    highlights: ["Insulin optimisation", "Diabetic foot clinic", "Diet & lifestyle planning", "Continuous glucose monitoring", "Diabetes education"],
    conditions: ["Type 1 Diabetes", "Type 2 Diabetes", "Gestational Diabetes", "Hypoglycemia", "Diabetic Neuropathy", "Metabolic Syndrome"],
    diagnostics: ["HbA1c Testing", "Fasting & Post-Prandial Blood Sugar", "Oral Glucose Tolerance Test (OGTT)", "C-Peptide Test", "Microalbuminuria Screening"],
    icon: Activity,
    image: imgDiabetology,
  },
  {
    slug: "nephrology",
    name: "Nephrology",
    tagline: "Complete kidney health support",
    description:
      "Evaluation and treatment of kidney disorders, hypertension-related kidney disease and dialysis support by experienced nephrologists.",
    highlights: ["CKD management", "Dialysis services", "Electrolyte disorders", "Acute kidney injury care", "Kidney biopsy"],
    conditions: ["Chronic Kidney Disease (CKD)", "Kidney Stones", "Glomerulonephritis", "Polycystic Kidney Disease", "Renal Failure", "Proteinuria"],
    diagnostics: ["Serum Creatinine & GFR", "Renal Ultrasound", "Kidney Biopsy", "Electrolyte Panel", "24-Hour Urine Protein"],
    icon: Droplets,
    image: imgNephrology,
  },
  {
    slug: "critical-care",
    name: "Critical Care",
    tagline: "Intensive care, round the clock",
    description:
      "Multi-disciplinary intensive care units with advanced ventilators, invasive monitoring and 24×7 intensivist cover.",
    highlights: ["Medical & surgical ICU", "Ventilator support", "Sepsis care protocols", "Hemodynamic monitoring", "Post-operative recovery"],
    conditions: ["Septic Shock", "Respiratory Failure", "Multi-organ Failure", "Severe Trauma", "Stroke & Coma", "Heart Failure"],
    diagnostics: ["Arterial Blood Gas (ABG)", "Continuous Hemodynamic Monitoring", "Bedside Ultrasound/Echo", "Point-of-care Testing", "Microbiological Cultures"],
    icon: HeartPulse,
    image: imgCriticalCare,
  },
  {
    slug: "urology",
    name: "Urology",
    tagline: "Advanced urological surgery",
    description:
      "Minimally invasive treatment for stones, prostate conditions and urinary tract disorders in men and women.",
    highlights: ["Laser stone treatment", "Prostate care", "Endourology", "Laparoscopic urology", "Male infertility care"],
    conditions: ["Kidney & Bladder Stones", "Benign Prostatic Hyperplasia (BPH)", "Urinary Tract Infections (UTI)", "Incontinence", "Urological Cancers", "Erectile Dysfunction"],
    diagnostics: ["Uroflowmetry", "KUB Ultrasound", "Cystoscopy", "PSA Screening", "Intravenous Urogram (IVU)"],
    icon: ShieldPlus,
    image: imgUrology,
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    tagline: "Move freely again",
    description:
      "Joint replacement, sports injury care, spine consultation and trauma management supported by structured physiotherapy.",
    highlights: ["Knee & hip replacement", "Arthroscopy", "Fracture & trauma care", "Sports medicine", "Spine surgery"],
    conditions: ["Osteoarthritis", "Fractures & Dislocations", "Ligament Tears (ACL/MCL)", "Slipped Disc", "Carpal Tunnel Syndrome", "Rheumatoid Arthritis"],
    diagnostics: ["Digital X-Ray", "CT Scan", "MRI Advisory", "Bone Density (DEXA) Scan", "Diagnostic Arthroscopy"],
    icon: Bone,
    image: imgOrthopedics,
  },
  {
    slug: "obstetrics-gynecology",
    name: "Obstetrics & Gynecology",
    tagline: "Care for every stage of womanhood",
    description:
      "Comprehensive maternity care, high-risk pregnancy management, gynaec surgery and adolescent to menopause wellness.",
    highlights: ["Birthing suites", "High-risk pregnancy", "Laparoscopic gynaec surgery", "Infertility workup", "PCOS clinic"],
    conditions: ["Pregnancy Management", "PCOS/PCOD", "Endometriosis", "Fibroids", "Menopausal Issues", "Pelvic Inflammatory Disease"],
    diagnostics: ["Obstetric Ultrasound", "Follicular Tracking", "Pap Smear", "Colposcopy", "Mammogram Advisory"],
    icon: Baby,
    image: imgObstetricsGynecology,
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    tagline: "Digestive and liver expertise",
    description:
      "Endoscopic diagnosis and treatment for acidity, IBD, liver disease, pancreatitis and gastrointestinal bleeding.",
    highlights: ["Diagnostic endoscopy", "Colonoscopy", "Liver clinic", "ERCP", "Capsule endoscopy"],
    conditions: ["GERD/Acidity", "Irritable Bowel Syndrome (IBS)", "Fatty Liver Disease", "Gastritis", "Inflammatory Bowel Disease (IBD)", "Gallstones"],
    diagnostics: ["Upper GI Endoscopy", "Colonoscopy", "Liver Function Tests", "FibroScan Advisory", "Urea Breath Test"],
    icon: Flame,
    image: imgGastroenterology,
  },
  {
    slug: "neurology",
    name: "Neurology",
    tagline: "Brain, nerve and spine care",
    description:
      "Evaluation and management of stroke, epilepsy, headache, movement disorders and neuromuscular conditions.",
    highlights: ["Stroke pathway", "Epilepsy clinic", "Headache & migraine care", "Electro-physiology", "Neuro-rehabilitation"],
    conditions: ["Migraine & Tension Headaches", "Epilepsy & Seizures", "Stroke", "Parkinson's Disease", "Alzheimer's/Dementia", "Neuropathy"],
    diagnostics: ["EEG (Electroencephalogram)", "NCV (Nerve Conduction Velocity)", "EMG (Electromyography)", "CT Brain", "MRI Advisory"],
    icon: Brain,
    image: imgNeurology,
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    tagline: "Precise, minimally invasive surgery",
    description:
      "Laparoscopic and open surgery for hernia, gallbladder, appendix, thyroid, breast and proctology conditions.",
    highlights: ["Laparoscopic surgery", "Daycare procedures", "Proctology care", "Laser surgery", "Wound care"],
    conditions: ["Hernia", "Gallstones (Cholecystitis)", "Appendicitis", "Piles/Fissure/Fistula", "Breast Lumps", "Varicose Veins"],
    diagnostics: ["Digital X-Ray", "Ultrasound Abdomen", "CT Scan Advisory", "Diagnostic Laparoscopy", "Biopsy & FNAC"],
    icon: Scissors,
    image: imgGeneralSurgery,
  },
];

export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  qualification: string;
  experience: string;
  description: string;
  expertise: string[];
  education: string[];
  availability: { days: string; timings: string; slots: string[] };
};

export const doctors: Doctor[] = [
  {
    slug: "dr-arvind-menon",
    name: "Dr. Arvind Menon",
    specialty: "General Medicine",
    qualification: "MBBS, MD (General Medicine)",
    experience: "18 years",
    description: "Dr. Arvind Menon is a dedicated internal medicine specialist focused on evidence-based treatment of complex lifestyle disorders and infectious diseases. He has a patient-centric approach that emphasizes early diagnosis and preventive care.",
    expertise: ["Lifestyle medicine", "Infectious disease management", "Chronic illness coordination", "Adult immunization"],
    education: ["MD General Medicine - Madras Medical College", "MBBS - Stanley Medical College"],
    availability: { days: "Mon – Sat", timings: "09:30 AM – 04:00 PM", slots: ["09:30 AM", "11:00 AM", "12:30 PM", "03:00 PM"] }
  },
  {
    slug: "dr-kavitha-raghavan",
    name: "Dr. Kavitha Raghavan",
    specialty: "Diabetology",
    qualification: "MBBS, MD, Fellowship in Diabetology",
    experience: "15 years",
    description: "Dr. Kavitha specializes in holistic diabetes management, focusing on preventing long-term complications through metabolic control and lifestyle modifications.",
    expertise: ["Type 1 & Type 2 Diabetes", "Gestational Diabetes", "Insulin pump therapy", "Metabolic syndrome"],
    education: ["Fellowship in Diabetology - Dr. Mohans Diabetes Specialities Centre", "MD - Kilpauk Medical College"],
    availability: { days: "Mon – Fri", timings: "10:00 AM – 05:00 PM", slots: ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"] }
  },
  {
    slug: "dr-suresh-iyer",
    name: "Dr. Suresh Iyer",
    specialty: "Nephrology",
    qualification: "MBBS, MD, DM (Nephrology)",
    experience: "20 years",
    description: "A veteran in kidney care, Dr. Suresh Iyer has pioneered several protocols in dialysis management and chronic kidney disease slowing techniques.",
    expertise: ["Renal replacement therapy", "Glomerular diseases", "Hypertension management", "Pre-transplant evaluation"],
    education: ["DM Nephrology - AIIMS, New Delhi", "MD Internal Medicine - JIPMER"],
    availability: { days: "Mon, Wed, Fri", timings: "10:00 AM – 03:00 PM", slots: ["10:00 AM", "11:15 AM", "01:00 PM", "02:30 PM"] }
  },
  {
    slug: "dr-nikhil-sharma",
    name: "Dr. Nikhil Sharma",
    specialty: "Critical Care",
    qualification: "MBBS, MD, IDCCM",
    experience: "12 years",
    description: "Dr. Nikhil leads our intensive care units with a focus on advanced hemodynamic monitoring and sepsis management protocols.",
    expertise: ["Mechanical ventilation", "Advanced life support", "Neuro-critical care", "Hemodynamic monitoring"],
    education: ["IDCCM - Indian Society of Critical Care Medicine", "MD - Armed Forces Medical College"],
    availability: { days: "Tue – Sat", timings: "11:00 AM – 06:00 PM", slots: ["11:00 AM", "12:30 PM", "03:30 PM", "05:00 PM"] }
  },
  {
    slug: "dr-rahul-deshpande",
    name: "Dr. Rahul Deshpande",
    specialty: "Urology",
    qualification: "MBBS, MS, MCh (Urology)",
    experience: "16 years",
    description: "Dr. Rahul Deshpande is an expert in minimally invasive urological procedures, specializing in laser treatments for stones and prostate health.",
    expertise: ["Laser lithotripsy", "Endourology", "Prostate surgery (TURP)", "Laparoscopic urology"],
    education: ["MCh Urology - Grant Medical College", "MS General Surgery - KEM Hospital"],
    availability: { days: "Mon – Sat", timings: "09:00 AM – 02:00 PM", slots: ["09:00 AM", "10:30 AM", "12:00 PM", "01:30 PM"] }
  },
  {
    slug: "dr-praveen-kumar",
    name: "Dr. Praveen Kumar",
    specialty: "Orthopedics",
    qualification: "MBBS, MS (Ortho), Fellowship in Arthroplasty",
    experience: "17 years",
    description: "Specializing in joint replacements and trauma, Dr. Praveen focuses on rapid recovery protocols and minimally invasive orthopedic surgery.",
    expertise: ["Total knee replacement", "Total hip replacement", "Sports medicine", "Complex trauma surgery"],
    education: ["Fellowship in Arthroplasty - Germany", "MS Orthopedics - Kasturba Medical College"],
    availability: { days: "Mon – Sat", timings: "24x7 On-Call", slots: ["10:00 AM", "12:00 PM", "04:00 PM", "06:00 PM"] }
  },
  {
    slug: "dr-anitha-raj",
    name: "Dr. Anitha Raj",
    specialty: "Obstetrics & Gynecology",
    qualification: "MBBS, MS (OBG)",
    experience: "19 years",
    description: "Dr. Anitha Raj provides compassionate care for women across all life stages, with special expertise in high-risk obstetrics and laparoscopic gynecology.",
    expertise: ["High-risk pregnancy care", "Laparoscopic hysterectomy", "Adolescent gynecology", "Menopausal health"],
    education: ["MS OBG - Madras Medical College", "MBBS - Coimbatore Medical College"],
    availability: { days: "Mon – Sat", timings: "10:00 AM – 04:30 PM", slots: ["10:00 AM", "11:30 AM", "01:30 PM", "04:00 PM"] }
  },
  {
    slug: "dr-vivek-nair",
    name: "Dr. Vivek Nair",
    specialty: "Gastroenterology",
    qualification: "MBBS, MD, DM (Gastroenterology)",
    experience: "14 years",
    description: "Dr. Vivek Nair is an interventional gastroenterologist specializing in therapeutic endoscopy and liver health management.",
    expertise: ["Diagnostic & therapeutic endoscopy", "Liver disease management", "Inflammatory bowel disease", "ERCP"],
    education: ["DM Gastroenterology - PGI Chandigarh", "MD - Government Medical College"],
    availability: { days: "Tue, Thu, Sat", timings: "10:30 AM – 05:00 PM", slots: ["10:30 AM", "12:00 PM", "02:30 PM", "04:30 PM"] }
  },
  {
    slug: "dr-meera-krishnan",
    name: "Dr. Meera Krishnan",
    specialty: "Neurology",
    qualification: "MBBS, MD, DM (Neurology)",
    experience: "13 years",
    description: "Dr. Meera focuses on neurological disorders with a special interest in stroke management, epilepsy, and headache clinics.",
    expertise: ["Stroke rehabilitation", "Epilepsy management", "Movement disorders", "Electro-physiology"],
    education: ["DM Neurology - NIMHANS", "MD - Christian Medical College, Vellore"],
    availability: { days: "Mon – Fri", timings: "09:30 AM – 03:30 PM", slots: ["09:30 AM", "11:00 AM", "01:00 PM", "03:00 PM"] }
  },
  {
    slug: "dr-sandeep-verma",
    name: "Dr. Sandeep Verma",
    specialty: "General Surgery",
    qualification: "MBBS, MS (General Surgery)",
    experience: "15 years",
    description: "Dr. Sandeep Verma is a versatile general and laparoscopic surgeon known for precise surgical techniques in hernia and gallbladder procedures.",
    expertise: ["Laparoscopic cholecystectomy", "Hernia repair", "Proctology (Piles/Fissure)", "Acute surgical emergencies"],
    education: ["MS General Surgery - Maulana Azad Medical College", "MBBS - University of Delhi"],
    availability: { days: "Mon – Sat", timings: "11:00 AM – 05:30 PM", slots: ["11:00 AM", "12:30 PM", "03:00 PM", "05:00 PM"] }
  },
];

export const healthPackages = [
  {
    name: "Calix Essential Health Check",
    price: "₹1,499",
    for: "Adults 18+ looking for an annual baseline",
    includes: ["Complete blood count", "Blood sugar (fasting)", "Lipid profile", "Urine routine", "Physician consultation"],
  },
  {
    name: "Calix Comprehensive Health Check",
    price: "₹3,999",
    for: "Adults 35+ and family health screening",
    includes: [
      "Essential panel plus HbA1c",
      "Kidney & liver function tests",
      "Thyroid profile",
      "ECG and chest X-ray",
      "Ultrasound abdomen",
      "Physician & diet consultation",
    ],
    featured: true,
  },
  {
    name: "Calix Women's Wellness",
    price: "₹4,499",
    for: "Women 30+ across all life stages",
    includes: [
      "Comprehensive blood panel",
      "Vitamin D & B12",
      "Pap smear",
      "Breast examination & mammogram advisory",
      "Gynecology consultation",
    ],
  },
  {
    name: "Calix Senior Care Check",
    price: "₹5,499",
    for: "Adults 55+ with chronic conditions",
    includes: [
      "Full biochemistry panel",
      "Cardiac evaluation & 2D echo",
      "Bone density screening",
      "Neurology & orthopedic review",
      "Medication review",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "From the emergency room to discharge, every team member explained what was happening. My father's ICU care was outstanding and deeply reassuring.",
    name: "Ramesh Gupta",
    context: "Critical Care",
  },
  {
    quote:
      "My delivery was a high-risk pregnancy and the obstetrics team prepared us for every step. I felt safe throughout, and the birthing suite was spotless.",
    name: "Divya Prakash",
    context: "Obstetrics & Gynecology",
  },
  {
    quote:
      "Knee replacement at 62 sounded frightening. Six weeks later I climbed stairs without pain. The physiotherapy follow-up made all the difference.",
    name: "Lakshmi Narayanan",
    context: "Orthopedics",
  },
  {
    quote:
      "I get my diabetes reviewed here every quarter. Consultation, labs and diet counselling happen in a single visit — no running between centres.",
    name: "Faizal Ahmed",
    context: "Diabetology",
  },
  {
    quote:
      "Diagnostics were quick and the gastroenterologist walked me through my endoscopy report patiently. Genuinely patient-first care.",
    name: "Sneha Kulkarni",
    context: "Gastroenterology",
  },
  {
    quote:
      "One hospital for our whole family — my mother's nephrology reviews, my son's fractures and my annual health check. That convenience is priceless.",
    name: "Ajay Thomas",
    context: "Family Care",
  },
];

export const whyChoose = [
  { title: "Experienced Specialists", body: "Senior consultants across ten core specialties working as one coordinated team." },
  { title: "Advanced Medical Technology", body: "Modern imaging, laboratory and surgical platforms for accurate, timely decisions." },
  { title: "Modern Infrastructure", body: "Thoughtfully designed wards, ICUs, operation theatres and birthing suites." },
  { title: "24×7 Emergency Care", body: "Round-the-clock casualty, ambulance response and intensivist-led critical care." },
  { title: "Comprehensive Diagnostics", body: "In-house radiology and pathology with same-day reporting for most tests." },
  { title: "Personalized Treatment Plans", body: "Care mapped to your history, lifestyle and goals — not a template." },
];

export const facilities = [
  { title: "24×7 Emergency & Trauma", body: "Triage bays, resuscitation room and advanced life support ambulances on standby." },
  { title: "Intensive Care Units", body: "Medical, surgical and high-dependency units with continuous monitoring." },
  { title: "Modular Operation Theatres", body: "Laminar airflow theatres equipped for laparoscopic and endoscopic surgery." },
  { title: "Advanced Diagnostic Imaging", body: "Digital X-ray, ultrasound, colour doppler and CT with rapid reporting." },
  { title: "NABL-Standard Laboratory", body: "Biochemistry, haematology, microbiology and histopathology under one roof." },
  { title: "Dialysis Unit", body: "Dedicated stations with individual monitoring and infection-control protocols." },
  { title: "Endoscopy Suite", body: "Diagnostic and therapeutic upper GI endoscopy and colonoscopy." },
  { title: "Physiotherapy & Rehabilitation", body: "Post-surgical and neuro rehabilitation guided by trained therapists." },
  { title: "Pharmacy & Blood Bank Access", body: "In-house 24-hour pharmacy with rapid blood component availability." },
];

export const patientServices = [
  { title: "Appointment Booking", body: "Book consultations online or over the phone with same-week slots in most specialties." },
  { title: "Insurance & Cashless Claims", body: "A dedicated desk to coordinate approvals with major insurers and TPAs." },
  { title: "Health Records Access", body: "Digital reports and discharge summaries shared securely with you." },
  { title: "International Patients", body: "Assistance with travel, translation, accommodation and treatment estimates." },
  { title: "Ambulance Services", body: "Basic and advanced life support ambulances available 24 hours a day." },
  { title: "Care Coordination", body: "A single point of contact for admissions, second opinions and follow-up." },
];

export const HOSPITAL = {
  name: "Calix Multispeciality Hospital",
  short: "Calix",
  phone: "+91 7670840475",
  emergency: "+91 7670840475",
  email: "care@calixhospital.com",
  address: "Plot No.38, Sai Ram Colony, Pipeline Road, Manikonda, Puppalaguda, Hyderabad, 500089",
  hours: "OPD 8:00 AM – 8:00 PM · Emergency 24×7",
};
