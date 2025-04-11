import React from 'react';

interface FooterProps {
  onShowTechStack: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowTechStack }) => {
  return (
    <footer className="py-8 text-center">
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={onShowTechStack}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          Made
        </button>
        <span className="text-gray-400">with</span>
        <span className="text-red-500 animate-pulse text-xl">❤</span>
        <span className="text-gray-400">by</span>
        <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Rishi Jha
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} All rights reserved</p>
    </footer>
  );
};

export default Footer;