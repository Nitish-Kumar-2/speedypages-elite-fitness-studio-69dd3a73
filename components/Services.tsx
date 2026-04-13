import React from 'react';
import { Users, Dumbbell, Heart } from 'lucide-react';

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services: Array<{icon: string; title: string; description: string; price?: string;}>
}

const iconMap: Record<string, React.ElementType> = {
  'Users': Users,
  'Dumbbell': Dumbbell,
  'Heart': Heart
};

const Services = (props: ServicesProps) => {
  const title = props.title || 'Our Premium Services';
  const subtitle = props.subtitle || 'Explore our tailored fitness programs';
  const services = props.services || [];

  return (
    <section className="py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Heart;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <IconComponent className="w-6 h-6 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="mt-2 text-gray-700">{service.description}</p>
                {service.price && <p className="mt-2 font-bold text-lg text-gray-900">{service.price}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;