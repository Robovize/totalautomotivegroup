import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, User, MapPin, Mail, Linkedin, Facebook } from 'lucide-react';
import { NAV_ITEMS } from '../types';

export const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Top Utility Bar - Dark Blue for contrast */}
      <div className="bg-primary text-white py-2 text-[10px] md:text-xs font-medium tracking-wide z-50 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex space-x-4 sm:space-x-6">
            <a href="tel:02038704700" className="flex items-center hover:text-secondary transition-colors duration-300">
              <Phone className="w-3 h-3 mr-1.5 text-secondary" /> 
              020 3870 4700
            </a>
            <a href="mailto:claims@totalautomotivegroup.co.uk" className="flex items-center hover:text-secondary transition-colors duration-300">
              <Mail className="w-3 h-3 mr-1.5 text-secondary" /> 
              claims@totalautomotivegroup.co.uk
            </a>
          </div>
          <div className="flex space-x-4">
             <a href="#" className="hover:text-secondary transition-colors"><Linkedin size={14}/></a>
             <a href="#" className="hover:text-secondary transition-colors"><Facebook size={14}/></a>
          </div>
        </div>
      </div>

      {/* Main Header - Sticky & Clean */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-2' 
            : 'bg-white py-3 md:py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Constrained width and height on mobile */}
            <div className="flex items-center flex-1 min-w-0 mr-4 lg:mr-0 lg:flex-none">
              <Link to="/" className="block max-w-full">
                <img 
                  src="https://totalautomotivegroup.co.uk/wp-content/uploads/2025/10/Final-web-use-.jpg#172" 
                  alt="Total Automotive" 
                  className={`transition-all duration-300 ${
                    scrolled ? 'h-7 md:h-10' : 'h-8 md:h-12'
                  } w-auto max-w-full object-contain object-left`}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 xl:space-x-2 items-center">
              {NAV_ITEMS.map((item) => (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                      location.pathname.startsWith(item.path) || (item.path !== '/' && location.pathname.includes(item.path))
                        ? 'text-primary bg-blue-50' 
                        : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />}
                  </Link>

                  {/* Modern Mega-Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-4 w-64 animate-fadeIn z-50">
                      <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 ring-1 ring-black/5 p-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors group/link"
                          >
                            <span className="w-1 h-8 bg-secondary rounded-full mr-3 scale-y-0 group-hover/link:scale-y-100 transition-transform origin-center"></span>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pl-4 ml-4 border-l border-gray-200 flex items-center space-x-3">
                 <Link 
                  to="/make-a-claim" 
                  className="px-5 py-2.5 bg-secondary text-white text-sm font-bold rounded-full hover:bg-secondaryDark transition-all shadow-lg hover:shadow-secondary/30 transform hover:-translate-y-0.5 whitespace-nowrap"
                >
                  Make a Claim
                </Link>
                 <a 
                  href="#" 
                  className="p-2.5 text-primary bg-blue-50 rounded-full hover:bg-primary hover:text-white transition-all"
                  title="Partner Portal"
                >
                  <User size={18} />
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button - Fixed width, high z-index */}
            <div className="lg:hidden flex-shrink-0 z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-primary hover:text-secondary p-2 focus:outline-none rounded-md hover:bg-gray-50 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-white pt-24 pb-10 px-6 overflow-y-auto animate-fadeIn">
            <div className="space-y-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-gray-50 pb-4 last:border-0">
                  <div className="flex justify-between items-center py-2">
                    <Link
                      to={item.path}
                      className="text-xl font-bold text-primary uppercase tracking-tight"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </div>
                  {item.children && (
                    <div className="pl-4 mt-2 space-y-3 border-l-2 border-secondary/30">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block text-base font-medium text-gray-500 hover:text-secondary py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 space-y-4">
                <Link 
                  to="/make-a-claim" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="block w-full text-center py-4 bg-secondary text-white text-lg font-bold rounded-xl shadow-lg active:bg-secondaryDark active:scale-95 transition-all"
                >
                  Make a Claim
                </Link>
                <a 
                  href="#" 
                  className="block w-full text-center py-4 border-2 border-gray-100 text-gray-600 font-bold rounded-xl active:bg-gray-50 transition-colors"
                >
                  Partner Portal
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer Container - Relative for positioning the building image */}
      <div className="relative bg-white pt-10 overflow-hidden">
        
        {/* The Building Image - Sitting on top of the footer background */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex justify-center -mb-1">
             <img 
              src="https://totalautomotivegroup.co.uk/wp-content/uploads/2025/11/total-outside-CHAT-GPT.png" 
              alt="Total Automotive Office" 
              className="w-full max-w-4xl h-auto object-contain drop-shadow-2xl"
              style={{ maxHeight: '350px' }}
            />
        </div>

        {/* Footer Content Background */}
        <footer className="relative z-0 bg-primary text-white pt-24 pb-10 -mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
              
              {/* Brand Column */}
              <div>
                 <div className="bg-white p-3 rounded-lg inline-block mb-6">
                   <img 
                      src="https://totalautomotivegroup.co.uk/wp-content/uploads/2025/10/Final-web-use-.jpg#172" 
                      alt="Total Automotive" 
                      className="h-8 w-auto"
                    />
                 </div>
                 <p className="text-blue-100 text-sm leading-relaxed mb-6">
                   Your trusted partner in accident management, vehicle replacement, and repair solutions. getting you back on the road.
                 </p>
                 <div className="flex space-x-4">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                      <Linkedin size={16} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                      <Facebook size={16} />
                    </a>
                 </div>
              </div>

               {/* Links Column 1 */}
              <div>
                 <h4 className="text-secondary font-bold text-lg mb-6">Partners</h4>
                 <ul className="space-y-3 text-sm text-blue-100">
                   <li><Link to="/motor-insurers-brokers" className="hover:text-white hover:translate-x-1 transition-all inline-block">Motor Insurers & Brokers</Link></li>
                   <li><Link to="/accident-management-companies" className="hover:text-white hover:translate-x-1 transition-all inline-block">Accident Management</Link></li>
                   <li><Link to="/dealerships-bodyshops" className="hover:text-white hover:translate-x-1 transition-all inline-block">Dealerships & Bodyshops</Link></li>
                   <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Partner Portal Login</a></li>
                 </ul>
              </div>

              {/* Links Column 2 */}
               <div>
                 <h4 className="text-secondary font-bold text-lg mb-6">Drivers</h4>
                 <ul className="space-y-3 text-sm text-blue-100">
                   <li><Link to="/make-a-claim" className="hover:text-white hover:translate-x-1 transition-all inline-block font-semibold text-secondary">Make a Claim</Link></li>
                   <li><Link to="/how-it-works" className="hover:text-white hover:translate-x-1 transition-all inline-block">How it works</Link></li>
                   <li><Link to="/post-accident-tips" className="hover:text-white hover:translate-x-1 transition-all inline-block">Post accident tips</Link></li>
                   <li><Link to="/used-vehicles" className="hover:text-white hover:translate-x-1 transition-all inline-block">Used Vehicles</Link></li>
                 </ul>
              </div>

              {/* Contact Column */}
               <div>
                 <h4 className="text-secondary font-bold text-lg mb-6">Contact</h4>
                 <ul className="space-y-4 text-sm text-blue-100">
                   <li className="flex items-start">
                     <MapPin className="w-5 h-5 mr-3 text-secondary flex-shrink-0 mt-0.5" />
                     <span>571 Cable St,<br/>London, E1W 3EP</span>
                   </li>
                   <li className="flex items-center">
                     <Phone className="w-5 h-5 mr-3 text-secondary flex-shrink-0" />
                     <a href="tel:02038704700" className="hover:text-white">020 3870 4700</a>
                   </li>
                   <li className="flex items-center">
                     <Mail className="w-5 h-5 mr-3 text-secondary flex-shrink-0" />
                     <a href="mailto:claims@totalautomotivegroup.co.uk" className="hover:text-white">claims@totalautomotivegroup.co.uk</a>
                   </li>
                 </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue-300">
              <p>&copy; {new Date().getFullYear()} Total Automotive Group. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
