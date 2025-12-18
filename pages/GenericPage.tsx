import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GenericPageProps {
  title: string;
  subtitle?: string;
  type?: 'partner' | 'driver' | 'general';
}

export const GenericPage: React.FC<GenericPageProps> = ({ title, subtitle, type = 'general' }) => {
  const isPartner = type === 'partner';
  const isDriver = type === 'driver';
  
  // Dynamic gradient based on type
  const bgClass = isPartner 
    ? 'bg-gradient-to-r from-blue-900 to-primary' 
    : isDriver 
      ? 'bg-gradient-to-r from-primary to-secondary' 
      : 'bg-gray-900';

  return (
    <div className="flex flex-col min-h-[80vh] bg-white">
      {/* Hero Header */}
      <div className={`${bgClass} relative py-20 md:py-32 overflow-hidden`}>
        {/* Geometric Overlay */}
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 L100 0 L100 100 Z" fill="white" />
            </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center space-x-2 text-white/60 text-sm font-medium mb-6 uppercase tracking-wider">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white">{title}</span>
           </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-md tracking-tight">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl text-blue-50 font-light max-w-3xl leading-relaxed">{subtitle}</p>}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl -mt-20 relative z-20 border border-gray-100">
            <div className="prose prose-lg prose-blue max-w-none text-gray-600">
              <p className="lead text-2xl text-primary font-medium mb-8">
                Welcome to the {title} page.
              </p>
              <p className="mb-6">
                At Total Automotive Group, we strive to provide exceptional service. This section is dedicated to helping you navigate our comprehensive range of solutions designed specifically for your needs.
              </p>
              <p className="mb-8">
                Whether you are looking for accident management, vehicle replacement, or repair services, our team is dedicated to getting you back on the road as quickly and efficiently as possible. We leverage cutting-edge technology and a vast network of partners to ensure seamless service.
              </p>
              
              <div className="bg-gray-50 border-l-4 border-secondary p-8 my-10 rounded-r-lg">
                <h3 className="text-2xl font-black text-gray-800 mt-0 mb-4">Why Choose Us?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 m-0">
                  <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>Market-leading expertise in claims handling.</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>End-to-end solutions for insurers & drivers.</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>Transparent reporting and tracking.</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>Dedicated UK-based support team.</li>
                </ul>
              </div>

              <p>
                Please contact our team if you require further information or have specific requirements that are not covered here. We are always ready to tailor our services to meet your unique automotive needs.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};