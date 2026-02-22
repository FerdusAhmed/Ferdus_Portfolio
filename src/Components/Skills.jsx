const Skills = () => {
  const skills = ["Flutter","React", "JavaScript", "Tailwind CSS", "Node.js", "Git","Github"];
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill} className="p-6 bg-gray-800 border border-gray-700 rounded-xl hover:border-blue-500 transition-colors">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;