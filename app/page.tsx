import { InputForm } from '@/components/InputForm';
import { OutputPanel } from '@/components/OutputPanel';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12">
      {/* ── App Title ── Change this to match your app! ── */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          My AI App
        </h1>
        <p className="mt-2 text-gray-400 text-lg">
          Describe what your app does here
        </p>
      </div>

      {/* ── Main Content ── */}
      <div className="w-full max-w-2xl flex flex-col gap-6">
        <InputForm />
        <OutputPanel />
      </div>

      {/* ── Footer ── */}
      <footer className="mt-16 text-gray-600 text-sm">
        Built with AICR Foundry
      </footer>
    </main>
  );
}
