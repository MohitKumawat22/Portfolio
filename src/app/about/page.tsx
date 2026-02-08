"use client";

import React, { useRef, MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react"; // Install lucide-react if needed

// --- Types ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
}

// --- 3D Project Card ---
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useMotionTemplate`${ySpring}deg`;
  const rotateY = useMotionTemplate`${xSpring}deg`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * 32.5;
    const mouseY = (e.clientY - rect.top) * 32.5;
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
      className="group relative w-full h-[400px] rounded-2xl bg-gray-900 border border-white/10 p-1 shadow-2xl transition-all duration-300 hover:shadow-cyan-500/20"
    >
      <div
        className="relative flex flex-col h-full bg-gray-900 rounded-xl overflow-hidden p-6"
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Glow Effect */}
        <div
          className={`absolute -right-20 -top-20 w-64 h-64 bg-${project.color}-500/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:bg-${project.color}-500/20`}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-${project.color}-500/10`}>
              <Code2 className={`w-6 h-6 text-${project.color}-400`} />
            </div>
            <div className="flex gap-4" style={{ transform: "translateZ(30px)" }}>
              {project.github && (
                <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
              )}
              {project.link && (
                <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>

          <h3
            className="text-2xl font-bold text-white mb-2"
            style={{ transform: "translateZ(25px)" }}
          >
            {project.title}
          </h3>

          <p
            className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed"
            style={{ transform: "translateZ(20px)" }}
          >
            {project.description}
          </p>

          <div
            className="flex flex-wrap gap-2 mt-auto"
            style={{ transform: "translateZ(25px)" }}
          >
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs font-medium rounded-full bg-${project.color}-500/10 text-${project.color}-300 border border-${project.color}-500/20`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Menstrual Health Platform",
      description:
        "Built at SnowHacks. A comprehensive platform designed to raise awareness and provide resources for menstrual health hygiene, featuring interactive educational modules.",
      tags: ["Next.js", "React", "Tailwind", "Node.js"],
      color: "pink", // Custom color for this card
      github: "#",
      link: "#",
    },
    {
      title: "Mental Health Webapp",
      description:
        "Winner at HackAndMake (Bhopal). An AI-driven web application connecting users with mental health professionals and offering real-time stress management tools.",
      tags: ["React", "AI Integration", "Express", "MongoDB"],
      color: "green",
      github: "#",
      link: "#",
    },
    {
      title: "Freelance Client Project",
      description:
        "A production-grade web application developed for a real-world client. Focused on high-performance rendering, SEO optimization, and a custom CMS.",
      tags: ["TypeScript", "Next.js", "Three.js", "PostgreSQL"],
      color: "blue",
      github: "#",
      link: "#",
    },
  ];

  return (
    <section className="py-32 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 inline-block">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg">
            From hackathon wins to production applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;