import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Tailwind', level: 95 },
  { name: 'React.js', level: 85 },
  { name: 'Next.js', level: 85 },
  { name: 'CI/CD pipeline', level: 80 },
  { name: 'Generative AI', level: 80, accent: 'pink' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 4xl:py-36 5xl:py-48 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl 4xl:text-5xl 5xl:text-6xl font-bold inline-block relative">
            <span className="text-gradient">My Skills</span>
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </h2>
        </motion.div>

        <div className="max-w-3xl 4xl:max-w-5xl 5xl:max-w-6xl mx-auto">
          {skills.map((skill, idx) => {
            const isPink = skill.accent === 'pink';

            return (
              <div key={idx} className="mb-6 4xl:mb-8 5xl:mb-10">
                <div className="flex justify-between mb-2">
                  <span
                    className={`font-semibold ${
                      isPink
                        ? 'bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-400 bg-clip-text text-transparent'
                        : 'text-slate-800 dark:text-slate-200'
                    } 4xl:text-lg 5xl:text-xl`}
                  >
                    {skill.name}
                  </span>
                  <span
                    className={`font-medium 4xl:text-lg 5xl:text-xl ${
                      isPink ? 'text-pink-500 dark:text-pink-400' : 'text-primary'
                    }`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-3 4xl:h-4 5xl:h-5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: 'easeOut' }}
                    className={`h-full rounded-full relative ${
                      isPink
                        ? 'bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-400'
                        : 'bg-gradient-to-r from-primary to-secondary'
                    }`}
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 blur-[2px] animate-pulse" />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
