'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Erro:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Algo deu errado
        </h1>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          Ocorreu um erro inesperado. Por favor, tente novamente.
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Tentar Novamente
        </button>
      </div>
    </div>
  );
}