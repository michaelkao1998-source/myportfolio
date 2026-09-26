import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, X, Rocket } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

import ProjectCard from '../components/ProjectCard';

// ── Asset imports ──
import a_gobeyondclicks from '../assets/a_gobeyondclicks.png';
import b_pathway from '../assets/b_pathway.png';
import c_doable from '../assets/c_doable.png';
import d_spreestorefront from '../assets/d_spreestorefront.png'
import e_luxe from '../assets/e_luxe.png'
import f_knowbase from '../assets/f_knowbase.png'
// ═══════════════════════════════════════════════════════════
//  PROJECT DATA — Dynamic array-based system
//  👉 Add new project objects here in future
// ═══════════════════════════════════════════════════════════
const projects = [
  {
    id: 1,
    title: 'Go Beyond Clicks',
    description:
      'A modern SaaS marketing platform designed to showcase product features, pricing plans, customer testimonials, and conversion-focused calls to action.',
    longDescription:
      'I built the landing page which organizes important information into sections such as the hero area, product features, customer testimonials, pricing plans, frequently asked questions, and a final call-to-action, making it suitable for startups launching a new software product.The project demonstrates ability to create responsive interfaces, reusable UI sections, animations, pricing layouts, and modern React/Next.js applications.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com/michaelkao1998-source',
    live: 'https://next-saas-lp.vercel.app',
    image: a_gobeyondclicks,
  },
  {
    id: 2,
    title: 'Doable AI-powered application builder',
    description:
      'Doable is an actual AI-powered application-building platform rather than simply a landing-page design.',
    longDescription:
      'I took part in developing Doable project, where I was responsible for requirement analysis, AI API integration and frontend design.This can significantly reduce the amount of repetitive development work required to create prototypes and internal business applications. It is particularly useful for startups, developers, agencies, and teams that want to turn an idea into a functional application quickly.',
    techStack: ['Typescript','React', 'Tailwind CSS', 'AI integration'],
    github: 'https://github.com/michaelkao1998-source',
    live: 'https://doable.me',
    image: c_doable,
  },
  {
    id: 3,
    title: 'Pathway to Productivity',
    description:
      'A responsive SaaS product website combining modern React architecture, server-side rendering, animated interactions, and conversion-focused product presentation.',
    longDescription:
      'I focused on responsive design to allow the same product presentation to work across desktop, tablet, and mobile screens, while Framer Motion provides smooth visual transitions and interactive elements. It demonstrates more than visual design: you can show knowledge of component-based React development, Next.js application structure, responsive styling, server-side rendering, animation, and reusable UI architecture.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com/michaelkao1998-source',
    live: 'https://saas-landing-nextjs.vercel.app',
    image: b_pathway,
    
  },
  {
    id: 4,
    title: 'Spree Storefront',
    description:
      'This storefront provides product browsing, search, filtering, product variants, shopping cart functionality, customer accounts, and a one-page checkout.',
    longDescription:
      'Spree Storefront is an actual open-source headless e-commerce storefront built on top of the Spree Commerce platform, with a real deployed demo rather than simply being a static design or UI template. It provides product browsing, search, filtering, product variants, shopping cart functionality, customer accounts, and a one-page checkout. I researched Spree REST API for Stripe, PayPal, and Adyen payment integration and contributed to the frontend design and implementation.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Spree REST API'],
    github: 'https://github.com/michaelkao1998-source',
    live: 'https://demo.spreecommerce.org',
    image: d_spreestorefront,
  },
  
  {
    id: 5,
    title: 'Knowbase AI',
    description:
      'Multi-tenant AI knowledge platform that enables organizations to upload business information and interact with an intelligent assistant powered by their own knowledge sources.',
    longDescription:
      'The application is particularly interesting from an AI engineering perspective because it represents a RAG-style workflow. I involved in RAG API integration which designed around company-specific information that can be supplied through documents and other knowledge sources.',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'RAG API'],
    
    github: 'https://github.com/michaelkao1998-source',
    live: 'https://knowbase-ai.netlify.app',
    image: f_knowbase,
  },

  {
    id: 6,
    title: 'Luxe Store',
    description:
      'Supported by headless Strapi CMS, persistent shopping cart, responsive UI, animated interactions, and Stripe payment integration.',
    longDescription:
      'Luxe is a responsive fashion e-commerce website designed around a modern online shopping experience, with a Next.js frontend connected to a Strapi headless CMS for managing store content and products. I demonstrated several practical fullstack skills like global cart state, image optimization, headless CMS integration, responsive UI, and animation.',
    techStack: ['Next.js', 'TypeScript', 'Framer Motion', 'Strapi'],    
    github: 'https://github.com/michaelkao1998-source',
    live: 'https://luxe-store.vercel.app',
    image: e_luxe,
  },

];

// ═══════════════════════════════════════════════════════════
//  PROJECTS SECTION
// ═══════════════════════════════════════════════════════════
export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section
      id="projects"
      className="py-24 4xl:py-36 5xl:py-48 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        {/* ── Section Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl 4xl:text-6xl 5xl:text-7xl font-bold inline-block relative">
            <span className="text-gradient">Featured Projects</span>
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-2xl 4xl:max-w-3xl mx-auto text-lg 4xl:text-xl 5xl:text-2xl">
            A collection of projects I've built — each one a step in my developer journey.
          </p>
        </motion.div>

        {/* ── Project Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 4xl:gap-12 5xl:gap-16 items-stretch">
          {/* Render project cards dynamically */}
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onClick={() => setSelectedId(project.id)}
            />
          ))}

        </div>

        {/* ── Modal — Project Detail View ── */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              />

              {/* Modal Content */}
              <motion.div
                layoutId={`project-${selectedId}`}
                className="w-full max-w-3xl glass bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 relative z-10 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors z-20"
                >
                  <X size={20} />
                </button>

                {projects
                  .filter((p) => p.id === selectedId)
                  .map((project) => (
                    <div key={project.id}>
                      {/* Modal Image */}
                      <div className="w-full h-64 md:h-80 bg-slate-200 dark:bg-slate-800 rounded-2xl mb-8 overflow-hidden">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="flex items-center justify-center w-full h-full text-4xl font-bold tracking-widest opacity-30">
                            {project.title.substring(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>

                      {/* Modal Title */}
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-slate-800">
                        {project.title}
                      </h2>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-sm px-4 py-1.5 bg-primary/10 text-primary rounded-full font-medium border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Long Description */}
                      <p className="text-justify text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-8">
                        {project.longDescription}
                      </p>

                      {/* Action Links */}
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-semibold hover:opacity-80 transition-opacity"
                        >
                          <Github size={20} /> Source Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-secondary transition-colors"
                        >
                          <ExternalLink size={20} /> Live Demo
                        </a>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
