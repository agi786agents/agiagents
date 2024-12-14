import React from 'react';
import { Phone, MessageSquare, Cog } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { SlideIn } from './animations/SlideIn';
import { StaggeredContainer } from './animations/StaggeredContainer';

const services = [
  {
    icon: Phone,
    title: 'AI Calling Bots',
    description: 'Automate customer calls with intelligent, natural voice AI.',
  },
  {
    icon: MessageSquare,
    title: 'Chatbots',
    description: 'Enhance customer interactions with 24/7 smart chat.',
  },
  {
    icon: Cog,
    title: 'Business Automation',
    description: 'Streamline operations with tailored AI workflows.',
  },
];

export function Services() {
  return (
    <section className="bg-primary py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(0,123,255,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn delay={200}>
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our AI Solutions Tailored for Your Success
          </h2>
        </FadeIn>

        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={150}>
          {services.map((service, index) => (
            <SlideIn
              key={service.title}
              direction={index % 2 === 0 ? 'left' : 'right'}
              className="group p-8 rounded-xl border border-primary-accent border-opacity-20 transition-all duration-300 hover:border-opacity-100 hover:shadow-[0_0_30px_rgba(0,123,255,0.3)]"
            >
              <service.icon className="w-12 h-12 text-primary-accent mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-text-light text-center">
                {service.description}
              </p>
            </SlideIn>
          ))}
        </StaggeredContainer>

        <FadeIn direction="up" delay={600} className="text-center mt-16">
          <a
            href="https://calendly.com/agi786agents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-primary-accent text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-[0_0_30px_rgba(0,123,255,0.3)]"
          >
            Get a Free Demo
          </a>
        </FadeIn>
      </div>
    </section>
  );
}