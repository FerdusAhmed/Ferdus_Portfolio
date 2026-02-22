const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Title and Intro */}
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-10">
          I am currently available for new projects and opportunities. 
          Please feel free to reach out via email or phone.
        </p>

        {/* Contact Details - Simple List Style */}
        <div className="space-y-6">
          
          {/* Email Link */}
          <div>
            <p className="text-blue-500 font-semibold uppercase text-sm tracking-widest">Email</p>
            <a href="mailto:ferdus63479@gmail.com" className="text-xl hover:underline">
              ferdus63479@gmail.com
            </a>
          </div>

          {/* Phone Link */}
          <div>
            <p className="text-blue-500 font-semibold uppercase text-sm tracking-widest">Phone</p>
            <a href="tel:+8801765838836" className="text-xl hover:underline">
              +880 1765838836
            </a>
          </div>

         

        </div>

        
        <footer className="mt-20 pt-8 border-t border-gray-800 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Ferdus Ahmed. Built with React.</p>
        </footer>

      </div>
    </section>
  );
};

export default Contact;