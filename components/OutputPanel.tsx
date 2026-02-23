'use client';

import { useState, useEffect, useCallback } from 'react';

export function OutputPanel() {
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleStart = useCallback(() => {
    setLoading(true);
    setError('');
  }, []);

  const handleResult = useCallback((e: Event) => {
    const detail = (e as CustomEvent<string>).detail;
    setOutput(detail);
    setLoading(false);
  }, []);

  const handleError = useCallback((e: Event) => {
    const detail = (e as CustomEvent<string>).detail;
    setError(detail);
    setLoading(false);
  }, []);

  useEffect(() => {
    window.addEventListener('generate-start', handleStart);
    window.addEventListener('generate-result', handleResult);
    window.addEventListener('generate-error', handleError);
    return () => {
      window.removeEventListener('generate-start', handleStart);
      window.removeEventListener('generate-result', handleResult);
      window.removeEventListener('generate-error', handleError);
    };
  }, [handleStart, handleResult, handleError]);

  async function copyToClipboard() {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  }

  return (
    <div className="rounded-lg border border-gray-700 bg-gray-900 p-5 min-h-[160px] relative">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-medium text-gray-300">Output</h2>
        {output && !loading && (
          <button
            onClick={copyToClipboard}
            className="text-xs text-gray-400 hover:text-gray-200 transition flex items-center gap-1"
          >
            {copied ? (
              <>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        )}
      </div>

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      {loading && (
        <div className="space-y-3 animate-pulse">
          <div className="h-4 bg-gray-800 rounded w-3/4" />
          <div className="h-4 bg-gray-800 rounded w-full" />
          <div className="h-4 bg-gray-800 rounded w-5/6" />
          <div className="h-4 bg-gray-800 rounded w-2/3" />
        </div>
      )}

      {!loading && !error && !output && (
        <p className="text-gray-500 text-sm italic">Waiting for input...</p>
      )}

      {!loading && !error && output && (
        <div className="text-gray-200 text-sm whitespace-pre-wrap leading-relaxed">
          {output}
        </div>
      )}
    </div>
  );
}
