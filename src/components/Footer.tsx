import { Mail, Linkedin, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="container-max section-padding py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Tarique Geldenhuys<span className="text-brand-500">.</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:tariquegeldenhuys@gmail.com"
              aria-label="Email"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/tarique-geldenhuys-1a7840346"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500">
              <MapPin size={14} className="text-brand-500" />
              Cape Town, SA
            </span>
          </div>

          <nav className="flex items-center gap-4 text-sm">
            {[
              { label: 'About', href: '#about' },
              { label: 'Education & Experience', href: '#education-experience' },
              { label: 'Projects', href: '#projects' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © 2026 Tarique Geldenhuys. Built with AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
