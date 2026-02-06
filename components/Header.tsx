
"use client";

import React from 'react';

const LogoTrigger = () => (
  <div className="flex items-center gap-3">
    <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Círculo aberto à esquerda seguindo a referência */}
      <path 
        d="M35 25C50 12 85 20 85 50C85 80 50 88 35 75" 
        stroke="#f38d58" 
        stroke-width="8" 
        stroke-linecap="round"
      />
      {/* Triângulo Play */}
      <path 
        d="M45 35L68 50L45 65V35Z" 
        fill="#f38d58"
      />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="text-3xl font-black tracking-tight text-white">
        Trigger
      </span>
      <span className="text-[10px] font-bold text-white/60 tracking-[0.2em] self-end -mt-1 mr-0.5">ADS</span>
    </div>
  </div>
);

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <LogoTrigger />
        <nav>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2.5 rounded-full font-bold hover:bg-white hover:text-[#1a0525] transition-all text-sm uppercase tracking-widest">
            Fale conosco
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
