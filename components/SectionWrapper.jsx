import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, title }) => {
  return (
    <section id={id} className="py-24 max-w-5xl mx-auto px-6 relative">
      {title && (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 relative"
        >
          <h2 className="text-3xl font-bold text-[#e6e6e6] inline-block relative z-10">
            <span className="text-[#00ff9f] mr-2">#</span>
            {title}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="absolute -bottom-2 left-0 h-1 bg-[#00ff9f]/20"
            />
          </h2>
          <motion.div
            initial={{ left: '0%' }}
            whileInView={{ left: '100%' }}
            transition={{ duration: 1.5, ease: "linear", repeat: 0 }}
            className="absolute top-0 bottom-0 w-[2px] bg-[#00ff9f]/10 z-0 pointer-events-none"
            style={{ height: '100%' }}
          />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
