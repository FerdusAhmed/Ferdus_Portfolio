const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-500">Ferdus Ahmed</h1>
      <ul className="hidden md:flex gap-8 text-gray-300">
        <li className="hover:text-blue-500 cursor-pointer"><a href="#about">About</a></li>
        <li className="hover:text-blue-500 cursor-pointer"><a href="#academic">Academic</a></li>
        <li className="hover:text-blue-500 cursor-pointer"><a href="#experience">Experience</a></li>
        <li className="hover:text-blue-500 cursor-pointer"><a href="#skills">Skills</a></li>
        <li className="hover:text-blue-500 cursor-pointer"><a href="#contact">Contact</a></li>
         
      </ul>
    </nav>
  );
};
export default Navbar;