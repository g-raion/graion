import { Disc3 } from 'lucide-react';
import { useScrollReveal, useParallax } from '@/hooks';
import artistImage from '@/components/Artist/image.png';

export default function Artist() {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();
  const [imgRef, imgOffset] = useParallax<HTMLDivElement>(0.15);

  return (
    <section id="sobre-g-raion" className="relative py-24 sm:py-32 px-4 z-10">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div
            className={`relative transition-all duration-1000 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="absolute -inset-2 bg-gradient-to-b from-cyan-glow/30 to-red-glow/30 rounded-3xl blur-xl opacity-50" />
            <div className="relative rounded-2xl overflow-hidden glass-strong" style={{ aspectRatio: '1/1' }}>
              <div ref={imgRef} className="absolute inset-0" style={{ transform: `translateY(${imgOffset}px) scale(1.05)` }}>
                <img
                  src={artistImage}
                  alt="G Raion"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
              {/* Floating disc decoration */}
              <div className="absolute top-4 right-4 animate-spin-slow">
                <Disc3 size={40} className="text-cyan-glow/40" />
              </div>
            </div>
          </div>

          {/* Bio + Socials */}
          <div
            className={`transition-all duration-1000 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <p className="text-cyan-glow text-xs tracking-[0.3em] uppercase mb-4">Conoce al artista</p>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-warm tracking-wide text-glow-cyan mb-8">
              CONOCE A G RAION
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-6">
              Artista urbano colombiano que fusiona Latin Trap, Afrobeat y reggae en una
              experiencia sonora única. Su estilo elegante y callejero se refleja en cada
              producción, creando un universo visual y musical que invita a sentir, conectar
              y quedarse en la misma vibra.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-10">
              Con "Buenas Vibras", G Raion consolida su propuesta artística: música que
              trasciende fronteras y genera conexiones reales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
