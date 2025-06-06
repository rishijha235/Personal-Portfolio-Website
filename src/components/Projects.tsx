import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Learning Platform',
      description: 'A full-stack e-learning platform using modern web technologies for seamless online education.',
      image: '/E-Learning.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      github: 'https://github.com/RishiJha/ecommerce',
      live: 'https://studynotion-kappa-eight.vercel.app/'
    },
    {
      title: 'Stock Price Prediction',
      description: 'An LSTM-based deep learning model for stock price prediction using historical time series data.',
      image: '/stock.jpg',
      technologies: ['TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
      github: 'https://github.com/rishijha235/Stock-Price-Prediction.git',
      live: 'https://stock_price_prediction-demo.com'
    },
    {
      title: 'Plan with Love',
      description: 'A platform designed to help you plan your journey based on your budget and preferred destinations.',
      image: '/tourismPlan.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/rishijha235/Tourism-Plan',
      live: 'https://tourism-plan-flame.vercel.app/'
    },
    {
      title: 'Top Courses',
      description: 'A professional platform designed to help you discover the most relevant courses in your domain, empowering you to master in-demand skills and advance your career.',
      image: '/courses.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/rishijha235/Top-Courses',
      live: 'https://top-courses-pearl.vercel.app/'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;