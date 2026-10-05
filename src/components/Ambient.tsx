import { useEffect, useRef } from 'react';

export function FilmGrain() {
  return (
    <div className="fixed inset-0 z-[90] pointer-events-none opacity-[0.04] mix-blend-overlay">
      <div
        className="absolute inset-0 animate-grain"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  );
}

export function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(45,226,197,0.07), rgba(255,107,74,0.04) 40%, transparent 70%)`;
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return <div ref={ref} className="fixed inset-0 z-[80] pointer-events-none" />;
}

export function FloatingParticles({ count = 30 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 0.5,
      hue: Math.random() > 0.5 ? 165 : 24,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        const color = p.hue === 165 ? '45, 226, 197' : '255, 107, 74';
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[70] pointer-events-none"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}

export function NeonGradientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 animate-float-slow"
        style={{ background: 'radial-gradient(circle, #2DE2C5, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 animate-float-slow"
        style={{ background: 'radial-gradient(circle, #FF6B4A, transparent 70%)', animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 animate-float-slow"
        style={{ background: 'radial-gradient(circle, #11BFA7, transparent 70%)', animationDelay: '4s' }}
      />
    </div>
  );
}

export function ScrollProgressBar({ progress }: { progress: number }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-[95] h-[2px] bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-cyan-glow via-cyan-neon to-red-glow transition-[width] duration-75"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
