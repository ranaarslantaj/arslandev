import { whyMe, process } from "@/data/portfolio";

export default function WhyMeSection() {
  return (
    <>
      {/* Why Work With Me */}
      <section id="whyme" className="lg:pl-16 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "var(--purple)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--purple)" }}>
              Why Work With Me
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <h2
              className="font-black leading-tight lg:w-80 shrink-0"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--dark)" }}
            >
              The difference <br />
              <span className="text-gradient">is in the detail.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {whyMe.map((item, i) => {
                const bgColors = ["var(--white)", "var(--purple)", "var(--dark)", "var(--white)"];
                const textColors = ["var(--dark)", "white", "white", "var(--dark)"];
                const mutedColors = ["var(--text-muted)", "rgba(255,255,255,0.65)", "rgba(255,255,255,0.65)", "var(--text-muted)"];
                const borders = ["1px solid rgba(124,111,224,0.1)", "none", "none", "1px solid rgba(124,111,224,0.1)"];

                return (
                  <div
                    key={i}
                    className="bento-card p-6"
                    style={{ background: bgColors[i], color: textColors[i], border: borders[i] }}
                  >
                    <div
                      className="text-3xl mb-4 w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{
                        background: bgColors[i] === "var(--white)"
                          ? "rgba(124,111,224,0.08)"
                          : "rgba(255,255,255,0.15)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-base mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: mutedColors[i] }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="lg:pl-16 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "var(--purple)" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--purple)" }}>
              My Process
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
            <h2
              className="font-black leading-tight"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--dark)" }}
            >
              From idea to <span className="text-gradient">launch.</span>
            </h2>
          </div>

          {/* Process cards — horizontal scroll on mobile, grid on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((step, i) => (
              <div
                key={i}
                className="bento-card p-6 relative"
                style={{
                  background: i === 2 ? "var(--purple)" : i === 4 ? "var(--dark)" : "var(--white)",
                  color: i === 2 || i === 4 ? "white" : "var(--dark)",
                  border: i !== 2 && i !== 4 ? "1px solid rgba(124,111,224,0.1)" : "none",
                }}
              >
                <div
                  className="text-4xl font-black mb-4 leading-none"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    color: i === 2 ? "rgba(255,255,255,0.2)" : i === 4 ? "rgba(255,255,255,0.2)" : "rgba(124,111,224,0.15)",
                  }}
                >
                  {step.step}
                </div>
                <h3 className="font-bold text-sm mb-2 leading-snug">{step.title}</h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    color: i === 2 ? "rgba(255,255,255,0.65)" : i === 4 ? "rgba(255,255,255,0.6)" : "var(--text-muted)",
                  }}
                >
                  {step.desc}
                </p>

                {/* Arrow between cards */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-xs"
                    style={{ color: "var(--purple)", fontSize: "18px" }}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
