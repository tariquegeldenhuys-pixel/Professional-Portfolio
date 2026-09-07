import {
  CheckCircle2,
  Bot,
  BarChart3,
  Server,
  Users,
  Brain,
  Sparkles,
  Workflow,
  Database,
  LineChart,
  TrendingUp,
  Wrench,
  Network,
  Layers,
  FileText,
  Lightbulb,
  MessageSquare,
  GitPullRequestArrow,
  Target,
} from 'lucide-react';

const highlights = [
  'Hardware, software & network troubleshooting',
  'Clear communication & clean documentation',
  'Detail-oriented under pressure',
  'AI-assisted tools & automation',
];

type Skill = {
  name: string;
  icon: React.ElementType;
};

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    title: 'AI & Automation',
    icon: Bot,
    skills: [
      { name: 'ChatGPT', icon: Sparkles },
      { name: 'Prompt Engineering', icon: Brain },
      { name: 'Workflow Automation', icon: Workflow },
      { name: 'Generative AI', icon: Bot },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    skills: [
      { name: 'Excel', icon: Database },
      { name: 'Looker Studio', icon: BarChart3 },
      { name: 'Analytics', icon: LineChart },
      { name: 'Forecasting', icon: TrendingUp },
    ],
  },
  {
    title: 'IT & Systems',
    icon: Server,
    skills: [
      { name: 'Hardware/Software Troubleshooting', icon: Wrench },
      { name: 'Network Setup', icon: Network },
      { name: 'System Architecture', icon: Layers },
      { name: 'Technical Documentation', icon: FileText },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Problem Solving', icon: Lightbulb },
      { name: 'Clear Communication', icon: MessageSquare },
      { name: 'Process Improvement', icon: GitPullRequestArrow },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-max section-padding">
        {/* About Me */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
              About Me
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Keeping systems running, making support proactive
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I'm Tarique, a computer technician based in Cape Town who keeps teams running by fixing hardware,
                software, and network issues fast. I set up, maintain, and troubleshoot systems to cut downtime and
                keep users productive.
              </p>
              <p>
                I'm detail-oriented under pressure and known for clear communication and clean documentation. I'm now
                expanding into AI-assisted tools and automation to make IT support even faster and more proactive.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-brand-500 shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-slate-400/10 dark:from-brand-600/20 dark:to-slate-800/20 rounded-3xl backdrop-blur-sm border border-slate-200 dark:border-slate-800" />

              <div className="absolute inset-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold text-lg">
                      TG
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Tarique Geldenhuys</p>
                      <p className="text-xs text-slate-500 dark:text-slate-500">IT & AI Operations</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: 'IT Support', value: 'Hardware · Software · Networks' },
                      { label: 'AI Operations', value: 'Automation · AI Tools · ChatGPT' },
                      { label: 'Documentation', value: 'Clean · Clear · Process-driven' },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex justify-between items-center py-2.5 border-b border-slate-100 dark:border-slate-800 last:border-0"
                      >
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-500">{row.label}</span>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 text-right">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-100 dark:border-green-900/50">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-medium text-green-700 dark:text-green-400">Systems operational</span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-500/20 dark:bg-brand-500/30 rounded-2xl blur-2xl animate-float" />
            </div>
          </div>
        </div>

        {/* Career Objectives */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center">
              <Target size={20} className="text-brand-600 dark:text-brand-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Career Objectives</h3>
          </div>
          <div className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              My goal is to bridge the gap between traditional IT support and emerging AI technologies. I aim to build
              a career where I can apply hands-on troubleshooting experience alongside AI-driven automation to create
              proactive, efficient support systems.
            </p>
            <p>
              I'm seeking opportunities where I can continue developing AI operations skills, contribute to
              technology-based solution design, and help organizations reduce downtime through smarter, faster, and
              more automated IT processes.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
              Skills
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Tools & expertise
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              A blend of hands-on IT support, data-driven analysis, and emerging AI capabilities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {categories.map((category) => (
              <div
                key={category.title}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-300">
                    <category.icon
                      size={20}
                      className="text-brand-600 dark:text-brand-400 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{category.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 hover:border-brand-300 dark:hover:border-brand-700 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                      <skill.icon size={14} className="text-brand-500 shrink-0" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
