import { ArrowRight } from 'lucide-react';

const CollaborationCTA = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-renalyse-dark relative overflow-hidden">
       {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-renalyse-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Partner with us for <br/>Mass Renal Screening
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
          Are you a hospital, NGO, or government body looking to deploy high-scale diagnostics? 
          Let's discuss how REnalyse's 2026 infrastructure can support your goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-white text-renalyse-dark px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition flex items-center gap-2 group">
              Contact Partnership Team
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
             <a href="mailto:partners@renalyse.com" className="text-white font-medium border-b-2 border-white/30 pb-1 hover:text-renalyse-primary hover:border-renalyse-primary transition">
              Email us directly
            </a>
        </div>
      </div>
    </section>
  );
};

export default CollaborationCTA;