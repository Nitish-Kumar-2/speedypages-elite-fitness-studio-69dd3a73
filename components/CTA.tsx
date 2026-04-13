import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface CTAProps {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton?: string;
}

const CTA = (props: CTAProps) => {
  const title = props.title || 'Join Us Today!';
  const description = props.description || 'Experience the best fitness journey tailored for you.';
  const primaryButton = props.primaryButton || 'Get Started';
  const secondaryButton = props.secondaryButton || 'Learn More';

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-12 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-lg text-gray-700 mb-6">{description}</p>
      <div className="flex justify-center space-x-4">
        <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          <CheckCircle className="w-6 h-6 inline-block mr-2" /> {primaryButton}
        </button>
        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
          <ArrowRight className="w-6 h-6 inline-block mr-2" /> {secondaryButton}
        </button>
      </div>
    </div>
  );
};

export default CTA;