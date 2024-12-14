import React from 'react';
import { Clock, HeadphonesIcon, TrendingUp } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { StaggeredContainer } from './animations/StaggeredContainer';

const benefits = [
  {
    icon: Clock,
    title: 'Efficiency Boost',
    description: 'Save time and money with intelligent automation.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Always available chat and calling solutions for your customers.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Custom AI solutions that grow with your business.',
  },
];

export function Benefits() {
  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={200}>
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why AGI Agents?
          </h2>
        </FadeIn>
        
        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={150}>
          {benefits.map((benefit) => (
            <FadeIn
              key={benefit.title}
              className="group p-8 rounded-xl border border-primary-accent border-opacity-20 transition-all duration-300 hover:border-opacity-100 hover:shadow-[0_0_30px_rgba(0,123,255,0.3)]"
            >
              <benefit.icon className="w-12 h-12 text-primary-accent mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-text-light text-center">
                {benefit.description}
              </p>
            </FadeIn>
          ))}
        </StaggeredContainer>

        <FadeIn direction="up" delay={600} className="text-center mt-16">
          <a
            href="https://calendly.com/agi786agents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-primary-accent text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-[0_0_30px_rgba(0,123,255,0.3)]"
          >
            Discover More Benefits
          </a>
        </FadeIn>
      </div>
    </section>
  );
}