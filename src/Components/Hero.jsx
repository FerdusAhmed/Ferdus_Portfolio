import myProfilePhoto from '../assets/image.jpeg'; 

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4">
    
      <div className="mb-8">
        <img 
          src= {myProfilePhoto} 
          alt="Ferdus Ahmed" 
          className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-500 object-cover shadow-lg shadow-blue-500/20"
        />
      </div>

      <h2 className="text-blue-500 text-xl font-mono mb-4">Hi, my name is</h2>
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Ferdus Ahmed.</h1>
      <p className="max-w-xl text-gray-400 text-lg leading-relaxed">
        I’m a <span className="text-white font-semibold">Flutter developer</span> specializing in building 
        exceptional digital experiences. Currently, I am a Learner of this field.
      </p>
      


    </section>
  );
};

export default Hero;

