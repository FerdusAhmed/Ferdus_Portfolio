const Academy = () => {
  // Formal data structure - easy to maintain and scale
  const educationData = [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Metropolitan University, Sylhet",
      duration: "2023 — Present",
      details: "Actively studying Software Engineering, Algorithms, and Object-Oriented Programming.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sylhet Science and Technology College, Sylhet",
      duration: "2019 — 2021",
      details: "Specialized in Science. Focused on higher Mathematics and Physics.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sylhet Pulp and Paper Mills High School, Sunamganj",
      duration: "2017 — 2019",
      details: "Science Group. Achieved strong academic results.",
    },
  ];

  return (
    <section id="academic" className="py-20 bg-gray-900 text-white px-8 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        
       
        <header className="mb-16">
          <h2 className="text-3xl font-bold border-l-8 border-blue-500 pl-4 uppercase tracking-wider">
            Educational Background
          </h2>
        </header>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-2 md:gap-10 group">
              
           
              <div className="hidden md:block w-32 shrink-0 pt-1 text-sm text-blue-400 font-mono font-bold">
                {edu.duration}
              </div>

             
              <div className="relative pl-8 border-l border-gray-700 pb-4">
                
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[8.5px] top-1.5 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {edu.degree}
                </h3>

                
                <div className="md:hidden text-blue-400 font-mono text-xs mb-2 mt-1 font-bold">
                  {edu.duration}
                </div>

                <p className="text-gray-300 font-semibold italic mt-1">
                  {edu.institution}
                </p>
                
                <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-2xl">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academy;