import React from 'react';
import { Briefcase, GraduationCap, Award, Cloud, Code } from 'lucide-react';

export const Journey = ({ education, experience, certifications }) => {
  return (
    <section id="experience" className="space-y-8">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
            ( 06 · The Track Record & Accreditations )
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-1">
            Experience, Education & Verified Credentials
          </h2>
        </div>
        <p className="text-sm text-slate-400 max-w-md font-sans">
          Hands-on software development internship paired with academic excellence in Computer Science and AWS cloud certification.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Experience Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2.5 text-white font-semibold text-sm mb-2">
            <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Briefcase className="w-4 h-4" />
            </div>
            <span>Professional Work Experience</span>
          </div>

          <div className="neo-card p-6 space-y-4 border-l-4 border-l-emerald-500">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-base font-bold text-white">Web Development Intern</h3>
                <div className="text-xs text-emerald-400 font-medium">Teachnook</div>
              </div>
              <span className="px-2.5 py-0.5 text-[11px] rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono">
                Remote Internship
              </span>
            </div>

            <ul className="text-xs text-slate-300 space-y-2 pt-1 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-emerald-400 mt-0.5">▹</span>
                <span>Developed and maintained responsive front-end pages and interactive application features using HTML, CSS and modern JavaScript.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-400 mt-0.5">▹</span>
                <span>Integrated REST APIs between front-end views and back-end services for asynchronous data fetching.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-400 mt-0.5">▹</span>
                <span>Debugged layout defects and responsive design quirks across viewports to enhance performance.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-400 mt-0.5">▹</span>
                <span>Maintained version control workflows, branch reviews, and commit conventions using Git and GitHub.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
              <span className="px-2 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300">HTML5</span>
              <span className="px-2 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300">CSS3</span>
              <span className="px-2 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300">JavaScript</span>
              <span className="px-2 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300">REST APIs</span>
              <span className="px-2 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300">Git / GitHub</span>
            </div>
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2.5 text-white font-semibold text-sm mb-2">
            <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span>Academic Qualifications</span>
          </div>

          <div className="neo-card p-6 space-y-3 border-l-4 border-l-indigo-500">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-base font-bold text-white">Bachelor of Technology (B.Tech)</h3>
                <div className="text-xs text-indigo-400">Computer Science Engineering</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Medicaps University • Indore, India</div>
              </div>
              <span className="px-2.5 py-0.5 text-[11px] rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
                2021 – 2025
              </span>
            </div>
            <p className="text-xs text-slate-300 pt-1 leading-relaxed">
              Coursework focused on Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Software Engineering (SDLC), and Web Technologies.
            </p>
          </div>

          <div className="neo-card p-5 space-y-2 border-l-4 border-l-slate-600">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-sm font-bold text-white">Senior Secondary (XII - Science/PCM)</h3>
                <div className="text-xs text-slate-400">Scholars’ Den School • Khandwa, India</div>
              </div>
              <span className="px-2 py-0.5 text-[10px] rounded-full bg-slate-800 text-slate-400 border border-slate-700 font-mono">
                2020 – 2021
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Row 2: Verified Industry Accreditations */}
      <div id="certifications" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Verified Cloud Accreditations & Benchmarks</span>
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
      </div>
    </section>
  );
};
