import { useState } from 'react';
import { BarChart3, Database, FileSpreadsheet } from 'lucide-react';

type StageTab = 'powerbi' | 'sql' | 'excel';

const STAGE_DATA: Record<
  StageTab,
  {
    tabLabel: string;
    title: string;
    context: string;
    caption: string;
  }
> = {
  powerbi: {
    tabLabel: 'Power BI & DAX',
    title: 'HR Attrition Root-Cause View',
    context: 'Workforce Analytics · DAX & Star Schema',
    caption: 'Isolating turnover drivers across departments to improve retention and resource allocation.',
  },
  sql: {
    tabLabel: 'SQL & BigQuery',
    title: 'Cohort & Firepower Queries',
    context: 'MySQL · Google BigQuery · 10,000+ Rows',
    caption: 'From European bank churn cohorts to IPL 2018–2019 firepower and control metrics.',
  },
  excel: {
    tabLabel: 'MIS & Excel',
    title: 'Daily & Monthly Reporting Ledger',
    context: 'Linc Limited · Pivot Tables & Lookup',
    caption: 'Validated operational tables turning raw business activity into executive clarity.',
  },
};

const HR_DEPARTMENTS = [
  { dept: 'Sales & Field', rate: 21.4, width: '86%' },
  { dept: 'Operations', rate: 16.2, width: '65%' },
  { dept: 'Support', rate: 12.8, width: '51%' },
  { dept: 'Corporate', rate: 7.5, width: '30%' },
];

const SQL_ROWS = [
  { segment: '10,000 Records', metric: 'European Bank Churn', tool: 'MySQL' },
  { segment: '2018 – 2019', metric: 'IPL MVP & Batter/Bowler', tool: 'BigQuery' },
  { segment: 'Team Indices', metric: 'Firepower & Control', tool: 'BigQuery' },
];

const EXCEL_CHECKS = [
  { task: 'Daily & Monthly MIS Cadence', method: 'Pivot Tables + Lookup', state: 'Verified' },
  { task: 'Data Cleaning & Validation', method: 'Standardized Taxonomy', state: 'Verified' },
  { task: 'Premier League Arrests Audit', method: 'Offence Categorization', state: 'Verified' },
];

export function KeynoteStagePreview() {
  const [activeTab, setActiveTab] = useState<StageTab>('powerbi');
  const current = STAGE_DATA[activeTab];

  return (
    <div className="flex flex-col justify-between h-full rounded-2xl bg-[#F5F5F7] border border-black/[0.08] p-6 sm:p-8">
      <div>
        {/* Segmented Control */}
        <div
          role="tablist"
          aria-label="Analytical discipline preview"
          className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-black/[0.05] mb-6"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'powerbi'}
            onClick={() => setActiveTab('powerbi')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3] ${
              activeTab === 'powerbi'
                ? 'bg-white text-[#1D1D1F] shadow-sm'
                : 'text-[#6E6E73] hover:text-[#1D1D1F]'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Power BI &amp; DAX</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'sql'}
            onClick={() => setActiveTab('sql')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3] ${
              activeTab === 'sql'
                ? 'bg-white text-[#1D1D1F] shadow-sm'
                : 'text-[#6E6E73] hover:text-[#1D1D1F]'
            }`}
          >
            <Database className="w-3.5 h-3.5" aria-hidden="true" />
            <span>SQL &amp; BigQuery</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'excel'}
            onClick={() => setActiveTab('excel')}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3] ${
              activeTab === 'excel'
                ? 'bg-white text-[#1D1D1F] shadow-sm'
                : 'text-[#6E6E73] hover:text-[#1D1D1F]'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" aria-hidden="true" />
            <span>MIS &amp; Excel</span>
          </button>
        </div>

        {/* Stage Header */}
        <div className="mb-6">
          <p className="text-xs text-[#6E6E73] mb-1">{current.context}</p>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1D1D1F]">
            {current.title}
          </h2>
        </div>

        {/* Clean Single-Elevation Display Surface */}
        <div className="rounded-xl bg-white border border-black/[0.06] p-5">
          {activeTab === 'powerbi' && (
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-black/[0.06] pb-3">
                <span className="text-xs font-medium text-[#6E6E73]">
                  Illustrative DAX Attrition Breakdown
                </span>
                <span className="font-mono text-xs tabular-nums text-[#0071E3]">
                  DAX · Root Cause
                </span>
              </div>
              <div className="space-y-3">
                {HR_DEPARTMENTS.map((item) => (
                  <div key={item.dept} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[#1D1D1F]">{item.dept}</span>
                      <span className="font-mono tabular-nums text-[#6E6E73]">
                        {item.rate}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#F5F5F7] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#1D1D1F] transition-all duration-300"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'sql' && (
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-black/[0.06] pb-3">
                <span className="text-xs font-medium text-[#6E6E73]">
                  Analytical Datasets Queried
                </span>
                <span className="font-mono text-xs tabular-nums text-[#0071E3]">
                  MySQL · BigQuery
                </span>
              </div>
              <div className="divide-y divide-black/[0.06]">
                {SQL_ROWS.map((row) => (
                  <div
                    key={row.metric}
                    className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="text-sm font-medium text-[#1D1D1F]">{row.metric}</div>
                      <div className="text-xs text-[#6E6E73] font-mono tabular-nums">
                        {row.segment}
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[#1D1D1F] shrink-0">
                      {row.tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'excel' && (
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-black/[0.06] pb-3">
                <span className="text-xs font-medium text-[#6E6E73]">
                  MIS Reporting &amp; Validation Workflow
                </span>
                <span className="font-mono text-xs tabular-nums text-[#0071E3]">
                  Nov 2025 – Present
                </span>
              </div>
              <div className="divide-y divide-black/[0.06]">
                {EXCEL_CHECKS.map((row) => (
                  <div
                    key={row.task}
                    className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="text-sm font-medium text-[#1D1D1F]">{row.task}</div>
                      <div className="text-xs text-[#6E6E73]">{row.method}</div>
                    </div>
                    <span className="font-mono text-xs text-[#0071E3] shrink-0">
                      {row.state}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-[#6E6E73]">
        {current.caption}
      </p>
    </div>
  );
}
