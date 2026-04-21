import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function Packages() {
  const learnerPackage = {
    title: "Learner's Licence Package",
    price: "R1 500",
    features: [
      "Study Material",
      "Mock Tests",
      "Booking Support",
      "Expert Guidance"
    ]
  };

  const code08 = [
    { title: "10 Lessons Only", price: "R1 150", features: ["10 driving lessons"] },
    { title: "Licence Training", price: "R4 500", features: ["Extensive driving lessons", "Licence test prep"] },
    { title: "Full Package", price: "R6 000", popular: true, features: ["Learner licence prep", "10 driving lessons", "Licence test car rental", "Booking assistance"] }
  ];

  const code10 = [
    { title: "10 Lessons Only", price: "R2 400", features: ["10 driving lessons (Medium Vehicle)"] },
    { title: "Full Package", price: "R6 000", features: ["Learner licence prep", "10 driving lessons", "Licence test car rental", "Booking assistance"] }
  ];

  const code14 = [
    { title: "10 Lessons Only", price: "R2 500", features: ["10 driving lessons (Heavy Vehicle)"] },
    { title: "Licence Training", price: "R7 500", features: ["Extensive driving lessons", "Licence test prep"] },
    { title: "Full Package", price: "R9 000", popular: true, bestValue: true, features: ["Learner licence prep", "10 driving lessons", "Licence test car rental", "Booking assistance", "Advanced heavy vehicle techniques"] }
  ];

  const renderCard = (pkg: any, idx: number) => (
    <div key={idx} className={`relative flex flex-col p-6 sm:p-8 rounded-3xl border ${pkg.popular ? 'border-orange-500 shadow-xl shadow-orange-500/10 bg-gray-900 md:scale-105 z-10' : 'border-gray-700/50 bg-gray-800/40 backdrop-blur shadow-sm hover:shadow-md'} transition-all`}>
      {pkg.popular && (
        <div className="absolute top-0 right-6 sm:right-8 -translate-y-1/2 px-3 py-1 bg-orange-500 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full">
          {pkg.bestValue ? 'Best Value' : 'Popular'}
        </div>
      )}
      <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{pkg.title}</h4>
      <div className="text-3xl sm:text-4xl font-extrabold text-white mb-6">{pkg.price}</div>
      <ul className="space-y-3 sm:space-y-4 flex-grow mb-8 text-sm sm:text-base">
        {pkg.features.map((feature: string, fIdx: number) => (
          <li key={fIdx} className="flex items-start gap-2 sm:gap-3">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/bookings"
        className={`w-full py-3 sm:py-4 rounded-xl font-bold text-center transition-colors ${pkg.popular ? 'btn-primary' : 'bg-gray-700/50 text-white hover:bg-gray-600/50'}`}
      >
        Select Package
      </Link>
    </div>
  );

  return (
    <div className="py-20 lg:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Pricing Packages
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Transparent, affordable pricing tailored to your driving needs. No hidden fees.
          </p>
        </AnimatedSection>

        {/* Learner's Package */}
        <AnimatedSection className="mb-24 max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-orange-600 to-green-500 rounded-3xl p-1 text-white shadow-lg shadow-orange-500/20">
            <div className="bg-gray-900 rounded-[1.4rem] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Info size={120} className="text-orange-500"/></div>
              <h3 className="text-2xl font-bold mb-2 relative z-10">{learnerPackage.title}</h3>
              <div className="text-5xl font-extrabold mb-8 relative z-10">{learnerPackage.price}</div>
              <ul className="space-y-4 mb-8 relative z-10">
                {learnerPackage.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                      <Check size={14} />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/bookings"
                className="btn-primary block w-full py-4 text-center rounded-xl text-white font-bold transition-all relative z-10"
              >
                 Book Learner's Package
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Code 08 */}
        <AnimatedSection className="mb-24">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Code 08 (Light Vehicles)</h3>
          <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            {code08.map((pkg, idx) => renderCard(pkg, idx))}
          </div>
        </AnimatedSection>

        {/* Code 10 */}
        <AnimatedSection className="mb-24">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Code 10 (Medium Vehicles)</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {code10.map((pkg, idx) => renderCard(pkg, idx))}
          </div>
        </AnimatedSection>

        {/* Code 14 */}
        <AnimatedSection>
          <h3 className="text-3xl font-bold text-center text-white mb-12">Code 14 (Heavy Vehicles)</h3>
          <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            {code14.map((pkg, idx) => renderCard(pkg, idx))}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
