
"use client";

import React, { useEffect, useState } from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const [elements, setElements] = useState<{id: number, left: string, duration: string, delay: string, size: string, type: 'coin' | 'sparkle'}[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 40 }).map((_, i) => {
      const rand = Math.random();
      let type: 'coin' | 'sparkle' = 'sparkle';
      if (rand > 0.3) type = 'coin';

      return {
        id: i,
        left: `${Math.random() * 100}%`,
        duration: `${5 + Math.random() * 8}s`,
        delay: `${Math.random() * 5}s`,
        size: type === 'sparkle' ? `${1 + Math.random() * 2}px` : `${0.8 + Math.random() * 1.2}rem`,
        type: type
      };
    });
    setElements(newElements);
  }, []);

  return (
    <section className="bg-hero-premium pt-32 pb-12 px-6 min-h-[85vh] flex items-center justify-center text-center relative overflow-hidden">
      {/* Camada de Partículas/Moedas */}
      {elements.map(item => (
        item.type === 'sparkle' ? (
          <div 
            key={item.id}
            className="floating-sparkle"
            style={{ 
              left: item.left, 
              top: `${Math.random() * 100}%`,
              width: item.size,
              height: item.size,
              animationDelay: item.delay
            }}
          />
        ) : (
          <div 
            key={item.id}
            className="money-coin"
            style={{ 
              left: item.left, 
              animationDuration: item.duration, 
              animationDelay: item.delay,
              transform: `scale(${item.size})`
            }}
          >
            $
          </div>
        )
      ))}

      {/* Brilhos Atmosféricos */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0f021a] via-transparent to-transparent z-10"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-1 mb-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Oportunidade para Parceiros de Performance
          </div>
          
          <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-black mb-3 tracking-tighter leading-none">
            Seja um Afiliado <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)]">de Sucesso!</span>
          </h2>
          
          <h1 className="text-gold-premium text-2xl md:text-4xl lg:text-5xl font-black mb-8 italic uppercase tracking-tighter animate-glow-heavy">
            Ganhe Dinheiro Vendendo <br className="hidden md:block" /> Nossos Produtos!
          </h1>
          
          <p className="text-white/80 text-base md:text-lg font-medium max-w-xl mx-auto leading-relaxed border-l-2 border-[#f35831] pl-5 text-left bg-white/[0.02] p-4 rounded-r-xl backdrop-blur-[2px]">
            Junte-se à <span className="font-black text-white">Trigger Ads</span> e escale seus ganhos mensais através da maior rede de performance do mercado.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <button 
            onClick={onStart}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative bg-[#f35831] hover:bg-[#ff7e33] text-white font-black text-lg md:text-xl px-10 py-4 rounded-xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-4 shadow-2xl">
              COMEÇAR AGORA
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#f35831] transition-all">
                <i className="fas fa-chevron-right text-xs md:text-sm"></i>
              </div>
            </div>
          </button>
          
          <div className="flex items-center gap-4 bg-black/40 px-5 py-2.5 rounded-xl border border-white/5 backdrop-blur-md">
            <div className="flex -space-x-2.5">
              {[1, 2, 3, 4, 5].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?u=${i+100}`} className="w-8 h-8 rounded-full border-2 border-[#f35831] shadow-xl" alt="Membro" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-xs font-black text-white">+500 Parceiros Ativos</div>
              <div className="text-[8px] text-yellow-400 font-bold uppercase tracking-wider">Resultados diários</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
