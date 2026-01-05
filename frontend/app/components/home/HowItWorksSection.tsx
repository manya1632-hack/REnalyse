import Image from 'next/image';
import { FlaskConical, QrCode, FileText, Activity } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Obtain & Prepare",
    description: "Receive the REnalyse card specifically linked to the patient profile via registered healthcare workers.",
    icon: FlaskConical,
    image: "/step1.png" // Path to public/step1.png
  },
  {
    id: 2,
    title: "Apply Sample",
    description: "Apply a small urine sample to the designated Albumin and Creatinine test pads on the Whatman paper.",
    icon: Activity,
    image: "/step2.png" // Path to public/step2.png
  },
  {
    id: 3,
    title: "Scan for AI Analysis",
    description: "Use the REnalyse app to scan the QR code. Our Azure AI processes the reagent color changes instantly.",
    icon: QrCode,
    image: "/step2.png" // Path to public/step3.png
  },
  {
    id: 4,
    title: "Clinical Insights",
    description: "Receive immediate, FHIR-compliant results and next-step recommendations derived from clinical models.",
    icon: FileText,
    image: "/step4.png" // Path to public/step4.png
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-renalyse-primary font-bold uppercase tracking-[0.3em] text-xs mb-3">
            Simple Procedure
          </h2>
          <h3 className="text-4xl font-bold text-renalyse-dark">
            How to Use the REnalyse Card
          </h3>
          <p className="text-renalyse-text-gray mt-4 max-w-2xl mx-auto">
            From sample collection to clinical insight in four simple steps, 
            powered by advanced computer vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col h-full group">
              {/* Image Container */}
              <div className="relative h-56 w-full rounded-t-[2rem] overflow-hidden bg-renalyse-light border-x border-t border-gray-100">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 bg-renalyse-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {step.id}
                </div>
              </div>
                
              {/* Content Card */}
              <div className="bg-white p-8 rounded-b-[2rem] border-x border-b border-gray-100 flex-grow shadow-sm group-hover:shadow-xl transition-all duration-300">
                <div className="bg-renalyse-light w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-renalyse-primary group-hover:bg-renalyse-primary group-hover:text-white transition-colors">
                  <step.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-renalyse-dark mb-3">
                  {step.title}
                </h4>
                <p className="text-renalyse-text-gray text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;