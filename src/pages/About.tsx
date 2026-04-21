import { Target, Flag, Heart } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function About() {
  return (
    <div className="py-20 lg:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            About Nomshu Driving School
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Nomshu Driving School was established to bridge the gap between driving theory and real-world confidence. We understand the challenges learners face and provide a calm, professional environment to build both skills and self-assurance behind the wheel.
          </p>
        </AnimatedSection>

        {/* Mission & Vision Split */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <AnimatedSection delay={0.1} className="bg-gray-800/40 backdrop-blur-md p-10 md:p-14 rounded-[2rem] border border-gray-700/50 flex flex-col justify-center relative overflow-hidden group hover:border-orange-500/40 transition-all duration-500 shadow-xl">
            <div className="absolute -right-10 -top-10 text-white/5 w-64 h-64 opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
              <Target className="w-full h-full" />
            </div>
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-8 shadow-inner">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
              To deliver high-quality, affordable driving education that produces confident and responsible drivers.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="bg-gradient-to-br from-orange-600 to-orange-500 text-white p-10 md:p-14 rounded-[2rem] shadow-lg flex flex-col justify-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
             <div className="absolute -right-10 -bottom-10 text-white/10 w-64 h-64 opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
              <Flag className="w-full h-full" />
            </div>
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-8 backdrop-blur-md border border-white/20">
              <Flag size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-orange-100 leading-relaxed">
              To become a leading driving school and vehicle licensing centre known for excellence, integrity, and outstanding learner success rates.
            </p>
          </AnimatedSection>
        </div>

        {/* Core Values */}
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-white mb-16">
            Our Core Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Exciting',
                desc: 'We make learning enjoyable and stress-free.',
                color: 'bg-orange-500/10 text-orange-400'
              },
              {
                title: 'Professional',
                desc: 'We maintain the highest standards of safety, training, and service.',
                color: 'bg-green-500/10 text-green-400'
              },
              {
                title: 'Affordable',
                desc: 'We believe quality training should be accessible to everyone.',
                color: 'bg-orange-500/10 text-orange-400'
              }
            ].map((value, i) => (
              <AnimatedSection key={value.title} delay={0.1 * i} className="bg-gray-800/40 backdrop-blur-md p-8 mb-4 rounded-3xl border border-gray-700/50 shadow-lg hover:border-orange-500/30 transition-colors">
                <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mb-6`}>
                  <Heart size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
        
      </div>
    </div>
  );
}
