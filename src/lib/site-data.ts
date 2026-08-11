export type Specialty = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
};

export const specialties: Specialty[] = [
  {
    slug: "general-medicine",
    name: "General Medicine",
    tagline: "Everyday care, expertly handled",
    description:
      "Diagnosis and management of fevers, infections, hypertension, thyroid disorders and complex multi-system illnesses for adults of all ages.",
    highlights: ["Preventive health checks", "Infectious disease care", "Chronic illness management"],
  },
  {
    slug: "diabetology",
    name: "Diabetology",
    tagline: "Living well with diabetes",
    description:
      "Structured diabetes care combining medical treatment, nutrition counselling, foot care and continuous glucose monitoring.",
    highlights: ["Insulin optimisation", "Diabetic foot clinic", "Diet & lifestyle planning"],
  },
  {
    slug: "nephrology",
    name: "Nephrology",
    tagline: "Complete kidney health support",
    description:
      "Evaluation and treatment of kidney disorders, hypertension-related kidney disease and dialysis support by experienced nephrologists.",
    highlights: ["CKD management", "Dialysis services", "Electrolyte disorders"],
  },
  {
    slug: "critical-care",
    name: "Critical Care",
    tagline: "Intensive care, round the clock",
    description:
      "Multi-disciplinary intensive care units with advanced ventilators, invasive monitoring and 24×7 intensivist cover.",
    highlights: ["Medical & surgical ICU", "Ventilator support", "Sepsis care protocols"],
  },
  {
    slug: "urology",
    name: "Urology",
    tagline: "Advanced urological surgery",
    description:
      "Minimally invasive treatment for stones, prostate conditions and urinary tract disorders in men and women.",
    highlights: ["Laser stone treatment", "Prostate care", "Endourology"],
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    tagline: "Move freely again",
    description:
      "Joint replacement, sports injury care, spine consultation and trauma management supported by structured physiotherapy.",
    highlights: ["Knee & hip replacement", "Arthroscopy", "Fracture & trauma care"],
  },
  {
    slug: "obstetrics-gynecology",
    name: "Obstetrics & Gynecology",
    tagline: "Care for every stage of womanhood",
    description:
      "Comprehensive maternity care, high-risk pregnancy management, gynaec surgery and adolescent to menopause wellness.",
    highlights: ["Birthing suites", "High-risk pregnancy", "Laparoscopic gynaec surgery"],
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    tagline: "Digestive and liver expertise",
    description:
      "Endoscopic diagnosis and treatment for acidity, IBD, liver disease, pancreatitis and gastrointestinal bleeding.",
    highlights: ["Diagnostic endoscopy", "Colonoscopy", "Liver clinic"],
  },
  {
    slug: "neurology",
    name: "Neurology",
    tagline: "Brain, nerve and spine care",
    description:
      "Evaluation and management of stroke, epilepsy, headache, movement disorders and neuromuscular conditions.",
    highlights: ["Stroke pathway", "Epilepsy clinic", "Headache & migraine care"],
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    tagline: "Precise, minimally invasive surgery",
    description:
      "Laparoscopic and open surgery for hernia, gallbladder, appendix, thyroid, breast and proctology conditions.",
    highlights: ["Laparoscopic surgery", "Daycare procedures", "Proctology care"],
  },
];

export const doctors = [
  { name: "Dr. Arvind Menon", specialty: "General Medicine", qualification: "MBBS, MD (General Medicine)", experience: "18 years" },
  { name: "Dr. Kavitha Raghavan", specialty: "Diabetology", qualification: "MBBS, MD, Fellowship in Diabetology", experience: "15 years" },
  { name: "Dr. Suresh Iyer", specialty: "Nephrology", qualification: "MBBS, MD, DM (Nephrology)", experience: "20 years" },
  { name: "Dr. Nikhil Sharma", specialty: "Critical Care", qualification: "MBBS, MD, IDCCM", experience: "12 years" },
  { name: "Dr. Rahul Deshpande", specialty: "Urology", qualification: "MBBS, MS, MCh (Urology)", experience: "16 years" },
  { name: "Dr. Praveen Kumar", specialty: "Orthopedics", qualification: "MBBS, MS (Ortho), Fellowship in Arthroplasty", experience: "17 years" },
  { name: "Dr. Anitha Raj", specialty: "Obstetrics & Gynecology", qualification: "MBBS, MS (OBG)", experience: "19 years" },
  { name: "Dr. Vivek Nair", specialty: "Gastroenterology", qualification: "MBBS, MD, DM (Gastroenterology)", experience: "14 years" },
  { name: "Dr. Meera Krishnan", specialty: "Neurology", qualification: "MBBS, MD, DM (Neurology)", experience: "13 years" },
  { name: "Dr. Sandeep Verma", specialty: "General Surgery", qualification: "MBBS, MS (General Surgery)", experience: "15 years" },
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
  phone: "+91 98765 43210",
  emergency: "+91 98765 43200",
  email: "care@calixhospital.com",
  address: "12 Grand Southern Trunk Road, Guduvancheri, Chennai 603202",
  hours: "OPD 8:00 AM – 8:00 PM · Emergency 24×7",
};
