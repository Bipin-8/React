import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>
        
        <div className={`flex flex-col md:flex-row items-center gap-10 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 gradient-bg p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                {/* Replace with your image */}
                <img 
                  src="https://via.placeholder.com/300" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-6">
            <p className="text-lg text-gray-300">
              Hello! I'm Bipin, a passionate web developer with a strong foundation in building modern web applications. 
              My journey in web development started with a curiosity about how websites work, which led me to dive deep into 
              the world of coding.
            </p>
            
            <p className="text-lg text-gray-300">
              I specialize in creating responsive, user-friendly websites and applications using modern technologies. 
              My approach to development is focused on writing clean, maintainable code that delivers exceptional user experiences.
            </p>
            
            <p className="text-lg text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying outdoor activities. I believe in continuous learning and staying updated with the latest trends 
              in web development.
            </p>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-md gradient-bg text-white font-medium hover:opacity-90 transition-opacity inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

