import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { FadeIn } from './animations/FadeIn';
import { ScaleIn } from './animations/ScaleIn';
import { ParallaxSection } from './animations/ParallaxSection';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary to-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <ParallaxSection speed={0.2}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMDA3QkZGIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] animate-pulse-slow"></div>
        </ParallaxSection>
      </div>

      <div className="absolute top-4 left-4">
        <ScaleIn>
          <Logo />
        </ScaleIn>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <FadeIn delay={200}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Empower Your Business with AI
          </h1>
        </FadeIn>
        
        <FadeIn direction="up" delay={400}>
          <p className="text-xl sm:text-2xl text-text-light mb-12">
            AI Calling Bots | Chatbots | Business Automation
            <br />
            <span className="text-lg">Revolutionizing Communication & Workflow</span>
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={600}>
          <a 
            href="https://calendly.com/agi786agents"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex bg-primary-accent text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-[0_0_20px_rgba(0,123,255,0.5)] items-center gap-2"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </div>
  );
}