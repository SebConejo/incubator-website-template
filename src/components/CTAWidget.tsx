import React from 'react';

interface CTAWidgetProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
}

const CTAWidget: React.FC<CTAWidgetProps> = ({ title, description, buttonText, backgroundImage }) => {
  return (
    <div 
      className="relative bg-cover bg-center bg-black h-96 flex items-center justify-center text-center"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})` }}
    >
      <div className="max-w-lg px-6">
        <h3 className="text-3xl font-thin text-white mb-6 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-200 font-light mb-10 leading-relaxed">
          {description}
        </p>
        <button className="bg-orange-400 text-black px-12 py-4 text-sm font-medium tracking-wide hover:bg-orange-300 transition-colors duration-200">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CTAWidget;