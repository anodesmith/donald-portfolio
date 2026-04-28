const SkillsMatrix = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-[#00c3ff] font-mono text-sm uppercase tracking-[0.2em]">
            // {category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div 
                key={skill}
                className="px-3 py-1.5 bg-[#141414] border border-[#333333] text-[#e6e6e6] text-sm font-mono rounded-sm hover:border-[#00ff9f] hover:text-[#00ff9f] transition-all cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsMatrix;
