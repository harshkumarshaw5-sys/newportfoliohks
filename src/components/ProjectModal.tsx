import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-black/[0.08] shadow-2xl p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-5 right-5 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F5F7] text-[#1D1D1F] hover:bg-black/10 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="pr-12">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#6E6E73] mb-3">
            <span className="font-mono tabular-nums">{project.indexLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.methodologyLabel}</span>
          </div>

          <h2
            id="project-modal-title"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] headline-balance mb-3"
          >
            {project.title}
          </h2>
          <p className="text-base text-[#424245] leading-relaxed mb-6">
            {project.subtitle}
          </p>
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-5 border-y border-black/[0.08] mb-6">
          {project.keyMetrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-xs text-[#6E6E73] mb-1">{metric.label}</div>
              <div className="text-base font-semibold text-[#1D1D1F] tabular-nums">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* CV Project Scope & Deliverables */}
        <div className="mb-7">
          <h3 className="text-sm font-semibold text-[#1D1D1F] mb-3">
            Key Deliverables &amp; Findings
          </h3>
          <ul className="space-y-2.5 text-sm sm:text-[15px] leading-relaxed text-[#424245]">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0071E3] shrink-0"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Pattern Block */}
        <div className="rounded-xl bg-[#1D1D1F] text-[#F5F5F7] p-5 mb-6">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs font-medium tracking-wide text-[#A1A1A6]">
              {project.codeSnippetTitle}
            </span>
            <span className="font-mono text-xs text-[#6E6E73]">
              {project.tools.join(' · ')}
            </span>
          </div>
          <pre className="font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-[#F5F5F7]">
            <code>{project.codeSnippet}</code>
          </pre>
        </div>

        <div className="flex items-center justify-between gap-4 pt-2">
          <span className="text-xs text-[#6E6E73]">
            Tools: {project.tools.join(' · ')}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#1D1D1F] text-white text-xs font-medium hover:bg-black transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
