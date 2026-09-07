import { useState } from 'react';
import { Mail, MapPin, Linkedin, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tariquegeldenhuys@gmail.com',
      href: 'mailto:tariquegeldenhuys@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'tarique-geldenhuys',
      href: 'https://www.linkedin.com/in/tarique-geldenhuys-1a7840346',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cape Town, South Africa',
      href: null,
    },
  ];

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition-colors';

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container-max section-padding">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            Contact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's work together
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Have a role, a project, or a question? Send a message and I'll get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => {
              const content = (
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-brand-600 dark:text-brand-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-500">{item.label}</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or role..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold shadow-lg shadow-brand-600/20 hover:shadow-brand-600/30 transition-all"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 animate-fade-in">
                  <CheckCircle2 size={18} className="text-green-600 dark:text-green-400 shrink-0" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">
                    Message sent! I'll get back to you soon.
                  </span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 animate-fade-in">
                  <AlertCircle size={18} className="text-red-600 dark:text-red-400 shrink-0" />
                  <span className="text-sm font-medium text-red-700 dark:text-red-400">{errorMsg}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
