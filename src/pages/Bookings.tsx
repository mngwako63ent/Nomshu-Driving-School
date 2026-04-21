import { Phone, Mail, FileText, CheckCircle2, CarFront } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function Bookings() {
  const steps = [
    { title: 'Contact Us', desc: 'Reach out via phone, WhatsApp, or email.', icon: Phone },
    { title: 'Choose Package', desc: 'Select the driving lesson package that suits you.', icon: FileText },
    { title: 'Confirm Schedule', desc: 'Set your dates and coordinate with your instructor.', icon: CheckCircle2 },
    { title: 'Start Driving', desc: 'Begin your journey with confidence.', icon: CarFront }
  ];

  return (
    <div className="py-20 lg:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Book Your Lessons
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Ready to get started? Contact us using your preferred method below, and our team will get you scheduled.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full font-medium text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            All bookings are confirmed within 24 hours.
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Options */}
          <div className="space-y-6">
            <AnimatedSection delay={0.1}>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Options</h2>
              
              <a href="tel:0785073276" className="flex items-center gap-6 p-6 rounded-3xl bg-gray-800/40 backdrop-blur border border-gray-700/50 shadow-sm hover:border-orange-500/40 transition-all group mb-4">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-1">Call (Primary)</h3>
                  <span className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">078 507 3276</span>
                </div>
              </a>

              <a href="tel:0100238253" className="flex items-center gap-6 p-6 rounded-3xl bg-gray-800/40 backdrop-blur border border-gray-700/50 shadow-sm hover:border-orange-500/40 transition-all group mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gray-700/50 text-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-orange-500/10 group-hover:text-orange-500">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-1">Alternative Number</h3>
                  <span className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">010 023 8253</span>
                </div>
              </a>

              <a href="https://wa.me/27785073276" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/20 shadow-sm hover:bg-[#25D366]/20 transition-all group mb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#25D366] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#25D366] mb-1">WhatsApp Chat</h3>
                  <span className="text-xl font-bold text-white group-hover:text-[#25D366] transition-colors">Message Us</span>
                </div>
              </a>

              <a href="mailto:nomshu21@gmail.com" className="flex items-center gap-6 p-6 rounded-3xl bg-gray-800/40 backdrop-blur border border-gray-700/50 shadow-sm hover:border-orange-500/40 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-gray-700/50 text-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-orange-500/10 group-hover:text-orange-500">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-1">Email</h3>
                  <span className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">nomshu21@gmail.com</span>
                </div>
              </a>
            </AnimatedSection>
          </div>

          {/* Booking Process Process */}
          <AnimatedSection delay={0.3} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 p-10 md:p-14 rounded-[2.5rem] text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-10">The Booking Process</h2>
            
            <div className="space-y-10 relative">
              <div className="absolute top-4 bottom-4 left-[23px] w-0.5 bg-gray-700"></div>

              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                    <step.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      <span className="text-orange-400 mr-2">{i + 1}.</span>{step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
}
