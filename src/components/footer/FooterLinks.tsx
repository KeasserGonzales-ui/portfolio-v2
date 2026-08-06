type FooterLink = {
  label: string;
  href: string;
};

const links: FooterLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "#resume" },
];

export default function FooterLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white">Quick Links</h3>

      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              aria-label={`Navigate to ${link.label}`}
              className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}