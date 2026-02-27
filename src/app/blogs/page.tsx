import React from 'react';
import Link from 'next/link';

export default function BlogsPage() {
  // Pre-filled with your recent hackathon and tech event experiences
  const blogs = [
    {
      id: '01',
      title: 'WINNING AT HACKANDMAKE BHOPAL',
      date: 'Jan 11, 2026',
      readTime: '3 MIN READ',
      snippet: 'Presented our HealthTech web app at the HackAndMake hackathon at Jehan Numa Palace. Had an amazing time building, networking, and even got to meet Aman Gupta and Anubhav Dubey!',
      color: 'bg-[#FF7A7A]', // Pink
      link: '#'
    },
    {
      id: '02',
      title: 'LEADING THE TEAM AT SNOWHACKS',
      date: 'Jan 09, 2026',
      readTime: '4 MIN READ',
      snippet: 'Stepped up as a team leader at SnowHacks! We built an impactful health awareness platform from scratch. Incredibly proud of the team dynamics and the technical hurdles we overcame.',
      color: 'bg-[#5FA8FF]', // Blue
      link: '#'
    },
    {
      id: '03',
      title: 'DIVING INTO WEB3 AT BUILD STATION',
      date: 'Jan 03, 2026',
      readTime: '5 MIN READ',
      snippet: 'Spent an incredible weekend at Build Station Indore learning the ins and outs of Web3. Got hands-on experience building on the Aptos blockchain using the Move language.',
      color: 'bg-[#FFD100]', // Yellow
      link: '#'
    },
    {
      id: '04',
      title: 'DEVFEST 2025: ENTREPRENEURSHIP TRACK',
      date: 'Dec 22, 2025',
      readTime: '4 MIN READ',
      snippet: 'Attended DevFest 2025 in Indore. Focused heavily on the entrepreneurship track to level up my freelancing journey and learn how to build sustainable, scalable tech products.',
      color: 'bg-white',
      link: '#'
    },
  ];

  return (
    <div className="min-h-screen relative bg-white text-black font-sans overflow-hidden pb-20">
      {/* Custom Grid Background */}
      <style dangerouslySetInnerHTML={{__html: `
        .bg-graph-paper {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
        }
      `}} />
      
      <div className="absolute inset-0 bg-graph-paper pointer-events-none z-0"></div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        
        {/* Page Header */}
        <div className="mb-20 flex flex-col items-start md:items-center justify-center text-center">
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter uppercase leading-none">
            UPDATES
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-bold bg-black text-white px-4 py-2 inline-block transform -rotate-2">
            HACKATHONS, BUILDS & THOUGHTS
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="group relative flex flex-col h-full"
            >
              {/* Brutalist Shadow Background */}
              <div className="absolute inset-0 border-4 border-black bg-black translate-x-3 translate-y-3 pointer-events-none transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5"></div>
              
              {/* Card Content */}
              <div className={`relative z-10 flex flex-col h-full border-4 border-black p-6 md:p-8 ${blog.color} transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2`}>
                
                {/* Meta Info */}
                <div className="flex justify-between items-center border-b-4 border-black pb-4 mb-4">
                  <span className="font-bold text-lg uppercase bg-white border-2 border-black px-2 py-1 transform -rotate-1">
                    {blog.date}
                  </span>
                  <span className="font-bold text-sm uppercase tracking-wider">
                    {blog.readTime}
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none mb-4">
                  {blog.title}
                </h2>
                
                {/* Snippet */}
                <p className="text-lg font-medium leading-snug mb-8 flex-grow">
                  {blog.snippet}
                </p>
                
                {/* Read More Button */}
                <div className="mt-auto">
                  <Link href={blog.link} className="inline-block relative w-full text-center group/btn">
                    <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 transition-transform group-hover/btn:translate-x-2 group-hover/btn:translate-y-2"></div>
                    <div className="relative z-10 bg-white border-4 border-black py-3 px-6 font-black text-xl uppercase transition-colors group-hover/btn:bg-black group-hover/btn:text-white">
                      Read Full Post ↗
                    </div>
                  </Link>
                </div>

              </div>
            </article>
          ))}
        </div>

      </main>
    </div>
  );
}