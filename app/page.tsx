'use client';

import { useState } from 'react';
import { InputForm } from '@/components/InputForm';
import { OutputPanel } from '@/components/OutputPanel';

export default function Home() {
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleGenerate(input: string) {
    setLoading(true);
    setOutput('');
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Generation failed');
      }
      const data = await res.json();
      setOutput(data.output);
    } catch (err) {
      setOutput(`Error: ${err instanceof Error ? err.message : 'Something went wrong'}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-full flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Foundry Sprint
          </h1>
          <p className="text-gray-400 text-lg">
            Your AI-powered project. Edit{' '}
            <code className="text-orange-400 bg-gray-800 px-2 py-0.5 rounded text-sm">
              lib/prompt.ts
            </code>{' '}
            to make it yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputForm onGenerate={handleGenerate} loading={loading} />
          <OutputPanel output={output} loading={loading} />
        </div>
      </div>
    </main>
  );
}
