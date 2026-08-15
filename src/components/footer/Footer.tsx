import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Keasser Gonzales
            </h2>

            <p className="mt-3 text-lg font-medium text-cyan-400">
              Junior Full Stack Developer
            </p>

            <p className="mt-6 max-w-sm leading-7 text-slate-400">
              Passionate about building modern, scalable, and production-ready
              web applications using React, TypeScript, Node.js, Express, and
              MySQL.
            </p>
          </div>

          <FooterLinks />

          <FooterSocial />
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Keasser Gonzales. All rights reserved.
            </p>

            <p className="text-sm text-slate-500">
              Built with React • TypeScript • Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}