'use client';

import content from '../data/content.json';
import HeroTerminal from '../components/HeroTerminal';
import ProjectCard from '../components/ProjectCard';
import SkillsMatrix from '../components/SkillsMatrix';
import SectionWrapper from '../components/SectionWrapper';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-space">
                {content.hero.title}
              </h1>
              <p className="text-[#00ff9f] font-mono tracking-[0.3em] uppercase text-sm">
                {content.hero.subtitle}
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-[#a0a0a0] max-w-md leading-relaxed"
            >
              {content.hero.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href="#projects"
                className="inline-block px-8 py-3 border border-[#00ff9f] text-[#00ff9f] font-mono text-sm uppercase tracking-widest hover:bg-[#00ff9f]/10 transition-all shadow-[0_0_15px_rgba(0,255,159,0.1)]"
              >
                Access Projects
              </a>
            </motion.div>
          </div>
          
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <HeroTerminal lines={content.hero.terminal_lines} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <SectionWrapper id="projects" title="Core Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper id="skills" title="Technical Arsenal">
        <SkillsMatrix categories={content.skills} />
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper id="about" title="Operational Background">
        <div className="max-w-3xl">
          <p className="text-xl leading-relaxed text-[#e6e6e6] font-inter">
            {content.about.text}
          </p>
        </div>
      </SectionWrapper>

      {/* Security Philosophy Section */}
      <SectionWrapper id="philosophy" title="Security Philosophy">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.philosophy.principles.map((principle, i) => (
            <div key={i} className="p-6 bg-[#141414] border border-[#333333] rounded-md">
              <h3 className="text-[#00ff9f] font-mono text-sm uppercase mb-4 tracking-wider">
                [{i+1}] {principle.name}
              </h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" title="Establish Contact">
        <ContactForm 
          email={content.contact.email} 
          github={content.contact.github} 
        />
      </SectionWrapper>
    </div>
  );
}
