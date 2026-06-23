import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-white/10 mb-6">404</h1>
        <p className="text-xl md:text-2xl text-white/60 mb-8">Página não encontrada</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}