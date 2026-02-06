"use client";
import React from "react";

const FeaturesSection: React.FC = () => {
  const items = [
    {
      icon: "fas fa-bullhorn",
      title: (
        <>
          Escolha campanhas que{" "}
          <span className="font-extrabold">combinam com</span>{" "}
          <span className="font-extrabold">seu conteúdo</span>
        </>
      ),
    },
    {
      icon: "fas fa-share-nodes",
      title: (
        <>
          Compartilhe com sua audiência —{" "}
          <span className="font-extrabold">do seu</span>{" "}
          <span className="font-extrabold">jeito</span>
        </>
      ),
    },
    {
      icon: "fas fa-hand-holding-dollar",
      title: (
        <>
          Ganhe comissão real por{" "}
          <span className="font-extrabold">cada resultado</span>{" "}
          <span className="font-extrabold">gerado</span>
        </>
      ),
    },
  ];

  return (
    <section className="bg-transparent mt-0 pt-0 pb-8 lg:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="
                bg-[#f35831]
                rounded-2xl
                px-6 py-4
                shadow-lg shadow-orange-500/20
                flex items-center
              "
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-300 flex items-center justify-center shrink-0">
                  <i className={`${it.icon} text-[#f35831] text-sm`} />
                </div>

                <p className="text-white text-base leading-snug">
                  {it.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
