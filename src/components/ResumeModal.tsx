import { useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-sm p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-4xl h-[86vh] rounded-2xl bg-white border border-black/[0.08] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-black/[0.08] bg-[#F5F5F7]">
          <div>
            <h2 id="resume-modal-title" className="text-base font-semibold text-[#1D1D1F]">
              Harsh Kumar Shaw — Curriculum Vitae
            </h2>
            <p className="text-xs text-[#6E6E73]">
              Data Analyst &amp; MIS Executive · Kolkata, West Bengal
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={PROFILE.cvPdfPath}
              download="Harsh_Kumar_Shaw_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0071E3] text-white text-xs font-medium hover:bg-[#0077ED] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Download PDF</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-black/[0.08] text-[#1D1D1F] hover:bg-black/5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-[#EAEAEF]">
          <iframe
            src={PROFILE.cvPdfPath}
            title="Harsh Kumar Shaw CV PDF"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
