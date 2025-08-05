import React from 'react'

interface TestimonialProps {
  content: string
  author: string
  company: string
  role: string
  image: { thumbnail: string | null; medium: string | null }
}

const Testimonial: React.FC<TestimonialProps> = ({
  content,
  author,
  image,
  company,
  role,
}) => {
  // Déterminer quelle image afficher
  const imageToShow = image.thumbnail || image.medium

  return (
    <div className="bg-black border border-gray-800 p-12 hover:border-gray-700 transition-colors duration-300">
      <blockquote className="text-lg font-light text-gray-200 leading-relaxed mb-8">
        "{content}"
      </blockquote>
      <div>
        {imageToShow ? (
          <img
            src={imageToShow}
            alt={author}
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-500" /> // Placeholder si pas d'image
        )}
        <div className="font-medium text-white mb-1">{author}</div>
        <div className="text-sm text-gray-400">
          {role}, {company}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
