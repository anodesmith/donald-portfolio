import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 0 20px rgba(0, 255, 159, 0.1)",
        borderColor: "#00ff9f"
      }}
      className="bg-[#141414] border border-[#333333] p-6 rounded-md transition-all duration-300 group flex flex-col h-full"
    >
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
