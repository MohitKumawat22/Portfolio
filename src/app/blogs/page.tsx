import React from 'react';
import Link from 'next/link';

export default function BlogsPage() {
  const blogs = [
    {
      id: '01',
      title: 'HACKANDMAKE BHOPAL',
      date: 'Jan 11, 2026',
      readTime: '3 MIN READ',
      snippet: 'Presented our HealthTech web app at the HackAndMake hackathon at Jehan Numa Palace. Had an amazing time building, networking, and even got to meet Aman Gupta and Anubhav Dubey!',
      accent: 'bg-[#FF7A7A]',
      link: '#'
    },
    {
      id: '02',
      title: 'LEADING THE TEAM AT SNOWHACKS',
      date: 'Jan 09, 2026',
      readTime: '4 MIN READ',
      snippet: 'Stepped up as a team leader at SnowHacks! We built an impactful health awareness platform from scratch. Incredibly proud of the team dynamics and the technical hurdles we overcame.',
      accent: 'bg-[#5FA8FF]',
      link: '#'
    },
    {
      id: '03',
      title: 'DIVING INTO WEB3 AT BUILD STATION',
      date: 'Jan 03, 2026',
      readTime: '5 MIN READ',
      snippet: 'Spent an incredible weekend at Build Station Indore learning the ins and outs of Web3. Got hands-on experience building on the Aptos blockchain using the Move language.',
      accent: 'bg-[#FFD100]',
      link: '#'
    },
    {
      id: '04',
      title: 'DEVFEST 2025: ENTREPRENEURSHIP TRACK',
      date: 'Dec 22, 2025',
      readTime: '4 MIN READ',
      snippet: 'Attended DevFest 2025 in Indore. Focused heavily on the entrepreneurship track to level up my freelancing journey and learn how to build sustainable, scalable tech products.',
      accent: 'bg-[#FF7A7A]',
      link: '#'
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white font-sans transition-colors duration-300">

      <main className="max-w-6xl mx-auto px-6 py-20 lg:py-28">

        {/* Page Header */}
        <div className="mb-20">
          <div className="flex items-end gap-4 mb-4">
            <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase leading-[0.85]">
              BLOG
            </h1>
            <div className="h-3 w-3 bg-[#FF7A7A] rounded-full mb-4 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-[3px] w-16 bg-[#FFD100]"></div>
            <p className="text-lg md:text-xl font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Hackathons, Builds & Thoughts
            </p>
          </div>
        </div>

        {/* Blog List */}
        <div className="flex flex-col">
          {blogs.map((blog, index) => (
            <Link href={blog.link} key={blog.id} className="group">
              <article
                className={`py-10 md:py-14 border-t-[2px] border-black/10 dark:border-white/10 ${index === blogs.length - 1 ? 'border-b-[2px]' : ''}`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">

                  {/* Left: Number + Accent */}
                  <div className="flex items-center gap-4 md:w-24 shrink-0">
                    <span className="text-5xl md:text-6xl font-black text-black/10 dark:text-white/10 group-hover:text-black/30 dark:group-hover:text-white/30 transition-colors">
                      {blog.id}
                    </span>
                    <div className={`w-2 h-12 rounded-full ${blog.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>

                  {/* Center: Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        {blog.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {blog.title}
                    </h2>

                    <p className="text-base md:text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
                      {blog.snippet}
                    </p>
                  </div>

                  {/* Right: Arrow */}
                  <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full border-2 border-black/10 dark:border-white/10 group-hover:border-black dark:group-hover:border-white group-hover:bg-black dark:group-hover:bg-white transition-all duration-300 shrink-0 self-center">
                    <svg
                      className="w-5 h-5 text-black/30 dark:text-white/30 group-hover:text-white dark:group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

      </main>
    </div>
  );
}