import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="lg:pl-16 py-8 px-4 sm:px-6 lg:px-8 border-t"
      style={{ borderColor: "rgba(124,111,224,0.1)", background: "var(--bg-main)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ background: "var(--purple)" }}
          >
            A
          </div>
          <span className="text-sm font-semibold" style={{ color: "var(--dark)" }}>
            {personalInfo.name}
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            · {personalInfo.title}
          </span>
        </div>

        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          © {year} {personalInfo.name}. Built with Next.js &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-xs font-medium transition-colors hover:opacity-80"
            style={{ color: "var(--purple)" }}
          >
            Email
          </a>
          <span style={{ color: "var(--text-muted)" }}>·</span>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium transition-colors hover:opacity-80"
            style={{ color: "var(--purple)" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
