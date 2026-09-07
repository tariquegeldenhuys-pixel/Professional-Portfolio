import { MapPin, ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-500/10 dark:bg-brand-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-slate-400/10 dark:bg-brand-600/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(100 116 139) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-max section-padding w-full">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/50 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
              </span>
              <span className="text-xs font-medium text-brand-700 dark:text-brand-300">
                Available for opportunities
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 animate-fade-in-up animation-delay-100">
              Tarique Geldenhuys
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-brand-600 dark:text-brand-400 mb-6 animate-fade-in-up animation-delay-200">
              Computer Technician | AI Operations Specialist
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl text-balance animate-fade-in-up animation-delay-300">
              I keep teams running by fixing systems fast, and I build AI tools to make IT support proactive.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-in-up animation-delay-500">
              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-lg shadow-brand-600/20 hover:shadow-brand-600/30 hover:-translate-y-0.5 transition-all"
              >
                View Projects
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-brand-300 dark:hover:border-brand-700 hover:text-brand-600 dark:hover:text-brand-400 transition-all"
              >
                <Mail size={16} />
                Contact
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500 animate-fade-in animation-delay-500">
              <MapPin size={16} className="text-brand-500" />
              Cape Town, South Africa
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[320px] lg:max-w-none animate-scale-in">
            <div className="absolute -inset-4 rounded-[2rem] bg-brand-500/10 dark:bg-brand-500/15 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-8 border-white dark:border-slate-900 shadow-2xl shadow-slate-900/15 dark:shadow-black/30">
              <img
                src="/upscale_image_01.png.jpg"
                alt="Tarique Geldenhuys wearing a navy suit"
                width="900"
                height="1200"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent px-5 pb-5 pt-16">
                <p className="text-sm font-semibold text-white">Tarique Geldenhuys</p>
                <p className="text-xs text-slate-200">IT Support · AI Operations</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 shadow-lg">
              <p className="text-xs font-semibold text-slate-900 dark:text-white">Systems operational</p>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Ready to help</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-slate-400 dark:bg-slate-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
