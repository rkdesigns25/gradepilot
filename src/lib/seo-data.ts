// ============================================================================
// GradePilot — Programmatic SEO Data
// Central keyword/content database for 120+ SEO pages
// ============================================================================

export type CalculatorType = "sgpa" | "cgpa" | "attendance" | "percentage"

export interface FAQItem {
  question: string
  answer: string
}

export interface SEOPageData {
  slug: string
  calculatorType: CalculatorType
  title: string
  metaDescription: string
  h1: string
  intro: string
  whatIs: string
  formula: string
  formulaExplanation: string
  example: string
  useCases: string[]
  faqs: FAQItem[]
  relatedSlugs: string[]
  keywords: string[]
}

// ============================================================================
// Helper: shared content blocks (reusable across pages)
// ============================================================================

const SGPA_FORMULA = "SGPA = Σ(Credits × Grade Points) / Σ Credits"
const CGPA_FORMULA = "CGPA = Σ(SGPA × Credits) / Σ Credits"
const ATTENDANCE_FORMULA = "Attendance % = (Classes Attended / Total Classes) × 100"
const PERCENTAGE_FORMULA = "Percentage = (Obtained Marks / Total Marks) × 100"

const SGPA_FORMULA_EXPLANATION = "SGPA is calculated by multiplying each subject's credit hours by its corresponding grade points, summing up all these products, and then dividing by the total number of credits. This weighted average gives more importance to subjects with higher credit hours, ensuring a more accurate representation of your academic performance in a given semester."

const CGPA_FORMULA_EXPLANATION = "CGPA is computed by taking the SGPA of each semester, multiplying it by the total credits of that semester, summing all such products, and dividing by the grand total of credits across all semesters. This provides a cumulative measure of your academic performance throughout your entire program."

const ATTENDANCE_FORMULA_EXPLANATION = "Attendance percentage is simply the ratio of classes attended to total classes held, multiplied by 100. Many universities enforce a minimum attendance threshold (often 75%), below which students may be barred from examinations. The calculator also determines how many additional classes you can skip or must attend to stay on track."

const PERCENTAGE_FORMULA_EXPLANATION = "To convert marks to percentage, divide the marks obtained by the total marks possible and multiply by 100. Conversely, to find marks needed for a target percentage, multiply the target percentage by total marks and divide by 100."

const SGPA_WHAT_IS = "SGPA stands for Semester Grade Point Average. It is a standardized measure of academic performance for a single semester, calculated using a credit-weighted formula. Each subject is assigned a grade based on the marks obtained, and each grade carries specific grade points (on a 10-point scale in most Indian universities). SGPA gives higher importance to subjects with more credits, providing a fair assessment of your semester performance."

const CGPA_WHAT_IS = "CGPA stands for Cumulative Grade Point Average. It represents your overall academic performance across all semesters of your program. While SGPA measures a single semester, CGPA aggregates all semesters using a weighted average of their SGPAs. It is the most commonly referenced metric by employers and higher education institutions when evaluating candidates."

const ATTENDANCE_WHAT_IS = "An attendance calculator helps students track their class attendance against institutional requirements. Most Indian colleges enforce a 75% minimum attendance rule, and many international universities have similar policies. This tool calculates your current attendance percentage, tells you how many more classes you can safely skip while staying above the threshold, and how many consecutive classes you must attend if you've fallen below the required percentage."

const PERCENTAGE_WHAT_IS = "A percentage calculator converts raw examination marks into a percentage score, or determines what marks are needed to achieve a target percentage. This is one of the most fundamental calculations in academics, used for report cards, competitive exam cutoffs, scholarship eligibility, and more."

const SGPA_EXAMPLE = `Let's say you have 4 subjects this semester:

• Mathematics — 4 credits, 85 marks → Grade A+ (9 points)
• Physics — 3 credits, 72 marks → Grade A (8 points)
• Chemistry — 3 credits, 65 marks → Grade B+ (7 points)
• English — 2 credits, 90 marks → Grade O (10 points)

Calculation:
Weighted sum = (4×9) + (3×8) + (3×7) + (2×10) = 36 + 24 + 21 + 20 = 101
Total credits = 4 + 3 + 3 + 2 = 12

SGPA = 101 / 12 = 8.42

Your SGPA for this semester would be 8.42 out of 10.`

const CGPA_EXAMPLE = `Suppose you've completed 4 semesters:

• Semester 1 — SGPA 8.5, 24 credits
• Semester 2 — SGPA 7.8, 22 credits
• Semester 3 — SGPA 8.2, 26 credits
• Semester 4 — SGPA 9.0, 20 credits

Calculation:
Weighted sum = (8.5×24) + (7.8×22) + (8.2×26) + (9.0×20)
= 204 + 171.6 + 213.2 + 180 = 768.8
Total credits = 24 + 22 + 26 + 20 = 92

CGPA = 768.8 / 92 = 8.36

Your CGPA across all 4 semesters would be 8.36.`

const ATTENDANCE_EXAMPLE = `Suppose you have attended 58 out of 75 total classes, and your college requires 75% attendance:

Current Attendance = (58/75) × 100 = 77.33%

Since 77.33% > 75%, you are above the minimum. The calculator shows you can safely skip 2 more classes before dropping below 75%.

If you had attended only 50 out of 75 (66.67%), get you would need to attend 25 more consecutive classes to bring your attendance back up to 75%.`

const PERCENTAGE_EXAMPLE = `Example 1 — Marks to Percentage:
You scored 450 out of 600 total marks.
Percentage = (450/600) × 100 = 75%

Example 2 — Percentage to Marks:
You need 80% in an exam with 500 total marks.
Marks needed = (80/100) × 500 = 400

Example 3 — Additional Marks Needed:
You currently have 320 out of 600 marks and want 75%.
Target marks = (75/100) × 600 = 450
Additional marks needed = 450 - 320 = 130`

// ============================================================================
// Common FAQs per calculator type
// ============================================================================

const SGPA_COMMON_FAQS: FAQItem[] = [
  { question: "What is the difference between SGPA and CGPA?", answer: "SGPA measures your performance for a single semester, while CGPA is the cumulative average across all semesters. SGPA feeds into the CGPA calculation." },
  { question: "How is SGPA converted to percentage?", answer: "Many universities use the formula: Percentage = (SGPA - 0.75) × 10. However, this varies by institution. Check your university's specific conversion formula." },
  { question: "What is the maximum SGPA possible?", answer: "On a 10-point scale, the maximum SGPA is 10.0, achieved when you get an 'O' (Outstanding) grade in every subject." },
  { question: "Does SGPA include failed subjects?", answer: "Yes, failed subjects (F grade = 0 points) are included in the SGPA calculation and will significantly lower your average." },
  { question: "Can I improve my SGPA after a semester ends?", answer: "Some universities allow re-examination or supplementary exams. The improved grade may replace the old one in SGPA calculation, depending on university policy." },
]

const CGPA_COMMON_FAQS: FAQItem[] = [
  { question: "What is a good CGPA?", answer: "Generally, a CGPA of 8.0+ is considered excellent, 7.0-8.0 is very good, 6.0-7.0 is good, and below 6.0 may need improvement. However, requirements vary by employer and program." },
  { question: "How do I convert CGPA to percentage?", answer: "The most common formula is: Percentage = (CGPA - 0.75) × 10. Some universities use CGPA × 9.5. Always check your institution's official conversion formula." },
  { question: "Does CGPA matter for placements?", answer: "Yes, many companies set minimum CGPA cutoffs (typically 6.0-7.0) for campus placements. A higher CGPA opens more opportunities." },
  { question: "Can CGPA decrease over time?", answer: "Yes, if your SGPA in a new semester is lower than your current CGPA, it will pull your cumulative average down." },
  { question: "Is CGPA the same as GPA?", answer: "CGPA and GPA are similar concepts. GPA is more commonly used in the US (on a 4.0 scale), while CGPA is used in India and many other countries (on a 10.0 scale)." },
]

const ATTENDANCE_COMMON_FAQS: FAQItem[] = [
  { question: "What is the 75% attendance rule?", answer: "Most Indian universities and colleges require students to maintain at least 75% attendance in each subject. Falling below this threshold can result in being barred from examinations." },
  { question: "How many classes can I bunk?", answer: "Enter your current attendance numbers in the calculator to find out exactly how many classes you can skip while staying above your target percentage." },
  { question: "What happens if my attendance is below 75%?", answer: "You may be barred from taking semester exams, receive a detention notice, or need to provide a medical certificate to get a waiver. Policies vary by institution." },
  { question: "Does attendance include lab sessions?", answer: "In most colleges, lab/practical sessions have separate attendance tracking. Some count them together while others track them independently." },
  { question: "Can medical leave affect attendance?", answer: "Most institutions accept medical certificates and may exclude those days from the total count, effectively maintaining your attendance percentage." },
]

const PERCENTAGE_COMMON_FAQS: FAQItem[] = [
  { question: "How do I calculate percentage from marks?", answer: "Divide the marks you obtained by the total possible marks, then multiply by 100. Formula: (Obtained Marks / Total Marks) × 100." },
  { question: "How to convert CGPA to percentage?", answer: "The common formula is Percentage = CGPA × 9.5 (for CBSE) or (CGPA - 0.75) × 10 (for many universities). Check your board's specific formula." },
  { question: "What percentage is needed for distinction?", answer: "Typically, 75% or above is considered distinction, 60-75% is first class, 50-60% is second class, and 40-50% is pass class. Thresholds vary by institution." },
  { question: "How to calculate aggregate percentage?", answer: "Add all subject marks, add all total marks, then calculate: (Sum of obtained marks / Sum of total marks) × 100." },
  { question: "Is percentage the same as percentile?", answer: "No. Percentage measures your score relative to total marks. Percentile measures how many test-takers scored below you — it's used in competitive exams like JEE and CAT." },
]

// ============================================================================
// Page data generator helpers
// ============================================================================

function sgpaPage(slug: string, keyword: string, titleSuffix: string, extraIntro: string, extraFaqs: FAQItem[] = [], useCases: string[] = []): SEOPageData {
  return {
    slug,
    calculatorType: "sgpa",
    title: `SGPA Calculator ${titleSuffix} | GradePilot`,
    metaDescription: `Calculate your SGPA instantly with GradePilot's free SGPA calculator ${titleSuffix.toLowerCase()}. Automatic mark-to-grade conversion, live results, and accurate formulas.`,
    h1: `SGPA Calculator ${titleSuffix}`,
    intro: `${extraIntro} Use GradePilot's free online SGPA calculator to compute your Semester Grade Point Average instantly. Enter your subject marks or grades, and get your SGPA with automatic mark-to-grade conversion based on the standard 10-point grading scale.`,
    whatIs: SGPA_WHAT_IS,
    formula: SGPA_FORMULA,
    formulaExplanation: SGPA_FORMULA_EXPLANATION,
    example: SGPA_EXAMPLE,
    useCases: useCases.length > 0 ? useCases : [
      "Calculate your semester GPA after exams",
      "Track academic performance across subjects",
      "Determine the impact of each subject's grade on your overall average",
      "Plan future study efforts to improve your GPA",
      "Compare performance across semesters",
    ],
    faqs: [...SGPA_COMMON_FAQS, ...extraFaqs],
    relatedSlugs: ["cgpa-calculator", "cgpa-calculator-engineering", "attendance-calculator-college", "marks-to-percentage-calculator"],
    keywords: [keyword, "sgpa calculator", "semester gpa", "calculate sgpa"],
  }
}

function cgpaPage(slug: string, keyword: string, titleSuffix: string, extraIntro: string, extraFaqs: FAQItem[] = [], useCases: string[] = []): SEOPageData {
  return {
    slug,
    calculatorType: "cgpa",
    title: `CGPA Calculator ${titleSuffix} | GradePilot`,
    metaDescription: `Calculate your CGPA instantly with GradePilot's free CGPA calculator ${titleSuffix.toLowerCase()}. Enter semester SGPAs and credits for accurate cumulative GPA results.`,
    h1: `CGPA Calculator ${titleSuffix}`,
    intro: `${extraIntro} Use GradePilot's free online CGPA calculator to compute your Cumulative Grade Point Average across all semesters. Enter each semester's SGPA and credit count for an instant, accurate CGPA.`,
    whatIs: CGPA_WHAT_IS,
    formula: CGPA_FORMULA,
    formulaExplanation: CGPA_FORMULA_EXPLANATION,
    example: CGPA_EXAMPLE,
    useCases: useCases.length > 0 ? useCases : [
      "Track your cumulative academic performance across all semesters",
      "Meet minimum CGPA requirements for placements and internships",
      "Calculate the impact of a new semester on your overall CGPA",
      "Plan academic goals for upcoming semesters",
      "Convert CGPA to percentage for applications",
    ],
    faqs: [...CGPA_COMMON_FAQS, ...extraFaqs],
    relatedSlugs: ["sgpa-calculator", "sgpa-calculator-engineering", "percentage-calculator-exam", "cgpa-to-percentage-converter"],
    keywords: [keyword, "cgpa calculator", "cumulative gpa", "calculate cgpa"],
  }
}

function attendancePage(slug: string, keyword: string, titleSuffix: string, extraIntro: string, extraFaqs: FAQItem[] = [], useCases: string[] = []): SEOPageData {
  return {
    slug,
    calculatorType: "attendance",
    title: `Attendance Calculator ${titleSuffix} | GradePilot`,
    metaDescription: `Free attendance calculator ${titleSuffix.toLowerCase()}. Track your attendance percentage, find how many classes you can bunk, and see how many you must attend.`,
    h1: `Attendance Calculator ${titleSuffix}`,
    intro: `${extraIntro} Use GradePilot's free attendance calculator to monitor your class attendance. Find your current percentage, see how many classes you can safely skip, and know how many you need to attend to meet your target.`,
    whatIs: ATTENDANCE_WHAT_IS,
    formula: ATTENDANCE_FORMULA,
    formulaExplanation: ATTENDANCE_FORMULA_EXPLANATION,
    example: ATTENDANCE_EXAMPLE,
    useCases: useCases.length > 0 ? useCases : [
      "Check if you meet the minimum attendance requirement",
      "Plan how many classes you can safely miss",
      "Calculate makeup classes needed if below threshold",
      "Track attendance across multiple subjects",
      "Avoid examination debarment due to shortage",
    ],
    faqs: [...ATTENDANCE_COMMON_FAQS, ...extraFaqs],
    relatedSlugs: ["sgpa-calculator", "cgpa-calculator", "percentage-calculator-marks", "attendance-calculator-75-percent"],
    keywords: [keyword, "attendance calculator", "attendance percentage", "class attendance"],
  }
}

function percentagePage(slug: string, keyword: string, titleSuffix: string, extraIntro: string, extraFaqs: FAQItem[] = [], useCases: string[] = []): SEOPageData {
  return {
    slug,
    calculatorType: "percentage",
    title: `Percentage Calculator ${titleSuffix} | GradePilot`,
    metaDescription: `Free percentage calculator ${titleSuffix.toLowerCase()}. Convert marks to percentage, percentage to marks, and find marks needed for your target percentage.`,
    h1: `Percentage Calculator ${titleSuffix}`,
    intro: `${extraIntro} Use GradePilot's free percentage calculator to convert marks to percentages, find marks from a target percentage, or calculate how many additional marks you need to achieve your goal.`,
    whatIs: PERCENTAGE_WHAT_IS,
    formula: PERCENTAGE_FORMULA,
    formulaExplanation: PERCENTAGE_FORMULA_EXPLANATION,
    example: PERCENTAGE_EXAMPLE,
    useCases: useCases.length > 0 ? useCases : [
      "Convert exam marks to percentage for report cards",
      "Determine marks needed to achieve a target percentage",
      "Calculate aggregate percentage across all subjects",
      "Compare performance in percentage format",
      "Check eligibility for scholarships and competitive exams",
    ],
    faqs: [...PERCENTAGE_COMMON_FAQS, ...extraFaqs],
    relatedSlugs: ["sgpa-calculator", "cgpa-calculator", "cgpa-to-percentage-converter", "marks-to-percentage-calculator"],
    keywords: [keyword, "percentage calculator", "marks to percentage", "exam percentage"],
  }
}

// ============================================================================
// ALL SEO PAGES — 120+ entries
// ============================================================================

export const SEO_PAGES: SEOPageData[] = [
  // ─── SGPA PAGES (~30) ─────────────────────────────────────────────────
  sgpaPage("sgpa-calculator", "sgpa calculator online", "Online Free", "Looking for a quick and reliable SGPA calculator? You've come to the right place."),
  sgpaPage("sgpa-calculator-engineering", "sgpa calculator engineering", "for Engineering Students", "Engineering students need accurate SGPA tracking across multiple technical subjects with varying credit loads. Whether you're in Computer Science, Mechanical, Electrical, or Civil engineering, this calculator handles it all.", [
    { question: "How many credits do engineering subjects usually have?", answer: "Core engineering subjects typically carry 3-4 credits, labs carry 1-2 credits, and project work may carry 4-6 credits depending on the university." },
  ]),
  sgpaPage("sgpa-calculator-india", "sgpa calculator india", "India", "This SGPA calculator uses the standard Indian grading system (10-point scale) followed by most Indian universities including those under UGC, AICTE, and state university guidelines.", [
    { question: "Which Indian universities use the 10-point SGPA system?", answer: "Most universities under UGC Choice Based Credit System (CBCS) use the 10-point scale, including Delhi University, Mumbai University, Anna University, VTU, JNTU, and many more." },
  ]),
  sgpaPage("sgpa-calculator-college", "sgpa calculator for college", "for College Students", "College students across all disciplines can use this calculator. Whether you're pursuing B.Tech, B.Sc, B.Com, BBA, or any other undergraduate program, SGPA calculation follows the same credit-weighted formula."),
  sgpaPage("sgpa-calculator-university", "sgpa calculator university", "for University Students", "University students worldwide use SGPA to track academic progress. This calculator supports the standard credit-based system used by most universities globally."),
  sgpaPage("how-to-calculate-sgpa", "how to calculate sgpa", "— How to Calculate SGPA Step by Step", "Learning how to calculate SGPA is essential for every student. This guide walks you through the complete process with a worked example and explains each step in detail.", [
    { question: "Is SGPA calculation the same in all universities?", answer: "The core formula (credit-weighted average of grade points) is the same, but the grading scale and mark-to-grade mapping may differ. Check your university's specific grading table." },
  ]),
  sgpaPage("sgpa-calculator-online-free", "sgpa calculator online free", "— Free Online Tool", "Calculate your SGPA for free with no sign-up, no ads, and no data collection. GradePilot's calculator runs entirely in your browser for complete privacy."),
  sgpaPage("sgpa-calculator-vtu", "sgpa calculator vtu", "for VTU Students", "Visvesvaraya Technological University (VTU) students can use this SGPA calculator with the standard 10-point grading scale. VTU follows the CBCS system across its affiliated engineering colleges in Karnataka.", [
    { question: "What grading system does VTU use?", answer: "VTU uses a 10-point CBCS grading system: O=10, A+=9, A=8, B+=7, B=6, C=5, P=4, F=0. This calculator supports this exact scale." },
  ]),
  sgpaPage("sgpa-calculator-mumbai-university", "sgpa calculator mumbai university", "for Mumbai University", "Mumbai University students following the Choice Based Credit System (CBCS) can calculate their SGPA instantly using this tool. Compatible with all MU faculties and programs."),
  sgpaPage("sgpa-calculator-anna-university", "sgpa calculator anna university", "for Anna University", "Anna University students across Tamil Nadu can calculate their SGPA using the standard grading system. Works for all affiliated engineering colleges."),
  sgpaPage("sgpa-calculator-btech", "sgpa calculator btech", "for B.Tech Students", "B.Tech students deal with complex credit structures across theory, lab, and project subjects. This SGPA calculator handles all credit types accurately."),
  sgpaPage("sgpa-calculator-mba", "sgpa calculator mba", "for MBA Students", "MBA programs use credit-based grading with subjects like Marketing, Finance, Operations, and HR. Calculate your SGPA across all management subjects."),
  sgpaPage("sgpa-calculator-bsc", "sgpa calculator bsc", "for B.Sc Students", "B.Sc students in Physics, Chemistry, Mathematics, Biology, and other sciences can calculate their SGPA using the standard academic grading system."),
  sgpaPage("sgpa-calculator-bcom", "sgpa calculator bcom", "for B.Com Students", "B.Com students studying Accounting, Business, Economics, and Finance can calculate semester grades accurately with this SGPA tool."),
  sgpaPage("sgpa-calculator-usa", "sgpa calculator usa", "USA", "While the US commonly uses a 4.0 GPA scale, many universities are adopting credit-weighted systems similar to SGPA. This calculator works with any point-based grading scale."),
  sgpaPage("sgpa-calculator-uk", "sgpa calculator uk", "UK", "UK university students can use this weighted grade calculator. While the UK primarily uses classification systems, many universities now offer GPA equivalents."),
  sgpaPage("sgpa-to-cgpa-converter", "sgpa to cgpa", "— SGPA to CGPA Converter", "Convert individual semester SGPAs into a cumulative CGPA. Simply enter each semester's SGPA along with its credit count, and the calculator computes your overall CGPA."),
  sgpaPage("sgpa-calculator-with-grade-points", "sgpa calculator with grade points", "with Grade Points", "This calculator lets you directly input grade points if you already know your grades. Switch between marks-based and grade-based input modes for maximum flexibility."),
  sgpaPage("sgpa-calculator-10-point-scale", "sgpa calculator 10 point scale", "— 10 Point Grading Scale", "Calculate SGPA on the standard 10-point scale used by most Indian universities. Grade mapping: O=10, A+=9, A=8, B+=7, B=6, C=5, P=4, F=0."),
  sgpaPage("sgpa-calculator-cbcs", "sgpa calculator cbcs", "for CBCS System", "The Choice Based Credit System (CBCS) is followed by universities across India under UGC guidelines. This SGPA calculator is fully compatible with CBCS grading."),
  sgpaPage("sgpa-calculator-jntu", "sgpa calculator jntu", "for JNTU Students", "JNTU (Jawaharlal Nehru Technological University) students can calculate their SGPA using this tool. Compatible with JNTU Hyderabad, Kakinada, and Anantapur grading."),
  sgpaPage("sgpa-calculator-sppu", "sgpa calculator sppu", "for SPPU Students", "Savitribai Phule Pune University (SPPU) students can use this calculator for accurate SGPA computation following the university's credit-based grading system."),
  sgpaPage("sgpa-calculator-semester-1", "sgpa calculator semester 1", "for Semester 1", "First semester students, welcome! Calculate your very first SGPA and start tracking your academic journey from day one."),
  sgpaPage("sgpa-calculator-pharmacy", "sgpa calculator pharmacy", "for Pharmacy Students", "B.Pharm and M.Pharm students can calculate SGPA across pharmaceutical sciences subjects with varying credit structures."),
  sgpaPage("sgpa-calculator-diploma", "sgpa calculator diploma", "for Diploma Students", "Diploma and polytechnic students can calculate their SGPA using this tool. Works with standard diploma grading systems."),

  // ─── CGPA PAGES (~25) ─────────────────────────────────────────────────
  cgpaPage("cgpa-calculator", "cgpa calculator online", "Online Free", "Calculate your cumulative GPA across all semesters with this free, instant CGPA calculator."),
  cgpaPage("cgpa-calculator-engineering", "cgpa calculator engineering", "for Engineering Students", "Engineering programs span 8 semesters with varying credit loads. Track your cumulative performance across all years with this CGPA calculator.", [
    { question: "What CGPA is needed for engineering placements?", answer: "Most top companies require a minimum CGPA of 7.0-7.5. Product companies often set cutoffs at 8.0+. However, skills and projects also play a major role." },
  ]),
  cgpaPage("cgpa-calculator-india", "cgpa calculator india", "India", "This CGPA calculator follows the Indian university grading standards (10-point scale) as prescribed by UGC for the Choice Based Credit System."),
  cgpaPage("cgpa-calculator-college", "cgpa calculator for college", "for College Students", "Whether you're in a 3-year degree or 4-year professional program, track your cumulative academic performance with this CGPA calculator."),
  cgpaPage("cgpa-calculator-university", "cgpa calculator university", "for University", "University students can compute CGPA across any number of semesters. Works with all credit-based grading systems worldwide."),
  cgpaPage("cgpa-calculator-usa", "cgpa calculator usa", "USA", "Calculate your cumulative GPA for American universities. While the US uses a 4.0 scale, the weighted credit formula works the same way."),
  cgpaPage("cgpa-calculator-uk", "cgpa calculator uk", "UK", "UK students can calculate cumulative grade averages. Many UK universities are now providing GPA equivalents alongside traditional classifications."),
  cgpaPage("cgpa-calculator-australia", "cgpa calculator australia", "Australia", "Australian university students can use this cumulative GPA calculator. Australian universities typically use a 7.0 scale, but the formula principle is identical."),
  cgpaPage("cgpa-to-percentage-converter", "cgpa to percentage", "— CGPA to Percentage Converter", "Convert your CGPA to percentage using standard conversion formulas. Common formulas include CGPA × 9.5 (CBSE) and (CGPA - 0.75) × 10 (many universities).", [
    { question: "Which CGPA to percentage formula should I use?", answer: "Use CGPA × 9.5 for CBSE students. For universities under UGC CBCS, use (CGPA - 0.75) × 10. Always check your institution's official formula." },
  ]),
  cgpaPage("cgpa-calculator-btech", "cgpa calculator btech", "for B.Tech", "B.Tech students can track their cumulative performance across all 8 semesters including theory, labs, internships, and project work."),
  cgpaPage("how-to-calculate-cgpa", "how to calculate cgpa", "— How to Calculate CGPA", "Learn how to calculate your CGPA step by step. This comprehensive guide includes the formula, worked examples, and tips for improving your cumulative GPA."),
  cgpaPage("cgpa-calculator-mba", "cgpa calculator for mba", "for MBA Students", "MBA students can track their cumulative performance across all semesters of their management program."),
  cgpaPage("cgpa-calculator-10-point-scale", "cgpa calculator 10 point scale", "— 10 Point Scale", "Calculate CGPA on the standard 10-point grading scale. Compatible with most Indian university systems."),
  cgpaPage("cgpa-calculator-cbcs", "cgpa calculator cbcs", "for CBCS System", "CBCS (Choice Based Credit System) students across India can compute their CGPA using the standard weighted formula."),
  cgpaPage("gpa-calculator-university", "gpa calculator university", "— University GPA Calculator", "A universal GPA calculator for university students worldwide. Works with any credit-based grading system regardless of the point scale."),
  cgpaPage("cgpa-calculator-vtu", "cgpa calculator vtu", "for VTU Students", "VTU students can calculate their cumulative GPA across all semesters using the standard 10-point CBCS grading system."),
  cgpaPage("cgpa-calculator-semester-wise", "cgpa calculator semester wise", "Semester Wise", "Calculate your CGPA by entering each semester's SGPA and credits individually. See how each semester affects your overall cumulative average."),
  cgpaPage("grade-calculator-online", "grade calculator online", "— Online Grade Calculator", "Free online grade calculator for students. Calculate SGPA, CGPA, and grade point averages with an easy-to-use interface."),
  cgpaPage("academic-calculator-students", "academic calculator for students", "— Academic Calculator for Students", "GradePilot is the all-in-one academic calculator for students. Calculate SGPA, CGPA, attendance, and percentage in one place."),

  // ─── ATTENDANCE PAGES (~25) ───────────────────────────────────────────
  attendancePage("attendance-calculator-college", "attendance calculator college", "for College Students", "College students need to maintain minimum attendance to sit for exams. This calculator helps you stay on track throughout the semester."),
  attendancePage("attendance-calculator-75-percent", "attendance calculator 75 percent", "— 75 Percent Rule", "Most Indian colleges enforce the 75% attendance rule. This calculator shows you exactly how many classes you can miss while staying above the 75% threshold.", [
    { question: "Why is 75% the standard attendance requirement?", answer: "The 75% minimum was established by UGC as a guideline to ensure students attend enough classes for quality learning. Most Indian universities have adopted this standard." },
    { question: "What if I have exactly 75% attendance?", answer: "You're on the edge. One more absence will drop you below the requirement. The calculator will show 0 classes available to bunk." },
  ]),
  attendancePage("how-many-classes-can-i-bunk", "how many classes can i bunk", "— How Many Classes Can I Bunk?", "The most common question every student asks! Enter your attendance numbers and find out exactly how many classes you can safely skip.", [
    { question: "How is the 'bunk allowance' calculated?", answer: "If you need X% attendance: Maximum absences = (Current attended × 100/X) - Total classes. The calculator does this math for you instantly." },
  ]),
  attendancePage("college-attendance-calculator", "college attendance calculator", "for College", "Track your college attendance and know your standing before the end of semester. Works for any attendance percentage requirement."),
  attendancePage("attendance-calculator-online", "attendance calculator online", "Online Free", "Free online attendance calculator. No login required, no data stored. Calculate your attendance percentage instantly."),
  attendancePage("attendance-calculator-engineering", "attendance calculator engineering", "for Engineering Students", "Engineering students have theory classes, labs, and tutorials — all with separate attendance tracking. Use this calculator for each."),
  attendancePage("attendance-calculator-india", "attendance calculator india", "India", "Indian college students can use this attendance calculator designed for the standard 75% minimum attendance rule followed across UGC-affiliated institutions."),
  attendancePage("attendance-tracker-students", "attendance tracker for students", "— Student Attendance Tracker", "Track and plan your class attendance throughout the semester. Know exactly where you stand and plan your absences strategically."),
  attendancePage("attendance-calculator-medical", "attendance calculator medical", "for Medical Students", "Medical and nursing students often face strict attendance requirements (sometimes 80%+). This calculator handles any target percentage."),
  attendancePage("attendance-calculator-law", "attendance calculator law", "for Law Students", "Law students can track attendance across lecture hours. Many law universities require 70-75% minimum attendance."),
  attendancePage("attendance-calculator-school", "attendance calculator school", "for School Students", "School students and parents can track daily attendance. Works for any attendance requirement set by the school."),
  attendancePage("attendance-calculator-usa", "attendance calculator usa", "USA", "American students can use this attendance tracker. US schools and colleges have varying attendance policies — enter your specific requirement."),
  attendancePage("attendance-percentage-calculator", "attendance percentage calculator", "— Calculate Percentage", "Calculate your attendance percentage from the number of classes attended and total classes. Get instant results with visual progress."),
  attendancePage("classes-needed-to-attend", "classes needed to attend", "— Classes Needed to Reach Target", "Find out how many consecutive classes you must attend to bring your attendance back above the minimum requirement."),
  attendancePage("attendance-calculator-80-percent", "attendance calculator 80 percent", "— 80 Percent Rule", "Some institutions require 80% attendance. This calculator works with any target percentage, including the stricter 80% threshold."),
  attendancePage("bunk-calculator", "bunk calculator", "— Bunk Calculator for Students", "The smart bunk calculator tells you exactly how many classes you can safely skip. Plan your absences without stressing about attendance."),
  attendancePage("attendance-calculator-semester", "attendance calculator semester", "for Semester", "Track your attendance for the current semester. Set your target and monitor progress throughout the academic term."),
  attendancePage("minimum-attendance-calculator", "minimum attendance calculator", "— Minimum Attendance Required", "Find the minimum number of classes you need to attend to meet your college's attendance requirement."),

  // ─── PERCENTAGE PAGES (~25) ───────────────────────────────────────────
  percentagePage("percentage-calculator-marks", "percentage calculator marks", "— Marks to Percentage", "Convert your exam marks to percentage instantly. Enter obtained marks and total marks to get your percentage."),
  percentagePage("marks-to-percentage-calculator", "marks to percentage calculator", "— Marks to Percentage Converter", "A simple and fast marks-to-percentage converter for students. Works for any exam, quiz, or assignment."),
  percentagePage("percentage-calculator-exam", "percentage calculator exam", "for Exams", "Calculate your exam percentage instantly. Whether it's a unit test, mid-term, or final exam, get accurate percentage results."),
  percentagePage("percentage-to-marks-calculator", "percentage to marks calculator", "— Percentage to Marks", "Convert a target percentage to actual marks. Find out exactly how many marks you need to score for your desired percentage."),
  percentagePage("marks-percentage-converter", "marks percentage converter", "— Marks Percentage Converter", "A two-way converter: marks to percentage and percentage to marks. The essential calculation tool for every student."),
  percentagePage("percentage-calculator-india", "percentage calculator india", "India", "Indian students can calculate percentage from marks following the standard formula used across CBSE, ICSE, and state board examinations."),
  percentagePage("percentage-calculator-online-free", "percentage calculator online free", "— Free Online Tool", "Free online percentage calculator with no sign-up required. Calculate marks to percentage instantly in your browser."),
  percentagePage("aggregate-percentage-calculator", "aggregate percentage calculator", "— Aggregate Percentage", "Calculate your aggregate percentage across all subjects. Add up all subject marks and total marks for the overall percentage."),
  percentagePage("percentage-calculator-board-exam", "percentage calculator board exam", "for Board Exams", "Board exam students (CBSE, ICSE, state boards) can calculate their percentage across all subjects instantly."),
  percentagePage("percentage-calculator-competitive-exam", "percentage calculator competitive exam", "for Competitive Exams", "Calculate percentage for competitive exams like JEE, NEET, CAT, GATE, and more. Find your score percentage to check cutoff eligibility."),
  percentagePage("cgpa-to-percentage-calculator", "cgpa to percentage calculator", "— CGPA to Percentage", "Convert your CGPA to percentage using standard formulas. Supports CBSE (×9.5) and university (CGPA-0.75)×10 conversion methods."),
  percentagePage("marks-needed-calculator", "marks needed calculator", "— Marks Needed for Target %", "Find out how many additional marks you need to achieve your target percentage. Plan your study strategy accordingly."),
  percentagePage("percentage-calculator-usa", "percentage calculator usa", "USA", "American students can calculate grade percentages for any course or exam. Works with any grading scale."),
  percentagePage("percentage-calculator-scholarship", "percentage calculator scholarship", "for Scholarships", "Check if you meet scholarship percentage requirements. Calculate your overall percentage to verify eligibility."),
  percentagePage("percentage-calculator-class-10", "percentage calculator class 10", "for Class 10", "Class 10 board exam students can calculate their percentage across all subjects instantly. Works for CBSE, ICSE, and state boards."),
  percentagePage("percentage-calculator-class-12", "percentage calculator class 12", "for Class 12", "Class 12 board exam students can calculate their overall percentage. Important for college admissions and scholarship applications."),
  percentagePage("percentage-calculator-semester", "percentage calculator semester", "Semester-wise", "Calculate your percentage for individual semesters or across all semesters. Track academic progress term by term."),
  percentagePage("overall-percentage-calculator", "overall percentage calculator", "— Overall Percentage", "Calculate your overall percentage across all subjects, semesters, or academic years in one place."),
  percentagePage("target-percentage-calculator", "target percentage calculator", "— Target Percentage Planner", "Plan ahead: enter your target percentage and see exactly how many marks you need to achieve it."),
  percentagePage("grade-to-percentage-converter", "grade to percentage converter", "— Grade to Percentage", "Convert letter grades or grade points to percentage. Useful for applications that require percentage instead of grades."),

  // ─── CROSS-CATEGORY / GENERAL PAGES (~10) ─────────────────────────────
  sgpaPage("sgpa-cgpa-difference", "sgpa vs cgpa difference", "— SGPA vs CGPA: What's the Difference?", "Confused between SGPA and CGPA? This page explains the key differences, how they're calculated, and when each metric is used.", [
    { question: "Should I focus on SGPA or CGPA?", answer: "Both matter. SGPA shows your current semester performance and helps identify trends. CGPA is the cumulative metric that employers and grad schools look at. Focus on maximizing both." },
    { question: "Can a high SGPA in one semester fix a low CGPA?", answer: "Yes, but the impact depends on credit distribution. A high SGPA in a semester with more credits will have a larger positive impact on your CGPA." },
  ]),
  cgpaPage("gpa-calculator-india", "gpa calculator india", "— GPA Calculator India", "India's most popular GPA calculator. Calculate both SGPA and CGPA using the standard 10-point grading system followed by Indian universities."),
  sgpaPage("grade-point-calculator", "grade point calculator", "— Grade Point Calculator", "Calculate grade points from your marks instantly. Automatic conversion using the standard grading table: O=10, A+=9, A=8, B+=7, B=6, C=5, P=4, F=0."),
  percentagePage("academic-performance-calculator", "academic performance calculator", "— Academic Performance Calculator", "A comprehensive academic performance calculator that covers percentage, SGPA, CGPA, and more. Everything you need in one tool."),
]

// ============================================================================
// Lookup helpers
// ============================================================================

/** Get all page data entries */
export function getAllSEOPages(): SEOPageData[] {
  return SEO_PAGES
}

/** Get a single page by its slug */
export function getSEOPageBySlug(slug: string): SEOPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug)
}

/** Get all slugs for static generation */
export function getAllSEOSlugs(): string[] {
  return SEO_PAGES.map((p) => p.slug)
}

/** Get pages by calculator type */
export function getSEOPagesByType(type: CalculatorType): SEOPageData[] {
  return SEO_PAGES.filter((p) => p.calculatorType === type)
}

/** Get related pages for a given page */
export function getRelatedPages(page: SEOPageData): SEOPageData[] {
  return page.relatedSlugs
    .map((slug) => getSEOPageBySlug(slug))
    .filter((p): p is SEOPageData => p !== undefined)
}

/** Map calculator type to the main app route */
export function getCalculatorRoute(type: CalculatorType): string {
  const routes: Record<CalculatorType, string> = {
    sgpa: "/sgpa",
    cgpa: "/cgpa",
    attendance: "/attendance",
    percentage: "/percentage",
  }
  return routes[type]
}

/** Map calculator type to a readable name */
export function getCalculatorName(type: CalculatorType): string {
  const names: Record<CalculatorType, string> = {
    sgpa: "SGPA",
    cgpa: "CGPA",
    attendance: "Attendance",
    percentage: "Percentage",
  }
  return names[type]
}
