"use client";

import Lines from "../component/Lines";
import HoverGrid from "../component/HoverGrid";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/component/Footer";
import "../app/globals.css";
import Eyes from "@/component/eyesss";
import ProjectSection from "@/component/ProjectSection";

const Page = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ═══════════════════════════════════════════════ */}
      <main className="min-h-screen overflow-hidden w-full flex justify-center flex-col items-center bg-white dark:bg-gray-950 transition-colors duration-300 relative">
        {/* Name */}
        <div className="w-full h-[25vh] mb-10 flex justify-center z-10 items-center">
          <h1 className="text-5xl md:text-8xl lg:text-9xl uppercase flex font-bold z-20 text-black dark:text-white">
            <span className="whitespace-nowrap">m</span>
            <Eyes />
            <span className="whitespace-nowrap">hit</span> &nbsp;{" "}
            <Eyes />
            <span className="whitespace-nowrap">stwal</span>
          </h1>
        </div>

        {/* Marquee Ribbon */}
        <div className="w-full h-[27vh] flex justify-center relative items-center overflow-hidden">
          <Lines />
        </div>

        {/* Interactive Grid Background */}
        <HoverGrid />
      </main>

      {/* ═══════════════════════════════════════════════ */}
      {/* ABOUT ME — Scroll Reveal Section */}
      {/* ═══════════════════════════════════════════════ */}
      <div className="h-[200vh] w-full relative flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="min-h-screen w-full absolute flex justify-center items-center">
          <h1 className="text-[70px] sm:text-[100px] md:text-[150px] lg:text-[200px] whitespace-nowrap uppercase z-2 text-transparent bg-clip-text bg-gradient-to-r from-[#833AB4] to-[#405DE6] font-bold opacity-70 pointer-events-none absolute">
            About Me
          </h1>

          <div className="relative w-full h-screen">
            <span className="animate-ping-pong delay-100 text-xs sm:text-sm lg:text-2xl absolute top-[25.6%] left-[8.6%] text-black dark:text-white">
              <span className="text-2xl lg:text-3xl font-semibold">A</span>
              spiring to understand <br />
            </span>
            <span className="animate-ping-pong delay-200 absolute text-xs sm:text-sm lg:text-2xl top-[65%] left-[45%] text-black dark:text-white">
              <span className="text-2xl lg:text-3xl font-semibold">B</span>
              uilding <br /> Cool stuff
            </span>
            <span className="animate-ping-pong delay-300 absolute text-xs sm:text-sm lg:text-2xl top-[15%] left-[55%] text-black dark:text-white">
              <span className="text-2xl lg:text-3xl font-semibold">O</span>
              bsessed with <br /> Modern and 3D Web
            </span>
            <span className="animate-ping-pong delay-400 absolute text-xs sm:text-sm lg:text-2xl top-[55%] left-[70%] text-black dark:text-white">
              <span className="text-2xl lg:text-3xl font-semibold">U</span>
              I/UX Designer
            </span>
            <span className="animate-ping-pong delay-500 absolute text-xs sm:text-sm lg:text-2xl top-[25%] left-[85%] text-black dark:text-white">
              <span className="text-2xl lg:text-3xl font-semibold">T</span>
              ech enthusiast
            </span>
            <span className="animate-ping-pong delay-600 absolute text-xs sm:text-sm lg:text-2xl top-[75%] left-[20%] text-black dark:text-white">
              <span className="text-2xl lg:text-3xl font-semibold">M</span>
              aking ideas <br /> come to life
            </span>
            <span className="animate-ping-pong delay-700 absolute text-xs sm:text-sm lg:text-2xl top-[40%] left-[30%] text-black dark:text-white">
              <span className="text-2xl lg:text-3xl font-semibold">E</span>
              ngaging <br /> digital experiences
            </span>
          </div>
        </div>

        {/* Sticky Profile Photo */}
        <div className="h-[100vh] w-screen sticky z-40 top-0 flex items-center justify-center">
          <Image
            className="rounded-lg z-40 top-20 object-cover h-[70vh] lg:h-[90vh] w-auto"
            src="/self5.png"
            alt="my profile"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* SKILLS MARQUEE — Quick Animated Divider */}
      {/* ═══════════════════════════════════════════════ */}
      <div className="bg-black dark:bg-gray-900 py-5 overflow-hidden border-y-2 border-black dark:border-gray-700">
        <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {[
                "NEXT.JS",
                "REACT",
                "THREE.JS",
                "GSAP",
                "NODE.JS",
                "MONGODB",
                "FIGMA",
                "TAILWIND",
                "TYPESCRIPT",
                "EXPRESS",
              ].map((skill) => (
                <span
                  key={skill + i}
                  className="text-white text-sm md:text-base font-black uppercase tracking-[0.3em] mx-8"
                >
                  {skill}
                  <span className="mx-8 text-[#FFD100]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `,
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* PROJECTS SECTION — 3D Perspective Cards */}
      {/* ═══════════════════════════════════════════════ */}
      <ProjectSection />

      {/* ═══════════════════════════════════════════════ */}
      {/* CTA SECTION — Get In Touch */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-6">
              Have a project in mind?
            </p>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-10">
              LET&apos;S <span className="text-[#FFD100]">BUILD</span>
              <br />
              SOMETHING
            </h2>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4"
            >
              <div className="flex items-center gap-4 bg-black dark:bg-white text-white dark:text-black font-black text-sm uppercase tracking-[0.15em] px-10 py-5 hover:gap-6 transition-all duration-300">
                Get In Touch
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>

            <div className="flex items-center gap-3 mt-8">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                Available for Freelance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* FOOTER */}
      {/* ═══════════════════════════════════════════════ */}
      <Footer />
    </>
  );
};

export default Page;