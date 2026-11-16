"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="lg:pl-16 py-20 px-4 sm:px-6 lg:px-8 pb-32 lg:pb-20">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: "var(--purple)" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--purple)" }}>
            Contact
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Big CTA card */}
          <div
            className="bento-card p-10 lg:col-span-7 relative overflow-hidden"
            style={{ background: "var(--purple)", color: "white" }}
          >
            {/* Decorative circle */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20"
              style={{ background: "var(--teal)" }}
            />
            <div
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-10"
              style={{ background: "white" }}
            />

            <div className="relative z-10">
              <h2
                className="font-black leading-tight mb-4"
                style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Let&apos;s build something remarkable together.
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-md">
                Whether you are planning a new website, optimizing an existing store, or need an experienced developer for your engineering team — let&apos;s connect.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
                  style={{ background: "white", color: "var(--purple)" }}
                >
                  Send a Message ✉️
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
                >
                  Schedule a Call 📅
                </a>
              </div>
            </div>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Email card */}
            <div
              className="bento-card p-6 cursor-pointer transition-all hover:scale-105"
              style={{ background: "var(--white)", border: "1px solid rgba(124,111,224,0.12)" }}
              onClick={copyEmail}
            >
              <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>
                Email
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm" style={{ color: "var(--dark)" }}>
                  {personalInfo.email}
                </span>
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ background: "rgba(124,111,224,0.1)", color: "var(--purple)" }}
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </span>
              </div>
            </div>

            {/* Phone card */}
            <div
              className="bento-card p-6"
              style={{ background: "var(--dark)", color: "white" }}
            >
              <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                Phone / WhatsApp
              </div>
              <a
                href={`tel:${personalInfo.phone}`}
                className="font-semibold text-sm hover:opacity-80 transition-opacity"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* LinkedIn card */}
            <div
              className="bento-card p-6"
              style={{ background: "var(--amber)" }}
            >
              <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(0,0,0,0.5)" }}>
                LinkedIn
              </div>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-sm hover:opacity-80 transition-opacity"
                style={{ color: "var(--dark)" }}
              >
                linkedin.com/in/{personalInfo.linkedin} ↗
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
