"use client";
import React from "react";

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative overflow-hidden bg-[#fff7f3] pt-12 pb-2 lg:pt-20 lg:pb-4">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-[120px] opacity-10 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary rounded-full"></div>
      </div>
      <div className="
  absolute
  -bottom-6
  right-0
  lg:-right-6
  bg-secondary
  p-6
  lg:p-7
  rounded-2xl
  shadow-2xl
  border border-white/10
  flex items-center gap-5
  z-20
">
      </div>

      <div className="
  max-w-7xl
  mx-auto
  px-6
  relative
  z-10
  mb-4
  lg:scale-[0.97]
  origin-top
">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-bold tracking-wide text-primary uppercase bg-white/60 rounded-full border border-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Rede de Performance Premium
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.05] mb-5">
              Maximize seus resultados com a <br />
              <span className="text-primary">Trigger Ads</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-4 font-medium max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Conectamos creators e afiliados a campanhas que pagam por resultado.
              Você divulga, vende e recebe — simples assim.
            </p>

            <p className="text-gray-500 max-w-xl mb-7 text-base md:text-lg leading-relaxed mx-auto lg:mx-0">
              Trabalhamos com modelos de CPL, CPA e CPS em campanhas que realmente
              convertem. Aqui, você não precisa esperar um patrocinador — você
              constrói sua renda com vendas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <button
                onClick={onStart}
                className="bg-[#f35831] hover:bg-[#e24722] text-white font-bold text-lg px-8 py-3.5 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-orange-500/30 group flex items-center justify-center gap-3"
              >
                Começar a ganhar
                <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </button>

              <div className="flex items-center gap-3 text-gray-400 font-medium text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/40?u=${i}`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      alt="Creator"
                    />
                  ))}
                </div>
                <span>+500 creators ativos</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] -rotate-2"></div>

              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Trigger Ads Analytics"
                className="relative rounded-3xl shadow-2xl border border-orange-50 z-10 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />

              {/* ✅ BADGE: não estoura no mobile/tablet, e mantém “pra fora” no desktop */}
              <div className="absolute -bottom-6 right-4 lg:-bottom-7 lg:-right-7 bg-secondary p-6 lg:p-7 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-5 z-20 max-w-[92%]">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <i className="fas fa-rocket text-2xl"></i>
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-primary font-black uppercase tracking-widest mb-1">
                    Status Global
                  </div>
                  <div className="text-2xl font-bold text-white whitespace-nowrap">
                    Alta Performance
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
