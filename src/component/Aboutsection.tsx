import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="relative w-full bg-white dark:bg-gray-950 text-black dark:text-white font-sans border-b-8 border-black dark:border-white overflow-hidden transition-colors duration-300">

      {/* Brutalist Graph Paper Background */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .bg-graph-paper {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
        }
        .dark .bg-graph-paper {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}} />
      <div className="absolute inset-0 bg-graph-paper pointer-events-none z-0"></div>

      {/* Main Layout: Split Screen */}
      <div className="relative z-10 max-w-[90rem] mx-auto flex flex-col lg:flex-row">

        {/* LEFT COLUMN: Sticky 3D Avatar + Floating Acronym */}
        <div className="w-full lg:w-1/2 h-[80vh] lg:h-screen lg:sticky top-0 flex items-center justify-center p-6 lg:p-12 relative overflow-hidden border-b-8 lg:border-b-0 lg:border-r-8 border-black dark:border-white">

          {/* Giant Background 'ABOUT ME' Text */}
          <h1 className="absolute z-0 text-[120px] lg:text-[180px] font-black uppercase text-[#e5e7eb] dark:text-gray-800 opacity-50 tracking-tighter whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            ABOUT ME
          </h1>

          {/* Floating Acronym Texts */}
          <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
            <span className="animate-float absolute text-sm lg:text-base font-bold top-[20%] left-[10%]">
              <span className="text-3xl font-black">A</span>spiring to understand
            </span>
            <span className="animate-float absolute text-sm lg:text-base font-bold top-[65%] left-[15%]" style={{ animationDelay: '0.2s' }}>
              <span className="text-3xl font-black">B</span>uilding<br />Cool stuff
            </span>
            <span className="animate-float absolute text-sm lg:text-base font-bold top-[15%] right-[10%]" style={{ animationDelay: '0.4s' }}>
              <span className="text-3xl font-black">O</span>bsessed with<br />Modern & 3D Web
            </span>
            <span className="animate-float absolute text-sm lg:text-base font-bold top-[55%] right-[12%]" style={{ animationDelay: '0.6s' }}>
              <span className="text-3xl font-black">U</span>I/UX Designer
            </span>
            <span className="animate-float absolute text-sm lg:text-base font-bold top-[30%] right-[5%]" style={{ animationDelay: '0.8s' }}>
              <span className="text-3xl font-black">T</span>ech enthusiast
            </span>
            <span className="animate-float absolute text-sm lg:text-base font-bold top-[80%] left-[25%]" style={{ animationDelay: '1s' }}>
              <span className="text-3xl font-black">M</span>aking ideas<br />come to life
            </span>
            <span className="animate-float absolute text-sm lg:text-base font-bold top-[75%] right-[25%]" style={{ animationDelay: '1.2s' }}>
              <span className="text-3xl font-black">E</span>ngaging<br />digital experiences
            </span>
          </div>

          {/* 3D Avatar Image */}
          <div className="relative w-full h-full max-w-sm lg:max-w-md z-10 flex items-center justify-center">
            <Image
              className="object-contain drop-shadow-[10px_10px_0px_rgba(0,0,0,0.2)] dark:drop-shadow-[10px_10px_0px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-500"
              src="/avatar.png" // <--- Make sure your 3D avatar is saved as avatar.png
              alt="Mohit Ostwal 3D Avatar"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling "Blank Boxes" */}
        <div className="w-full lg:w-1/2 py-12 lg:py-24 px-6 lg:px-12 flex flex-col gap-10 bg-[#f8f8f8] dark:bg-gray-900">

          {/* Box 1: LinkedIn-style ID Card */}
          <div className="border-[4px] border-black dark:border-white bg-white dark:bg-gray-800 p-8 relative hover:-translate-y-1 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <span className="absolute -top-4 right-4 bg-[#FFD100] border-[3px] border-black px-3 py-1 font-black text-sm uppercase text-black">
              Profile
            </span>

            {/* Name & Username */}
            <div className="mb-6 border-b-4 border-black dark:border-white pb-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-1">
                Mohit Ostwal
              </h2>
              <p className="text-lg md:text-xl font-bold text-gray-600 dark:text-gray-400 flex items-center gap-2">
                MohitKumawat22 <span className="text-black dark:text-white">•</span> he/him
              </p>
            </div>

            {/* LinkedIn Bio Text */}
            <p className="text-xl md:text-2xl font-bold leading-snug">
              <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-0.5">Designer × Developer</span> MERN Stack Developer | UI/UX Designer | Next.js | Type Script | GSAP | lenis |
            </p>

            <button className="mt-8 w-full border-[3px] border-black dark:border-white bg-[#f0f0f0] dark:bg-gray-700 hover:bg-[#5FA8FF] text-black dark:text-white font-black uppercase py-3 transition-colors duration-300">
              Edit Profile (Simulation)
            </button>
          </div>

          {/* Box 2: The Core Bio */}
          <div className="border-[4px] border-black dark:border-white bg-[#FF7A7A] p-8 relative hover:-translate-y-1 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] mt-4">
            <span className="absolute -top-4 left-4 bg-black text-white border-[3px] border-black px-3 py-1 font-black text-sm uppercase">
              Currently
            </span>
            <p className="text-xl md:text-2xl font-bold leading-snug text-black">
              I am a 2nd-year B.Tech student at Chameli Devi. I bridge the gap between heavy technical logic and seamless user interaction as a dedicated full-stack developer and designer.
            </p>
          </div>

          {/* Box 3: Hackathons & Building */}
          <div className="border-[4px] border-black dark:border-white bg-[#5FA8FF] p-8 relative hover:-translate-y-1 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <span className="absolute -top-4 right-4 bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white px-3 py-1 font-black text-sm uppercase text-black dark:text-white">
              Experience
            </span>
            <h3 className="text-2xl font-black uppercase mb-4 border-b-4 border-black dark:border-white inline-block pb-1 text-black">In The Trenches</h3>
            <p className="text-lg font-bold text-black">
              I thrive under pressure. I actively build and lead teams at high-stakes hackathons. Recently, I led a team at SnowHacks to build a health awareness platform, explored Aptos blockchain at Build Station Indore, and presented live at HackAndMake.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}