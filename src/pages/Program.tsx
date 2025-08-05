import { Award, Globe, TrendingUp, Users2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CTAWidget from '../components/CTAWidget'
import Testimonial from '../components/Testimonial'

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Expansion',
    description: 'Strategic support for international market entry',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Growth Strategy',
    description: 'Data-driven approaches to accelerate revenue',
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: 'Leadership Development',
    description: 'Executive coaching and team building expertise',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Series A+ Ready',
    description: 'Preparation for advanced funding rounds',
  },
]

const Program = () => {
  const { slug } = useParams()
  const [program, setProgram] = useState(null)

  useEffect(() => {
    if (!slug) return
    fetch(
      `http://localhost:1111/api/collections/programs?name_eq=${encodeURIComponent(
        slug
      )}&relations=testimonials,callToAction`
    )
      .then((res) => res.json())
      .then((data) => setProgram(data.data?.[0] || null))
  }, [slug])

  return (
    <div className="pt-20 bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <h1 className="text-5xl lg:text-6xl font-thin tracking-tight text-white mb-8 leading-tight">
                {program ? program.name : '...'}
              </h1>
              <div
                className="text-xl text-gray-300 font-light leading-relaxed mb-12"
                dangerouslySetInnerHTML={{
                  __html: program?.description || '<p>Loading...</p>',
                }}
              />
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-12">
                <span className="bg-gray-900 px-4 py-2 rounded border border-gray-800">
                  Global Expansion
                </span>
                <span className="bg-gray-900 px-4 py-2 rounded border border-gray-800">
                  Growth Strategy
                </span>
                <span className="bg-gray-900 px-4 py-2 rounded border border-gray-800">
                  Leadership Development
                </span>
                <span className="bg-gray-900 px-4 py-2 rounded border border-gray-800">
                  Series A+ Ready
                </span>
              </div>
              <button className="bg-orange-400 text-black px-12 py-4 text-sm font-medium tracking-wide hover:bg-orange-300 transition-all duration-200 hover:scale-105">
                APPLY FOR {program ? program.name?.toUpperCase() : 'PROGRAM'}
              </button>
              {/* Decorative Elements */}
              <div className="absolute -top-20 -left-20 w-48 h-48 border border-orange-400/20 rounded-full"></div>
              <div className="absolute top-40 -right-16 w-28 h-28 bg-orange-400/10 rounded-lg rotate-45"></div>
              <div className="absolute -bottom-24 left-48 w-20 h-20 bg-orange-400/20 rounded-full"></div>
            </div>
            {/* Right Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Program team meeting"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-12 -right-12 w-52 h-52 bg-orange-400/10 rounded-full blur-xl"></div>
              <div className="absolute top-28 -left-10 w-10 h-10 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-48 -right-10 w-12 h-12 border-2 border-orange-400/60 rounded-full"></div>
              <div className="absolute -bottom-10 left-28 w-32 h-32 border border-orange-400/30 rounded-lg rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Companies (static) */}
      <section className="py-20 px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-thin tracking-tight text-white mb-16 text-center">
            Scale-up Portfolio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">
              LogiStream
            </div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">
              FinanceFlow
            </div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">
              EcoLogistics
            </div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">
              GlobalTech
            </div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">
              DataFlow
            </div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">
              CloudScale
            </div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">
              MarketOS
            </div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">
              TradeTech
            </div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">
              SupplyAI
            </div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">
              RetailOS
            </div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">
              HealthScale
            </div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">
              EduGlobal
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (static) */}
      <section className="py-20 px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-thin tracking-tight text-white mb-16 text-center">
            Program Focus
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                    <div className="text-black text-2xl">
                      {index === 0
                        ? '🌍'
                        : index === 1
                        ? '📈'
                        : index === 2
                        ? '👥'
                        : '🏆'}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-light text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section (static) */}
      <section className="py-32 px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-thin tracking-tight text-white mb-16 text-center">
            Program Requirements & Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="bg-black border border-gray-800 p-8">
              <h3 className="text-xl font-medium text-white mb-6">
                Minimum Requirements
              </h3>
              <ul className="space-y-4 text-gray-300 font-light">
                <li>• $1M+ Annual Recurring Revenue</li>
                <li>• Proven product-market fit</li>
                <li>• 25+ employees</li>
                <li>• Clear growth trajectory</li>
                <li>• Expansion-ready business model</li>
                <li>• Strong leadership team</li>
                <li>• Scalable technology platform</li>
              </ul>
            </div>
            <div className="bg-black border border-gray-800 p-8">
              <h3 className="text-xl font-medium text-white mb-6">
                Strategic Support
              </h3>
              <ul className="space-y-4 text-gray-300 font-light">
                <li>• Strategic growth planning</li>
                <li>• International market research</li>
                <li>• Competitive intelligence</li>
                <li>• Partnership development</li>
                <li>• Operational optimization</li>
                <li>• Technology scaling guidance</li>
                <li>• Regulatory compliance support</li>
              </ul>
            </div>
            <div className="bg-black border border-gray-800 p-8">
              <h3 className="text-xl font-medium text-white mb-6">
                Network & Capital
              </h3>
              <ul className="space-y-4 text-gray-300 font-light">
                <li>• Executive mentorship program</li>
                <li>• Investor introductions</li>
                <li>• Series A+ preparation</li>
                <li>• Board advisory support</li>
                <li>• Global partner network</li>
                <li>• Customer introductions</li>
                <li>• Talent acquisition support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board (static) */}
      <section className="py-32 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-thin tracking-tight text-white mb-16 text-center">
            Advisory Board
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Advisor"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h4 className="text-white font-medium mb-1">Robert Kim</h4>
              <p className="text-gray-400 text-sm">Ex-McKinsey Partner</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
                alt="Advisor"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h4 className="text-white font-medium mb-1">Jennifer Liu</h4>
              <p className="text-gray-400 text-sm">Salesforce VP</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                alt="Advisor"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h4 className="text-white font-medium mb-1">Alex Thompson</h4>
              <p className="text-gray-400 text-sm">Netflix Director</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg"
                alt="Advisor"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h4 className="text-white font-medium mb-1">Diana Rodriguez</h4>
              <p className="text-gray-400 text-sm">Amazon VP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (dynamic) */}
      <section className="py-32 px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-thin tracking-tight text-white mb-16 text-center">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {program?.testimonials?.length > 0 ? (
              program.testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))
            ) : (
              <p className="text-gray-400">No testimonials yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section (dynamic) */}
      {program?.callToAction && (
        <section className="px-6 lg:px-8 mb-32">
          <div className="max-w-7xl mx-auto">
            <CTAWidget
              title={program.callToAction.title}
              description={program.callToAction.description}
              buttonText={program.callToAction.buttonAnchor}
              backgroundImage={program.callToAction.photo?.medium}
              buttonLink={program.callToAction.buttonLink}
            />
          </div>
        </section>
      )}
    </div>
  )
}

export default Program
