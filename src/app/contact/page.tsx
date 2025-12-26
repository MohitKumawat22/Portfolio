import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between  font-sans">
      
      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Text & Info Cards */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Headlines */}
            <div className="mb-12">
              <h1 className="text-6xl md:text-7xl font-bold text-[#2b1b12] mb-4">
                Reach Out
              </h1>
              <h2 className="text-4xl md:text-5xl text-[#2b1b12] leading-tight">
                Big Things Start With <br /> Small Talks.
              </h2>
            </div>
<div className='w-full  flex items-center justify-center'>
    <Image
    src="/cartoon.png"
    height={400}
    width={400}
    alt='jai ho'
    />
   
</div>
           
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100">
              <p className="text-gray-500 mb-8 text-center text-sm">
                We are excited to connect with you — share your details now.
              </p>

              <form className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="First name*"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 text-black capitalize py-4 focus:outline-none focus:ring-2 focus:ring-[#1de9b6]/50 placeholder-gray-400 text-sm shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Last name*"
                      className="w-full bg-white text-black capitalize border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#1de9b6]/50 placeholder-gray-400 text-sm shadow-sm"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full bg-white text-black lowercase border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#1de9b6]/50 placeholder-gray-400 text-sm shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="tel"
                      placeholder="Phone number*"
                      className="w-full bg-white border text-black border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#1de9b6]/50 placeholder-gray-400 text-sm shadow-sm"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full bg-white border text-black border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#1de9b6]/50 placeholder-gray-400 text-sm shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full bg-white border text-black border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#1de9b6]/50 placeholder-gray-400 text-sm shadow-sm"
                    />
                  </div>
                </div>

                {/* Text Area */}
                <div className="pt-2">
                  <textarea
                    rows={4}
                    placeholder="Anything else we should know?"
                    className="w-full bg-white border text-black border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#1de9b6]/50 placeholder-gray-400 text-sm shadow-sm resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-[#1ff7c2] hover:bg-[#1de9b6] text-black font-medium py-3 px-12 rounded-full transition-all duration-300 shadow-lg shadow-[#1ff7c2]/30"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </main>

     
    </div>
  );
};

export default page;