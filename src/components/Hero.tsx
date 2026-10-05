import { Play } from 'lucide-react';
import { SPOTIFY_ALBUM_URL, YOUTUBE_VIDEO_URL, HERO_IMAGE } from '@/constants';
import { useParallax, useScrollReveal } from '@/hooks';

export default function Hero() {
  const [bgRef, bgOffset] = useParallax<HTMLDivElement>(0.4);
  const [ref, visible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div ref={bgRef} className="absolute inset-0 z-0" style={{ transform: `translateY(${bgOffset}px) scale(1.15)` }}>
        <img
          src={HERO_IMAGE}
          alt="G Raion — Colombian urban artist"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/50 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/80" />
      </div>

      {/* Neon glow behind title */}
      <div className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[40vh] max-w-[700px] rounded-full blur-[100px] opacity-30 bg-gradient-to-r from-cyan-glow to-red-glow animate-pulse-glow" />
      </div>

      {/* Light reflection streaks */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-glow/40 to-transparent animate-shimmer"
          style={{ animationDuration: '6s' }}
        />
        <div
          className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-glow/30 to-transparent animate-shimmer"
          style={{ animationDuration: '8s', animationDelay: '2s' }}
        />
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-20 text-center px-4 w-full max-w-4xl mx-auto">
        <p
          className={`font-sans text-sm sm:text-base tracking-[0.4em] text-cyan-glow mb-6 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          COLOMBIAN URBAN ARTIST
        </p>

        <h1
          aria-label="G Raion"
          className="whitespace-nowrap font-display text-[clamp(3.5rem,16vw,10rem)] leading-[0.85] tracking-wide"
        >
          <span
            className={`inline-block text-warm text-glow-cyan transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            G
          </span>{' '}
          <span
            className={`inline-block gradient-text-red text-glow-red transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            RAION
          </span>
        </h1>

        <p
          className={`mt-8 font-sans text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          Música, energía y buenas vibras.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <a
            href={SPOTIFY_ALBUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-glow to-cyan-neon text-ink-950 font-semibold tracking-wide text-sm uppercase overflow-hidden transition-transform hover:scale-105 glow-cyan"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Play size={18} className="fill-ink-950" />
            Escuchar en Spotify
          </a>
          <a
            href={YOUTUBE_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-red-glow/50 text-white font-semibold tracking-wide text-sm uppercase overflow-hidden transition-all hover:bg-red-glow/10 hover:border-red-glow hover:scale-105"
          >
            <Play size={18} className="text-red-glow fill-red-glow" />
            Ver en YouTube
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent overflow-hidden relative">
          <div className="w-full h-4 bg-cyan-glow animate-scroll-hint" />
        </div>
      </div>
    </section>
  );
}
