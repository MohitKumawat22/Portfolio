"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
    accent: string;
}

const projects: Project[] = [
    {
        id: "01",
        title: "PORTFOLIO WEBSITE",
        description:
            "A brutalist, interactive portfolio with 3D elements, GSAP animations, and a custom theme system.",
        tech: ["Next.js", "Three.js", "GSAP", "Tailwind"],
        image: "/projectshowcase.png",
        link: "/projects",
        accent: "#FFD100",
    },
    {
        id: "02",
        title: "HEALTHTECH APP",
        description:
            "A health awareness platform built during HackAndMake Bhopal with real-time data dashboards.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        image: "/projectshowcase2.png",
        link: "/projects",
        accent: "#FF7A7A",
    },
    {
        id: "03",
        title: "FREELANCE PROJECTS",
        description:
            "Zero-maintenance, high-speed websites tailored to client needs with modern design.",
        tech: ["Next.js", "MERN", "UI/UX", "Figma"],
        image: "/pr1.png",
        link: "/projects",
        accent: "#5FA8FF",
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState(
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    );
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        setTransform(
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
        );
        setGlare({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100,
            opacity: 0.15,
        });
    };

    const handleMouseLeave = () => {
        setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
        setGlare({ x: 50, y: 50, opacity: 0 });
    };

    return (
        <Link href={project.link}>
            <div
                ref={cardRef}
                className="group relative cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform,
                    transition: "transform 0.15s ease-out",
                    transformStyle: "preserve-3d",
                }}
            >
                {/* 3D Shadow Layer */}
                <div
                    className="absolute inset-0 rounded-2xl bg-black/20 dark:bg-white/10 blur-xl -z-10 transition-all duration-300 group-hover:blur-2xl"
                    style={{
                        transform: "translateZ(-40px) translateY(20px)",
                    }}
                ></div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-900 transition-colors duration-300">
                    {/* Glare Effect */}
                    <div
                        className="absolute inset-0 z-30 pointer-events-none rounded-2xl transition-opacity duration-300"
                        style={{
                            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
                        }}
                    ></div>

                    {/* Image */}
                    <div className="relative h-56 md:h-64 overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Number */}
                        <span
                            className="absolute top-4 right-4 text-7xl font-black opacity-20 text-white leading-none"
                            style={{ transform: "translateZ(20px)" }}
                        >
                            {project.id}
                        </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                        <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">
                                {project.title}
                            </h3>
                            <svg
                                className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1 ml-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M7 17L17 7M17 7H7M17 7v10"
                                />
                            </svg>
                        </div>

                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-6">
                            {project.description}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400 group-hover:border-black/30 dark:group-hover:border-white/30 transition-colors"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Bottom accent line */}
                        <div
                            className="mt-6 h-[2px] w-8 group-hover:w-full transition-all duration-700 rounded-full"
                            style={{ backgroundColor: project.accent }}
                        ></div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function ProjectSection() {
    return (
        <section className="relative bg-white dark:bg-gray-950 text-black dark:text-white py-24 md:py-32 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-16 md:mb-20">
                    <div className="flex items-end gap-4 mb-4">
                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                            PROJECTS
                        </h2>
                        <div className="h-3 w-3 bg-[#FFD100] rounded-full mb-3 animate-pulse"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-[3px] w-16 bg-[#5FA8FF]"></div>
                        <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Selected Work
                        </p>
                    </div>
                </div>

                {/* Project Cards Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                    style={{ perspective: "1200px" }}
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* View All Link */}
                <div className="mt-16 flex justify-center">
                    <Link
                        href="/projects"
                        className="group flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <div className="h-[2px] w-8 bg-gray-300 dark:bg-gray-700 group-hover:w-12 group-hover:bg-[#FFD100] transition-all duration-300"></div>
                        View All Projects
                        <div className="h-[2px] w-8 bg-gray-300 dark:bg-gray-700 group-hover:w-12 group-hover:bg-[#FFD100] transition-all duration-300"></div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
