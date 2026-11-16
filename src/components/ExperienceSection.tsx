import { experience } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="lg:pl-16 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: "var(--purple)" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--purple)" }}>
            Experience
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <h2
            className="font-black leading-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--dark)" }}
          >
            Career <span className="text-gradient">Timeline.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {experience.map((exp, i) => (
            <div
              key={i}
              className={`bento-card p-7 ${i === 0 ? "lg:col-span-7" : i === 1 ? "lg:col-span-5" : i === 2 ? "lg:col-span-5" : "lg:col-span-7"}`}
              style={{
                background: i % 2 === 0 ? "var(--white)" : "var(--dark)",
                border: i % 2 === 0 ? "1px solid rgba(124,111,224,0.1)" : "none",
                color: i % 2 === 0 ? "var(--dark)" : "white",
              }}
            >
              {/* Period badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{
                  background: `${exp.color}20`,
                  color: i % 2 === 1 ? "rgba(255,255,255,0.9)" : exp.color,
                  borderLeft: `3px solid ${exp.color}`,
                  paddingLeft: "10px",
                  borderRadius: "0 20px 20px 0",
                }}
              >
                {exp.period}
              </div>

              {/* Role */}
              <h3
                className="font-bold text-xl mb-1"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {exp.role}
              </h3>
              <div
                className="text-sm mb-5 flex items-center gap-2"
                style={{ color: i % 2 === 1 ? "rgba(255,255,255,0.5)" : "var(--text-muted)" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: exp.color }}
                />
                {exp.company} · {exp.location}
              </div>

              {/* Bullets */}
              <ul className="space-y-3">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: exp.color }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: i % 2 === 1 ? "rgba(255,255,255,0.7)" : "#555" }}
                    >
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
