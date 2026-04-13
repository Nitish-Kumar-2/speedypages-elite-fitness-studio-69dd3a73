'use client';
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface NewsletterProps {
  title: string;
  description: string;
  buttonText: string;
}

const Newsletter = (props: NewsletterProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
  };

  const title = props.title || 'Join Our Community';
  const description = props.description || 'Subscribe to our newsletter for the latest updates and offers.';
  const buttonText = props.buttonText || 'Subscribe';

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-4">
          <Mail className="w-6 h-6 text-primary p-2" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-2 outline-none"
          />
        </div>
        <button type="submit" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">{buttonText}</button>
      </form>
    </div>
  );
};

export default Newsletter;