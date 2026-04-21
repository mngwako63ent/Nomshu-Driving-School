import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Car } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-2 group inline-block">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-green-600 text-white flex items-center justify-center shadow-xl shadow-orange-500/20 group-hover:scale-110 transition-all duration-300">
                <Car size={26} />
              </div>
              <div>
                <span className="block font-bold text-xl leading-tight tracking-tighter gradient-text">
                  Nomshu
                </span>
                <span className="block text-[11px] uppercase font-bold text-gray-500 tracking-widest">
                  Driving School
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Empowering safe and responsible drivers through professional training and excellent service. Your journey to driving success starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: 'About', path: '/about' },
                { name: 'Driving Services', path: '/driving-services' },
                { name: 'Packages', path: '/packages' },
                { name: 'Hall of Fame', path: '/hall-of-fame' },
                { name: 'Reviews', path: '/reviews' },
                { name: 'Book Now', path: '/bookings' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-orange-400 transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">Johannesburg, South Africa</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:0785073276" className="text-sm text-gray-400 hover:text-white transition-colors">078 507 3276</a>
                  <a href="tel:0100238253" className="text-sm text-gray-400 hover:text-white transition-colors">010 023 8253</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="mailto:nomshu21@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  nomshu21@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Nomshu Driving School. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
