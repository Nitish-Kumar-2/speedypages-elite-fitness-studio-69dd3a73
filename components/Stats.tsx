import React from 'react';
import { Users, Trophy, Star } from 'lucide-react';

interface StatsProps {
  title?: string;
  stats: Array<{ number: string; label: string; icon?: string; }>; 
}

const Stats = (props: StatsProps) => {
  const title = props.title || 'Our Achievements';
  const stats = props.stats || [];
  
  const iconMap: Record<string, React.ElementType> = {
    'Users': Users,
    'Trophy': Trophy,
    'Star': Star
  };

  return (
    <section className="py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || Star;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <IconComponent className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-3xl font-bold text-primary">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;