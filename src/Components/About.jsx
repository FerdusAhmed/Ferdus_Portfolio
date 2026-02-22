const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white px-8">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-blue-500 w-fit pb-2">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          
          <article className="space-y-4">
            <p className="text-gray-300 leading-relaxed text-lg">
              I am <span className="text-blue-400 font-semibold">Ferdus Ahmed</span>, 
              an aspiring software developer currently pursuing my B.Sc. in Computer Science 
              and Engineering at Metropolitan University.
            </p>
            <p className="text-gray-400">
              My core focus lies in <span className="text-white">Cross-Platform Development</span> and 
              modern web architectures. Since 2024, I have been actively building 
              applications using Flutter and React, focusing on clean code and 
              user-centric design.
            </p>
          </article>

          {/* Column 2: Quick Highlights (Formal and organized) */}
          <aside className="bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Key Focus Areas</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Mobile Application Development (Flutter)</li>
              <li>• Frontend Web Technologies (React, Tailwind)</li>
              <li>• Mathematics and Physics Instruction</li>
              <li>• Logic & Algorithm Implementation</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;