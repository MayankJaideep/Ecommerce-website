'use client';

import { HeroSection } from "@/components/ui/hero-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Welcome to Our Platform"
        subtitle={{
          regular: "Transform your ideas into ",
          gradient: "beautiful digital experiences",
        }}
        description="Transform your ideas into reality with our comprehensive suite of development tools and resources."
        ctaText="Get Started"
        ctaHref="/signup"
        bottomImage={{
          light: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          dark: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }}
        gridOptions={{
          angle: 65,
          opacity: 0.4,
          cellSize: 50,
          lightLineColor: "#4a4a4a",
          darkLineColor: "#2a2a2a",
        }}
      />
      
      {/* Additional content to demonstrate scrolling */}
      <div className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              More Content Below
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Scroll down to see the hero section in action with the grid background.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
