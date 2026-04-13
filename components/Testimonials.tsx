import React from 'react';
import { Star, Trophy, Users } from 'lucide-react';

interface TestimonialsProps {
  title?: string;
  testimonials: Array<{ name: string; role: string; feedback: string; rating?: number; }>; 
}

const Testimonials = (props: TestimonialsProps) => {
  const title = props.title || 'What Our Clients Say';
  const testimonials = props.testimonials || [];

  return (
    <section className="py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-primary mr-2" aria-hidden="true" />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
              <div className="flex items-center">
                {Array.from({ length: testimonial.rating || 5 }, (_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                ))}
              </div>
              <p className="text-gray-500 italic">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;