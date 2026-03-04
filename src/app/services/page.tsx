import React from 'react';

export default function ServicesPage() {
  const services = [
    {
      id: '01',
      title: 'MERN STACK DEVELOPMENT',
      description: 'Building scalable, high-performance web applications from the ground up using MongoDB, Express, React, and Node.js.',
      accent: '#FFD100',
    },
    {
      id: '02',
      title: 'UI/UX DESIGN',
      description: 'Crafting intuitive, user-centric interfaces and wireframes that ensure a seamless and engaging digital experience.',
      accent: '#FF7A7A',
    },
    {
      id: '03',
      title: 'FREELANCE WEBSITES',
      description: 'Delivering zero-maintenance, high-speed, and cost-effective websites tailored precisely to client and business needs.',
      accent: '#5FA8FF',
    },
    {
      id: '04',
      title: 'AI & 3D EXPERIENCES',
      description: 'Integrating LLM capabilities and building immersive, interactive 3D web environments using Three.js and GLSL.',
      accent: '#FFD100',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white font-sans transition-colors duration-300">

      <main className="max-w-6xl mx-auto px-6 py-20 lg:py-28">

        {/* Page Header */}
        <div className="mb-20">
          <div className="flex items-end gap-4 mb-4">
            <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase leading-[0.85]">
              SERVICES
            </h1>
            <div className="h-3 w-3 bg-[#5FA8FF] rounded-full mb-4 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-[3px] w-16 bg-[#FFD100]"></div>
            <p className="text-lg md:text-xl font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              What I Bring to the Table
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t-[2px] border-black/10 dark:border-white/10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative p-8 md:p-12 border-b-[2px] border-black/10 dark:border-white/10 ${index % 2 === 0 ? 'md:border-r-[2px]' : ''
                } hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-300`}
            >
              {/* Accent line on hover */}
              <div
                className="absolute top-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-500 ease-out"
                style={{ backgroundColor: service.accent }}
              ></div>

              {/* Number */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-6xl md:text-7xl font-black text-black/[0.06] dark:text-white/[0.06] group-hover:text-black/[0.15] dark:group-hover:text-white/[0.15] transition-colors">
                  {service.id}
                </span>
                <div
                  className="w-2.5 h-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: service.accent }}
                ></div>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight mb-5 group-hover:translate-x-1 transition-transform duration-300">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                {service.description}
              </p>

              {/* Bottom accent dash */}
              <div
                className="mt-8 h-[2px] w-8 group-hover:w-16 transition-all duration-500"
                style={{ backgroundColor: service.accent }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Ribbon */}
        <div className="mt-20 flex items-center justify-center">
          <div className="flex items-center gap-6">
            <div className="h-[2px] w-12 bg-[#FFD100]"></div>
            <p className="text-lg md:text-xl font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
              Available for Freelance
            </p>
            <div className="h-[2px] w-12 bg-[#FF7A7A]"></div>
          </div>
        </div>

      </main>
    </div>
  );
}