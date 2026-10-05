import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'G Raion', href: '#sobre-g-raion' },
  { label: 'Música', href: '#musica' },
  { label: 'Buenas Vibras', href: '#buenas-vibras' },
  { label: 'Track Spotlight', href: '#track-spotlight' },
  { label: 'Redes', href: '#redes' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[55] px-4 sm:px-6 pt-4">
      <nav className="mx-auto max-w-6xl glass-strong rounded-full px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#inicio" className="font-display text-xl tracking-[0.2em] text-warm" onClick={() => setOpen(false)}>
          G RAION
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.16em] text-white/55 hover:text-cyan-glow transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? 'Cerrar navegación' : 'Abrir navegación'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-warm hover:border-cyan-glow/50 transition-colors"
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>

        {open && (
          <div className="absolute top-[calc(100%+8px)] left-0 right-0 glass-strong rounded-2xl p-3 flex flex-col gap-1 lg:hidden">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-xs uppercase tracking-[0.16em] text-white/65 hover:bg-cyan-glow/10 hover:text-cyan-glow transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
