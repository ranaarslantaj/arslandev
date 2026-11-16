import { services } from "@/data/portfolio";

export default function ServicesSection() {
  return (
    <section id="services" className="lg:pl-16 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: "var(--purple)" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--purple)" }}>
            Services
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <h2
            className="font-black leading-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--dark)" }}
          >
            What I bring to <br />
            <span className="text-gradient">your project.</span>
          </h2>
          <p className="text-sm max-w-sm" style={{ color: "var(--text-muted)" }}>
            End-to-end web development services designed to deliver measurable business results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const bgColors = [
              "var(--white)",
              "var(--purple)",
              "var(--white)",
              "var(--dark)",
              "var(--white)",
              "var(--teal)",
            ];
            const textColors = [
              "var(--dark)",
              "white",
              "var(--dark)",
              "white",
              "var(--dark)",
              "white",
            ];
            const mutedColors = [
              "var(--text-muted)",
              "rgba(255,255,255,0.65)",
              "var(--text-muted)",
              "rgba(255,255,255,0.65)",
              "var(--text-muted)",
              "rgba(255,255,255,0.75)",
            ];

            return (
              <div
                key={i}
                className="bento-card p-7 flex flex-col gap-4"
                style={{
                  background: bgColors[i],
                  color: textColors[i],
                  border: bgColors[i] === "var(--white)" ? "1px solid rgba(124,111,224,0.08)" : "none",
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{
                    background: bgColors[i] === "var(--white)"
                      ? "rgba(124,111,224,0.08)"
                      : "rgba(255,255,255,0.15)",
                  }}
                >
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 leading-snug">{service.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: mutedColors[i] }}>
                    {service.desc}
                  </p>
                </div>
                <div className="mt-auto">
                  <span
                    className="text-xs font-semibold tracking-wide"
                    style={{ color: bgColors[i] === "var(--white)" ? "var(--purple)" : "rgba(255,255,255,0.6)" }}
                  >
                    0{i + 1} ——
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
