import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="p-4 md:p-8 bg-white min-h-screen flex flex-col justify-end">
      <footer className="bg-[#f5f5f5] rounded-[2.5rem] pt-16 px-6 md:px-12 relative overflow-hidden font-sans">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-24 max-w-7xl mx-auto z-10 relative">
          
          {/* Column 1: Description (Span 4 cols) */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-medium leading-tight text-gray-900 max-w-sm">
              Mohit is independent creative director and solopreneur
            </h2>
          </div>

          {/* Column 2: Explore Links (Span 2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-500 mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-500 hover:text-black transition-colors">Bio</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition-colors">Newsletter</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Links (Span 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-gray-500 mb-4">Follow me</h3>
            <div className="grid grid-cols-2 gap-3">
              <SocialPill icon={<XIcon />} label="@mohit" />
              <SocialPill icon={<InstagramIcon />} label="@mohit" />
              <SocialPill icon={<DribbbleIcon />} label="@mohit" />
              <SocialPill icon={<YoutubeIcon />} label="@mohit" />
              <SocialPill icon={<FigmaIcon />} label="@mohit" />
            </div>
          </div>

          {/* Column 4: CTAs (Span 3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-8 lg:items-start pl-0 lg:pl-8">
            {/* Call Action */}
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-medium text-orange-500 group-hover:text-orange-600 transition-colors">Call Mohit</span>
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight color="white" size={14} />
                </div>
              </div>
              <p className="text-sm text-gray-400">Let s work together</p>
            </div>

            {/* Courses Action */}
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-medium text-gray-900">Courses & Tools</span>
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight color="white" size={14} />
                </div>
              </div>
              <p className="text-sm text-gray-400">Creative tools</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Massive Typography */}
        <div className="w-full flex justify-center">
          <h1 className="text-[28vw] leading-[0.7] font-black tracking-tighter text-black select-none pointer-events-none -mb-4 md:-mb-10 lg:-mb-14">
            mohit
          </h1>
        </div>
      </footer>
    </div>
  );
}

// --- Helper Components & Icons ---

function SocialPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a href="#" className="flex items-center gap-2 bg-white px-3 py-2 rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-xs font-medium text-gray-600">{label}</span>
    </a>
  );
}

const ArrowUpRight = ({ color = "currentColor", size = 24 }: {color?: string, size?: number}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0" className="text-black">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
  </svg>
);

const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const DribbbleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-5.38c-3.72-3.8-10.64-4.49-14.24-.96M12 4a14.94 14.94 0 0 0-1.24 16.8"></path>
    </svg>
);

const YoutubeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
);

const FigmaIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 23H12v-3.5a3.5 3.5 0 1 1-7 0z"></path>
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
    </svg>
);