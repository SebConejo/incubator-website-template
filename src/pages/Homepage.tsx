import { ArrowRight, Lightbulb, Target, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Homepage = () => {
  const programs = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Startup Accelerator',
      description:
        'Transform your early-stage startup into a scalable business with our intensive 12-week program.',
      path: '/startup-accelerator',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Tech Incubator',
      description:
        'From concept to prototype. Build groundbreaking technology solutions with expert guidance.',
      path: '/tech-incubator',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Scale-up Program',
      description:
        'Accelerate growth for established startups ready to expand into new markets and territories.',
      path: '/scaleup-program',
    },
  ]

  return (
    <div className="pt-20 bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <h1 className="text-5xl lg:text-7xl font-thin tracking-tight text-white mb-8 leading-tight">
                Where Vision
                <br />
                Meets Reality
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
                We partner with visionary founders to build companies that
                define tomorrow. Our three specialized programs provide the
                resources, mentorship, and network needed to transform
                breakthrough ideas into industry-leading enterprises.
              </p>
              <button className="bg-orange-400 text-black px-12 py-4 text-sm font-medium tracking-wide hover:bg-orange-300 transition-all duration-200 hover:scale-105 relative z-20">
                EXPLORE PROGRAMS
              </button>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 border border-orange-400/20 rounded-full"></div>
              <div className="absolute top-32 -right-4 w-16 h-16 bg-orange-400/10 rounded-lg rotate-45"></div>
              <div className="absolute -bottom-12 left-24 w-8 h-8 bg-orange-400/20 rounded-full"></div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Entrepreneurs collaborating"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-400/10 rounded-full blur-xl"></div>
              <div className="absolute top-16 -left-8 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-24 -right-4 w-6 h-6 border-2 border-orange-400/60 rounded-full"></div>
              <div className="absolute -bottom-8 left-16 w-20 h-20 border border-orange-400/30 rounded-lg rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-32 px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-thin tracking-tight text-white mb-6">
              Three Pathways to Success
            </h2>
            <p className="text-lg text-gray-300 font-light max-w-3xl mx-auto">
              Each program is meticulously crafted to meet entrepreneurs at
              their specific stage of growth, providing tailored resources,
              expert guidance, and strategic support for sustainable success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 p-12 group hover:border-gray-700 transition-all duration-300"
              >
                <div className="text-white mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-black text-2xl font-bold">
                      {index === 0 ? '🚀' : index === 1 ? '⚡' : '📈'}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-light text-white mb-6 tracking-tight">
                  {program.title}
                </h3>
                <p className="text-gray-300 font-light leading-relaxed mb-8">
                  {program.description}
                </p>
                <Link
                  to={program.path}
                  className="inline-flex items-center text-sm font-medium tracking-wide text-orange-400 hover:text-orange-300 hover:gap-3 transition-all duration-200"
                >
                  LEARN MORE
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-thin tracking-tight text-white mb-6">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
              Experienced entrepreneurs and investors who have built and scaled
              successful companies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h3 className="text-xl font-medium text-white mb-2">
                Alexandra Chen
              </h3>
              <p className="text-gray-400 font-light mb-4">
                CEO & Managing Partner
              </p>
              <p className="text-sm text-gray-500">
                Former VP at Sequoia Capital, 3x successful exits
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h3 className="text-xl font-medium text-white mb-2">
                Marcus Rodriguez
              </h3>
              <p className="text-gray-400 font-light mb-4">
                CTO & Technical Partner
              </p>
              <p className="text-sm text-gray-500">
                Ex-Google, founded 2 AI startups, MIT PhD
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg"
                alt="Investment Director"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h3 className="text-xl font-medium text-white mb-2">Sarah Kim</h3>
              <p className="text-gray-400 font-light mb-4">
                Investment Director
              </p>
              <p className="text-sm text-gray-500">
                Former Goldman Sachs, Harvard MBA, 15+ years VC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-thin tracking-tight text-white mb-6">
              Impact & Results
            </h2>
            <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
              Our track record speaks to the quality of our programs and the
              success of our portfolio companies.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-16 text-center">
            <div>
              <div className="text-5xl font-thin text-white mb-4">200+</div>
              <div className="text-sm font-medium tracking-wide text-gray-400">
                COMPANIES LAUNCHED
              </div>
            </div>
            <div>
              <div className="text-5xl font-thin text-white mb-4">$2.5B+</div>
              <div className="text-sm font-medium tracking-wide text-gray-400">
                CAPITAL RAISED
              </div>
            </div>
            <div>
              <div className="text-5xl font-thin text-white mb-4">95%</div>
              <div className="text-sm font-medium tracking-wide text-gray-400">
                SUCCESS RATE
              </div>
            </div>
            <div>
              <div className="text-5xl font-thin text-white mb-4">150+</div>
              <div className="text-sm font-medium tracking-wide text-gray-400">
                INDUSTRY EXPERTS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 lg:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-thin tracking-tight text-white mb-12">
            Our Philosophy
          </h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
            We believe in the power of focused execution, strategic thinking,
            and relentless innovation. Our approach combines deep technical
            expertise with proven business methodologies, creating an
            environment where exceptional ideas can flourish and scale.
          </p>
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="text-center">
              <h3 className="text-lg font-medium text-white mb-4">
                Quality over Quantity
              </h3>
              <p className="text-gray-400 font-light text-sm">
                We work with fewer companies to provide deeper, more meaningful
                support
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-white mb-4">
                Long-term Partnership
              </h3>
              <p className="text-gray-400 font-light text-sm">
                Our relationship extends far beyond program completion
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-white mb-4">
                Global Perspective
              </h3>
              <p className="text-gray-400 font-light text-sm">
                Building companies that can compete and succeed on the world
                stage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Homepage
