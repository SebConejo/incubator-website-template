import React from 'react'

interface CTAWidgetProps {
  title: string
  description: string
  buttonText: string
  backgroundImage: string
}

const CTAWidget: React.FC<CTAWidgetProps> = ({
  title,
  description,
  buttonText,
  backgroundImage,
}) => {
  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center flex items-center justify-center text-center min-h-[400px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${backgroundImage})`,
      }}
    >
      <div className="w-full max-w-2xl px-8 py-16">
        <h3 className="text-4xl font-thin text-white mb-6 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-200 font-light mb-10 leading-relaxed text-lg">
          {description}
        </p>
        <button className="bg-orange-400 text-black px-12 py-4 text-base font-medium tracking-wide hover:bg-orange-300 transition-colors duration-200 rounded-lg shadow-lg">
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default CTAWidget
