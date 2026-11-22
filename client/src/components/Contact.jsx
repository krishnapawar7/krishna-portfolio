import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Mail, Phone, MapPin, Copy, Send, Sparkles, Database, CheckCircle2, Ticket } from 'lucide-react';

export const Contact = ({ profile, onOpenResume, onShowToast }) => {
  const { playTone } = useTheme();
  const [selectedRole, setSelectedRole] = useState('MERN Stack Developer');
  const [selectedMode, setSelectedMode] = useState('Open to Relocate');
  const [selectedTimeline, setSelectedTimeline] = useState('Immediate Joiner (0 Days)');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    playTone(784, 'sine', 0.1, 0.05);
    onShowToast(`Copied ${label} to clipboard!`);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('⚠️ Please fill in all required fields.');
      return;
    }

    setLoading(true);
    playTone(600, 'triangle', 0.05, 0.04);

    const payload = {
      name: formData.name,
      email: formData.email,
      subject: `[Interview Slip] ${selectedRole} (${selectedMode} · ${selectedTimeline})`,
      message: `Role: ${selectedRole}\nMode: ${selectedMode}\nTimeline: ${selectedTimeline}\n\nNote:\n${formData.message}`
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        onShowToast('🎫 Interview Slip placed & saved to MongoDB! Thank you.');
        playTone(880, 'sine', 0.15, 0.06);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(resData.message || 'API request failed');
      }
    } catch (err) {
      console.warn('Submission fallback to mailto:', err);
      const mailto = `mailto:krishpawar214@gmail.com?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(`Hi Krishna,\n\n${payload.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
      window.location.href = mailto;
      onShowToast('📧 Redirected to email client.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="space-y-8">

      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">( 07 · The Interview Slip )</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-white tracking-tight mt-1">
            Lock In An Interview & Initiate Contact
          </h2>
        </div>
        <p className="text-sm text-slate-400 max-w-md font-sans">
          Building a full-stack product, AI service, or looking for an immediate-joiner SDE? Pick your options on the slip and send it over. I reply within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Left Column: Direct Communication & Status */}
        <div className="lg:col-span-5 neo-card p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase text-indigo-400 font-bold">DIRECT CHANNELS</span>
              <h3 className="text-2xl font-display font-bold text-white uppercase mt-0.5">Quick Reach</h3>
              <p className="text-xs text-slate-400 mt-1">Available for exploratory tech chats, assignment rounds, or immediate interviews.</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/30 transition">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Email Address</div>
                    <a href="mailto:krishpawar214@gmail.com" className="text-xs font-semibold text-white hover:text-indigo-400 transition truncate block">
                      krishpawar214@gmail.com
                    </a>
                  </div>
                </div>
                <button onClick={() => copyToClipboard('krishpawar214@gmail.com', 'Email')} className="p-2 text-slate-400 hover:text-white transition" title="Copy email">
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/30 transition">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Phone / WhatsApp</div>
                    <a href="tel:+918818846012" className="text-xs font-semibold text-white hover:text-emerald-400 transition">
                      +91 8818846012
                    </a>
                  </div>
                </div>
                <button onClick={() => copyToClipboard('+918818846012', 'Phone')} className="p-2 text-slate-400 hover:text-white transition" title="Copy phone">
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center space-x-3 p-3.5 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Current Base</div>
                  <div className="text-xs font-semibold text-white">Indore, Madhya Pradesh, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 space-y-2">
            <button
              onClick={onOpenResume}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition"
            >
              <span>View ATS Formatted Resume</span>
            </button>
          </div>
        </div>

        {/* Right Column: The Interview Slip */}
        <div className="lg:col-span-7 neo-card p-6 sm:p-8 space-y-6">

          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">OFFICIAL SELECTION</span>
              <h3 className="text-xl font-display font-black text-white uppercase mt-0.5">The Interview Slip</h3>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
              <Database className="w-3.5 h-3.5" />
              <span>MongoDB Stream</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Step 1: Target Role */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">1. Select Target Role:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  'MERN Stack Developer',
                  'GenAI & Python',
                  'Frontend React',
                  'Full-Stack SDE'
                ].map((role) => (
                  <button
                    type="button"
                    key={role}
                    onClick={() => { playTone(500, 'sine', 0.04, 0.02); setSelectedRole(role); }}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-center transition border ${selectedRole === role
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                      : 'bg-slate-900/80 text-slate-400 border-white/5 hover:border-white/20'
                      }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Location Mode */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">2. Work Mode:</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  'Remote',
                  'Indore On-site',
                  'Open to Relocate'
                ].map((mode) => (
                  <button
                    type="button"
                    key={mode}
                    onClick={() => { playTone(500, 'sine', 0.04, 0.02); setSelectedMode(mode); }}
                    className={`p-2 rounded-xl text-xs font-medium text-center transition border ${selectedMode === mode
                      ? 'bg-purple-600 text-white border-purple-500'
                      : 'bg-slate-900/80 text-slate-400 border-white/5 hover:border-white/20'
                      }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Recruiter Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Recruiter / Manager Name <span className="text-rose-400">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Company / Work Email <span className="text-rose-400">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. rahul@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
            </div>

            {/* Step 4: Message */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Interview Context / Note <span className="text-rose-400">*</span></label>
              <textarea
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="We are looking for a fresher developer who knows MERN + AI integrations. Would love to schedule a preliminary screening..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
              ></textarea>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-md hover:scale-[1.01] transition transform flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span>{loading ? 'Transmitting Slip to MongoDB...' : 'Place Interview Slip →'}</span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};
