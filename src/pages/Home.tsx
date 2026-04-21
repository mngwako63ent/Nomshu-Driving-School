import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Target, MoveRight, CalendarCheck, Car } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { InteractiveImageAccordion } from '../components/ui/interactive-image-accordion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-orange-500/30">
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-48 pb-20 px-4 sm:px-8 lg:px-12 xl:px-24 2xl:px-32 w-full max-w-[120rem] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 overflow-hidden">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[45%] xl:w-[40%] z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-sm text-xs font-bold uppercase tracking-widest text-orange-400 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            Johannesburg's Premier Choice
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-bold tracking-tighter leading-[0.95] mb-6 text-white"
          >
            Learn to drive.<br />
            <span className="gradient-text">Pass first time.</span><br />
            Zero stress.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-gray-300 mb-10 max-w-xl leading-relaxed"
          >
            We are passionate about helping learners become safe, skilled, and confident drivers. Your journey to driving success starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              to="/bookings"
              className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4"
            >
              Book Your Lessons <MoveRight size={18} />
            </Link>
            <Link
              to="/packages"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all hover:scale-105 shadow-sm"
            >
              View Packages
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Interactive Image Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full lg:w-[55%] xl:w-[60%] flex justify-center lg:justify-end mt-12 lg:mt-0 z-10"
        >
           <InteractiveImageAccordion />
        </motion.div>
      </section>

      {/* How it works (Process) */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            The road to your licence, <span className="gradient-text">simplified.</span>
          </h2>
          <p className="text-lg font-medium text-gray-400">
            We've removed the friction from driving lessons. No more endless back-and-forth. 
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Choose your package', desc: 'Select the driving lessons or vehicle services that fit your specific needs and budget.' },
            { step: '02', title: 'Book instantly', desc: 'Contact us via WhatsApp or Phone to lock in your schedule without delays.' },
            { step: '03', title: 'Pass with confidence', desc: 'Learn from accredited experts and walk into your test day fully prepared.' },
          ].map((item) => (
            <AnimatedSection key={item.step} className="bg-gray-800/40 backdrop-blur-md p-10 rounded-[2rem] border border-gray-700/50 shadow-xl relative overflow-hidden group hover:border-orange-500/40 transition-colors">
              <span className="absolute top-8 right-8 text-6xl font-bold tracking-tighter text-gray-700/30">{item.step}</span>
              <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center font-bold mb-8 relative z-10 shadow-[inset_0_0_10px_rgba(249,115,22,0.1)] group-hover:bg-orange-500/20 group-hover:scale-110 transition-all">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{item.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 max-w-2xl">
              All-in-one hub for your <span className="gradient-text">vehicle needs.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
            {/* Big Feature */}
            <AnimatedSection className="md:col-span-2 md:row-span-2 bg-gray-800/40 backdrop-blur-xl rounded-[2rem] border border-gray-700/50 p-8 sm:p-10 min-h-[400px] md:min-h-0 flex flex-col justify-start md:justify-between overflow-hidden relative group hover:border-orange-500/40 transition-all">
              <div className="relative z-10 max-w-xs sm:max-w-sm mb-32 md:mb-0">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center mb-6 shadow-[inset_0_0_10px_rgba(34,197,94,0.1)] group-hover:bg-green-500/20 transition-colors">
                  <Car size={24} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">Comprehensive Driving Lessons</h3>
                <p className="text-gray-400 font-medium leading-relaxed text-sm sm:text-base">
                  Code 8 (Light), Code 10 (Medium), and Code 14 (Heavy). Patient instruction guaranteed.
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 sm:right-0 sm:bottom-0 w-[85%] sm:w-[70%] md:w-2/3 h-[50%] md:h-2/3 bg-gray-900/80 backdrop-blur-md rounded-tl-[3rem] border-t border-l border-gray-700/50 transform translate-x-4 translate-y-4 sm:translate-x-8 sm:translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 sm:group-hover:translate-x-4 sm:group-hover:translate-y-4 transition-transform duration-500 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                <img src="https://res.cloudinary.com/dm7sxhaeb/image/upload/v1776773121/Comprehensive_Driving_Lessons_202604211404_1_x9ecgn.jpg" className="w-[85%] h-[85%] object-cover rounded-2xl shadow-2xl opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" alt="Instructor" />
              </div>
            </AnimatedSection>

            {/* Small Feature 1 */}
            <AnimatedSection className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-[2rem] p-8 sm:p-10 min-h-[250px] md:min-h-0 text-white flex flex-col justify-end relative shadow-lg shadow-orange-500/20 overflow-hidden group transform hover:scale-[1.02] transition-transform">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-125 transition-transform duration-700">
                <ShieldCheck size={120} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold tracking-tight mb-2">Accredited</h3>
                <p className="text-orange-100 font-medium opacity-90 leading-relaxed">Fully certified instructors prioritizing your safety.</p>
              </div>
            </AnimatedSection>

            {/* Small Feature 2 */}
            <AnimatedSection className="bg-gray-800/40 backdrop-blur-xl rounded-[2rem] border border-gray-700/50 p-10 flex flex-col justify-end group hover:border-green-500/40 transition-colors">
               <div className="w-12 h-12 rounded-xl bg-gray-900 text-gray-400 flex items-center justify-center mb-auto group-hover:bg-green-500/10 group-hover:text-green-400 transition-colors shadow-inner">
                  <CalendarCheck size={24} />
                </div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">Admin Services</h3>
              <p className="text-gray-400 font-medium leading-relaxed">Vehicle licensing, NCO, and police clearances handled for you.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Massive CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-500/10 mb-8 relative group">
            <Target className="w-12 h-12 text-orange-500 relative z-10 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
            Ready to <span className="gradient-text">pass?</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful graduates who learned to drive the Nomshu way.
          </p>
          <Link
            to="/bookings"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            Start Your Journey <MoveRight size={20} />
          </Link>
        </AnimatedSection>
      </section>

    </div>
  );
}
