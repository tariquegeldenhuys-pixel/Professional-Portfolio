import { GraduationCap, Briefcase, Award, Cpu, Bot, FlaskConical, ShieldCheck } from 'lucide-react';

type TimelineItem = {
  icon: React.ElementType;
  type: 'education' | 'experience' | 'certification';
  title: string;
  organization: string;
  period: string;
  description: string;
};

const timeline: TimelineItem[] = [
  {
    icon: GraduationCap,
    type: 'education',
    title: 'AI Business Operations Bootcamp',
    organization: 'Capstone Project · NQF 6 Aligned',
    period: '2025 — 2026',
    description:
      'Completed an intensive bootcamp focused on designing integrated technology-based solutions. Built and deployed a multi-feature AI-powered business productivity platform as the capstone project.',
  },
  {
    icon: ShieldCheck,
    type: 'certification',
    title: 'Occupational Certificate: Computer Technician (NQF 5)',
    organization: 'National Qualification · South Africa',
    period: 'Completed',
    description:
      'Earned a nationally recognized occupational certificate qualifying me as a Computer Technician at NQF Level 5. Covers hardware, software, networking, and IT support competencies.',
  },
  {
    icon: FlaskConical,
    type: 'experience',
    title: 'Engineering Laboratory Intern',
    organization: 'Cape Peninsula University of Technology',
    period: 'Internship',
    description:
      'Completed an internship in the laboratories of the Department of Electrical, Electronic and Computer Engineering at CPUT. Gained hands-on experience with technical systems, equipment, and lab operations.',
  },
  {
    icon: Cpu,
    type: 'experience',
    title: 'Computer Technician',
    organization: 'IT Support · Cape Town, SA',
    period: 'Ongoing',
    description:
      'Set up, maintain, and troubleshoot hardware, software, and network systems. Reduce downtime and keep users productive through fast, reliable support with clear documentation.',
  },
  {
    icon: Bot,
    type: 'experience',
    title: 'AI Operations Specialist',
    organization: 'Automation & AI Tools',
    period: 'Current Focus',
    description:
      'Expanding into AI-assisted tools and automation — building systems that use generative AI, workflow automation, and analytics to make IT support proactive rather than reactive.',
  },
  {
    icon: Award,
    type: 'certification',
    title: 'NQF 6: Design Integrated Technology-Based Solutions',
    organization: 'Industry-Ready Certification',
    period: '2026',
    description:
      'Delivered a working application, technical documentation, and portfolio-ready industry project aligned to NQF 6 standards.',
  },
];

const typeStyles: Record<TimelineItem['type'], { label: string; classes: string }> = {
  education: {
    label: 'Education',
    classes: 'bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 border-brand-200 dark:border-brand-800/50',
  },
  experience: {
    label: 'Experience',
    classes:
      'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50',
  },
  certification: {
    label: 'Certification',
    classes:
      'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900/50',
  },
};

export default function EducationExperience() {
  return (
    <section id="education-experience" className="py-20 lg:py-28 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="container-max section-padding">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            Education & Experience
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Background & journey
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            From hands-on IT support to AI-driven operations — building skills every step of the way.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 sm:left-6 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-16 sm:pl-20">
                  {/* Icon node */}
                  <div className="absolute left-0 top-0 w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-sm">
                    <item.icon size={20} className="text-brand-600 dark:text-brand-400" />
                  </div>

                  <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${typeStyles[item.type].classes}`}
                      >
                        {typeStyles[item.type].label}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-500">{item.period}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-sm font-medium text-brand-600 dark:text-brand-400 mb-2">{item.organization}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
