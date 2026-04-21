/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import DrivingServices from './pages/DrivingServices';
import VehicleServices from './pages/VehicleServices';
import Packages from './pages/Packages';
import HallOfFame from './pages/HallOfFame';
import Reviews from './pages/Reviews';
import Bookings from './pages/Bookings';
import Contact from './pages/Contact';
import ScrollToTop from './components/utils/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen text-white font-sans selection:bg-orange-500/30">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/driving-services" element={<DrivingServices />} />
            <Route path="/vehicle-services" element={<VehicleServices />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/hall-of-fame" element={<HallOfFame />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
