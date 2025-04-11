import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-lg"></div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-300">
              Hi! I'm Rishi Jha, a passionate Full Stack Developer with a strong foundation in web technologies
              and a keen eye for creating beautiful, functional applications.
            </p>
            <p className="text-gray-300">
              With expertise in modern frameworks and a problem-solving mindset, I strive to build
              scalable solutions that make a difference.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or solving challenging problems on LeetCode.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;