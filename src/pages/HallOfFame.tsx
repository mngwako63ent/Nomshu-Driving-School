import { Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function HallOfFame() {
  const students = [
    { year: '2024', badge: 'Official Licence Holder', image: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1776770676/f0d0b301575df1dac239ab021b7ea294_vujpjr.jpg' },
    { year: '2024', badge: 'Certified Driver', image: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1776770676/30b4d2ea701723204ba68a6d18c513fc_l16oaj.jpg' },
    { year: '2024', badge: 'First Time Pass', image: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1776770676/917df2d4116a535f372ca41ff2f85016_bhxvjn.jpg' },
    { year: '2024', badge: 'Certified Driver', image: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1776770676/2c8dcef0a35106a2475d7f06fd78dc66_iqs1fc.jpg' },
    { year: '2024', badge: 'Driving Test Success', image: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1776770676/49a29a00a49828388881b2c02e586675_z3xo6g.jpg' },
    { year: '2024', badge: 'Official Licence Holder', image: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1776770675/e44f51634c29c59c8fbe265d07981dfc_gg1hfz.jpg' }
  ];

  return (
    <div className="py-20 lg:py-28 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <div className="w-20 h-20 mx-auto bg-orange-600/20 text-orange-400 rounded-full flex items-center justify-center mb-6">
            <Trophy size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Hall of Fame
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Celebrating the success of our graduates who have conquered the road. Your space awaits.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {students.map((student, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="group cursor-default">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-900 border border-white/10">
                <img
                  src={student.image}
                  alt="Nomshu Graduate"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-400">{student.badge}</span>
                    </div>
                    <p className="text-gray-300 font-medium">Nomshu Graduate • {student.year}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Link
            to="/bookings"
            className="btn-primary"
          >
            Join Our Hall of Fame – Start Today
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
