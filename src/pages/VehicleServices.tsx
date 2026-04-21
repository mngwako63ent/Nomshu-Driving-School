import { FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function VehicleServices() {
  const services = [
    'Vehicle Registration',
    'Vehicle Licensing',
    'Change of Address',
    'Personalized Number Plates',
    'Engine Clearance',
    'Vehicle De-registration',
    'Change of Ownership (NCO)',
    'Roadworthy Certificate',
    'Change of Description',
    'Export Clearance',
    'Import Clearance',
    'Number Plates',
    'Data Dot',
    'Police Clearance Certificate (PRDP)',
    'Vehicle Police Clearance'
  ];

  return (
    <div className="py-20 lg:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Vehicle Administrative Services
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We don't just teach you how to drive. We take the hassle out of vehicle administration. Let our experts handle the paperwork while you focus on the road.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.05} className="group">
              <div className="bg-gray-800/40 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 hover:border-orange-500/40 shadow-lg hover:shadow-orange-500/10 transition-all flex items-center justify-between cursor-default">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 group-hover:bg-orange-500/10 group-hover:text-orange-400 transition-colors">
                    <FileText size={20} />
                  </div>
                  <span className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                    {service}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="bg-gray-800/80 border border-gray-700/50 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Need Help With Paperwork?</h3>
            <p className="text-gray-400">Contact us to get a tailored quote for any vehicle service.</p>
          </div>
          <Link
            to="/contact"
            className="btn-primary shrink-0 flex items-center gap-2"
          >
            Get a Quote <ArrowRight size={20} />
          </Link>
        </AnimatedSection>

      </div>
    </div>
  );
}
