import {
  Tags,
  MessageSquareReply,
  BarChart3,
  Workflow,
  ShieldCheck,
  CheckCircle2,
  Award,
  FileText,
  Presentation,
  GraduationCap,
} from 'lucide-react';

const features = [
  {
    icon: Tags,
    title: 'Smart Ticket Classification Engine',
    description:
      'Built system architecture and AI classifier to auto-categorize HR, IT, Finance, and Operations requests.',
  },
  {
    icon: MessageSquareReply,
    title: 'AI Response Generator',
    description:
      'Integrated generative AI with tone control to classify and automatically respond to tickets.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Tracking Dashboard',
    description:
      'Built dashboards to monitor ticket volume, categories, and response time. Added weekly insights and trend prediction for forecasting workload.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Implemented automated ticket routing, email notifications, and approval workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Risk Module',
    description: 'Added logging, bias detection, and risk evaluation reporting.',
  },
];

const deliverables = [
  { icon: FileText, label: 'Working Application' },
  { icon: FileText, label: 'Technical Documentation' },
  { icon: Presentation, label: 'Portfolio-Ready Project' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container-max section-padding">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            Projects
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured work
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A capstone project that demonstrates end-to-end system design, AI integration, and business impact.
          </p>
        </div>

        {/* Capstone project card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Project header */}
            <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-br from-brand-50 to-slate-50 dark:from-brand-950/30 dark:to-slate-900">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-semibold">
                  <Award size={12} />
                  Bootcamp Capstone
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium">
                  NQF 6 Aligned
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                AI Business Operations Platform
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Designed and deployed a multi-feature AI-powered business productivity system to streamline support
                operations.
              </p>
            </div>

            {/* Key features */}
            <div className="p-6 sm:p-8">
              <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-5">
                Key Features Delivered
              </h4>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
                  >
                    <div className="flex gap-3">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-300">
                        <feature.icon
                          size={18}
                          className="text-brand-600 dark:text-brand-400 group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{feature.title}</h5>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Outcome */}
              <div className="mt-6 rounded-xl bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-900/50 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white mb-1.5 text-sm">Outcome</h5>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      Deployed a fully functional platform that produces measurable business insights and supports
                      forward-looking decision-making. Included technical documentation and executive presentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact / Deliverables */}
            <div className="p-6 sm:p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={18} className="text-brand-500" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Impact & Deliverables</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                Delivered a working application, technical documentation, and portfolio-ready industry project aligned
                to NQF 6 standards:{' '}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Design integrated technology-based solutions.
                </span>
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {deliverables.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
