import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Car, Wrench, FileCheck, ExternalLink, ChevronRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Modern Hero Section with Split Cards */}
      <section className="relative min-h-[85vh] flex items-center bg-gray-50 pt-20 pb-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 clip-diagonal-hero overflow-hidden">
           <img 
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2128&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-100" 
            alt="Traffic" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-16 max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              MOVING YOU <br/>
              <span className="text-secondary text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-300">FORWARD</span>
            </h1>
            <p className="text-xl text-blue-100 font-light max-w-lg mb-8">
              The complete automotive solution. Whether you manage a fleet or drive a single vehicle, we keep you moving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto -mb-48 md:-mb-32">
            {/* Partners Card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-2xl overflow-hidden border-t-4 border-primary hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck size={120} className="text-primary" />
              </div>
              <h2 className="text-3xl font-black text-primary mb-2">PARTNERS</h2>
              <div className="h-1 w-12 bg-primary mb-6"></div>
              <p className="text-gray-600 mb-8 min-h-[4rem]">
                Comprehensive solutions for Insurers, Brokers, and Fleet Managers. Streamline your claims process.
              </p>
              <Link 
                to="/partners" 
                className="inline-flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform"
              >
                Partner Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Drivers Card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-2xl overflow-hidden border-t-4 border-secondary hover:-translate-y-2 transition-transform duration-500">
               <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Car size={120} className="text-secondary" />
              </div>
              <h2 className="text-3xl font-black text-secondary mb-2">DRIVERS</h2>
               <div className="h-1 w-12 bg-secondary mb-6"></div>
              <p className="text-gray-600 mb-8 min-h-[4rem]">
                Involved in an accident? We provide replacement vehicles, repairs, and complete claims support.
              </p>
              <Link 
                to="/drivers" 
                className="inline-flex items-center text-secondary font-bold group-hover:translate-x-2 transition-transform"
              >
                Get Help Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with extra padding for floating cards */}
      <section className="pt-48 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Impact</span>
            <h2 className="text-3xl md:text-5xl font-black text-primary mt-2">TRUSTED BY THOUSANDS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="text-6xl font-black text-primary mb-2">
                99<span className="text-4xl text-secondary align-top">%</span>
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-wider text-sm">Success Rate</p>
            </div>

            <div className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="text-6xl font-black text-primary mb-2">
                2k<span className="text-4xl text-secondary align-top">+</span>
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-wider text-sm">Claims Annually</p>
            </div>

            <div className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="text-6xl font-black text-primary mb-2">
                1.5k<span className="text-4xl text-secondary align-top">+</span>
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-wider text-sm">Vehicles Provided</p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section - Modern Grid */}
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-primary opacity-90"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 text-white">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
             <div className="w-20 h-1 bg-secondary mx-auto"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Card 1 */}
             <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-secondary/30 group-hover:rotate-6 transition-transform">
                    <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary mb-3">Total Triage</h3>
                <p className="text-blue-100 group-hover:text-gray-600 text-sm leading-relaxed mb-4">
                  White label first notification of loss (FNOL) & expert accident aftercare management.
                </p>
                <div className="w-full h-1 bg-white/20 group-hover:bg-primary/20 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-secondary"></div>
                </div>
             </div>

             {/* Card 2 */}
             <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/30 group-hover:rotate-6 transition-transform">
                    <Car size={28} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary mb-3">Total Replace</h3>
                <p className="text-blue-100 group-hover:text-gray-600 text-sm leading-relaxed mb-4">
                  Immediate replacement vehicles for Non-Fault Accidents, utilizing credit hire solutions.
                </p>
                <div className="w-full h-1 bg-white/20 group-hover:bg-primary/20 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-secondary"></div>
                </div>
             </div>

             {/* Card 3 */}
             <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-secondary/30 group-hover:rotate-6 transition-transform">
                    <Wrench size={28} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary mb-3">Total Repair</h3>
                <p className="text-blue-100 group-hover:text-gray-600 text-sm leading-relaxed mb-4">
                  Agile credit solutions to speed up repairs & significantly improve bodyshop cashflow.
                </p>
                <div className="w-full h-1 bg-white/20 group-hover:bg-primary/20 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-secondary"></div>
                </div>
             </div>

             {/* Card 4 */}
             <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/30 group-hover:rotate-6 transition-transform">
                    <FileCheck size={28} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary mb-3">Total Claims</h3>
                <p className="text-blue-100 group-hover:text-gray-600 text-sm leading-relaxed mb-4">
                  Complete end-to-end motor claims processing and comprehensive accident management.
                </p>
                <div className="w-full h-1 bg-white/20 group-hover:bg-primary/20 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-secondary"></div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primaryDark to-primary rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
              {/* Abstract shapes */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  READY TO GET BACK ON THE ROAD?
                </h2>
                <p className="text-lg text-blue-100 mb-10">
                  Our expert team is standing by to assist you with your claim, vehicle replacement, or partnership inquiry.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/contact" className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                    Contact Us Today
                  </Link>
                  <Link to="/about-us" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
         </div>
      </section>
    </div>
  );
};