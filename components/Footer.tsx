import React from 'react';
import { Coffee, Users, Star } from 'lucide-react';

interface FooterProps {
  companyName: string;
  copyright: string;
  links?: Array<{ label: string; path: string; }>; 
}

const Footer = (props: FooterProps) => {
  const links = props.links || [];
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">{props.companyName}</h2>
        <p className="mb-4">{props.copyright}</p>
        <div className="flex justify-center space-x-4">
          {links.map((link, index) => (
            <a key={index} href={link.path} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          <Coffee className="w-6 h-6 text-primary" aria-label="Coffee Icon" />
          <Users className="w-6 h-6 text-primary" aria-label="Users Icon" />
          <Star className="w-6 h-6 text-primary" aria-label="Star Icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;