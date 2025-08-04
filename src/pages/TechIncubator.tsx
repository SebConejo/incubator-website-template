import React from 'react';
import Testimonial from '../components/Testimonial';
import CTAWidget from '../components/CTAWidget';
import { Cpu, Beaker, Rocket, Shield } from 'lucide-react';

const TechIncubator = () => {
  const testimonials = [
    {
      quote: "The technical expertise and resources provided helped us build a robust AI platform that's now serving millions of users.",
      author: "David Park",
      company: "Neural Labs",
      role: "CTO & Co-founder"
    },
    {
      quote: "From blockchain to quantum computing, the incubator provided access to cutting-edge technology and brilliant minds.",
      author: "Lisa Zhang",
      company: "CryptoSecure",
      role: "Founder"
    },
    {
      quote: "The 18-month program gave us time to perfect our technology while providing the support network we needed.",
      author: "Ahmed Hassan",
      company: "BioTech Innovations",
      role: "CEO"
    }
  ];

  const features = [
    { icon: <Cpu className="w-6 h-6" />, title: '18-Month Program', description: 'Extended timeline for deep technology development' },
    { icon: <Beaker className="w-6 h-6" />, title: 'R&D Resources', description: 'Access to labs, equipment, and research facilities' },
    { icon: <Shield className="w-6 h-6" />, title: 'IP Protection', description: 'Legal support for patents and intellectual property' },
    { icon: <Rocket className="w-6 h-6" />, title: 'Technical Mentorship', description: 'Guidance from leading technologists and researchers' }
  ];

  return (
    <div className="pt-20 bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <h1 className="text-5xl lg:text-6xl font-thin tracking-tight text-white mb-8 leading-tight">
                Tech
                <br />
                Incubator
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
                From concept to breakthrough. Build revolutionary technology solutions with access to cutting-edge 
                research facilities, world-class technical expertise, and a network of leading scientists and engineers. 
                Our 18-month program is designed for deep tech innovations that require extended development cycles.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-12">
                <span className="bg-gray-900 px-4 py-2 rounded border border-gray-800">18-Month Program</span>
                <span className="bg-gray-900 px-4 py-2 rounded border border-gray-800">R&D Facilities</span>
                <span className="bg-gray-900 px-4 py-2 rounded border border-gray-800">IP Protection</span>
                <span className="bg-gray-900 px-4 py-2 rounded border border-gray-800">Technical Mentorship</span>
              </div>
              <button className="bg-orange-400 text-black px-12 py-4 text-sm font-medium tracking-wide hover:bg-orange-300 transition-all duration-200 hover:scale-105">
                START YOUR JOURNEY
              </button>
              
              {/* Decorative Elements */}
              <div className="absolute -top-16 -left-16 w-40 h-40 border border-orange-400/20 rounded-full"></div>
              <div className="absolute top-32 -right-12 w-24 h-24 bg-orange-400/10 rounded-lg rotate-45"></div>
              <div className="absolute -bottom-20 left-40 w-16 h-16 bg-orange-400/20 rounded-full"></div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg" 
                  alt="Tech innovation lab" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-400/10 rounded-full blur-xl"></div>
              <div className="absolute top-24 -left-8 w-8 h-8 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-40 -right-8 w-10 h-10 border-2 border-orange-400/60 rounded-full"></div>
              <div className="absolute -bottom-8 left-24 w-28 h-28 border border-orange-400/30 rounded-lg rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Companies */}
      <section className="py-20 px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-thin tracking-tight text-white mb-16 text-center">
            Innovation Portfolio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">Neural Labs</div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">CryptoSecure</div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">BioTech+</div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">QuantumOS</div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">RoboCore</div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">NanoMed</div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">SpaceLink</div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">CleanEnergy</div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">GenomeAI</div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">MaterialX</div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">FusionTech</div>
            <div className="bg-black border border-gray-800 h-16 flex items-center justify-center text-white font-light text-sm">NeuroLink</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                      {index === 0 ? '🔬' : index === 1 ? '⚗️' : index === 2 ? '🛡️' : '🚀'}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 font-light text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Focus Areas */}
      <section className="py-32 px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-thin tracking-tight text-white mb-16 text-center">
            Technology Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-black border border-gray-800 p-8 text-center hover:border-gray-700 transition-colors duration-300">
              <h3 className="text-xl font-medium text-white mb-4">Artificial Intelligence</h3>
              <p className="text-gray-300 font-light mb-4">Machine learning, deep learning, computer vision, and natural language processing</p>
              <div className="text-sm text-gray-400">
                <span className="block">• Neural Networks</span>
                <span className="block">• Computer Vision</span>
                <span className="block">• NLP & LLMs</span>
              </div>
            </div>
            <div className="bg-black border border-gray-800 p-8 text-center hover:border-gray-700 transition-colors duration-300">
              <h3 className="text-xl font-medium text-white mb-4">Blockchain & Web3</h3>
              <p className="text-gray-300 font-light mb-4">Decentralized protocols, smart contracts, and next-generation financial infrastructure</p>
              <div className="text-sm text-gray-400">
                <span className="block">• DeFi Protocols</span>
                <span className="block">• Smart Contracts</span>
                <span className="block">• Layer 2 Solutions</span>
              </div>
            </div>
            <div className="bg-black border border-gray-800 p-8 text-center hover:border-gray-700 transition-colors duration-300">
              <h3 className="text-xl font-medium text-white mb-4">Biotechnology</h3>
              <p className="text-gray-300 font-light mb-4">Gene therapy, synthetic biology, and precision medicine technologies</p>
              <div className="text-sm text-gray-400">
                <span className="block">• Gene Editing</span>
                <span className="block">• Synthetic Biology</span>
                <span className="block">• Drug Discovery</span>
              </div>
            </div>
            <div className="bg-black border border-gray-800 p-8 text-center hover:border-gray-700 transition-colors duration-300">
              <h3 className="text-xl font-medium text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 font-light mb-4">Quantum algorithms, hardware development, and quantum-safe cryptography</p>
              <div className="text-sm text-gray-400">
                <span className="block">• Quantum Algorithms</span>
                <span className="block">• Hardware Systems</span>
                <span className="block">• Cryptography</span>
              </div>
            </div>
            <div className="bg-black border border-gray-800 p-8 text-center hover:border-gray-700 transition-colors duration-300">
              <h3 className="text-xl font-medium text-white mb-4">Advanced Materials</h3>
              <p className="text-gray-300 font-light mb-4">Nanotechnology, metamaterials, and next-generation manufacturing processes</p>
              <div className="text-sm text-gray-400">
                <span className="block">• Nanomaterials</span>
                <span className="block">• 3D Printing</span>
                <span className="block">• Smart Materials</span>
              </div>
            </div>
            <div className="bg-black border border-gray-800 p-8 text-center hover:border-gray-700 transition-colors duration-300">
              <h3 className="text-xl font-medium text-white mb-4">Clean Technology</h3>
              <p className="text-gray-300 font-light mb-4">Renewable energy systems, carbon capture, and sustainable manufacturing</p>
              <div className="text-sm text-gray-400">
                <span className="block">• Energy Storage</span>
                <span className="block">• Carbon Capture</span>
                <span className="block">• Green Manufacturing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-32 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-thin tracking-tight text-white mb-16 text-center">
            Research Partners
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg" 
                alt="Research Partner" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h3 className="text-xl font-medium text-white mb-2">Dr. Elena Vasquez</h3>
              <p className="text-gray-400 font-light mb-4">AI Research Director</p>
              <p className="text-sm text-gray-500">Former DeepMind, Stanford PhD, 50+ publications</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg" 
                alt="Research Partner" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h3 className="text-xl font-medium text-white mb-2">Prof. Michael Zhang</h3>
              <p className="text-gray-400 font-light mb-4">Quantum Computing Lead</p>
              <p className="text-sm text-gray-500">MIT Professor, IBM Research, Quantum pioneer</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg" 
                alt="Research Partner" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h3 className="text-xl font-medium text-white mb-2">Dr. Sarah Johnson</h3>
              <p className="text-gray-400 font-light mb-4">Biotech Innovation Head</p>
              <p className="text-sm text-gray-500">Ex-Genentech, Harvard Medical, Gene therapy expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-thin tracking-tight text-white mb-16 text-center">
            Innovation Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <CTAWidget
            title="Build the Future"
            description="Join visionary technologists creating breakthrough innovations. Our next cohort begins this Fall."
            buttonText="START YOUR JOURNEY"
            backgroundImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          />
        </div>
      </section>
    </div>
  );
};

export default TechIncubator;