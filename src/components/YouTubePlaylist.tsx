import { ExternalLink, ListVideo } from 'lucide-react';
import { YOUTUBE_PLAYLIST_URL, YOUTUBE_PLAYLIST_EMBED } from '@/constants';
import { useScrollReveal } from '@/hooks';

function SoundWaves() {
  const bars = Array.from({ length: 60 });
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-1 opacity-20 pointer-events-none overflow-hidden">
      {bars.map((_, i) => {
        const height = 20 + Math.abs(Math.sin(i * 0.5)) * 60;
        return (
          <div
            key={i}
            className="flex-1 max-w-[8px] bg-gradient-to-t from-cyan-glow/40 to-red-glow/40 rounded-t-full animate-equalize"
            style={{
              height: `${height}%`,
              animationDelay: `${i * 0.05}s`,
              animationDuration: `${0.6 + (i % 5) * 0.2}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export default function YouTubePlaylist() {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 sm:py-32 px-4 z-10 overflow-hidden">
      {/* Animated sound waves background */}
      <SoundWaves />

      <div ref={ref} className="relative max-w-4xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-cyan-glow text-xs tracking-[0.3em] uppercase mb-4">
            <ListVideo size={16} />
            <span>Playlist</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-warm tracking-wide">
            BUENAS VIBRAS<br />PLAYLIST
          </h2>
        </div>

        <div
          className={`relative transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-glow/30 via-transparent to-red-glow/30 rounded-2xl blur-lg opacity-60" />
          <div className="relative glass-strong rounded-2xl overflow-hidden">
            <div className="aspect-video relative bg-ink-900">
              <iframe
                src={YOUTUBE_PLAYLIST_EMBED}
                title="Buenas Vibras — Playlist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>

        <div
          className={`mt-8 text-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <a
            href={YOUTUBE_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-glow/40 text-cyan-glow text-sm font-semibold tracking-wide uppercase transition-all hover:bg-cyan-glow/10 hover:border-cyan-glow hover:scale-105"
          >
            <ExternalLink size={16} />
            Ver playlist completa
          </a>
        </div>
      </div>
    </section>
  );
}
