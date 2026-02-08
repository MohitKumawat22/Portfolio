import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

// --- 3D Tilt Card Component ---
const TiltCard = ({ title, skills, color }) => {
  const ref = useRef(null);

  // Motion values for the tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse position to rotation degrees
  const rotateX = useMotionTemplate`${ySpring}deg`;
  const rotateY = useMotionTemplate`${xSpring}deg`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to center of card
    const mouseX = (e.clientX - rect.left) * 32.5;
    const mouseY = (e.clientY - rect.top) * 32.5;

    // Calculate rotation (max 15 degrees)
    const rPctX = mouseX / width - 16; 
    const rPctY = mouseY / height - 16; 
    
    x.set(rPctX);
    y.set(rPctY * -1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="relative w-full h-full p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 shadow-xl backdrop-blur-md border border-white/10"
    >
      {/* Glossy Reflection Gradient */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 40%)`
        }} 
      />

      <div 
        className="relative flex flex-col h-full bg-gray-900/80 rounded-xl p-6 overflow-hidden"
        style={{ transform: "translateZ(20px)" }} // Pushes content forward in 3D space
      >
        {/* Decorative Background Blob */}
        <div 
          className={`absolute -right-10 -top-10 w-40 h-40 bg-${color}-500/20 blur-3xl rounded-full pointer-events-none`} 
        />

        <h3 className={`text-2xl font-bold text-${color}-400 mb-6 flex items-center gap-2`}>
          {title}
        </h3>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`px-3 py-1.5 rounded-md text-sm font-medium border border-${color}-500/30 bg-${color}-500/10 text-${color}-200 shadow-[0_0_10px_rgba(0,0,0,0.2)]`}
              style={{ transform: "translateZ(30px)" }} // Pushes text even further for depth
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "Frontend & 3D",
      color: "cyan", // Tailwind color name
      skills: ["Next.js", "React", "Three.js", "GLSL", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Emerging Tech",
      color: "purple",
      skills: ["Generative AI", "Ethereum", "Smart Contracts", "Aptos (Move)", "Web3.js"]
    },
    {
      title: "Core Engineering",
      color: "blue",
      skills: ["Node.js", "Express", "C++", "DSA", "MongoDB", "Git/GitHub"]
    }
  ];

  return (
    <section className="py-32 bg-gray-950 text-white overflow-hidden perspective-1000">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header with Glow */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 relative z-10">
            Tech Stack
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
             Crafting 3D web experiences and decentralized applications with modern tools.
          </p>
        </div>

        {/* 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <div key={idx} className="h-80 w-full group perspective-1000">
              <TiltCard 
                title={cat.title} 
                skills={cat.skills} 
                color={cat.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;