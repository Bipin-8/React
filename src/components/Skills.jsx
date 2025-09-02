import { useEffect, useState } from 'react';

const SkillCategory = ({ title, skills, delay }) => {
  return (
    <div className={`animate-fadeIn opacity-0`} style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}>
      <h3 className="text-xl font-bold mb-4 gradient-text">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-slate-800 p-4 rounded-lg flex items-center space-x-3 hover:shadow-md transition-shadow"
          >
            {skill.icon && (
              <div className="text-primary">
                {skill.icon}
              </div>
            )}
            <span className="text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
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

  const frontendSkills = [
    { name: "HTML", icon: <i className="fab fa-html5"></i> },
    { name: "CSS", icon: <i className="fab fa-css3-alt"></i> },
    { name: "JavaScript", icon: <i className="fab fa-js"></i> },
    { name: "React", icon: <i className="fab fa-react"></i> },
    { name: "Tailwind CSS", icon: null },
    { name: "Bootstrap", icon: <i className="fab fa-bootstrap"></i> }
  ];

  const backendSkills = [
    { name: "Node.js", icon: <i className="fab fa-node-js"></i> },
    { name: "Express", icon: null },
    { name: "MongoDB", icon: null },
    { name: "SQL", icon: null },
    { name: "Firebase", icon: null },
    { name: "REST API", icon: null }
  ];

  const toolsSkills = [
    { name: "Git", icon: <i className="fab fa-git-alt"></i> },
    { name: "GitHub", icon: <i className="fab fa-github"></i> },
    { name: "VS Code", icon: null },
    { name: "Figma", icon: <i className="fab fa-figma"></i> },
    { name: "npm", icon: <i className="fab fa-npm"></i> },
    { name: "Webpack", icon: null }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          My Skills
        </h2>
        
        {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <SkillCategory title="Frontend" skills={frontendSkills} delay={100} />
            <SkillCategory title="Backend" skills={backendSkills} delay={300} />
            <SkillCategory title="Tools & Technologies" skills={toolsSkills} delay={500} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;

