import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 2200;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(elapsed / duration, 1);
      setProgress(Math.floor(pct * 100));
      if (pct < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 transition-opacity duration-700"
      style={{ opacity: done ? 0 : 1, pointerEvents: done ? 'none' : 'auto' }}
    >
      <div className="relative mb-8">
        <div className="absolute inset-0 animate-pulse-glow rounded-full bg-cyan-glow/30 blur-3xl" />
        <div className="absolute inset-0 animate-pulse-glow rounded-full bg-red-glow/20 blur-3xl" style={{ animationDelay: '0.5s' }} />
        <div className="relative font-display text-6xl sm:text-7xl tracking-[0.2em] text-warm">
          G RAION
        </div>
      </div>

      <div className="w-48 max-w-[60vw]">
        <div className="h-px w-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-glow to-red-glow transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-[10px] tracking-[0.3em] text-white/40 font-sans">
          <span>BUENAS VIBRAS</span>
          <span>{progress}%</span>
        </div>
      </div>

      <div className="mt-10 flex items-end gap-1 h-8">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <div
            key={i}
            className="w-1 bg-gradient-to-t from-cyan-glow to-red-glow rounded-full animate-equalize"
            style={{ animationDelay: `${i * 0.1}s`, height: '30%' }}
          />
        ))}
      </div>
    </div>
  );
}
