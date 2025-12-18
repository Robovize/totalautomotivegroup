import React from 'react';
import { Vehicle } from '../types';
import { Phone, Calendar, Gauge, Fuel, Cog, ArrowRight, Car } from 'lucide-react';

const MOCK_VEHICLES: Vehicle[] = [
  {
    id: '1',
    make: 'Kia',
    model: 'Sportage',
    trim: '1.6 T-GDi MHEV 2, 5dr',
    year: '2023',
    mileage: '2,900 miles',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    description: 'Euro 6 petrol hybrid with 1.6L engine, front and rear parking sensors, LED headlights, Apple CarPlay & Android Auto.',
    image: 'https://images.unsplash.com/photo-1698226068222-38b34c03425a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '2',
    make: 'Hyundai',
    model: 'TUCSON',
    trim: '1.6 T-GDi N Line Auto',
    year: '2024',
    mileage: '1,000 miles',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    description: 'Single owner, clear history. Features include heated steering wheel, wireless charging, automatic headlights, heated front seats.',
    image: 'https://images.unsplash.com/photo-1678873724357-19074811f568?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    make: 'Audi',
    model: 'A4',
    trim: '2.0 TFSI 35 S line S Tronic',
    year: '2023',
    mileage: '5,500 miles',
    fuel: 'Petrol',
    transmission: 'Automatic',
    description: 'Powered by a 2.0L petrol engine with 150 PS and S Tronic dual-clutch transmission. Stylish, efficient and refined.',
    image: 'https://images.unsplash.com/photo-1606152421802-db6c1d44508d?q=80&w=1931&auto=format&fit=crop'
  },
  {
    id: '4',
    make: 'Audi',
    model: 'A6 Saloon',
    trim: '2.0 TFSIe 50 Black Edition',
    year: '2023',
    mileage: '4,200 miles',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    description: 'Experience performance and sophistication. Mythos Black. Powered by 2.0L petrol plug-in hybrid delivering 299 PS.',
    image: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: '5',
    make: 'Mercedes-Benz',
    model: 'C Class',
    trim: '2.0 C300e 25.4kWh AMG Line',
    year: '2023',
    mileage: '5,800 miles',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    description: 'Serviced November 2025, warranty until 2027. Satellite navigation, electric seats, panoramic sunroof.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '6',
    make: 'BMW',
    model: '3 Series',
    trim: '2.0 320i M Sport',
    year: '2023',
    mileage: '4,000 miles',
    fuel: 'Petrol',
    transmission: 'Automatic',
    description: 'Alpine White with M PerformTex Black Cloth and M Piping upholstery. Excellent condition.',
    image: 'https://images.unsplash.com/photo-1555215695-3004980adade?q=80&w=1980&auto=format&fit=crop'
  }
];

export const UsedVehicles: React.FC = () => {
  return (
    <div className="bg-light min-h-screen">
      {/* Header Banner */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-primaryDark to-primary"></div>
         <div className="absolute -bottom-10 -right-10 opacity-10">
            <Car size={300} />
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl md:text-6xl font-black mb-4">Used Vehicles</h1>
            <p className="text-xl text-blue-200 max-w-2xl">Quality checked, reliable vehicles available for immediate purchase. Browse our selection below.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_VEHICLES.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-2xl shadow-soft hover:shadow-2xl transition-all duration-300 flex flex-col group overflow-hidden border border-gray-100">
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={vehicle.image} 
                  alt={`${vehicle.make} ${vehicle.model}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-secondary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  Available Now
                </div>
                <div className="absolute bottom-4 left-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="font-bold text-lg">{vehicle.year}</span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-gray-800 mb-1">{vehicle.make} {vehicle.model}</h3>
                  <p className="text-primary font-medium text-sm">{vehicle.trim}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-500 mb-6 bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center">
                    <Gauge className="w-4 h-4 mr-2 text-secondary" />
                    {vehicle.mileage}
                  </div>
                  <div className="flex items-center">
                    <Fuel className="w-4 h-4 mr-2 text-secondary" />
                    {vehicle.fuel}
                  </div>
                   <div className="flex items-center">
                    <Cog className="w-4 h-4 mr-2 text-secondary" />
                    {vehicle.transmission}
                  </div>
                   <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-secondary" />
                    {vehicle.year}
                  </div>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-grow">
                  {vehicle.description}
                </p>

                <button className="w-full py-3.5 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center group/btn">
                   Enquire Now
                   <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};