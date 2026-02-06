import React from 'react';

const LogoIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 20C18.5 27 11 38.5 11 50.5C11 72.5 28.5 90 50.5 90C72.5 90 90 72.5 90 50.5C90 28.5 72.5 11 50.5 11"
      stroke="#f38d58"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <path d="M45 35L68 50.5L45 66V35Z" fill="#f38d58" />
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-50 shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <LogoIcon />
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-bold tracking-tight text-secondary">
              Trigger
            </span>
            <span className="text-[10px] font-bold text-secondary/70 tracking-[0.2em] ml-auto -mt-1">
              ADS
            </span>
          </div>
        </div>

        {/* CTA único */}
        <nav className="flex items-center">
          <button className="bg-primary/10 text-primary px-6 py-2.5 rounded-full font-semibold hover:bg-primary hover:text-white transition-all text-sm">
            Fale conosco
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
