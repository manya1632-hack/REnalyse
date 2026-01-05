import { Users, HeartPulse, HandHeart, Building2 } from 'lucide-react';

const targetGroups = [
  {
    title: "Frontline Health Workers",
    subtitle: "ASHA Workers & ANMs",
    description: "A simple, offline-capable tool for executing mass screening in community settings, replacing complex lab procedures.",
    icon: Users,
    colorClass: "bg-blue-100 text-blue-600"
  },
  {
    title: "High-Risk Beneficiaries",
    subtitle: "Diabetics & Hypertensives",
    description: "Cost-effective, frequent screening to enable early intervention with disease-modifying therapies.",
    icon: HeartPulse,
    colorClass: "bg-red-100 text-red-600"
  },
  {
    title: "Underserved Populations",
    subtitle: "Rural & Low-income",
    description: "Reducing out-of-pocket expenditure for those relying on public healthcare infrastructure.",
    icon: HandHeart,
    colorClass: "bg-green-100 text-green-600"
  },
  {
    title: "Systemic Clients",
    subtitle: "Govt Agencies & NGOs",
    description: "Primary procurement channel for high-volume, low-cost diagnostics to meet national healthcare goals.",
    icon: Building2,
    colorClass: "bg-purple-100 text-purple-600"
  },
];

const TargetUsersSection = () => {
  return (
    <section id="users" className="py-24 px-6 md:px-12 bg-renalyse-light">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-renalyse-dark mb-4">Built for Impact Across the Spectrum</h3>
          <p className="text-xl text-renalyse-textGray max-w-3xl">REnalyse is designed to bridge gaps in healthcare delivery, serving those who need it most.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {targetGroups.map((group, index) => (
            <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-transparent hover:border-renalyse-secondary/20 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start">
              <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center ${group.colorClass}`}>
                <group.icon size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-renalyse-dark">{group.title}</h4>
                <p className="text-renalyse-primary font-medium mb-3">{group.subtitle}</p>
                <p className="text-renalyse-textGray leading-relaxed">{group.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetUsersSection;