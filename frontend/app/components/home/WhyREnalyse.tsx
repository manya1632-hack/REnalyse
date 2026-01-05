import { AlertTriangle, Wallet, TrendingUp, MapPin } from 'lucide-react';

const stats = [
  { label: "Affected Adults", value: "105M+", subtext: "13.24% National Prevalence", icon: TrendingUp },
  { label: "Undiagnosed", value: "80%", subtext: "Cases found too late", icon: AlertTriangle },
  { label: "Rural Population", value: "70%", subtext: "Limited healthcare access", icon: MapPin },
  { label: "Annual Dialysis Cost", value: "₹3L+", subtext: "Causes medical poverty", icon: Wallet },
];

const WhyREnalyse = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The Narrative */}
          <div className="space-y-6">
            <h2 className="text-renalyse-primary font-bold uppercase tracking-widest text-sm">The Real Problem</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-renalyse-dark leading-tight">
              India’s Silent <br /> <span className="text-red-500">CKD Epidemic</span>
            </h3>
            <p className="text-lg text-renalyse-textGray leading-relaxed">
              Chronic Kidney Disease (CKD) has reached crisis levels. With prevalence rising from 11% to 16% in just a decade, 
              millions are at risk. Currently, kidney diagnostics are <strong>centralized, slow, and expensive.</strong>
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <p className="text-red-700 font-medium italic">
                "Tests cost ₹300–₹1,000 today. For 70% of India living in rural areas, this is an insurmountable barrier to early detection."
              </p>
            </div>

            <div className="pt-4">
              <h4 className="font-bold text-renalyse-dark mb-4">The REnalyse Impact:</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-renalyse-textGray">
                  <div className="w-2 h-2 rounded-full bg-renalyse-primary"></div>
                  90% Reduction in testing costs (under ₹30).
                </li>
                <li className="flex items-center gap-3 text-renalyse-textGray">
                  <div className="w-2 h-2 rounded-full bg-renalyse-primary"></div>
                  Decentralized screening via ASHA workers.
                </li>
                <li className="flex items-center gap-3 text-renalyse-textGray">
                  <div className="w-2 h-2 rounded-full bg-renalyse-primary"></div>
                  Targeting 40% reduction in late-stage dialysis burden.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Visual Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-renalyse-light p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-md transition">
                <div className="text-renalyse-primary mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl font-bold text-renalyse-dark mb-1">{stat.value}</div>
                <div className="font-semibold text-renalyse-secondary text-sm mb-2">{stat.label}</div>
                <p className="text-xs text-renalyse-textGray leading-snug">{stat.subtext}</p>
              </div>
            ))}
            
            {/* Call to Action Card within Grid */}
            <div className="sm:col-span-2 bg-primary-gradient p-8 rounded-[2.5rem] text-white flex flex-col justify-center">
              <h4 className="text-xl font-bold mb-2">Market Opportunity</h4>
              <p className="text-blue-50 text-sm">
                With 80M diabetics and 200M hypertensives needing routine monitoring, REnalyse is poised to handle 5M+ screenings annually by Year 3.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyREnalyse;