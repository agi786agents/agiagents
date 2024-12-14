import React from 'react';
import { Calendar } from 'lucide-react';

export function CTA() {
  return (
    <section className="bg-gradient-to-b from-primary to-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="text-xl text-text-light mb-12">
          Join businesses leveraging AI to stay ahead of the competition.
        </p>
        <a
          href="https://calendly.com/agi786agents"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex bg-primary-accent text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-[0_0_20px_rgba(0,123,255,0.5)] items-center gap-2"
        >
          <Calendar className="w-5 h-5" />
          Schedule a Free Consultation
        </a>
      </div>
    </section>
  );
}