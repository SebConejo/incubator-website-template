import React from 'react';
import Testimonial from '../components/Testimonial';
import CTAWidget from '../components/CTAWidget';
import { Clock, Users, DollarSign, Target } from 'lucide-react';

const StartupAccelerator = () => {
  const testimonials = [
    {
      quote: "The 12-week program transformed our startup from an idea to a funded company. The mentorship was invaluable.",
      author: "Sarah Chen",
      company: "TechFlow",
      role: "CEO & Founder"
    },
    {
      quote: "Nexus didn't just provide funding—they provided the strategic guidance that helped us scale from $0 to $2M ARR.",
      author: "Marcus Thompson",
      company: "DataVault",
      role: "Co-founder"
    },
    {
      quote: "The network and connections we made through the accelerator opened doors we never thought possible.",
      author: "Emily Rodriguez",
      company: "GreenTech Solutions",
      role: "Founder"
    }
  ];

  const features = [
    { icon: <Clock className="w-6 h-6" />, title: '12-Week Program', description: 'Intensive curriculum designed for rapid growth' },
    { icon: <DollarSign className="w-6 h-6" />, title: '$100K Investment', description: 'Seed funding to accelerate your development' },
    { icon: <Users className="w-6 h-6" />, title: 'Expert Mentorship', description: 'Access to industry leaders and successful entrepreneurs' },
    { icon: <Target className="w-6 h-6" />, title: 'Demo Day', description: 'Present to investors and potential partners' }
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
                Startup
                <br />
                Accelerator
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
                Transform your early-stage startup into a scalable, investment-ready business through our intensive 
                12-week program. We provide the framework, mentorship, and resources to accelerate your journey 
                from MVP to market leader.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-12">
                <span className="bg-gray-900 px-4 py-2 rounded border border-gray-800">12-Week Intensive</span>
                <span className="bg-gray-900 px-4 py-2 rounded border border-gray-800">$100K Investment</span>
                <span className="bg-gray-900 px-4 py-2 rounded border border-gray-800">Expert Mentorship</span>
                <span className="bg-gray-900 px-4 py-2 rounded border border-gray-800">Demo Day</span>
              </div>
              <button className="bg-orange-400 text-black px-12 py-4 text-sm font-medium tracking-wide hover:bg-orange-300 transition-all duration-200 hover:scale-105">
                APPLY NOW
              </button>
              
              {/* Decorative Elements */}
              <div className="absolute -top-12 -left-12 w-32 h-32 border border-orange-400/20 rounded-full"></div>
              <div className="absolute top-24 -right-8 w-20 h-20 bg-orange-400/10 rounded-lg rotate-45"></div>
              <div className="absolute -bottom-16 left-32 w-12 h-12 bg-orange-400/20 rounded-full"></div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
                  alt="Startup team working together" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-orange-400/10 rounded-full blur-xl"></div>
              <div className="absolute top-20 -left-6 w-6 h-6 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-32 -right-6 w-8 h-8 border-2 border-orange-400/60 rounded-full"></div>
              <div className="absolute -bottom-6 left-20 w-24 h-24 border border-orange-400/30 rounded-lg rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-thin tracking-tight text-white mb-16 text-center">
            Program Structure
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-medium text-white mb-6">Weeks 1-4: Foundation</h3>
              <ul className="space-y-3 text-gray-300 font-light">
                <li>• Business model validation and refinement</li>
                <li>• Market research and competitive analysis</li>
                <li>• Product-market fit assessment</li>
                <li>• Team building and role definition</li>
                <li>• Legal structure and IP protection</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-6">Weeks 5-8: Growth</h3>
              <ul className="space-y-3 text-gray-300 font-light">
                <li>• Customer acquisition strategies</li>
                <li>• Revenue model optimization</li>
                <li>• Operational systems and processes</li>
                <li>• Financial planning and metrics</li>
                <li>• Partnership and distribution channels</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-6">Weeks 9-12: Scale</h3>
              <ul className="space-y-3 text-gray-300 font-light">
                <li>• Fundraising preparation and strategy</li>
                <li>• Investor pitch development</li>
                <li>• Due diligence readiness</li>
                <li>• Demo day presentation</li>
                <li>• Post-program growth planning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-6">Ongoing Support</h3>
              <ul className="space-y-3 text-gray-300 font-light">
                <li>• Alumni network access</li>
                <li>• Continued mentorship opportunities</li>
                <li>• Follow-on funding connections</li>
                <li>• Strategic partnership introductions</li>
                <li>• Quarterly check-ins and support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Companies */}
      <section className="py-20 px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-thin tracking-tight text-white mb-16 text-center">
            Portfolio Companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            <div className="bg-gray-900 h-16 flex items-center justify-center text-white font-light text-sm">TechFlow</div>
            <div className="bg-gray-900 h-16 flex items-center justify-center text-white font-light text-sm">DataVault</div>
            <div className="bg-gray-900 h-16 flex items-center justify-center text-white font-light text-sm">GreenTech</div>
            <div className="bg-gray-900 h-16 flex items-center justify-center text-white font-light text-sm">CloudSync</div>
            <div className="bg-gray-900 h-16 flex items-center justify-center text-white font-light text-sm">FinanceAI</div>
            <div className="bg-gray-900 h-16 flex items-center justify-center text-white font-light text-sm">MedTech+</div>
            <div className="bg-gray-900 h-16 flex items-center justify-center text-white font-light text-sm">EduStream</div>
            <div className="bg-gray-900 h-16 flex items-center justify-center text-white font-light text-sm">LogiChain</div>
            <div className="bg-gray-900 h-16 flex items-center justify-center text-white font-light text-sm">HealthOS</div>
            <div className="bg-gray-900 h-16 flex items-center justify-center text-white font-light text-sm">RetailBot</div>
            <div className="bg-gray-900 h-16 flex items-center justify-center text-white font-light text-sm">SecureNet</div>
            <div className="bg-gray-900 h-16 flex items-center justify-center text-white font-light text-sm">AgriTech</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-thin tracking-tight text-white mb-16 text-center">
            Program Overview
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                    <div className="text-black text-2xl">
                      {index === 0 ? '⏱️' : index === 1 ? '💰' : index === 2 ? '👥' : '🎯'}
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

      {/* Mentors Section */}
      <section className="py-32 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-thin tracking-tight text-white mb-16 text-center">
            Expert Mentors
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg" 
                alt="Mentor" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h4 className="text-white font-medium mb-1">James Wilson</h4>
              <p className="text-gray-400 text-sm">Ex-Uber VP</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg" 
                alt="Mentor" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h4 className="text-white font-medium mb-1">Maria Garcia</h4>
              <p className="text-gray-400 text-sm">Stripe Founder</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                alt="Mentor" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h4 className="text-white font-medium mb-1">David Chen</h4>
              <p className="text-gray-400 text-sm">Airbnb CTO</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg" 
                alt="Mentor" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h4 className="text-white font-medium mb-1">Lisa Park</h4>
              <p className="text-gray-400 text-sm">Tesla VP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-thin tracking-tight text-white mb-16 text-center">
            Success Stories
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
            title="Ready to Accelerate?"
            description="Join the next cohort of ambitious founders building the future. Applications open for our Spring 2025 program."
            buttonText="APPLY NOW"
            backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          />
        </div>
      </section>
    </div>
  );
};

export default StartupAccelerator;