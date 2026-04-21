import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function Contact() {
  return (
    <div className="py-20 lg:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Have questions about our driving lessons or vehicle services? Send us a message, and we'll get back to you shortly.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div className="space-y-10">
            <AnimatedSection delay={0.1}>
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-8 pl-4 border-l border-gray-700">
                <div className="flex gap-6 relative">
                  <div className="absolute -left-10 w-12 h-12 rounded-full bg-transparent flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Numbers</h3>
                    <div className="space-y-1">
                      <a href="tel:0785073276" className="block text-xl font-bold text-white hover:text-orange-400 transition-colors">078 507 3276</a>
                      <a href="tel:0100238253" className="block text-xl font-bold text-white hover:text-orange-400 transition-colors">010 023 8253</a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 relative">
                  <div className="absolute -left-10 w-12 h-12 rounded-full bg-transparent flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</h3>
                    <a href="mailto:nomshu21@gmail.com" className="block text-xl font-bold text-white hover:text-orange-400 transition-colors">
                      nomshu21@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 relative">
                  <div className="absolute -left-10 w-12 h-12 rounded-full bg-transparent flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Location</h3>
                    <span className="block text-xl font-bold text-white">Johannesburg, South Africa</span>
                  </div>
                </div>

                <div className="flex gap-6 relative">
                  <div className="absolute -left-10 w-12 h-12 rounded-full bg-transparent flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center">
                      <Clock size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Business Hours</h3>
                    <span className="block text-xl font-bold text-white">Mon – Fri: 08:00 – 17:00</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection delay={0.3} className="bg-gray-800/40 backdrop-blur p-10 rounded-3xl shadow-xl border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-gray-300">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-5 py-4 rounded-xl bg-gray-900/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-white"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-gray-300">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-5 py-4 rounded-xl bg-gray-900/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-white"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-300">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 rounded-xl bg-gray-900/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl bg-gray-900/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-white resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button type="submit" className="w-full py-4 btn-primary rounded-xl font-bold flex items-center justify-center gap-2 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
