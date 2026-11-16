import { personalInfo } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="lg:pl-16 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-px" style={{ background: "var(--purple)" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--purple)" }}>
            About Me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Bio card */}
          <div
            className="bento-card p-8 lg:col-span-7"
            style={{ background: "var(--white)" }}
          >
            <h2
              className="font-black mb-6 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--dark)" }}
            >
              Building the web,{" "}
              <span className="text-gradient">one pixel at a time.</span>
            </h2>
            {personalInfo.bio.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed mb-4 last:mb-0"
                style={{ color: "#555" }}
              >
                {para}
              </p>
            ))}

            {/* Education */}
            <div
              className="mt-6 p-4 rounded-2xl flex items-start gap-4"
              style={{ background: "rgba(124,111,224,0.06)", border: "1px solid rgba(124,111,224,0.12)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg"
                style={{ background: "var(--purple)", color: "white" }}
              >
                🎓
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: "var(--dark)" }}>
                  BS Computer Science · 2020–2024
                </div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  Federal Urdu University of Arts, Sciences &amp; Technology, Islamabad
                </div>
              </div>
            </div>
          </div>

          {/* Right column: quick facts + contact */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Quick facts */}
            <div
              className="bento-card p-6"
              style={{ background: "var(--purple)", color: "white" }}
            >
              <div className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-4">Quick Facts</div>
              <div className="space-y-3">
                {[
                  { label: "Role", value: personalInfo.title },
                  { label: "Experience", value: `${personalInfo.experience} Years` },
                  { label: "Location", value: personalInfo.location },
                  { label: "Availability", value: "Open to opportunities" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center border-b border-white/10 pb-2 last:border-0">
                    <span className="text-white/60 text-sm">{label}</span>
                    <span className="text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact card */}
            <div
              className="bento-card p-6"
              style={{ background: "var(--dark)", color: "white" }}
            >
              <div className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-4">Get In Touch</div>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                    style={{ background: "var(--purple)" }}>
                    ✉️
                  </div>
                  <span className="text-sm text-white/80 truncate">{personalInfo.email}</span>
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                    style={{ background: "var(--teal)" }}>
                    📱
                  </div>
                  <span className="text-sm text-white/80">{personalInfo.phone}</span>
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                    style={{ background: "var(--amber)" }}>
                    💼
                  </div>
                  <span className="text-sm text-white/80">linkedin.com/in/{personalInfo.linkedin}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
