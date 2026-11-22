import React from 'react';
import { Cloud, Code } from 'lucide-react';

export const Certifications = ({ certifications }) => {
  return (
    <section id="certifications" className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">( 11 · Cloud Accreditations & Benchmarks )</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-1">Verified Credentials & Industry Honors</h2>
        </div>
        <p className="text-sm text-slate-400 max-w-md font-sans">
          Continuous commitment to industry-standard benchmarks and cloud architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* AWS Cloud Foundation */}
        <div className="bento-card p-6 rounded-3xl flex items-start space-x-4 border border-amber-500/20">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
            <Cloud className="w-7 h-7" />
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-500/20 text-amber-300">AWS Certified</span>
              <span className="font-mono text-xs text-slate-400">2024</span>
            </div>
            <h3 className="text-lg font-bold text-white">AWS Cloud Foundation</h3>
            <div className="text-sm text-slate-400">Amazon Web Services</div>
            <p className="text-xs text-slate-300 pt-1 leading-relaxed">
              Validates foundational proficiency in AWS cloud security, EC2 compute, S3 storage, networking concepts, IAM, and high-availability cloud architecture.
            </p>
          </div>
        </div>

        {/* JavaScript Fundamentals */}
        <div className="bento-card p-6 rounded-3xl flex items-start space-x-4 border border-emerald-500/20">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
            <Code className="w-7 h-7" />
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/20 text-emerald-300">Verified</span>
              <span className="font-mono text-xs text-slate-400">2025</span>
            </div>
            <h3 className="text-lg font-bold text-white">JavaScript Fundamentals</h3>
            <div className="text-sm text-slate-400">GreatStack</div>
            <p className="text-xs text-slate-300 pt-1 leading-relaxed">
              Demonstrates deep understanding of ES6+ features, asynchronous JavaScript (Promises, async/await), DOM manipulation, closures, and modern web application patterns.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
