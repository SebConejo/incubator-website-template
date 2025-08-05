const Footer = () => (
  <footer className="bg-black border-t border-gray-800 py-20 px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-5 gap-12 mb-16">
        {/* Company Info */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-light text-white mb-6">Nexus</h3>
          <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-md">
            We partner with visionary founders to build companies that define
            tomorrow. Our specialized programs provide the resources,
            mentorship, and network needed to transform breakthrough ideas into
            industry-leading enterprises.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <div className="w-6 h-6 bg-gray-400 hover:bg-white transition-colors"></div>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <div className="w-6 h-6 bg-gray-400 hover:bg-white transition-colors"></div>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Medium</span>
              <div className="w-6 h-6 bg-gray-400 hover:bg-white transition-colors"></div>
            </a>
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-white font-medium mb-6">Programs</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="/startup-accelerator"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Startup Accelerator
              </a>
            </li>
            <li>
              <a
                href="/tech-incubator"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Tech Incubator
              </a>
            </li>
            <li>
              <a
                href="/scaleup-program"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Scale-up Program
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Application Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Program Calendar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Success Stories
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-medium mb-6">Resources</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Mentors
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Research
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Downloads
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-medium mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Press
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          © 2025 Nexus Ventures. All rights reserved.
        </p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-400 text-sm transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-400 text-sm transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-400 text-sm transition-colors"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
