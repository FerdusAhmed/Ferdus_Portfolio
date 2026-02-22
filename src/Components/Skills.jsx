const Skills = () => {
  
  const skills = [
    { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
    { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
    { name: "Tailwind", icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Git", icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "GitHub", icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white px-8">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl font-bold mb-12 border-b-2 border-blue-500 w-fit mx-auto pb-2">
          Skills
        </h2>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all border border-gray-700"
            >
             
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-12 h-12 mb-4 object-contain"
              />
              <p className="font-medium text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;