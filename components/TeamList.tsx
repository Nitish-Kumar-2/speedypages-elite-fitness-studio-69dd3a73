import React from 'react';
import { Users, Star, Trophy } from 'lucide-react';

interface TeamListProps {
  trainers: Array<{name: string; specialty: string; experience: string; icon?: string;}>
}

const iconMap: Record<string, React.ElementType> = {
  'Users': Users,
  'Star': Star,
  'Trophy': Trophy
};

const TeamList = (props: TeamListProps) => {
  const trainers = props.trainers || [];
  if (trainers.length === 0) return <div>No trainers available.</div>;

  return (
    <section className="py-12 px-4 md:py-16">
      <h2 className="text-4xl font-bold text-gray-900">Meet Our Trainers</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((trainer, idx) => {
          const IconComponent = iconMap[trainer.icon] || Users;
          return (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <IconComponent className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold">{trainer.name}</h3>
              <p className="text-gray-600">Specialty: {trainer.specialty}</p>
              <p className="text-gray-500">Experience: {trainer.experience}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamList;