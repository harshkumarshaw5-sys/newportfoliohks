export type ProjectCategory = 'bi-excel' | 'sql-bigquery';

export interface ProjectItem {
  id: string;
  indexLabel: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  tools: string[];
  summary: string;
  bullets: string[];
  methodologyLabel: string;
  codeSnippetTitle: string;
  codeSnippet: string;
  keyMetrics: { label: string; value: string }[];
  featured?: boolean;
}

export interface SkillDetail {
  name: string;
  group: 'Spreadsheets & Reporting' | 'BI & Data Engineering' | 'Query & Scripting';
  summary: string;
  appliedIn: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  year: string;
  focus: string;
}

export const PROFILE = {
  name: 'Harsh Kumar Shaw',
  role: 'Data Analyst & MIS Executive',
  location: 'Kolkata, West Bengal',
  phone: '+918584913024',
  email: 'harshkumarshaw5@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/harsh-kumar-shaw-4b8972356',
  linkedinDisplay: 'linkedin.com/in/harsh-kumar-shaw-4b8972356',
  cvPdfPath: '/assets/aistudio/Harsh_Kumar_Shaw_CV_dc10034d.pdf',
  objective:
    'MIS Executive with hands-on experience in data reporting. Skilled in transforming raw data into actionable insights to support business decision-making.',
};

export const HERO_METRICS = [
  {
    value: 'Nov 2025',
    label: 'MIS Executive · Linc Limited',
    detail: 'Daily & monthly executive reporting',
  },
  {
    value: '10,000',
    label: 'Customer Records Queried',
    detail: 'European bank churn SQL study',
  },
  {
    value: '4',
    label: 'Analytics Case Studies',
    detail: 'Power BI, BigQuery, MySQL & Excel',
  },
  {
    value: '7.085',
    label: 'B.Sc (Hons) Physics CGPA',
    detail: 'University of Calcutta · 2024',
  },
];

export const EXPERIENCE = {
  role: 'MIS Executive',
  company: 'Linc Limited',
  location: 'Kolkata',
  period: 'Nov 2025 – Present',
  lead: 'Owning the daily and monthly reporting cadence so leadership sees verified, decision-ready numbers instead of raw operational noise.',
  highlights: [
    'Generate daily and monthly MIS reports using Advanced Excel (Pivot Tables, Lookup functions).',
    'Maintain data accuracy and perform systematic data cleaning and validation across reporting pipelines.',
  ],
};

export const STRENGTHS = [
  {
    number: '01',
    title: 'Analytical Mindset',
    description: 'Analyze data to draw clear, evidence-backed conclusions rather than surface-level summaries.',
  },
  {
    number: '02',
    title: 'Quick Learner',
    description: 'Absorbs new analytical tools, business schemas, and reporting workflows fast, adapting quickly.',
  },
  {
    number: '03',
    title: 'Time Management',
    description: 'Prioritize reporting cycles, meet daily and monthly deadlines, and keep multi-source datasets organized.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'power-bi-hr-analytics',
    indexLabel: '01',
    title: 'Power BI & HR Analytics',
    subtitle: 'Workforce attrition intelligence and department-level root-cause dashboard',
    category: 'bi-excel',
    categoryLabel: 'Power BI & DAX',
    tools: ['Power BI', 'DAX', 'Data Modelling', 'Power Query'],
    summary:
      'Designed and deployed an interactive HR Analytics Dashboard that turns workforce records into clear retention priorities for stakeholders.',
    bullets: [
      'Designed and deployed a Power BI HR Analytics Dashboard to monitor key workforce metrics (e.g., attrition rate, headcount distribution).',
      'Conducted root-cause analysis on employee turnover using DAX to identify major drivers of attrition across departments.',
      'Delivered insights to stakeholders, enabling data-driven decisions focused on improving retention and optimizing resource allocation.',
    ],
    methodologyLabel: 'Workforce Retention Architecture',
    codeSnippetTitle: 'DAX Attrition Measure Pattern',
    codeSnippet: `Attrition Rate % =
DIVIDE(
  CALCULATE(COUNTROWS(HR_Employees), HR_Employees[Attrition] = "Yes"),
  COUNTROWS(HR_Employees),
  0
)`,
    keyMetrics: [
      { label: 'Core Focus', value: 'Attrition Drivers' },
      { label: 'Engine', value: 'DAX + Star Schema' },
      { label: 'Audience', value: 'HR & Stakeholders' },
    ],
    featured: true,
  },
  {
    id: 'customer-churn-analysis',
    indexLabel: '02',
    title: 'Customer Churn Analysis',
    subtitle: '10,000-record European banking cohort investigation in SQL',
    category: 'sql-bigquery',
    categoryLabel: 'SQL Analytics',
    tools: ['MySQL', 'SQL', 'Cohort Segmentation'],
    summary:
      'A structured SQL case study dissecting behavioral, demographic, and account signals across 10,000 European bank customers.',
    bullets: [
      'Conducted a comprehensive case study on customer churn analysis for a European bank.',
      'Utilized SQL to analyze a large dataset of 10,000 customer records.',
      'Provided actionable insights aimed at enhancing customer engagement and loyalty.',
    ],
    methodologyLabel: 'Relational Cohort Querying',
    codeSnippetTitle: 'SQL Churn Segmentation Query',
    codeSnippet: `SELECT Geography,
       COUNT(*) AS total_customers,
       SUM(Exited) AS churned_customers,
       ROUND(AVG(Exited) * 100, 2) AS churn_rate_pct
FROM bank_customers
GROUP BY Geography
ORDER BY churn_rate_pct DESC;`,
    keyMetrics: [
      { label: 'Dataset Size', value: '10,000 Records' },
      { label: 'Domain', value: 'European Banking' },
      { label: 'Objective', value: 'Engagement & Loyalty' },
    ],
  },
  {
    id: 'ipl-2018-2019-analysis',
    indexLabel: '03',
    title: 'IPL 2018 & 2019 Analysis',
    subtitle: 'Quantifying batting firepower and bowling control in Google BigQuery',
    category: 'sql-bigquery',
    categoryLabel: 'Google BigQuery',
    tools: ['Google BigQuery', 'Complex SQL', 'Statistical Ranking'],
    summary:
      'Evaluated two full IPL seasons inside Google BigQuery to isolate the most valuable players and measure team firepower versus control.',
    bullets: [
      'Utilized Google BigQuery to analyze IPL performance (2018–2019) and extract actionable insights.',
      'Identified top batters and bowlers across two seasons, statistically defining the most valuable players.',
      'Executed complex SQL queries in Google BigQuery to quantify team "firepower" and "control" for data-driven actionable insights.',
    ],
    methodologyLabel: 'Cloud Warehouse Aggregation',
    codeSnippetTitle: 'BigQuery Firepower & Control Logic',
    codeSnippet: `SELECT batting_team,
       ROUND(SUM(total_runs) / COUNT(DISTINCT match_id), 2) AS firepower_index,
       ROUND(SAFE_DIVIDE(COUNTIF(total_runs = 0), COUNT(*)) * 100, 2) AS dot_control_pct
FROM \`ipl_analytics.deliveries_2018_2019\`
GROUP BY batting_team
ORDER BY firepower_index DESC;`,
    keyMetrics: [
      { label: 'Seasons', value: '2018 – 2019' },
      { label: 'Warehouse', value: 'Google BigQuery' },
      { label: 'Indices', value: 'Firepower & Control' },
    ],
  },
  {
    id: 'data-cleaning-premier-league',
    indexLabel: '04',
    title: 'Data Cleaning Project',
    subtitle: 'Premier League club arrest records normalized & validated in MS Excel',
    category: 'bi-excel',
    categoryLabel: 'Excel & Validation',
    tools: ['Advance Excel', 'Data Cleaning', 'Data Validation', 'Standardization'],
    summary:
      'Transformed raw, inconsistent Premier League club arrest records into a clean, auditable dataset with verified offence categories.',
    bullets: [
      'Details arrests by Premier League club across multiple reporting periods.',
      'The data has been thoroughly cleaned in MS Excel to ensure the accuracy of all arrests and offence categories.',
    ],
    methodologyLabel: 'Spreadsheet Hygiene & Audit',
    codeSnippetTitle: 'Excel Standardization Pipeline',
    codeSnippet: `1. TRIM / CLEAN whitespace & hidden characters across club names
2. Standardize offence category taxonomy & remove duplicate entries
3. Enforce Data Validation rules & cross-check totals via Pivot Tables`,
    keyMetrics: [
      { label: 'Dataset', value: 'Premier League Clubs' },
      { label: 'Tooling', value: 'MS Excel' },
      { label: 'Guarantee', value: 'Verified Categories' },
    ],
  },
];

export const SKILLS: SkillDetail[] = [
  {
    name: 'Advance Excel',
    group: 'Spreadsheets & Reporting',
    summary: 'Lookup formulas, conditional logic, data validation, and automated daily/monthly executive reporting workbooks.',
    appliedIn: ['Linc Limited MIS Reporting', 'Premier League Data Cleaning Project'],
  },
  {
    name: 'Pivot Table',
    group: 'Spreadsheets & Reporting',
    summary: 'Multi-dimensional cross-tabulation and rapid reconciliation of operational tables for management summaries.',
    appliedIn: ['Linc Limited Daily & Monthly MIS', 'Data Cleaning Audit Checks'],
  },
  {
    name: 'Power BI',
    group: 'BI & Data Engineering',
    summary: 'Interactive executive dashboards, DAX root-cause measures, and visual storytelling for business stakeholders.',
    appliedIn: ['Power BI & HR Analytics Dashboard'],
  },
  {
    name: 'Data Modelling',
    group: 'BI & Data Engineering',
    summary: 'Structuring fact and dimension relationships cleanly so calculations stay fast, consistent, and unambiguous.',
    appliedIn: ['Power BI HR Workforce Model', 'Relational Bank Churn Schema'],
  },
  {
    name: 'Power Query',
    group: 'BI & Data Engineering',
    summary: 'Repeatable M-based ingestion, column normalization, and automated pre-load data shaping.',
    appliedIn: ['HR Analytics Prep Pipeline', 'Recurring MIS Consolidation'],
  },
  {
    name: 'MySQL',
    group: 'Query & Scripting',
    summary: 'Relational querying, aggregations, joins, and cohort segmentation across thousands of customer records.',
    appliedIn: ['European Bank Customer Churn Analysis', 'IPL BigQuery SQL Analytics'],
  },
  {
    name: 'ETL',
    group: 'BI & Data Engineering',
    summary: 'Extract, transform, and load workflows ensuring raw operational extracts reach reporting layers cleanly.',
    appliedIn: ['MIS Data Validation Pipelines', 'Analytics Case Study Prep'],
  },
  {
    name: 'Python (Basic)',
    group: 'Query & Scripting',
    summary: 'Foundational scripting for structured data exploration, inspection, and analytical workflows.',
    appliedIn: ['Exploratory Data Inspection', 'Foundational Scripting'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Sc (Hons) in Physics',
    institution: 'University of Calcutta',
    score: '7.085 CGPA',
    year: '2024',
    focus: 'Quantitative modeling, statistical reasoning, and mathematical rigor.',
  },
  {
    degree: 'ISC (Class XII)',
    institution: 'ST. Helen School',
    score: '83.16% (PCM)',
    year: '2020',
    focus: 'Physics, Chemistry, and Mathematics foundation.',
  },
  {
    degree: 'ICSE (Class X)',
    institution: 'ST. Helen School',
    score: '79.16%',
    year: '2018',
    focus: 'Core secondary academic foundation.',
  },
];

export const LANGUAGES = ['English', 'Hindi', 'Bengali'];
