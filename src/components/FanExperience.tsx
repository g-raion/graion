import { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks';

export default function FanExperience() {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="relative py-24 sm:py-32 px-4 z-10">
      <div ref={ref} className="relative max-w-2xl mx-auto">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/10 to-red-glow/10 rounded-3xl blur-3xl" />

        <div
          className={`relative glass-strong rounded-3xl p-8 sm:p-12 text-center transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-glow/30 to-red-glow/30 mb-6">
            <Mail size={28} className="text-cyan-glow" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-warm tracking-wide mb-4">
            ÚNETE A LA VIBRA
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Recibe nuevos lanzamientos, contenido exclusivo y actualizaciones
            directamente de G Raion.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-5 py-4 rounded-full bg-ink-900/80 border border-white/10 text-warm text-sm placeholder:text-white/30 focus:border-cyan-glow/50 focus:outline-none focus:ring-1 focus:ring-cyan-glow/30 transition-all"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-cyan-glow to-cyan-neon text-ink-950 font-semibold text-sm tracking-wide uppercase whitespace-nowrap transition-transform hover:scale-105 glow-cyan"
            >
              {submitted ? (
                <>
                  <Check size={18} />
                  ¡Listo!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Suscribir
                </>
              )}
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-cyan-glow text-sm animate-fade-in">
              Bienvenido a la vibra. Revisa tu correo.
            </p>
          )}

          <p className="mt-6 text-white/30 text-xs">
            Sin spam. Solo buena música.
          </p>
        </div>
      </div>
    </section>
  );
}
