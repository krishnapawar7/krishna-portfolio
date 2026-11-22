import React from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="border-b border-slate-700/60 pb-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {project.category?.toUpperCase()} • {project.year}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">{project.summary}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2">Key Architecture Highlights</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {(project.architecture || project.highlights)?.map((a, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-0.5">▹</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.impact && (
            <div className="bg-indigo-950/40 p-4 rounded-xl border border-indigo-500/30">
              <h4 className="text-sm font-semibold text-indigo-300 mb-1">Impact & Takeaway</h4>
              <p className="text-sm text-slate-300">{project.impact}</p>
            </div>
          )}

          {(project.liveUrl && project.liveUrl !== '#') || project.githubUrl ? (
            <div className="flex flex-wrap gap-3 pt-1">
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition text-sm font-semibold"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Live Website</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition text-sm font-semibold"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub</span>
                </a>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
