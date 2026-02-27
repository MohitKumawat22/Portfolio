import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen relative bg-white text-black font-sans overflow-hidden">
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
        
        {/* Header */}
        <div className="mb-16 flex flex-col items-start md:items-center md:justify-center md:text-center">
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter uppercase leading-none">
            LET'S TALK
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-bold bg-[#FFD100] border-2 border-black text-black px-4 py-2 inline-block transform rotate-1">
            OPEN FOR FREELANCE & COLLABORATIONS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Socials & Emails */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-2 mb-6 inline-block">
                Direct Comms
              </h2>
              <p className="text-lg font-medium mb-8 max-w-md">
                Whether you need a high-performance web app, a zero-maintenance freelance site, or just want to chat about UI/UX, drop me a line.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:dev.mohitkumawat@gmail.com" className="block group">
                  <div className="border-4 border-black p-4 bg-[#5FA8FF] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 relative">
                    <span className="font-bold text-lg uppercase block">Professional</span>
                    <span className="font-medium text-xl">dev.mohitkumawat@gmail.com</span>
                    <div className="absolute inset-0 border-4 border-black bg-transparent translate-x-2 translate-y-2 -z-10"></div>
                  </div>
                </a>
                
                <a href="mailto:mohitkumawat2209@gmail.com" className="block group">
                  <div className="border-4 border-black p-4 bg-white transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 relative">
                    <span className="font-bold text-lg uppercase block">Personal</span>
                    <span className="font-medium text-xl">mohitkumawat2209@gmail.com</span>
                    <div className="absolute inset-0 border-4 border-black bg-transparent translate-x-2 translate-y-2 -z-10"></div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-2 mb-6 inline-block">
                Socials
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'GitHub', username: 'MohitKumawat22', link: 'https://github.com/MohitKumawat22', color: 'bg-white' },
                  { name: 'LinkedIn', username: 'in/mohit-ostwal-kumawat123', link: 'https://linkedin.com/in/mohit-ostwal-kumawat123', color: 'bg-[#5FA8FF]' },
                  { name: 'Instagram', username: 'dev.mohitkumawat', link: 'https://instagram.com/dev.mohitkumawat', color: 'bg-[#FF7A7A]' },
                  { name: 'X (Twitter)', username: '@MOHITKUMAWATm', link: 'https://twitter.com/MOHITKUMAWATm', color: 'bg-[#FFD100]' },
                ].map((social) => (
                  <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="block group">
                    <div className={`border-4 border-black p-4 h-full ${social.color} transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1`}>
                      <span className="font-black uppercase text-xl block mb-1">{social.name}</span>
                      <span className="font-medium text-sm break-all">{social.username}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative">
            {/* Brutalist Shadow for the form container */}
            <div className="absolute inset-0 border-4 border-black bg-black translate-x-4 translate-y-4 pointer-events-none"></div>
            
            <form 
              action="https://formsubmit.co/dev.mohitkumawat@gmail.com" 
              method="POST"
              className="relative border-4 border-black bg-white p-8 md:p-12 z-10"
            >
              {/* FormSubmit Configuration (Hidden Fields) */}
              {/* Disables the default captcha */}
              <input type="hidden" name="_captcha" value="false" />
              {/* Optional: Add a success page URL here instead of default FormSubmit one */}
              {/* <input type="hidden" name="_next" value="https://yourwebsite.com/thanks" /> */}

              <h2 className="text-4xl font-black uppercase mb-8 leading-none">Send a Message</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xl font-bold uppercase mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    className="w-full border-4 border-black p-4 text-lg focus:outline-none focus:bg-[#FFD100] transition-colors font-medium"
                    placeholder="JOHN DOE"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xl font-bold uppercase mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className="w-full border-4 border-black p-4 text-lg focus:outline-none focus:bg-[#FFD100] transition-colors font-medium"
                    placeholder="JOHN@EXAMPLE.COM"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xl font-bold uppercase mb-2">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    required 
                    rows={5}
                    className="w-full border-4 border-black p-4 text-lg focus:outline-none focus:bg-[#FFD100] transition-colors font-medium resize-none"
                    placeholder="TELL ME ABOUT YOUR PROJECT..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-black text-white font-black text-2xl uppercase py-5 border-4 border-black hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </main>
    </div>
  );
}