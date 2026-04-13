import React from 'react';
import { Coffee, Users, Star } from 'lucide-react';

interface HeroProps {
  title: string;
  tagline: string;
  primaryCta?: string;
  secondaryCta?: string;
}

const Hero = (props: HeroProps) => {
  const title = props.title || 'Welcome to Elite Fitness Studio';
  const tagline = props.tagline || 'Transform Your Life Through Fitness';
  const primaryCta = props.primaryCta || 'Get Started';
  const secondaryCta = props.secondaryCta || 'Learn More';

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-[#10B981] to-[#0E9B6D] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4" aria-label="Hero title">{title}</h1>
        <p className="text-xl mb-8" aria-label="Hero tagline">{tagline}</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="px-6 py-3 bg-white text-[#10B981] rounded-lg hover:bg-gray-200 transition-colors" aria-label="Get Started button">{primaryCta}</a>
          <a href="#" className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[#10B981] transition-colors" aria-label="Learn More button">{secondaryCta}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;