import { useEffect, useState } from 'react';

const ProjectCard = ({ title, description, technologies, image, link, github, delay }) => {
  return (
    <div className={`bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeIn opacity-0`} style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}>
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 gradient-text">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-slate-700 rounded-md text-xs text-gray-300">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          )}
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
      link: "https://example.com/project1",
      github: "https://github.com/yourusername/project1",
      delay: 100
    },
    {
      title: "Task Management App",
      description: "A productivity app that helps users organize tasks, set priorities, and track progress.",
      technologies: ["React", "Redux", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
      link: "https://example.com/project2",
      github: "https://github.com/yourusername/project2",
      delay: 200
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data and forecasts for locations worldwide.",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
      link: "https://example.com/project3",
      github: "https://github.com/yourusername/project3",
      delay: 300
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills with a modern design.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
      link: "https://example.com/project4",
      github: "https://github.com/yourusername/project4",
      delay: 400
    },
    {
      title: "Blog Platform",
      description: "A content management system for creating and managing blog posts with user authentication.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      link: "https://example.com/project5",
      github: "https://github.com/yourusername/project5",
      delay: 500
    },
    {
      title: "Recipe Finder",
      description: "An application that allows users to search for recipes based on ingredients they have.",
      technologies: ["React", "API Integration", "CSS"],
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
      link: "https://example.com/project6",
      github: "https://github.com/yourusername/project6",
      delay: 600
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          My Projects
        </h2>
        
        {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Bipin-8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md bg-transparent border border-white text-white font-medium hover:border-primary hover:text-primary transition-colors inline-block"
          >
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
