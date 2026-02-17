import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-[#1E293B] py-10"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left — branding */}
        <div className="flex flex-col items-center sm:items-start gap-1.5">
          <span className="font-mono text-sm text-[#00E5FF] font-medium tracking-widest">
            TL.dev
          </span>
          <p className="text-xs text-[#334155] font-mono">
            © {year} Tushar Lingwal — Built with Next.js & Tailwind CSS
          </p>
        </div>

        {/* Center — social */}
        <div className="flex items-center gap-5">
          {[
            { href: "https://github.com/tusharlingwal", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/in/tusharlingwal", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:tushar@nit.ac.in", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="text-[#334155] hover:text-[#00E5FF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] rounded p-1"
            >
              <Icon size={16} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Right — back to top */}
        <a
          href="#"
          className="text-xs font-mono text-[#334155] hover:text-[#94A3B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] rounded px-1"
          aria-label="Back to top"
        >
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
