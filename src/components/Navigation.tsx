import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [programs, setPrograms] = useState<{ id: string; name: string }[]>([])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    fetch('http://localhost:1111/api/collections/programs?perPage=10')
      .then((res) => res.json())
      .then((data) => {
        // The API returns { data: Program[], ... }
        setPrograms(data.data || [])
      })
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownOpen])

  const navItems = [
    { name: 'Home', path: '/' },
    // Programs dropdown will be handled separately
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-light tracking-wide text-white">
            Nexus
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-light tracking-wide transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-white border-b border-orange-400 pb-1'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Programs Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((open) => !open)}
                className="flex items-center text-sm font-light tracking-wide text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Programs <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded shadow-lg z-50">
                  {programs.length === 0 ? (
                    <div className="px-4 py-2 text-gray-500">Loading...</div>
                  ) : (
                    programs.map((program) => (
                      <Link
                        key={program.id}
                        to={`/program/${encodeURIComponent(program.name)}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {program.name}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-sm font-light tracking-wide transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Programs Dropdown for Mobile */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((open) => !open)}
                className="flex items-center w-full text-left py-3 text-sm font-light tracking-wide text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Programs <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="mt-1 w-full bg-white rounded shadow-lg z-50">
                  {programs.length === 0 ? (
                    <div className="px-4 py-2 text-gray-500">Loading...</div>
                  ) : (
                    programs.map((program) => (
                      <Link
                        key={program.id}
                        to={`/program/${encodeURIComponent(program.name)}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                        onClick={() => {
                          setDropdownOpen(false)
                          setIsOpen(false)
                        }}
                      >
                        {program.name}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
