import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import {
  FilmGrain,
  MouseSpotlight,
  FloatingParticles,
  NeonGradientBackground,
  ScrollProgressBar,
} from '@/components/Ambient';
import Hero from '@/components/Hero';
import AlbumExperience from '@/components/AlbumExperience';
import FeaturedVideo from '@/components/FeaturedVideo';
import YouTubePlaylist from '@/components/YouTubePlaylist';
import TheMood from '@/components/TheMood';
import TracksSpotlight from '@/components/TracksSpotlight';
import Artist from '@/components/Artist';
import Platforms from '@/components/Platforms';
import FanExperience from '@/components/FanExperience';
import { useScrollProgress } from '@/hooks';

function App() {
  const [loading, setLoading] = useState(true);
  const progress = useScrollProgress();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}

      <NeonGradientBackground />
      <FloatingParticles count={35} />
      <MouseSpotlight />
      <FilmGrain />
      <ScrollProgressBar progress={progress} />
      <Navigation />

      <main className="relative">
        <Hero />
        <Artist />
        <Platforms />
        <AlbumExperience />
        <FeaturedVideo />
        <TheMood />
        <TracksSpotlight />
        <YouTubePlaylist />
        <FanExperience />

        <footer className="relative z-10 border-t border-white/5 px-4 py-12 text-center">
          <p className="mb-2 font-display text-3xl tracking-[0.2em] text-warm">G RAION</p>
          <p className="text-xs uppercase tracking-[0.2em] text-white/30">El universo sigue en movimiento</p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-cyan-glow/30" />
            <span className="text-[10px] tracking-[0.3em] text-white/20">MISMA VIBRA</span>
            <span className="h-px w-8 bg-red-glow/30" />
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
