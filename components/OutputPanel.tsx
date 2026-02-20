'use client';

import { useState } from 'react';

interface OutputPanelProps {
  output: string;
  loading: boolean;
}

export function OutputPanel({ output, loading }: OutputPanelProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-300">Output</label>
        {output && (
          <button
            onClick={handleCopy}
            className="text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded border border-gray-700 hover:border-gray-500"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>
      <div className="w-full min-h-[13rem] rounded-lg border border-gray-700 bg-gray-900 px-4 py-3">
        {loading ? (
          <div className="space-y-3 animate-pulse">
            <div className="h-4 bg-gray-800 rounded w-3/4" />
            <div className="h-4 bg-gray-800 rounded w-full" />
            <div className="h-4 bg-gray-800 rounded w-5/6" />
            <div className="h-4 bg-gray-800 rounded w-2/3" />
          </div>
        ) : output ? (
          <p className="text-gray-100 whitespace-pre-wrap">{output}</p>
        ) : (
          <p className="text-gray-500 italic">
            Waiting for input...
          </p>
        )}
      </div>
    </div>
  );
}
