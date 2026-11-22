import React, { useState } from 'react';
import { Terminal, Send, CheckCircle2, Clock, Database, RefreshCw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ApiPlayground = ({ embedded = false }) => {
  const { playTone } = useTheme();
  const [selectedEndpoint, setSelectedEndpoint] = useState('/api/health');
  const [response, setResponse] = useState(null);
  const [latency, setLatency] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const endpoints = [
    { label: 'Health Status', path: '/api/health', method: 'GET' },
    { label: 'Profile & Resume', path: '/api/profile', method: 'GET' },
    { label: 'Projects List', path: '/api/projects?category=ai', method: 'GET' },
    { label: 'Skills Catalog', path: '/api/profile/skills', method: 'GET' },
    { label: 'Review Messages', path: '/api/contact/messages', method: 'GET' }
  ];

  const executeRequest = async (path = selectedEndpoint) => {
    setLoading(true);
    playTone(650, 'triangle', 0.05, 0.03);
    const start = performance.now();

    try {
      const res = await fetch(path);
      const data = await res.json();
      const end = performance.now();

      setLatency(Math.round(end - start));
      setStatus(res.status);
      setResponse(data);
    } catch (err) {
      const end = performance.now();
      setLatency(Math.round(end - start));
      setStatus(500);
      setResponse({ error: 'Failed to connect to local Express server', details: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="space-y-6">
      {!embedded && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">( 08 · Live API Sandbox )</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-1">Backend REST Telemetry & Latency Benchmark</h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-sans">
            Don't just take my word for it. Test my backend endpoints in real-time right here from your browser.
          </p>
        </div>
      )}

      <div className="neo-card p-6 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Endpoint selector buttons */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">Select Endpoint:</span>
          {endpoints.map((ep) => (
            <button
              key={ep.path}
              onClick={() => {
                setSelectedEndpoint(ep.path);
                executeRequest(ep.path);
              }}
              className={`w-full flex items-center justify-between p-3 rounded-xl border text-left text-xs transition ${
                selectedEndpoint === ep.path
                  ? 'bg-indigo-600/20 border-indigo-500/60 text-white shadow-lg shadow-indigo-500/10'
                  : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="font-mono px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-emerald-400 font-bold">
                  {ep.method}
                </span>
                <span className="font-medium text-slate-200">{ep.label}</span>
              </div>
              <span className="font-mono text-[11px] text-slate-500">{ep.path.split('?')[0]}</span>
            </button>
          ))}

          <button
            onClick={() => executeRequest(selectedEndpoint)}
            disabled={loading}
            className="w-full mt-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center space-x-2 shadow-sm transition disabled:opacity-50"
          >
            {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
            <span>{loading ? 'Executing Request...' : 'Trigger Live Call'}</span>
          </button>
        </div>

        {/* Right: Live response viewer */}
        <div className="lg:col-span-8 bg-slate-950/80 rounded-2xl border border-white/10 p-4 font-mono text-xs flex flex-col justify-between overflow-hidden">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                GET
              </span>
              <span className="text-slate-300 text-xs">{selectedEndpoint}</span>
            </div>

            <div className="flex items-center space-x-3 text-[11px]">
              {status && (
                <span className="flex items-center space-x-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{status} OK</span>
                </span>
              )}
              {latency !== null && (
                <span className="flex items-center space-x-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{latency} ms</span>
                </span>
              )}
            </div>
          </div>

          {/* Response payload viewer */}
          <div className="flex-1 max-h-64 overflow-y-auto text-slate-300 leading-relaxed pr-2">
            {response ? (
              <pre className="text-emerald-400/90 whitespace-pre-wrap">
                {JSON.stringify(response, null, 2)}
              </pre>
            ) : (
              <div className="py-12 text-center text-slate-500">
                Click any endpoint on the left or press "Trigger Live Call" to test the live Express server.
              </div>
            )}
          </div>

          <div className="border-t border-white/5 pt-2.5 mt-3 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center space-x-1.5">
              <Database className="w-3 h-3 text-indigo-400" />
              <span>Backed by Node.js, Express & MongoDB / In-Memory Failover</span>
            </div>
            <span>Format: application/json</span>
          </div>

        </div>

      </div>
    </section>
  );
};
