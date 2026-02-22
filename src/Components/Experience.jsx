const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800 text-white px-8">
      <div className="max-w-4xl mx-auto">
        
        
        <h2 className="text-3xl font-bold mb-12 border-b-4 border-blue-500 w-fit pb-2">
          Work Experience
        </h2>

        <div className="space-y-12">
          
          
          <div className="border-l-2 border-blue-500 pl-8 relative">
           
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
            
            <h3 className="text-2xl font-bold">Academic Instructor</h3>
            <p className="text-blue-400 font-medium">Shahid Cadet School & College | 2025 - Present</p>
            
            <ul className="mt-4 text-gray-400 list-disc ml-4">
              <li>Teaching Mathematics and Science subjects.</li>
              <li>Simplifying complex topics for students.</li>
            </ul>
          </div>

         
          <div className="border-l-2 border-blue-500 pl-8 relative">
            
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
            
            <h3 className="text-2xl font-bold">Medical Billing Specialist</h3>
            <p className="text-blue-400 font-medium">Intelligency Solutions | 2024 - 2025</p>
            
            <ul className="mt-4 text-gray-400 list-disc ml-4">
              <li>Processed medical claims using ICD/CPT codes.</li>
              <li>Ensured data accuracy in healthcare records.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;