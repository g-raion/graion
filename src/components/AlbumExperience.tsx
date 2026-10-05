import { ExternalLink, Disc3 } from 'lucide-react';
import { SPOTIFY_ALBUM_URL, SPOTIFY_EMBED_URL } from '@/constants';
import { useScrollReveal } from '@/hooks';

export default function AlbumExperience() {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="musica" className="relative py-24 sm:py-32 px-4 z-10">
      {/* Animated neon gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: 'linear-gradient(270deg, #2DE2C5, #FF6B4A, #11BFA7, #FF9A5A, #2DE2C5)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite',
          }}
        />
      </div>

      <div ref={ref} className="relative max-w-3xl mx-auto">
        <div
          id="buenas-vibras"
          className={`text-center mb-12 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-cyan-glow text-xs tracking-[0.3em] uppercase mb-4">
            <Disc3 size={16} />
            <span>Featured Project</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-warm tracking-wide">
            BUENAS VIBRAS
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/50">Un proyecto musical destacado de G Raion.</p>
        </div>

        {/* Premium glass card with Spotify embed */}
        <div
          className={`relative transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-glow/40 to-red-glow/40 rounded-2xl blur-lg opacity-60" />
          <div className="relative glass-strong rounded-2xl overflow-hidden glow-cyan">
            <div className="px-6 py-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-glow to-cyan-neon flex items-center justify-center">
                  <Disc3 size={20} className="text-ink-950" />
                </div>
                <div>
                  <p className="text-warm text-sm font-semibold tracking-wide">Buenas Vibras</p>
                  <p className="text-white/40 text-xs">G Raion</p>
                </div>
              </div>
              {/* Animated equalizer */}
              <div className="flex items-end gap-0.5 h-5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-0.5 bg-cyan-glow rounded-full animate-equalize"
                    style={{ animationDelay: `${i * 0.12}s`, height: '40%' }}
                  />
                ))}
              </div>
            </div>

            <iframe
              src={SPOTIFY_EMBED_URL}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block"
              title="Buenas Vibras — Spotify Player"
            />
          </div>
        </div>

        <div
          className={`mt-8 text-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <a
            href={SPOTIFY_ALBUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-glow/40 text-cyan-glow text-sm font-semibold tracking-wide uppercase transition-all hover:bg-cyan-glow/10 hover:border-cyan-glow hover:scale-105"
          >
            <ExternalLink size={16} />
            Abrir en Spotify
          </a>
        </div>
      </div>
    </section>
  );
}
