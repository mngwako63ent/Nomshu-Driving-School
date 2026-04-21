import { BookOpen, CarFront, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function DrivingServices() {
  const services = [
    {
      icon: BookOpen,
      title: "Learner's Licence Preparation",
      features: [
        'Guidance through rules of the road',
        'Mock tests and exam strategies',
        'Comprehensive study resources'
      ],
      color: 'orange'
    },
    {
      icon: CarFront,
      title: 'Driving Lessons',
      description: 'Code 8 (Light), Code 10 (Medium), Code 14 (Heavy)',
      features: [
        'One-on-one instruction',
        'Structured lesson plans',
        'Progress tracking'
      ],
      color: 'green'
    },
    {
      icon: ClipboardCheck,
      title: 'Test Day Services',
      features: [
        'Vehicle hire for licence test',
        'Instructor support on test day',
        'Pre-test preparation'
      ],
      color: 'emerald'
    },
    {
      icon: ArrowUpRight,
      title: 'Refresher Lessons',
      features: [
        'Confidence rebuilding',
        'Driving technique improvement',
        'Professional driver preparation'
      ],
      color: 'orange'
    }
  ];

  return (
    <div className="py-20 lg:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Driving Services
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            From your first learner's class to getting your official licence, we provide comprehensive training programs tailored to your needs.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={0.1 * i} className="group">
              <div className="bg-gray-800/40 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-gray-700/50 shadow-lg hover:border-orange-500/40 transition-all duration-300 h-full flex flex-col pt-12">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-${service.color}-500/10 text-${service.color}-400 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                {service.description && (
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                    {service.description}
                  </p>
                )}
                <ul className="space-y-4 mt-auto">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl shadow-orange-500/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Lessons?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Choose the service that fits your needs and let's get you on the road safely.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:0785073276" className="btn-primary">
                Call Us Now
              </a>
              <Link to="/packages" className="px-8 py-4 bg-gray-600/30 backdrop-blur border border-gray-500/30 text-white rounded-full font-bold text-lg hover:bg-gray-600/50 transition-all w-full sm:w-auto">
                View Packages
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
