import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  const introParagraphs = [
    "I'm a Full-Stack Developer focused on building modern web applications and practical <span className=\"inline-block text-lg md:text-xl 4xl:text-2xl 5xl:text-3xl font-black bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500 bg-clip-text text-transparent px-2 py-1 rounded-lg shadow-[0_0_24px_rgba(59,130,246,0.65)] border border-cyan-400/40\">AI-driven</span> solutions.",
    'Specialized in developing responsive frontends, reliable backend systems, APIs, databases, and <span className="inline-block text-lg md:text-xl 4xl:text-2xl 5xl:text-3xl font-black bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500 bg-clip-text text-transparent px-2 py-1 rounded-lg shadow-[0_0_24px_rgba(59,130,246,0.65)] border border-cyan-400/40">AI integration</span>.',
    'Focused on using <span className="inline-block text-lg md:text-xl 4xl:text-2xl 5xl:text-3xl font-black bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500 bg-clip-text text-transparent px-2 py-1 rounded-lg shadow-[0_0_24px_rgba(59,130,246,0.65)] border border-cyan-400/40">LLM</span> and <span className="inline-block text-lg md:text-xl 4xl:text-2xl 5xl:text-3xl font-black bg-gradient-to-r from-fuchsia-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent px-2 py-1 rounded-lg shadow-[0_0_28px_rgba(168,85,247,0.6)] border border-violet-400/40">AI API</span> to automate workflows, improve productivity, and create smarter user experiences.',
    'Projects are approached with an emphasis on clean architecture, maintainable code, and practical technology choices.',
    'Strong attention to delivering useful products without unnecessary complexity or development overhead.',
    'The goal is to build reliable, scalable solutions that balance quality, functionality, and a reasonable development budget.',
  ];

  return (
    <section id="about" className="py-24 4xl:py-36 5xl:py-48 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl 4xl:text-5xl 5xl:text-6xl font-bold inline-block relative">
            <span className="text-gradient">About Me</span>
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </h2>
        </motion.div>

        <div className="max-w-5xl 4xl:max-w-6xl 5xl:max-w-7xl mx-auto glass p-8 md:p-12 4xl:p-16 5xl:p-20 rounded-3xl relative overflow-hidden min-h-[360px] md:min-h-[420px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pb-4 md:pb-6"
          >
            <div className="space-y-5 text-justify text-lg md:text-xl 4xl:text-2xl 5xl:text-3xl leading-relaxed text-slate-700 dark:text-slate-300">
              {introParagraphs.map((sentence) => (
                <p key={sentence} dangerouslySetInnerHTML={{ __html: sentence }} />
              ))}
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mt-8 flex w-full max-w-[220px] items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-primary/30 md:px-8"
            >
              View Resume
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
