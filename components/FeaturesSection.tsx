
"use client";

import React from 'react';

const FeaturesSection: React.FC = () => {
  const steps = [
    {
      icon: 'fas fa-bullhorn',
      title: 'Campanhas que',
      highlight: 'combinam com você',
    },
    {
      icon: 'fas fa-share-alt',
      title: 'Compartilhe sua',
      highlight: 'audiência — do seu jeito',
    },
    {
      icon: 'fas fa-hand-holding-usd',
      title: 'Ganhe comissão por',
      highlight: 'cada resultado gerado',
    }
  ];

  return (
    <section className="pb-12 pt-0 px-6 bg-[#0f021a] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative bg-white/[0.02] border border-white/5 px-6 py-3.5 rounded-xl text-white flex flex-row items-center gap-4 transition-all hover:bg-white/[0.05] hover:border-orange-500/30 hover:-translate-y-1 duration-500 shadow-xl overflow-hidden"
            >
              {/* Brilho interno sutil */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 blur-3xl group-hover:bg-orange-500/10 transition-all duration-500"></div>
              
              <div className="w-9 h-9 bg-gradient-to-br from-[#f35831] to-[#ff7e33] rounded-lg flex items-center justify-center text-white text-base shrink-0 shadow-[0_0_15px_rgba(243,88,49,0.2)] group-hover:shadow-[0_0_25px_rgba(243,88,49,0.4)] transition-all">
                <i className={step.icon}></i>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xs md:text-sm font-light leading-tight">
                  {step.title}{' '}
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-400 to-yellow-500 inline">
                    {step.highlight}
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
