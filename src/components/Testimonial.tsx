import React from 'react'

interface TestimonialProps {
  content: string
  author: string
  company: string
  job: string
  image: { thumbnail: string | null; medium: string | null }
}

const Testimonial: React.FC<TestimonialProps> = ({
  content,
  author,
  image,
  company,
  job,
}) => {
  // Déterminer quelle image afficher
  const imageToShow = image.thumbnail || image.medium

  return (
    <div className="bg-black border border-gray-800 p-12 hover:border-gray-700 transition-colors duration-300">
      <blockquote className="text-lg font-light text-gray-200 leading-relaxed mb-8">
        "{content}"
      </blockquote>
      <div className="flex items-center gap-4 mt-6">
        {imageToShow ? (
          <img
            src={imageToShow}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-500" /> // Placeholder si pas d'image
        )}
        <div>
          <div className="font-medium text-white mb-1">{author}</div>
          <div className="text-sm text-gray-400">
            {job}, {company}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
