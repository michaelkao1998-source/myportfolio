import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript/TypeScript', level: 95 },  
  { name: 'Tailwind CSS', level: 95 },
  { name: 'React/Next.js', level: 90 },  
  { name: 'Node/Express.js', level: 95 },
  { name: 'Java', level: 95 },
  { name: 'Python', level: 85 },
  { name: 'MongoDB/PostgreSQL', level: 90 },  
  { name: 'CI/CD pipeline', level: 85 },
  { name: 'Generative AI', level: 90, accent: 'green' },
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
            const isGreen = skill.accent === 'green';

            return (
              <div key={idx} className="mb-6 4xl:mb-8 5xl:mb-10">
                <div className="flex justify-between mb-2">    
                    {skill.name}                
                  <span
                    className={`font-medium 4xl:text-lg 5xl:text-xl ${
                      isGreen ? 'text-green-500 dark:text-green-400' : 'text-primary'
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
                      isGreen
                        ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-400'
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
