import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroTerminal = ({ lines }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPoweredOn, setIsPoweredOn] = useState(false);

  useEffect(() => {
    const powerOnTimer = setTimeout(() => setIsPoweredOn(true), 1000);
    return () => clearTimeout(powerOnTimer);
  }, []);

  useEffect(() => {
    if (isPoweredOn && currentIndex < lines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, lines[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 400); // Faster, smoother timing
      return () => clearTimeout(timer);
    }
  }, [currentIndex, lines, isPoweredOn]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isPoweredOn ? 1 : 0, scale: isPoweredOn ? 1 : 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#141414] border border-[#333333] rounded-md overflow-hidden font-mono text-sm shadow-[0_0_20px_rgba(0,255,159,0.05)] relative"
    >
      {!isPoweredOn && (
        <div className="absolute inset-0 z-10 bg-black flex items-center justify-center">
          <motion.div 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-[#00ff9f] text-xs uppercase tracking-[0.5em]"
          >
            Powering Up...
          </motion.div>
        </div>
      )}
      <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-[#333333]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] text-[#444] font-bold uppercase tracking-widest">DSO-KERNEL-V1.0</span>
          <span className="text-[#a0a0a0] text-xs">operator@terminal:~</span>
        </div>
      </div>
      <div className="p-4 min-h-[220px] bg-[#0a0a0a]/50">
        {displayedLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-1"
          >
            <span className="text-[#00ff9f] mr-2">$</span>
            <span className="text-[#e6e6e6]">{line}</span>
          </motion.div>
        ))}
        {currentIndex < lines.length && (
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-[#00ff9f] ml-1 align-middle"
          />
        )}
      </div>
    </div>
  );
};

export default HeroTerminal;
