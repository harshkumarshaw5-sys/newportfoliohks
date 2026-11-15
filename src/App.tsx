import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';
import { MotionConfig } from 'motion/react';
import { KeynoteStagePreview } from './components/KeynoteStagePreview';
import { ProjectCardVisual } from './components/ProjectCardVisual';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import {
  EDUCATION,
  EXPERIENCE,
  HERO_METRICS,
  LANGUAGES,
  PROFILE,
  PROJECTS,
  SKILLS,
  STRENGTHS,
  type ProjectCategory,
  type ProjectItem,
} from './data/portfolioData';

type FilterOption = 'all' | ProjectCategory;

const MARQUEE_ITEMS = [
  'Power BI',
  'DAX',
  'MySQL',
  'Google BigQuery',
  'Advance Excel',
  'Pivot Table',
  'Power Query',
  'Data Modelling',
  'ETL',
  'Python (Basic)',
];

export default function App() {
  const [projectFilter, setProjectFilter] = useState<FilterOption>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState<number>(0);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const filteredProjects =
    projectFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === projectFilter);

  const activeSkill = SKILLS[selectedSkillIndex];

  const handleCopy = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => {
        setCopiedField((prev) => (prev === field ? null : prev));
      }, 2000);
    } catch {
      setCopiedField(null);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-[#1D1D1F] selection:bg-[#0071E3]/15 selection:text-[#1D1D1F]">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <header className="sticky top-0 z-40 h-16 bg-white/85 backdrop-blur-md border-b border-black/[0.08]">
          <div className="max-w-[1200px] mx-auto h-full px-6 sm:px-8 flex items-center justify-between gap-8">
            {/* Zone 1: Single-line Wordmark */}
            <a
              href="#top"
              className="text-base sm:text-lg font-bold tracking-tight text-[#1D1D1F] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0071E3]"
            >
              {PROFILE.name}
            </a>

            {/* Zone 2: 4 single-line nav links */}
            <nav
              aria-label="Primary navigation"
              className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6E6E73]"
            >
              <a
                href="#work"
                className="hover:text-[#1D1D1F] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                Work
              </a>
              <a
                href="#projects"
                className="hover:text-[#1D1D1F] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-[#1D1D1F] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                Skills
              </a>
              <a
                href="#education"
                className="hover:text-[#1D1D1F] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                Education
              </a>
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="flex items-center shrink-0">
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-[#1D1D1F] text-white text-xs font-medium hover:bg-black transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
              >
                Contact
              </a>
            </div>
          </div>
        </header>

        <main id="top">
          {/* Hero Split + Full-Width 4-Column Metric Strip */}
          <section className="max-w-[1200px] mx-auto px-6 sm:px-8 pt-12 sm:pt-16 pb-16 sm:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left Column: Keynote Typographic Hierarchy */}
              <div className="lg:col-span-6 flex flex-col justify-between py-2">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-[#6E6E73] mb-4">
                    {PROFILE.role} <span aria-hidden="true">·</span> {PROFILE.location}
                  </p>

                  <h1 className="text-[clamp(2.5rem,4.5vw,3.75rem)] font-bold tracking-tight leading-[1.06] text-[#1D1D1F] headline-balance mb-6">
                    Raw data. Distilled into clarity.
                  </h1>

                  <p className="text-base sm:text-lg leading-relaxed text-[#424245] max-w-xl mb-8">
                    {PROFILE.objective}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0071E3] text-white text-sm font-medium hover:bg-[#0077ED] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
                  >
                    <span>Explore Selected Work</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsResumeOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-black/[0.12] bg-white text-[#1D1D1F] text-sm font-medium hover:bg-[#F5F5F7] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
                  >
                    <FileText className="w-4 h-4 text-[#6E6E73]" aria-hidden="true" />
                    <span>View Resume PDF</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive Keynote Stage */}
              <div className="lg:col-span-6">
                <KeynoteStagePreview />
              </div>
            </div>

            {/* Full-Width 4-Column Metric Strip */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-black/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {HERO_METRICS.map((item) => (
                <div key={item.label}>
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] tabular-nums mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm font-medium text-[#1D1D1F]">{item.label}</div>
                  <div className="text-xs text-[#6E6E73] mt-0.5">{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Subtle Marquee Section Divider */}
          <div
            className="border-y border-black/[0.08] bg-[#F5F5F7] py-3.5 overflow-hidden"
            aria-hidden="true"
          >
            <div className="animate-keynote-marquee text-xs font-medium text-[#6E6E73]">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex items-center gap-6 pr-6">
                  {MARQUEE_ITEMS.map((item) => (
                    <span key={`${dup}-${item}`} className="flex items-center gap-6 whitespace-nowrap">
                      <span>{item}</span>
                      <span>·</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Section 1: Experience & Strengths */}
          <section id="work" className="max-w-[1200px] mx-auto px-6 sm:px-8 py-20 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left: Current Role at Linc Limited */}
              <div className="lg:col-span-6">
                <p className="text-xs font-medium text-[#0071E3] mb-2">
                  Work Experience
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] headline-balance mb-4">
                  Precision reporting at {EXPERIENCE.company}.
                </h2>
                <div className="flex flex-wrap items-center gap-2 text-sm text-[#6E6E73] mb-6">
                  <span className="font-medium text-[#1D1D1F]">{EXPERIENCE.role}</span>
                  <span aria-hidden="true">·</span>
                  <span>{EXPERIENCE.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-xs tabular-nums">{EXPERIENCE.period}</span>
                </div>

                <p className="text-base leading-relaxed text-[#424245] mb-6">
                  {EXPERIENCE.lead}
                </p>

                <div className="divide-y divide-black/[0.08] border-t border-b border-black/[0.08]">
                  {EXPERIENCE.highlights.map((item, idx) => (
                    <div key={item} className="py-4 flex items-start gap-4">
                      <span className="font-mono text-xs tabular-nums text-[#6E6E73] pt-1">
                        0{idx + 1}
                      </span>
                      <p className="text-sm sm:text-[15px] leading-relaxed text-[#1D1D1F]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Core Strengths */}
              <div className="lg:col-span-6">
                <p className="text-xs font-medium text-[#6E6E73] mb-2">
                  Operating Principles
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] headline-balance mb-6">
                  Built on focus, speed, and analytical rigor.
                </h3>

                <div className="divide-y divide-black/[0.08] border-t border-black/[0.08]">
                  {STRENGTHS.map((strength) => (
                    <div key={strength.title} className="py-6">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-mono text-xs tabular-nums text-[#0071E3]">
                          {strength.number}.
                        </span>
                        <h4 className="text-lg font-semibold text-[#1D1D1F]">
                          {strength.title}
                        </h4>
                      </div>
                      <p className="text-sm sm:text-[15px] leading-relaxed text-[#424245] pl-7">
                        {strength.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Selected Projects Bento Grid */}
          <section id="projects" className="bg-[#F5F5F7] border-y border-black/[0.08] py-20 sm:py-24">
            <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <p className="text-xs font-medium text-[#0071E3] mb-2">
                    Selected Projects
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] headline-balance">
                    Four studies. One clear standard.
                  </h2>
                </div>

                {/* Interactive Filter Segmented Control */}
                <div
                  role="group"
                  aria-label="Filter projects by category"
                  className="inline-flex items-center gap-1 p-1 rounded-xl bg-black/[0.06] self-start md:self-auto"
                >
                  {[
                    { id: 'all' as const, label: 'All Projects' },
                    { id: 'bi-excel' as const, label: 'BI & Excel' },
                    { id: 'sql-bigquery' as const, label: 'SQL & BigQuery' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setProjectFilter(tab.id)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3] ${
                        projectFilter === tab.id
                          ? 'bg-white text-[#1D1D1F] shadow-sm'
                          : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Bento Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredProjects.map((project) => {
                  const isHeroTile = projectFilter === 'all' && project.featured;
                  return (
                    <article
                      key={project.id}
                      className={`group rounded-2xl bg-white border border-black/[0.08] p-6 sm:p-8 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 ${
                        isHeroTile ? 'lg:col-span-2' : ''
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-2 text-xs text-[#6E6E73]">
                            <span className="font-mono tabular-nums">{project.indexLabel}</span>
                            <span aria-hidden="true">·</span>
                            <span>{project.categoryLabel}</span>
                          </div>
                          <span className="text-xs text-[#6E6E73] hidden sm:inline">
                            {project.tools.slice(0, 3).join(' · ')}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1D1D1F] mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-[15px] leading-relaxed text-[#424245] mb-6 max-w-2xl">
                          {project.summary}
                        </p>

                        <ProjectCardVisual project={project} />
                      </div>

                      <div className="flex items-center justify-between gap-4 pt-4 border-t border-black/[0.06]">
                        <span className="text-xs text-[#6E6E73]">
                          {project.keyMetrics[0].label}:{' '}
                          <strong className="font-medium text-[#1D1D1F] tabular-nums">
                            {project.keyMetrics[0].value}
                          </strong>
                        </span>

                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-[#0071E3] hover:bg-[#0071E3]/8 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
                        >
                          <span>Inspect Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section 3: Dark Keynote Stage — Skills & Languages */}
          <section id="skills" className="bg-[#111113] text-[#F5F5F7] py-20 sm:py-24">
            <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
              <div className="max-w-2xl mb-12">
                <p className="text-xs font-medium tracking-wide text-[#2997FF] mb-2">
                  Technical Stack
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white headline-balance mb-4">
                  Every tool chosen for clarity under pressure.
                </h2>
                <p className="text-base leading-relaxed tracking-wide text-[#A1A1A6]">
                  Select any capability below to see how it powers daily MIS reporting and analytical case studies.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Interactive 8-Skill Selector Grid */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SKILLS.map((skill, idx) => {
                    const isSelected = idx === selectedSkillIndex;
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() => setSelectedSkillIndex(idx)}
                        className={`text-left rounded-xl p-5 border transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2997FF] ${
                          isSelected
                            ? 'bg-[#1D1D1F] border-[#2997FF]'
                            : 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06]'
                        }`}
                      >
                        <div className="text-xs text-[#A1A1A6] tracking-wide mb-1">
                          {skill.group}
                        </div>
                        <div className="text-base font-semibold tracking-wide text-white">
                          {skill.name}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Right: Capability Inspector + Languages */}
                <div className="lg:col-span-5 rounded-2xl bg-[#1D1D1F] border border-white/[0.1] p-6 sm:p-8">
                  <div className="text-xs font-medium tracking-wide text-[#2997FF] mb-2">
                    {activeSkill.group}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                    {activeSkill.name}
                  </h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed tracking-wide text-[#D2D2D7] mb-6">
                    {activeSkill.summary}
                  </p>

                  <div className="pt-5 border-t border-white/[0.1] mb-8">
                    <div className="text-xs text-[#A1A1A6] mb-3">Applied Across</div>
                    <ul className="space-y-2 text-sm tracking-wide text-white">
                      {activeSkill.appliedIn.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span
                            aria-hidden="true"
                            className="w-1.5 h-1.5 rounded-full bg-[#2997FF] shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 border-t border-white/[0.1]">
                    <div className="text-xs text-[#A1A1A6] mb-1.5">Languages Spoken</div>
                    <div className="text-sm font-medium tracking-wide text-white">
                      {LANGUAGES.join(' · ')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Education Ledger */}
          <section id="education" className="max-w-[1200px] mx-auto px-6 sm:px-8 py-20 sm:py-24">
            <div className="mb-12">
              <p className="text-xs font-medium text-[#0071E3] mb-2">
                Education
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] headline-balance">
                Rooted in physics. Built for quantitative precision.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EDUCATION.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-2xl bg-[#F5F5F7] border border-black/[0.06] p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 text-xs text-[#6E6E73] mb-4">
                      <span>{item.institution}</span>
                      <span className="font-mono tabular-nums">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1D1D1F] mb-2">{item.degree}</h3>
                    <p className="text-sm leading-relaxed text-[#424245] mb-6">{item.focus}</p>
                  </div>
                  <div className="pt-4 border-t border-black/[0.08] font-mono text-sm font-semibold tabular-nums text-[#1D1D1F]">
                    {item.score}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Direct Contact & CV Action Bar */}
          <section
            id="contact"
            className="bg-[#F5F5F7] border-t border-black/[0.08] py-20 sm:py-24"
          >
            <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-6">
                  <p className="text-xs font-medium text-[#0071E3] mb-2">
                    Get in Touch
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] headline-balance mb-4">
                    Ready to turn raw numbers into clear decisions.
                  </h2>
                  <p className="text-base leading-relaxed text-[#424245] max-w-lg mb-8">
                    Based in {PROFILE.location}. Available for Data Analyst and MIS reporting opportunities, dashboard architecture, and SQL analytics collaboration.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0071E3] text-white text-sm font-medium hover:bg-[#0077ED] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      <span>Email Harsh</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsResumeOpen(true)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-black/[0.1] text-[#1D1D1F] text-sm font-medium hover:bg-black/[0.03] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
                    >
                      <FileText className="w-4 h-4 text-[#6E6E73]" aria-hidden="true" />
                      <span>Open CV PDF</span>
                    </button>
                  </div>
                </div>

                {/* Direct Contact Ledger */}
                <div className="lg:col-span-6 rounded-2xl bg-white border border-black/[0.08] divide-y divide-black/[0.08]">
                  <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-xs text-[#6E6E73] mb-1">Email</div>
                      <div className="text-sm sm:text-base font-medium text-[#1D1D1F] truncate">
                        {PROFILE.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(PROFILE.email, 'email')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#F5F5F7] text-xs font-medium text-[#1D1D1F] hover:bg-black/[0.08] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
                    >
                      {copiedField === 'email' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#0071E3]" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#6E6E73]" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-xs text-[#6E6E73] mb-1">Phone</div>
                      <div className="font-mono text-sm sm:text-base font-medium tabular-nums text-[#1D1D1F]">
                        {PROFILE.phone}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={`tel:${PROFILE.phone}`}
                        aria-label="Call Harsh Kumar Shaw"
                        className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#F5F5F7] text-[#1D1D1F] hover:bg-black/[0.08] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
                      >
                        <Phone className="w-4 h-4" aria-hidden="true" />
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy(PROFILE.phone, 'phone')}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#F5F5F7] text-xs font-medium text-[#1D1D1F] hover:bg-black/[0.08] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
                      >
                        {copiedField === 'phone' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#0071E3]" aria-hidden="true" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#6E6E73]" aria-hidden="true" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-xs text-[#6E6E73] mb-1">LinkedIn</div>
                      <div className="text-sm sm:text-base font-medium text-[#1D1D1F] truncate">
                        {PROFILE.linkedinDisplay}
                      </div>
                    </div>
                    <a
                      href={PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#F5F5F7] text-xs font-medium text-[#1D1D1F] hover:bg-black/[0.08] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#0071E3]" aria-hidden="true" />
                      <span>Connect</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Quiet Footer */}
        <footer className="bg-white border-t border-black/[0.08] py-8">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6E73]">
            <div>
              © {new Date().getFullYear()} {PROFILE.name}. {PROFILE.location}.
            </div>
            <div className="flex items-center gap-6">
              <a href="#work" className="hover:text-[#1D1D1F] transition-colors">
                Work
              </a>
              <a href="#projects" className="hover:text-[#1D1D1F] transition-colors">
                Projects
              </a>
              <a href="#skills" className="hover:text-[#1D1D1F] transition-colors">
                Skills
              </a>
              <a href="#education" className="hover:text-[#1D1D1F] transition-colors">
                Education
              </a>
            </div>
          </div>
        </footer>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
