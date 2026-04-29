import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Simulated technical metadata
  const metadata = {
    hash: `SHA-256: ${Math.random().toString(16).substring(2, 10)}...`,
    status: 'DEPLOYED // STABLE',
    coverage: `${Math.floor(Math.random() * 20) + 80}% CODE_COVERAGE`
  };

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 0 20px rgba(0, 255, 159, 0.1)",
        borderColor: "#00ff9f"
      }}
      className="bg-[#141414] border border-[#333333] p-6 rounded-md transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-2 right-2 font-mono text-[8px] text-[#00ff9f]/40 text-right leading-tight pointer-events-none"
          >
            <div>{metadata.hash}</div>
            <div>{metadata.status}</div>
            <div>{metadata.coverage}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <h3 className="text-xl font-bold text-[#e6e6e6] mb-2 group-hover:text-[#00ff9f] transition-colors">
        {project.name}
      </h3>
      <p className="text-[#a0a0a0] text-sm mb-4">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techniques.map((tech, i) => (
          <span 
            key={i}
            className="text-[10px] px-2 py-1 bg-[#0a0a0a] border border-[#333333] text-[#00c3ff] rounded uppercase tracking-wider font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="text-[#e6e6e6] text-sm border-t border-[#333333] pt-4 mt-auto">
        {project.details}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
