import React from 'react';
import { X } from 'lucide-react';

interface TechShowcaseProps {
  onClose: () => void;
}

const TechShowcase: React.FC<TechShowcaseProps> = ({ onClose }) => {
  const technologies = [
    {
      category: 'Frontend',
      tech: [
        {
          name: 'React',
          description: 'A JavaScript library for building user interfaces with reusable components.',
          why: 'Chosen for its robust ecosystem, component-based architecture, and excellent developer experience.'
        },
        {
          name: 'TypeScript',
          description: 'A typed superset of JavaScript that compiles to plain JavaScript.',
          why: 'Ensures type safety, better code organization, and enhanced developer productivity.'
        },
        {
          name: 'Tailwind CSS',
          description: 'A utility-first CSS framework for rapid UI development.',
          why: 'Provides flexible, maintainable styling with minimal CSS overhead and excellent responsive design capabilities.'
        }
      ]
    },
    {
      category: 'Animation & Effects',
      tech: [
        {
          name: 'CSS Transitions',
          description: 'Smooth state transitions for interactive elements.',
          why: 'Creates fluid, performant animations without JavaScript overhead.'
        },
        {
          name: 'CSS Gradients',
          description: 'Advanced gradient techniques for modern UI design.',
          why: 'Adds depth and visual interest while maintaining performance.'
        }
      ]
    },
    {
      category: 'Development Tools',
      tech: [
        {
          name: 'Vite',
          description: 'Next-generation frontend tooling.',
          why: 'Offers lightning-fast HMR and optimized production builds.'
        },
        {
          name: 'ESLint',
          description: 'JavaScript linting utility.',
          why: 'Ensures code quality and consistency across the project.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8">
      <button
        onClick={onClose}
        className="fixed top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
      >
        <X className="w-6 h-6" />
      </button>
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Technology Showcase
        </h1>
        
        <div className="space-y-12">
          {technologies.map((category) => (
            <div key={category.category} className="bg-black/30 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tech.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-purple-400">{tech.name}</h3>
                    <p className="text-gray-300 mb-4">{tech.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Why This Choice?</h4>
                      <p className="text-sm text-gray-400">{tech.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechShowcase;