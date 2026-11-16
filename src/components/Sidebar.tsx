"use client";

import { useState } from "react";

const navItems = ["Home", "About", "Services", "Projects", "Experience", "Contact"];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  const scrollTo = (section: string) => {
    setActive(section);
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-16 z-50 hidden lg:flex flex-col items-center justify-center gap-10 py-8"
        style={{ background: "rgba(240,239,245,0.8)", backdropFilter: "blur(12px)", borderRight: "1px solid rgba(124,111,224,0.1)" }}>
        {/* Logo dot */}
        <div className="absolute top-6 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
          style={{ background: "var(--purple)" }}>
          A
        </div>

        {/* Nav items — rotated */}
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-xs font-medium tracking-widest uppercase cursor-pointer transition-all duration-200"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                color: active === item ? "var(--purple)" : "var(--text-muted)",
                letterSpacing: "0.15em",
              }}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Bottom social dot */}
        <div className="absolute bottom-6 flex flex-col gap-3 items-center">
          <a
            href="https://linkedin.com/in/ranaarslantajj"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            style={{ background: "var(--purple)", color: "white" }}
            title="LinkedIn"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="mailto:ranaarslantaj@gmail.com"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            style={{ background: "var(--teal)", color: "white" }}
            title="Email"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
            </svg>
          </a>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex items-center justify-around py-3 px-4"
        style={{ background: "rgba(240,239,245,0.95)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(124,111,224,0.15)" }}>
        {navItems.slice(0, 5).map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="text-xs font-medium tracking-wide px-2 py-1 rounded-lg transition-all"
            style={{
              color: active === item ? "var(--purple)" : "var(--text-muted)",
              background: active === item ? "rgba(124,111,224,0.1)" : "transparent",
            }}
          >
            {item}
          </button>
        ))}
      </nav>
    </>
  );
}
