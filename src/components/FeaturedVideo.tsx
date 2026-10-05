import { Play, ExternalLink } from 'lucide-react';
import { YOUTUBE_VIDEO_URL, YOUTUBE_VIDEO_EMBED } from '@/constants';
import { useScrollReveal } from '@/hooks';

export default function FeaturedVideo() {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="relative py-24 sm:py-32 px-4 z-10">
      <div ref={ref} className="relative max-w-5xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-red-glow text-xs tracking-[0.3em] uppercase mb-3">Video Oficial</p>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-wide gradient-text-red text-glow-red">
            MISMA VIBRA
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="w-12 h-px bg-red-glow/50" />
            <span className="w-2 h-2 rounded-full bg-red-glow animate-pulse" />
            <span className="w-12 h-px bg-red-glow/50" />
          </div>
        </div>

        {/* Cinematic video reveal */}
        <div
          className={`relative transition-all duration-1200 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          {/* Glow effect */}
          <div className="absolute -inset-3 bg-gradient-to-r from-red-glow/30 via-cyan-glow/20 to-red-glow/30 rounded-3xl blur-2xl opacity-70 animate-pulse-glow" />

          <div className="relative rounded-2xl overflow-hidden glass-strong glow-red">
            <div className="aspect-video relative bg-ink-900">
              <iframe
                src={YOUTUBE_VIDEO_EMBED}
                title="G Raion — Misma Vibra (Video Oficial)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Floating play decoration */}
          <div className="absolute -top-6 -right-6 hidden sm:block">
            <div className="w-12 h-12 rounded-full bg-red-glow/20 backdrop-blur-sm flex items-center justify-center animate-float">
              <Play size={20} className="text-red-glow fill-red-glow" />
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
            href={YOUTUBE_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-glow to-red-neon text-white text-sm font-semibold tracking-wide uppercase transition-transform hover:scale-105 glow-red"
          >
            <ExternalLink size={16} />
            Ver en YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
