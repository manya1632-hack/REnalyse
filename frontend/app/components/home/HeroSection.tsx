import Image from 'next/image';
// Ensure you place image_1.png in your /public folder
import CardImage from '@/public/image_1.png'; 

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 overflow-hidden bg-renalyse-light">
        {/* Subtle background blob for style based on image_0.png */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-renalyse-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-renalyse-dark leading-tight">
            Advanced Renal <br/>Health Screening <span className=" bg-clip-text bg-primary-gradient">Redefined for 2026.</span>
          </h1>
          <p className="text-lg text-renalyse-textGray md:max-w-xl leading-relaxed">
            Experience clinical-grade diagnostics outside the lab. REnalyse combines innovative whatman paper technology with Microsoft-first generative AI to deliver instant, FHIR-compliant kidney function analysis.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary-gradient text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 bg-renalyse-primary cursor-pointer">
              Request Screening Kit
            </button>
            <button className="bg-white text-renalyse-secondary border-2 border-renalyse-secondary/30 px-8 py-3.5 rounded-full font-bold hover:bg-renalyse-light transition cursor-pointer">
              For Healthcare Workers
            </button>
          </div>
        </div>

        {/* Right Image (The Card) */}
        <div className="relative group">
           {/* Decorative element behind card */}
          <div className="absolute inset-0 bg-primary-gradient opacity-20 blur-2xl rounded-3xl transform rotate-6 scale-105 group-hover:rotate-3 transition-transform duration-500"></div>
          
          <div className="relative z-10 transform transition duration-500 group-hover:scale-[1.02]">
              {/* Using next/image for optimization */}
            <Image 
              src={CardImage} 
              alt="REnalyse AI Analysis Card showing Albumin and Creatinine test strips and QR code"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl border border-white/50"
              priority // Load immediately as it's above the fold
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;