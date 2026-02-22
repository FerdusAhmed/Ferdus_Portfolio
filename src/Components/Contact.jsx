const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center px-8">
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">
        I’m currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <a href="mailto:ferdus63479@gmail.com" className="px-10 py-4 border-2 border-blue-500 text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition">
        Say Hello
      </a>
      <footer className="mt-20 text-gray-500 text-sm">
        Designed & Built by Ferdus Ahmed
      </footer>
    </section>
  );
};
export default Contact;