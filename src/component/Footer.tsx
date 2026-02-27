"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Instagram, Twitter, ArrowUp } from 'lucide-react';

// Animated Eye Component
const EyeIcon = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="inline-block w-[0.8em] h-[0.8em] mx-2 border-4 border-black rounded-full bg-white transition-all duration-300 group-hover:scale-110"
    style={{ transform: 'translateY(-0.1em)' }}
  >
    <circle cx="50" cy="50" r="35" fill="black" className="transition-all duration-300 group-hover:cx-[65]" />
    <circle cx="35" cy="35" r="10" fill="white" className="transition-all duration-300 group-hover:cx-[50] group-hover:cy-[30] animate-[pulse_3s_ease-in-out_infinite]" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState<string>('');

  // Live clock set to Indore (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata', 
        hour12: true, 
        hour: 'numeric', 
        minute: '2-digit' 
      }) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#f8f8f8] text-black font-sans border-t-8 border-black overflow-hidden z-50 flex flex-col justify-between h-auto lg:h-screen lg:min-h-[750px]">
      
      {/* Background Graph Paper */}
      <style dangerouslySetInnerHTML={{__html: `
        .bg-graph-paper-light {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
        }
      `}} />
      <div className="absolute inset-0 bg-graph-paper-light pointer-events-none z-0"></div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow flex flex-col justify-center max-w-[90rem] w-full mx-auto px-6 pt-16 lg:pt-0">
        
        {/* Massive "GET IN TOUCH" Header */}
        <div className="text-center mb-8 lg:mb-12 group cursor-default">
          <p className="text-lg md:text-xl font-bold mb-2 uppercase inline-block relative">
            Got a project? Need an unfair advantage?
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#FFD100] transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
          </p>
          <h2 className="text-[12vw] lg:text-[11vw] leading-none font-black uppercase tracking-tighter hover:scale-[1.02] transition-transform duration-500">
            GET IN T<EyeIcon />UCH
          </h2>
        </div>

        {/* Links Grid - Reduced gap from gap-12 to gap-8 for tighter laptop view */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 border-t-[3px] border-black pt-8">
          
          {/* Availability Status */}
          <div className="pr-4 group/section">
            <h3 className="text-sm font-black uppercase mb-4 border-b-2 border-black pb-1 flex items-center justify-between">
              Availability <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </h3>
            <p className="text-sm lg:text-base font-bold leading-snug mb-4">
              Currently open for freelance projects and exciting collaborations. 
              Let's build high-performance, scalable digital experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#FFD100] border-2 border-black px-2 py-0.5 text-xs font-bold uppercase hover:-translate-y-1 transition-transform cursor-default">MERN</span>
              <span className="bg-[#5FA8FF] border-2 border-black px-2 py-0.5 text-xs font-bold uppercase hover:-translate-y-1 transition-transform cursor-default">Next.js</span>
              <span className="bg-[#FF7A7A] border-2 border-black px-2 py-0.5 text-xs font-bold uppercase hover:-translate-y-1 transition-transform cursor-default">UI/UX</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-black uppercase mb-4 border-b-2 border-black pb-1">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Blogs', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="group flex items-center text-base lg:text-lg font-bold uppercase transition-all hover:text-[#FF7A7A]">
                    <ArrowRight size={16} className="mr-2 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    <span className="-ml-6 transition-all duration-300 group-hover:ml-0">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-black uppercase mb-4 border-b-2 border-black pb-1">Socials</h3>
            <ul className="space-y-2">
              {[
                { name: 'LinkedIn', icon: <Linkedin size={16} strokeWidth={2.5} />, link: 'https://linkedin.com/in/mohit-ostwal-kumawat123', color: 'hover:text-[#5FA8FF]' },
                { name: 'Instagram', icon: <Instagram size={16} strokeWidth={2.5} />, link: 'https://instagram.com/dev.mohitkumawat', color: 'hover:text-[#FF7A7A]' },
                { name: 'X (Twitter)', icon: <Twitter size={16} strokeWidth={2.5} />, link: 'https://twitter.com/MOHITKUMAWATm', color: 'hover:text-[#FFD100]' },
                { name: 'GitHub', icon: <Github size={16} strokeWidth={2.5} />, link: 'https://github.com/MohitKumawat22', color: 'hover:text-gray-500' },
              ].map((social) => (
                <li key={social.name}>
                  <a href={social.link} target="_blank" rel="noopener noreferrer" className={`group flex items-center text-base lg:text-lg font-bold uppercase transition-all ${social.color}`}>
                    <span className="mr-3 p-1 border-2 border-transparent group-hover:border-black group-hover:bg-white transition-all group-hover:-rotate-12 group-hover:scale-110">
                      {social.icon}
                    </span>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact - Text scaled down to handle long emails nicely */}
          <div>
            <h3 className="text-sm font-black uppercase mb-4 border-b-2 border-black pb-1">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:dev.mohitkumawat@gmail.com" className="block text-sm lg:text-base font-bold hover:bg-black hover:text-white px-2 py-1 -ml-2 transition-colors border-2 border-transparent hover:border-black break-words group relative overflow-hidden">
                  <span className="relative z-10">dev.mohitkumawat@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="mailto:mohitkumawat2209@gmail.com" className="block text-sm lg:text-base font-bold hover:bg-black hover:text-white px-2 py-1 -ml-2 transition-colors border-2 border-transparent hover:border-black break-words">
                  mohitkumawat2209@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Interface Area */}
      <div className="relative z-10 max-w-[90rem] w-full mx-auto px-6 pb-6 lg:pb-8">
        <div className="flex flex-col md:flex-row justify-between items-end border-t-[3px] border-black pt-4">
          
          <div className="group cursor-default">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-1 group-hover:text-[#5FA8FF] transition-colors duration-500">
              MOHIT OSTWAL
            </h2>
            <p className="text-base font-bold uppercase">© {currentYear}</p>
          </div>

          <div className="flex flex-row gap-8 lg:gap-10 items-end mt-6 md:mt-0">
            {/* Local Time Indicator */}
            <div className="text-right group">
              <p className="text-xs font-black uppercase mb-1 flex items-center justify-end">
                Local Time <span className="inline-block ml-2 animate-[spin_4s_linear_infinite]">🌍</span>
              </p>
              <p className="text-lg font-bold uppercase tracking-wider group-hover:text-[#FFD100] transition-colors">{time || 'LOADING...'}</p>
            </div>

            {/* Scroll to Top Button */}
            <button 
              onClick={scrollToTop}
              className="group w-12 h-12 border-[3px] border-black rounded-full flex items-center justify-center bg-white hover:bg-[#FFD100] transition-all hover:-translate-y-1 duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} strokeWidth={3} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      {/* Infinite Marquee Geometric Shape Bottom Border - Increased height to h-20 */}
      <div className="w-full bg-black h-20 flex items-center overflow-hidden border-t-4 border-black relative">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center justify-around w-screen shrink-0">
              <svg viewBox="0 0 100 100" className="w-10 h-10 fill-[#FFD100] animate-[spin_6s_linear_infinite]"><path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" /></svg>
              <svg viewBox="0 0 100 100" className="w-10 h-10 fill-[#5FA8FF] animate-[pulse_2s_ease-in-out_infinite]"><polygon points="50,0 100,50 50,100 0,50" /></svg>
              <svg viewBox="0 0 100 100" className="w-10 h-10 fill-[#FF7A7A] animate-[spin_8s_linear_infinite_reverse]"><path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" /></svg>
              <svg viewBox="0 0 100 100" className="w-10 h-10 fill-white animate-[bounce_3s_infinite]"><polygon points="35,0 65,0 65,35 100,35 100,65 65,65 65,100 35,100 35,65 0,65 0,35 35,35" /></svg>
              <svg viewBox="0 0 100 100" className="w-10 h-10 fill-[#FFD100] animate-[pulse_3s_ease-in-out_infinite]"><circle cx="50" cy="50" r="40" /></svg>
              <svg viewBox="0 0 100 100" className="w-10 h-10 fill-[#5FA8FF] animate-[spin_5s_linear_infinite]"><path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" /></svg>
              <svg viewBox="0 0 100 100" className="w-10 h-10 fill-white animate-[spin_10s_linear_infinite_reverse]"><polygon points="35,0 65,0 65,35 100,35 100,65 65,65 65,100 35,100 35,65 0,65 0,35 35,35" /></svg>
            </div>
          ))}
        </div>
      </div>

    </footer>
  );
}