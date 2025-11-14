'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Dynamically import the HorizonHero component with SSR disabled
const HorizonHero = dynamic(
  () => import('@/components/ui/horizon-hero-section'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white text-lg">Loading cosmic experience...</div>
      </div>
    )
  }
);

export default function DemoPage() {
  useEffect(() => {
    // Add a class to the body to ensure proper styling
    document.body.classList.add('bg-black', 'overflow-x-hidden');
    
    return () => {
      document.body.classList.remove('bg-black', 'overflow-x-hidden');
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HorizonHero />
      
      {/* Additional content sections */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-black/80 to-black">
        <section className="min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl mb-8">
              Explore the Cosmos
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Experience the vastness of space with our interactive 3D journey.
              Scroll to navigate through different sections and discover the beauty of the universe.
            </p>
          </div>
        </section>
        
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl mb-8">
              Discover New Horizons
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Each scroll reveals new wonders of the cosmos, from distant galaxies to nebulae.
              The journey is as infinite as the universe itself.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
