import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { UsedVehicles } from './pages/UsedVehicles';
import { GenericPage } from './pages/GenericPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Top Level Pages */}
          <Route path="partners" element={<GenericPage title="Our Partners" subtitle="Collaborating for success in automotive solutions." type="partner" />} />
          <Route path="drivers" element={<GenericPage title="For Drivers" subtitle="Everything you need to get back on the road." type="driver" />} />
          {/* Redirect for the nav link variant */}
          <Route path="drivers-2" element={<Navigate to="/drivers" replace />} />
          
          <Route path="about-us" element={<GenericPage title="About Us" subtitle="Providing comprehensive claims help including vehicle recovery, replacement and repairs." />} />
          <Route path="contact" element={<GenericPage title="Contact Us" subtitle="Get in touch with our expert team today." />} />
          <Route path="used-vehicles" element={<UsedVehicles />} />

          {/* Partner Subpages */}
          <Route path="motor-insurers-brokers" element={<GenericPage title="Motor Insurers & Brokers" subtitle="We offer a compelling alternative for the insurer market." type="partner" />} />
          <Route path="accident-management-companies" element={<GenericPage title="Accident Management Companies" subtitle="Streamlined solutions for AMC partners." type="partner" />} />
          <Route path="dealerships-bodyshops" element={<GenericPage title="Dealerships & Bodyshops" subtitle="Agile credit solutions to improve bodyshop cashflow." type="partner" />} />

          {/* Driver Subpages */}
          <Route path="how-it-works" element={<GenericPage title="How It Works" subtitle="Understanding the Total Automotive process." type="driver" />} />
          <Route path="post-accident-tips" element={<GenericPage title="Post Accident Tips" subtitle="Essential advice for when the unexpected happens." type="driver" />} />
          <Route path="how-we-can-help" element={<GenericPage title="How We Can Help" subtitle="Our comprehensive support services." type="driver" />} />
          <Route path="make-a-claim" element={<GenericPage title="Make A Claim" subtitle="Start your claim process with our expert team." type="driver" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;