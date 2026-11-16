import { skills } from "@/data/portfolio";

const categoryColors: Record<string, { bg: string; text: string; badge: string; badgeText: string }> = {
  Frontend: {
    bg: "var(--purple)",
    text: "white",
    badge: "rgba(255,255,255,0.15)",
    badgeText: "rgba(255,255,255,0.9)",
  },
  "CMS & E-Commerce": {
    bg: "var(--white)",
    text: "var(--dark)",
    badge: "rgba(124,111,224,0.08)",
    badgeText: "var(--dark)",
  },
  "Cloud & Monitoring": {
    bg: "var(--dark)",
    text: "white",
    badge: "rgba(255,255,255,0.08)",
    badgeText: "rgba(255,255,255,0.85)",
  },
  "Tools & Methods": {
    bg: "var(--teal)",
    text: "white",
    badge: "rgba(255,255,255,0.2)",
    badgeText: "white",
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="lg:pl-16 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: "var(--purple)" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--purple)" }}>
            Skills
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <h2
            className="font-black leading-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--dark)" }}
          >
            Tools I work with <br />
            <span className="text-gradient">every day.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skills).map(([category, items]) => {
            const colors = categoryColors[category] || categoryColors["Frontend"];
            return (
              <div
                key={category}
                className="bento-card p-6"
                style={{
                  background: colors.bg,
                  border: colors.bg === "var(--white)" ? "1px solid rgba(124,111,224,0.1)" : "none",
                }}
              >
                <h3
                  className="font-bold text-sm mb-5 tracking-wide uppercase"
                  style={{ color: colors.text, opacity: colors.bg === "var(--white)" ? 1 : 0.9 }}
                >
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ background: colors.badge, color: colors.badgeText }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
