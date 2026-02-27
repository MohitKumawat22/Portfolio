import React from 'react';

// You can place this in your pages/services.tsx or app/services/page.tsx depending on your Next.js router
export default function ServicesPage() {
  const services = [
    {
      id: '01',
      title: 'MERN STACK DEVELOPMENT',
      description: 'Building scalable, high-performance web applications from the ground up using MongoDB, Express, React, and Node.js.',
      color: 'bg-[#FFD100]', // Yellow from your ribbon
    },
    {
      id: '02',
      title: 'UI/UX DESIGN',
      description: 'Crafting intuitive, user-centric interfaces and wireframes that ensure a seamless and engaging digital experience.',
      color: 'bg-[#FF7A7A]', // Pink/Red from your ribbon
    },
    {
      id: '03',
      title: 'FREELANCE WEBSITES',
      description: 'Delivering zero-maintenance, high-speed, and cost-effective websites tailored precisely to client and business needs.',
      color: 'bg-[#5FA8FF]', // Blue from your ribbon
    },
    {
      id: '04',
      title: 'AI & 3D EXPERIENCES',
      description: 'Integrating LLM capabilities and building immersive, interactive 3D web environments using Three.js and GLSL.',
      color: 'bg-white',
    },
  ];

  return (
    <div className="min-h-screen relative bg-white text-black font-sans overflow-hidden">
      {/* Custom Grid Background - mimicking the graph paper look */}
      <style dangerouslySetInnerHTML={{__html: `
        .bg-graph-paper {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}} />
      
      {/* Background Wrapper */}
      <div className="absolute inset-0 bg-graph-paper pointer-events-none z-0"></div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        
        {/* Page Header */}
        <div className="mb-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter uppercase leading-none">
            SERVICES
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-bold bg-black text-white px-4 py-2 inline-block transform -rotate-1">
            WHAT I BRING TO THE TABLE
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`group relative border-4 border-black p-8 transition-transform duration-300 hover:-translate-y-2 hover:translate-x-2 ${service.color}`}
            >
              {/* Brutalist Drop Shadow Effect using a pseudo-element strategy */}
              <div className="absolute inset-0 border-4 border-black bg-transparent translate-x-3 translate-y-3 -z-10 pointer-events-none transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5"></div>
              
              <div className="flex justify-between items-start mb-6 border-b-4 border-black pb-4">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight w-3/4 leading-none">
                  {service.title}
                </h2>
                <span className="text-4xl font-black">{service.id}</span>
              </div>
              
              <p className="text-lg md:text-xl font-medium leading-snug">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Ribbon Element at the bottom (matching landing page) */}
        <div className="relative mt-32 h-20 w-full flex justify-center items-center overflow-visible">
          <div className="absolute w-[120%] h-12 bg-[#FFD100] transform -rotate-2 border-y-4 border-black flex items-center overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-xl font-black tracking-widest">
              AVAILABLE FOR FREELANCE • LET'S BUILD SOMETHING COOL • AVAILABLE FOR FREELANCE • LET'S BUILD SOMETHING COOL • AVAILABLE FOR FREELANCE • LET'S BUILD SOMETHING COOL •
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
}