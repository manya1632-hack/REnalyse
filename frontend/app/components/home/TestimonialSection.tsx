'use client'; // Client component for carousel functionality

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The offline capability of the REnalyse app is a game-changer for our village screenings. We can test 50 patients in a day without worrying about connectivity, and the data syncs perfectly once we are back at the center.",
    name: "Rajeshwari Devi",
    role: "ASHA Worker, Bihar"
  },
  {
    id: 2,
    quote: "As a diabetic patient, waiting in lab queues was frustrating. The REnalyse card lets me check my kidney health at home, and my doctor gets the results instantly on their portal. It gives me immense peace of mind.",
    name: "Vikram Singh",
    role: "Patient"
  },
  {
    id: 3,
    quote: "Integrating REnalyse into our NGO's health camps reduced our diagnostic costs by 60%. The speed and clinical accuracy allowed us to serve double the beneficiaries in our last drive.",
    name: "Dr. Alok Gupta",
    role: "Program Director, Health First NGO"
  },
];

const TestimonialSection = () => {
  // Setup Embla carousel with autoplay plugin
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
         <h2 className="text-center text-3xl md:text-4xl font-bold text-renalyse-dark mb-12">Trusted Feedback</h2>
        
        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Carousel Container */}
          <div className="flex touch-pan-y gap-6 ml-0">
            {testimonials.map((item) => (
              /* Carousel Slide */
              <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 relative pl-0">
                 <div className="bg-renalyse-light p-8 rounded-3xl h-full border border-gray-100 relative mt-6">
                    <div className="absolute -top-6 left-8 bg-renalyse-dark text-white p-3 rounded-xl shadow-lg">
                        <Quote size={24} />
                    </div>
                   <p className="text-renalyse-textGray text-lg italic mb-8 pt-6">"{item.quote}"</p>
                   <div className="flex items-center">
                     <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {item.name.charAt(0)}
                     </div>
                     <div className="ml-4">
                       <h5 className="font-bold text-renalyse-dark">{item.name}</h5>
                       <p className="text-sm text-renalyse-primary">{item.role}</p>
                     </div>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;