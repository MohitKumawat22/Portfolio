import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white font-sans transition-colors duration-300">

      <main className="max-w-6xl mx-auto px-6 py-20 lg:py-28">

        {/* Page Header */}
        <div className="mb-20">
          <div className="flex items-end gap-4 mb-4">
            <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase leading-[0.85]">
              CONTACT
            </h1>
            <div className="h-3 w-3 bg-[#FFD100] rounded-full mb-4 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-[3px] w-16 bg-[#FF7A7A]"></div>
            <p className="text-lg md:text-xl font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Open for Freelance & Collaborations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t-[2px] border-black/10 dark:border-white/10">

          {/* Left Column: Contact Info */}
          <div className="lg:border-r-[2px] border-black/10 dark:border-white/10 py-12 lg:pr-16">

            {/* Email Section */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[3px] w-6 bg-[#5FA8FF]"></div>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                  Email
                </h2>
              </div>

              <div className="space-y-4">
                <a href="mailto:dev.mohitkumawat@gmail.com" className="group block">
                  <div className="flex items-center justify-between py-4 border-b border-black/5 dark:border-white/5 group-hover:border-black/20 dark:group-hover:border-white/20 transition-colors">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">Professional</p>
                      <p className="text-lg md:text-xl font-bold group-hover:translate-x-2 transition-transform duration-300">dev.mohitkumawat@gmail.com</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-[#5FA8FF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </a>

                <a href="mailto:mohitkumawat2209@gmail.com" className="group block">
                  <div className="flex items-center justify-between py-4 border-b border-black/5 dark:border-white/5 group-hover:border-black/20 dark:group-hover:border-white/20 transition-colors">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">Personal</p>
                      <p className="text-lg md:text-xl font-bold group-hover:translate-x-2 transition-transform duration-300">mohitkumawat2209@gmail.com</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-[#5FA8FF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Socials Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[3px] w-6 bg-[#FF7A7A]"></div>
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                  Socials
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-0">
                {[
                  { name: 'GitHub', username: 'MohitKumawat22', link: 'https://github.com/MohitKumawat22' },
                  { name: 'LinkedIn', username: 'mohit-ostwal', link: 'https://linkedin.com/in/mohit-ostwal-kumawat123' },
                  { name: 'Instagram', username: 'dev.mohitkumawat', link: 'https://instagram.com/dev.mohitkumawat' },
                  { name: 'X (Twitter)', username: '@MOHITKUMAWATm', link: 'https://twitter.com/MOHITKUMAWATm' },
                ].map((social) => (
                  <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="group">
                    <div className="py-5 border-b border-black/5 dark:border-white/5 group-hover:border-black/20 dark:group-hover:border-white/20 transition-colors">
                      <p className="text-sm font-black uppercase mb-1 group-hover:translate-x-1 transition-transform duration-300">{social.name}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-14 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Currently available</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="py-12 lg:pl-16">

            <div className="flex items-center gap-3 mb-10">
              <div className="h-[3px] w-6 bg-[#FFD100]"></div>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                Send a Message
              </h2>
            </div>

            <form
              action="https://formsubmit.co/dev.mohitkumawat@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-xs font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-black dark:focus:border-white pb-3 text-lg font-medium focus:outline-none transition-colors placeholder:text-gray-300 dark:placeholder:text-gray-700"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-black dark:focus:border-white pb-3 text-lg font-medium focus:outline-none transition-colors placeholder:text-gray-300 dark:placeholder:text-gray-700"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-black dark:focus:border-white pb-3 text-lg font-medium focus:outline-none transition-colors resize-none placeholder:text-gray-300 dark:placeholder:text-gray-700"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group relative w-full flex items-center justify-center gap-3 bg-black dark:bg-white text-white dark:text-black font-black text-sm uppercase tracking-[0.15em] py-5 hover:gap-5 transition-all duration-300"
                >
                  Submit
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}