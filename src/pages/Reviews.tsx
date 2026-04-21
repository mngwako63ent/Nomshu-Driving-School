import { Quote, Star } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function Reviews() {
  const reviews = [
    { name: 'Thandi M.', text: 'Nomshu Driving School helped me pass on my first try. The instructors were patient and very supportive throughout my journey.' },
    { name: 'Kabelo S.', text: 'Their professionalism and flexibility made it easy to learn despite my busy schedule. Highly recommended.' },
    { name: 'Fatima A.', text: 'The mock tests were incredibly helpful. Walking into the testing center, I knew exactly what to expect. Passed Code 10 with flying colours!' },
    { name: 'David L.', text: 'I had developed quite a bit of driving anxiety after failing previously, but the instructor was so calm and built up my confidence round every corner.' },
    { name: 'Jessica P.', text: 'Affordable and absolutely worth every cent. The vehicle was clean and well-maintained, which also gave me peace of mind.' },
    { name: 'Michael B.', text: 'Best driving school in Johannesburg hands down! They handled all my NCO and licensing paperwork seamlessly as well.' }
  ];

  return (
    <div className="py-20 lg:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Student Reviews
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Don't just take our word for it. Here is what our successful learners have to say about their experience with us.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="bg-gray-800/40 backdrop-blur-md p-8 rounded-3xl border border-gray-700/50 shadow-sm relative group hover:border-orange-500/30 transition-all duration-300">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-orange-500/10 transition-colors pointer-events-none" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} className="fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10 min-h-[100px]">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-green-500 text-white flex items-center justify-center font-bold shadow-md">
                  {review.name.charAt(0)}
                </div>
                <h4 className="font-bold text-white">{review.name}</h4>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="flex justify-center">
          <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-full font-bold transition-colors">
            Write a Review
          </button>
        </AnimatedSection>
      </div>
    </div>
  );
}
