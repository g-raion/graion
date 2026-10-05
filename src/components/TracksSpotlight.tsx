import { ExternalLink, Music2, Disc3 } from 'lucide-react';
import artistImage from '@/components/Artist/image.png';
import { TRACKS } from '@/constants';
import { useScrollReveal } from '@/hooks';

function TrackCard({ track, index }: { track: typeof TRACKS[number]; index: number }) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <article
      ref={ref}
      className={`group relative w-[82vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-glow/0 to-red-glow/0 blur-md group-hover:from-cyan-glow/35 group-hover:to-red-glow/25 transition-all duration-300" />
      <div className="relative h-full min-h-[285px] overflow-hidden rounded-2xl glass border border-white/[0.08] transition-all duration-300 group-hover:-translate-y-2 group-hover:border-cyan-glow/35">
        <img
          src={artistImage}
          alt="G Raion"
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/30" />

        <div className="relative flex h-full min-h-[285px] flex-col justify-between p-6">
          <div className="flex items-start justify-between">
            <span className="font-display text-6xl leading-none text-white/[0.12]">{String(track.index).padStart(2, '0')}</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-glow/30 bg-ink-950/50 text-cyan-glow">
              <Music2 size={18} />
            </div>
          </div>

          <div>
            <h3 className="font-display text-3xl tracking-wide text-warm">{track.title}</h3>
            <p className="mt-1 text-sm text-white/55">{track.artist}</p>
            <a
              href={track.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-glow px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-950 transition-all duration-300 hover:bg-warm hover:scale-[1.03]"
            >
              <ExternalLink size={15} />
              Escuchar en Spotify
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TracksSpotlight() {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="track-spotlight" className="relative z-10 overflow-hidden py-24 sm:py-32 px-4">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className={`mb-12 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-glow">
            <Disc3 size={16} />
            <span>G Raion — selección musical</span>
          </div>
          <h2 className="font-display text-5xl tracking-wide text-warm sm:text-6xl">TRACK SPOTLIGHT</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50 sm:text-base">
            Una selección de canciones para entrar en la vibra de G Raion.
          </p>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:gap-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {TRACKS.map((track, index) => (
            <TrackCard key={`${track.title}-${track.spotifyUrl}`} track={track} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
