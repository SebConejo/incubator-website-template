import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, role }) => {
  return (
    <div className="bg-black border border-gray-800 p-12 hover:border-gray-700 transition-colors duration-300">
      <blockquote className="text-lg font-light text-gray-200 leading-relaxed mb-8">
        "{quote}"
      </blockquote>
      <div>
        <div className="font-medium text-white mb-1">{author}</div>
        <div className="text-sm text-gray-400">{role}, {company}</div>
      </div>
    </div>
  );
};

export default Testimonial;