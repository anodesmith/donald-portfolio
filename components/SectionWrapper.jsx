import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, title }) => {
  return (
    <section id={id} className="py-24 max-w-5xl mx-auto px-6">
      {title && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[#e6e6e6] inline-block relative">
            <span className="text-[#00ff9f] mr-2">#</span>
            {title}
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#00ff9f]/20"></div>
          </h2>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
