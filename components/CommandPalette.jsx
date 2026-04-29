'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const commands = [
    { id: 'projects', name: 'Go to Projects', shortcut: 'P' },
    { id: 'skills', name: 'Go to Skills', shortcut: 'S' },
    { id: 'about', name: 'Go to About', shortcut: 'A' },
    { id: 'contact', name: 'Go to Contact', shortcut: 'C' },
    { id: 'philosophy', name: 'Go to Security Philosophy', shortcut: 'H' },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const executeCommand = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-[20vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-lg bg-[#141414] border border-[#333333] rounded-lg shadow-2xl overflow-hidden relative z-10"
          >
            <div className="p-4 border-b border-[#333333] flex items-center gap-3">
              <span className="text-[#00ff9f] font-mono">$</span>
              <input
                autoFocus
                type="text"
                placeholder="Search commands..."
                className="bg-transparent border-none outline-none text-[#e6e6e6] font-mono text-sm w-full"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className="text-[10px] text-[#444] font-mono uppercase">ESC to close</span>
            </div>
            <div className="max-h-[300px] overflow-y-auto p-2">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={() => executeCommand(cmd.id)}
                    className="w-full flex items-center justify-between p-3 rounded hover:bg-[#00ff9f]/10 group transition-colors text-left"
                  >
                    <span className="text-sm font-mono text-[#a0a0a0] group-hover:text-[#e6e6e6]">
                      {cmd.name}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#0a0a0a] border border-[#333333] text-[#444] group-hover:text-[#00ff9f] font-mono rounded">
                      {cmd.shortcut}
                    </span>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-[#444] font-mono text-xs uppercase tracking-widest">
                  No matching commands found
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
