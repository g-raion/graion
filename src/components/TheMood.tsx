import { MOOD_PHRASES, MOOD_IMAGE_1, MOOD_IMAGE_2, MOOD_IMAGE_3 } from '@/constants';
import { useScrollReveal } from '@/hooks';

const IMAGES = [MOOD_IMAGE_1, MOOD_IMAGE_2, MOOD_IMAGE_3];

function MoodPhrase({ phrase, index }: { phrase: string; index: number }) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.4, once: false });
  const isActive = visible;

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden snap-start"
    >
      {/* Background visual */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: isActive ? 0.15 : 0 }}
      >
        <img
          src={IMAGES[index % IMAGES.length]}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/60" />
      </div>

      <div
        className={`relative z-10 text-center px-6 max-w-4xl transition-all duration-1000 ${
          isActive ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-md'
        }`}
      >
        <p className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-warm tracking-wide leading-tight">
          {phrase}
        </p>
        <div
          className={`mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-glow to-transparent transition-all duration-1000 ${
            isActive ? 'opacity-100 w-24' : 'opacity-0 w-0'
          }`}
          style={{ transitionDelay: '0.3s' }}
        />
      </div>
    </div>
  );
}

export default function TheMood() {
  return (
    <section className="relative z-10 snap-y snap-mandatory">
      {MOOD_PHRASES.map((phrase, i) => (
        <MoodPhrase key={i} phrase={phrase} index={i} />
      ))}
    </section>
  );
}
