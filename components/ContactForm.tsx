'use client';
import React, { useState } from 'react';
import { Users, Mail, Phone } from 'lucide-react';

interface ContactFormProps {
  title: string;
  subtitle?: string;
}

const ContactForm = (props: ContactFormProps) => {
  const title = props.title || 'Get in Touch';
  const subtitle = props.subtitle || 'We are here to help you on your fitness journey.';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 md:py-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center">{title}</h2>
      <p className="text-lg text-gray-600 text-center mb-8">{subtitle}</p>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <div className="flex items-center border-b border-gray-300 py-2">
          <Users className="w-6 h-6 text-primary mr-2" />
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="outline-none flex-1 py-2"
            required
            aria-label="Name"
          />
        </div>
        <div className="flex items-center border-b border-gray-300 py-2">
          <Mail className="w-6 h-6 text-primary mr-2" />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none flex-1 py-2"
            required
            aria-label="Email"
          />
        </div>
        <div className="flex items-center border-b border-gray-300 py-2">
          <Phone className="w-6 h-6 text-primary mr-2" />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="outline-none flex-1 py-2"
            required
            aria-label="Message"
          />
        </div>
        <button type="submit" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors w-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;