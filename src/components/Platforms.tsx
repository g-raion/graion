import { Apple, AudioLines, Instagram, Music2, Youtube } from 'lucide-react';
import { PLATFORM_LINKS } from '@/constants';
import { useScrollReveal } from '@/hooks';

const PLATFORM_ICONS = {
  Spotify: Music2,
  'Apple Music': Apple,
  YouTube: Youtube,
  Instagram,
  TikTok: AudioLines,
};

export default function Platforms() {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="redes" className="relative z-10 px-4 py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className={`mb-12 text-center transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-glow">Conecta con el artista</p>
          <h2 className="font-display text-5xl tracking-wide text-warm sm:text-6xl">REDES Y PLATAFORMAS</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base">
            Escucha, sigue y conecta con el universo de G Raion.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PLATFORM_LINKS.map((platform, index) => {
            const Icon = PLATFORM_ICONS[platform.name as keyof typeof PLATFORM_ICONS];
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-glow/35 ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-glow/10 blur-2xl transition-all duration-300 group-hover:bg-cyan-glow/25" />
                <div className="relative flex flex-col items-center gap-4 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-ink-900/70 text-cyan-glow transition-all duration-300 group-hover:border-cyan-glow/50 group-hover:bg-cyan-glow group-hover:text-ink-950">
                    <Icon size={20} />
                  </span>
                  <span className="text-sm font-medium tracking-wide text-white/75 transition-colors group-hover:text-warm">
                    {platform.name}
                  </span>
                  <span className="text-xs text-white/25 transition-colors group-hover:text-cyan-glow">↗</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
