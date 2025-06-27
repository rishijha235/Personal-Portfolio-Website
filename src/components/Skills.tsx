import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90, icon: '☕', color: 'from-red-500 to-red-700' },
        { name: 'Python', level: 75, icon: '🐍', color: 'from-yellow-500 to-yellow-700' },
        { name: 'C', level: 80, icon: '⚙️', color: 'from-blue-500 to-blue-700' },
        { name: 'JavaScript', level: 88, icon: '🟨', color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 85, icon: '📘', color: 'from-blue-500 to-blue-600' },
        { name: 'SQL', level: 90, icon: '🗄️', color: 'from-blue-500 to-blue-600' }
      ]
    },
    {
      title: 'Web Technologies/Frameworks',
      skills: [
        { name: 'React', level: 90, icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
        { name: 'Node.js', level: 88, icon: '🟢', color: 'from-green-500 to-green-700' },
        { name: 'Express', level: 85, icon: '⚡', color: 'from-gray-600 to-gray-800' },
        { name: 'HTML/CSS', level: 95, icon: '🌐', color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨', color: 'from-purple-500 to-purple-700' }
      ]
    },
    {
      title: 'Core CS Fundamentals',
      skills: [
        { name: 'DSA', level: 88, icon: '🔍', color: 'from-purple-500 to-purple-700' },
        { name: 'Computer Networks', level: 85, icon: '🌐', color: 'from-blue-500 to-blue-700' },
        { name: 'Operating Systems', level: 82, icon: '💻', color: 'from-gray-600 to-gray-800' },
        { name: 'DBMS', level: 87, icon: '🗄️', color: 'from-green-500 to-green-700' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 92, icon: '📦', color: 'from-orange-500 to-red-500' },
        { name: 'GitHub', level: 90, icon: '🐱', color: 'from-gray-600 to-gray-800' },
        { name: 'Postman', level: 88, icon: '📬', color: 'from-orange-500 to-orange-700' },
        { name: 'Docker', level: 80, icon: '🐳', color: 'from-blue-500 to-blue-700' }
      ]
    },
    {
      title: 'Libraries',
      skills: [
        { name: 'Pandas', level: 85, icon: '🐼', color: 'from-black to-gray-700' },
        { name: 'NumPy', level: 83, icon: '🔢', color: 'from-blue-400 to-blue-700' },
        { name: 'Matplotlib', level: 80, icon: '📊', color: 'from-pink-500 to-purple-700' },
        { name: 'Seaborn', level: 78, icon: '🌊', color: 'from-blue-300 to-blue-600' }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-black/30 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-400">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-500 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
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

export default Skills;