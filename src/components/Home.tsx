import React from 'react';
import { Github, Linkedin, Twitter, Code2, Instagram } from 'lucide-react';

const Home = () => {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/rishijha235',
      name: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/rishi-jha-758732283',
      name: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://x.com/RishiJha_',
      name: 'X',
      color: 'hover:text-sky-400'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      url: 'https://leetcode.com/u/rishijha235/',
      name: 'LeetCode',
      color: 'hover:text-yellow-500'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/rishi__jha/',
      name: 'Instagram',
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="w-full h-full rounded-full border-2 border-blue-400 overflow-hidden shadow-lg">
              <img
                src="/image.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Rishi Jha
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>
        <div className="flex items-center justify-center gap-8 mb-12">
          <a
            href="/Rishi_Resume.pdf"
            download
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
          >
            <span>Download Resume</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform hover:scale-110 transition-all duration-300 tooltip ${link.color}`}
                data-tooltip={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;