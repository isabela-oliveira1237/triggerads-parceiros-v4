"use client";

import React from "react";
import type { FormData } from "../../types";
import { PROMOTION_CATEGORIES, COUNTRIES } from "../../constants";

interface StepProps {
  formData: Partial<FormData>; // ✅ aqui
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const Step2: React.FC<StepProps> = ({ formData, updateFormData, onNext, onPrev }) => {
  // ✅ defaults seguros
  const promotionTypes = formData.promotionTypes ?? [];
  const primaryRegion = formData.primaryRegion ?? COUNTRIES[0];

  const togglePromotionType = (type: string) => {
    const current = promotionTypes;
    if (current.includes(type)) {
      updateFormData({ promotionTypes: current.filter((t) => t !== type) });
    } else {
      updateFormData({ promotionTypes: [...current, type] });
    }
  };

  const handleNext = () => {
    if (promotionTypes.length === 0) {
      alert("Por favor, selecione ao menos um tipo de divulgação.");
      return;
    }
    onNext();
  };

  return (
    <div className="p-8 md:p-12">
      <div className="mb-10 border-b border-orange-50 pb-6">
        <h2 className="text-3xl font-bold text-secondary mb-2">Tipos de divulgação</h2>
        <p className="text-gray-500 text-lg">Selecione os canais que você utiliza para gerar tráfego.</p>
      </div>

      <div className="space-y-12">
        {Object.entries(PROMOTION_CATEGORIES).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-sm font-black text-secondary uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-primary"></span>
              {category.replace("_", " ")}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => {
                const checked = promotionTypes.includes(item);

                return (
                  <label
                    key={item}
                    className={`
                      flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all hover:scale-[1.01]
                      ${checked ? "bg-primary/5 border-primary shadow-sm" : "border-gray-50 bg-gray-50/50 hover:border-orange-100"}
                    `}
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary"
                      checked={checked}
                      onChange={() => togglePromotionType(item)}
                    />
                    <span className={`text-sm font-semibold leading-tight ${checked ? "text-primary" : "text-gray-600"}`}>
                      {item}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}

        <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100">
          <label className="block text-sm font-bold text-secondary uppercase tracking-widest mb-4">
            Região primária de atuação *
          </label>

          <select
            className="form-input bg-white max-w-md border-orange-200"
            value={primaryRegion}
            onChange={(e) => updateFormData({ primaryRegion: e.target.value })}
          >
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <p className="text-xs text-orange-400 font-medium mt-3">
            <i className="fas fa-info-circle mr-1"></i> Isso nos ajuda a direcionar as melhores campanhas regionais para você.
          </p>
        </div>
      </div>

      <div className="mt-14 flex justify-between items-center pt-8 border-t border-gray-100">
        <button
          onClick={onPrev}
          className="text-gray-400 font-bold hover:text-secondary transition-colors flex items-center gap-2 uppercase text-xs tracking-widest"
        >
          <i className="fas fa-arrow-left"></i> Voltar
        </button>

        <button onClick={handleNext} className="btn-primary px-16 py-4 shadow-primary/20">
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Step2;
