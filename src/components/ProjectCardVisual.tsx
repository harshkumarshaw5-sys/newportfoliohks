import type { ProjectItem } from '../data/portfolioData';

interface ProjectCardVisualProps {
  project: ProjectItem;
}

export function ProjectCardVisual({ project }: ProjectCardVisualProps) {
  if (project.id === 'power-bi-hr-analytics') {
    return (
      <div className="rounded-xl bg-[#F5F5F7] border border-black/[0.06] p-5 mb-6">
        <div className="flex items-center justify-between text-xs text-[#6E6E73] mb-4">
          <span>Workforce Turnover Drivers · DAX Model</span>
          <span className="font-mono tabular-nums text-[#1D1D1F]">Retention Focus</span>
        </div>
        <div className="grid grid-cols-12 gap-3 items-end h-28 pt-2">
          {[
            { label: 'Sales', h: '88%', accent: true },
            { label: 'Ops', h: '68%', accent: false },
            { label: 'R&D', h: '52%', accent: false },
            { label: 'Tech', h: '60%', accent: false },
            { label: 'HR', h: '34%', accent: false },
            { label: 'Fin', h: '28%', accent: false },
          ].map((bar) => (
            <div key={bar.label} className="col-span-2 flex flex-col items-center gap-2 h-full justify-end">
              <div className="w-full max-w-[36px] flex-1 flex items-end">
                <div
                  className={`w-full rounded-t-md ${
                    bar.accent ? 'bg-[#0071E3]' : 'bg-[#1D1D1F]/80'
                  }`}
                  style={{ height: bar.h }}
                />
              </div>
              <span className="text-[11px] font-mono text-[#6E6E73]">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.id === 'customer-churn-analysis') {
    return (
      <div className="rounded-xl bg-[#F5F5F7] border border-black/[0.06] p-5 mb-6">
        <div className="flex items-center justify-between text-xs text-[#6E6E73] mb-3">
          <span>bank_customers · SQL Cohort Scan</span>
          <span className="font-mono tabular-nums text-[#1D1D1F]">10,000 rows</span>
        </div>
        <div className="rounded-lg bg-white border border-black/[0.05] px-3.5 py-2.5 font-mono text-xs text-[#1D1D1F] space-y-1.5">
          <div className="flex items-center justify-between text-[#6E6E73]">
            <span>Dimension</span>
            <span>Query Output</span>
          </div>
          <div className="flex items-center justify-between border-t border-black/[0.05] pt-1.5">
            <span>Geography Cohort</span>
            <span className="tabular-nums text-[#0071E3]">GROUP BY</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Loyalty Signals</span>
            <span className="tabular-nums">10,000 records</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === 'ipl-2018-2019-analysis') {
    return (
      <div className="rounded-xl bg-[#F5F5F7] border border-black/[0.06] p-5 mb-6">
        <div className="flex items-center justify-between text-xs text-[#6E6E73] mb-3">
          <span>Firepower vs. Control Matrix</span>
          <span className="font-mono tabular-nums text-[#1D1D1F]">2018–2019</span>
        </div>
        <svg
          viewBox="0 0 280 96"
          className="w-full h-24"
          role="img"
          aria-label="Scatter plot schematic comparing team firepower and control across IPL 2018 and 2019"
        >
          <line x1="24" y1="80" x2="264" y2="80" stroke="#D2D2D7" strokeWidth="1" />
          <line x1="24" y1="12" x2="24" y2="80" stroke="#D2D2D7" strokeWidth="1" />
          <line x1="144" y1="12" x2="144" y2="80" stroke="#E5E5EA" strokeDasharray="3 3" strokeWidth="1" />
          <line x1="24" y1="46" x2="264" y2="46" stroke="#E5E5EA" strokeDasharray="3 3" strokeWidth="1" />
          <circle cx="212" cy="24" r="5" fill="#0071E3" />
          <circle cx="186" cy="34" r="4" fill="#1D1D1F" />
          <circle cx="158" cy="29" r="4" fill="#1D1D1F" />
          <circle cx="122" cy="52" r="4" fill="#86868B" />
          <circle cx="94" cy="61" r="4" fill="#86868B" />
          <circle cx="228" cy="40" r="4" fill="#1D1D1F" />
          <text x="200" y="15" fontSize="9" fill="#0071E3" fontFamily="JetBrains Mono, monospace">
            MVP Tier
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-[#F5F5F7] border border-black/[0.06] p-5 mb-6">
      <div className="flex items-center justify-between text-xs text-[#6E6E73] mb-3">
        <span>MS Excel Normalization Pass</span>
        <span className="font-mono tabular-nums text-[#1D1D1F]">PL Clubs</span>
      </div>
      <div className="rounded-lg bg-white border border-black/[0.05] px-3.5 py-2.5 font-mono text-xs text-[#1D1D1F] space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[#6E6E73]">Club Taxonomy</span>
          <span className="text-[#0071E3]">Standardized</span>
        </div>
        <div className="flex items-center justify-between border-t border-black/[0.05] pt-1.5">
          <span className="text-[#6E6E73]">Offence Categories</span>
          <span>Validated</span>
        </div>
      </div>
    </div>
  );
}
