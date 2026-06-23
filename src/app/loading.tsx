export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-8">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-rotate-slow"
        >
          <polygon
            points="30,5 51.96,17.5 51.96,42.5 30,55 8.04,42.5 8.04,17.5"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon
            points="30,16 41.26,22.5 41.26,35.5 30,42 18.74,35.5 18.74,22.5"
            fill="white"
          />
        </svg>
        <p className="text-white/50 text-sm tracking-widest uppercase">Carregando</p>
      </div>
    </div>
  );
}