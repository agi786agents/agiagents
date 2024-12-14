import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "AGI Agents transformed our customer service. The AI calling system handles inquiries 24/7, and our satisfaction rates have never been higher.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    text: "The business automation solutions provided by AGI Agents helped us reduce operational costs by 40%. It's been a game-changer.",
    author: "Michael Chen",
    role: "Operations Director, InnovateCo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
  },
  {
    text: "Implementing their chatbot solution resulted in immediate improvements in customer engagement and support efficiency.",
    author: "Emily Rodriguez",
    role: "Customer Success Manager, GlobalTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prev}
              className="absolute left-0 z-10 p-2 text-primary-accent hover:text-white transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="max-w-3xl mx-12">
              <div className="relative p-8 rounded-xl border border-primary-accent border-opacity-20">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-primary-accent opacity-50" />
                <div className="text-center">
                  <p className="text-lg text-text-light mb-8">
                    {testimonials[current].text}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-white">
                        {testimonials[current].author}
                      </p>
                      <p className="text-text-light text-sm">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={next}
              className="absolute right-0 z-10 p-2 text-primary-accent hover:text-white transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}