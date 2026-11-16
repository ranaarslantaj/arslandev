"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="lg:pl-16 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: "var(--purple)" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--purple)" }}>
            Projects
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <h2
            className="font-black leading-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--dark)" }}
          >
            Selected <span className="text-gradient">Work.</span>
          </h2>
          <p className="text-sm max-w-sm" style={{ color: "var(--text-muted)" }}>
            Real projects delivered for real businesses — from UK e-commerce to UAE logistics.
          </p>
        </div>

        {/* Bento grid of projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">

          {/* Featured projects (larger) */}
          {projects.slice(0, 2).map((project, i) => (
            <div
              key={project.id}
              className="bento-card relative overflow-hidden lg:col-span-6 cursor-pointer"
              style={{ minHeight: "280px" }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background color fill */}
              <div
                className="absolute inset-0 transition-transform duration-500"
                style={{
                  background: `linear-gradient(135deg, ${project.bgAccent} 0%, ${project.color}25 100%)`,
                  transform: hoveredId === project.id ? "scale(1.02)" : "scale(1)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-7 h-full flex flex-col justify-between">
                <div>
                  {/* Number + URL */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest" style={{ color: project.color }}>
                      0{project.id}
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium px-3 py-1 rounded-full transition-all hover:opacity-80"
                      style={{ background: project.color, color: "white" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit Site ↗
                    </a>
                  </div>

                  <h3
                    className="font-black text-2xl mb-2 leading-tight"
                    style={{ fontFamily: "'Syne', sans-serif", color: "var(--dark)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: project.color }}>
                    {project.tagline}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                    {project.desc}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ background: `${project.color}18`, color: project.color, border: `1px solid ${project.color}30` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Remaining projects (medium) */}
          {projects.slice(2, 8).map((project, i) => (
            <div
              key={project.id}
              className="bento-card relative overflow-hidden lg:col-span-4 cursor-pointer"
              style={{ minHeight: "220px" }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="absolute inset-0 transition-transform duration-500"
                style={{
                  background: `linear-gradient(135deg, ${project.bgAccent} 0%, ${project.color}20 100%)`,
                  transform: hoveredId === project.id ? "scale(1.03)" : "scale(1)",
                }}
              />

              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold tracking-widest" style={{ color: project.color }}>
                      0{project.id}
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                      style={{ background: project.color, color: "white", fontSize: "10px" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      ↗
                    </a>
                  </div>

                  <h3
                    className="font-black text-lg mb-1 leading-tight"
                    style={{ fontFamily: "'Syne', sans-serif", color: "var(--dark)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium mb-3" style={{ color: project.color }}>
                    {project.tagline}
                  </p>
                  <p className="text-xs leading-relaxed line-clamp-3" style={{ color: "#666" }}>
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full text-xs"
                      style={{ background: `${project.color}18`, color: project.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
