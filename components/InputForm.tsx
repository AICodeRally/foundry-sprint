'use client';

import { useState, FormEvent } from 'react';

export function InputForm() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);

    // Dispatch a custom event so OutputPanel can listen
    window.dispatchEvent(
      new CustomEvent('generate-start')
    );

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: input.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        window.dispatchEvent(
          new CustomEvent('generate-error', {
            detail: data.error || 'Something went wrong',
          })
        );
      } else {
        window.dispatchEvent(
          new CustomEvent('generate-result', {
            detail: data.output,
          })
        );
      }
    } catch {
      window.dispatchEvent(
        new CustomEvent('generate-error', {
          detail: 'Network error — is the server running?',
        })
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label htmlFor="user-input" className="text-sm font-medium text-gray-300">
        Your Input
      </label>
      <textarea
        id="user-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
        rows={4}
        className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 resize-y"
      />
      <button
        type="submit"
        disabled={loading || !input.trim()}
        className="self-end rounded-lg bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {loading ? 'Generating...' : 'Generate'}
      </button>
    </form>
  );
}
