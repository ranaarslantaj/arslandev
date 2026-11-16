"use client";

import { personalInfo, stats } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen lg:pl-16 flex items-center px-4 sm:px-6 lg:px-8 pb-20 lg:pb-0 pt-6">
      <div className="max-w-7xl mx-auto w-full">

        {/* BIG "Portfolio" heading */}
        <div className="mb-6">
          <h1
            className="font-black leading-none tracking-tighter select-none"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(4rem, 12vw, 10rem)",
              color: "var(--dark)",
              letterSpacing: "-0.03em",
            }}
          >
            Portfolio
            <span style={{ color: "var(--purple)" }}>.</span>
          </h1>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-auto">

          {/* ——— CARD 1: Profile / About Me (tall, left) ——— */}
          <div
            className="bento-card relative flex flex-col justify-between p-7 sm:col-span-2 lg:col-span-3 lg:row-span-2 min-h-80"
            style={{ background: "var(--purple)", color: "white" }}
          >
            {/* About Me label */}
            <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M19.07 4.93l-1.41 1.41M7.76 16.24l-1.41 1.41"/>
              </svg>
              About Me
            </div>

            {/* Avatar ring */}
            <div className="flex justify-center my-4">
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center text-5xl font-black relative"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "3px solid rgba(255,255,255,0.4)",
                  boxShadow: "0 0 0 8px rgba(255,255,255,0.08)",
                }}
              >
                <span style={{ fontFamily: "'Syne', sans-serif" }}>MA</span>
              </div>
            </div>

            {/* Name */}
            <div>
              <p className="text-white/60 text-sm mb-1">I&apos;m,</p>
              <h2
                className="font-black leading-tight"
                style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.2rem, 4vw, 3rem)" }}
              >
                {personalInfo.firstName}
                <br />
                {personalInfo.lastName}
              </h2>
              <p className="text-white/70 text-sm mt-2">{personalInfo.subtitle}</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/20">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="opacity-60 shrink-0">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href={`mailto:${personalInfo.email}`} className="text-white/70 text-xs hover:text-white transition-colors truncate">
                {personalInfo.email}
              </a>
            </div>

            {/* Circular badge */}
            <div
              className="absolute bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center text-center animate-float"
              style={{ background: "var(--dark)", border: "2px solid rgba(255,255,255,0.2)" }}
            >
              <div>
                <div className="text-white text-xs font-bold leading-tight">{personalInfo.experience}</div>
                <div className="text-white/50 text-[9px] leading-tight">YRS<br/>EXP</div>
              </div>
            </div>
          </div>

          {/* ——— CARD 2: Headline text ——— */}
          <div
            className="bento-card flex flex-col justify-center p-7 lg:col-span-5"
            style={{ background: "var(--white)" }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ background: "rgba(124,111,224,0.1)", color: "var(--purple)" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse-soft inline-block" style={{ background: "var(--purple)" }} />
              Available for new projects
            </div>
            <h3
              className="font-black leading-tight mb-3"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--dark)" }}
            >
              High-performance, responsive websites built to achieve your business goals.
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
              Web and frontend developer specializing in WordPress and React/Next.js. I turn designs into clean, fast, and SEO-ready digital experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
                style={{ background: "var(--purple)" }}
              >
                View My Work →
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{ border: "2px solid var(--purple)", color: "var(--purple)" }}
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>

          {/* ——— CARD 3: Stats — Projects ——— */}
          <div
            className="bento-card flex flex-col justify-between p-6 lg:col-span-2"
            style={{ background: "var(--teal)", color: "white" }}
          >
            <div className="text-white/70 text-xs font-medium flex items-center gap-1">
              <span>✦</span> Projects
            </div>
            <div>
              <div
                className="font-black leading-none"
                style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
              >
                20+
              </div>
              <div className="text-white/70 text-sm mt-1">Delivered</div>
            </div>
            {/* Corner bracket */}
            <div className="absolute top-3 right-3 opacity-30">
              <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 3h14v14"/>
              </svg>
            </div>
          </div>

          {/* ——— CARD 4: Stats — Clients ——— */}
          <div
            className="bento-card relative flex flex-col justify-between p-6 lg:col-span-2"
            style={{ background: "var(--purple-dark, #5b50c8)", color: "white" }}
          >
            <div className="text-white/70 text-xs font-medium flex items-center gap-1">
              <span>✦</span> Clients
            </div>
            <div>
              <div
                className="font-black leading-none"
                style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
              >
                15+
              </div>
              <div className="text-white/70 text-sm mt-1">Worldwide</div>
            </div>
            <div className="absolute top-3 right-3 opacity-30">
              <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 3h14v14"/>
              </svg>
            </div>
          </div>

          {/* ——— CARD 5: Featured tech stack ——— */}
          <div
            className="bento-card flex flex-col justify-between p-6 lg:col-span-5"
            style={{ background: "var(--dark)", color: "white" }}
          >
            <div className="text-white/50 text-xs font-medium mb-3">TECH STACK</div>
            <div className="flex flex-wrap gap-2">
              {["WordPress", "React.js", "Next.js", "WooCommerce", "Tailwind CSS", "Dynatrace", "AWS", "Figma"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: "var(--amber)", color: "var(--dark)" }}
              >
                🌍
              </div>
              <div>
                <div className="text-sm font-semibold">International Clients</div>
                <div className="text-white/50 text-xs">UK · UAE · US · Pakistan</div>
              </div>
            </div>
          </div>

          {/* ——— CARD 6: Amber awards/countries ——— */}
          <div
            className="bento-card relative flex flex-col justify-between p-6 lg:col-span-2"
            style={{ background: "var(--amber)", color: "var(--dark)" }}
          >
            <div className="text-black/50 text-xs font-medium flex items-center gap-1">
              <span>✦</span> Countries
            </div>
            <div>
              <div
                className="font-black leading-none"
                style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
              >
                5+
              </div>
              <div className="text-black/60 text-sm mt-1">Served Globally</div>
            </div>
            <div className="absolute top-3 right-3 opacity-30">
              <svg width="16" height="16" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 3h14v14"/>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
