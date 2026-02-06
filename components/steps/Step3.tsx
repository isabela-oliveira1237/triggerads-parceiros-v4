"use client";

import React, { useState } from "react";
import type { FormData } from "../../types";
import { INDUSTRIES } from "../../constants";

interface StepProps {
  formData: Partial<FormData>; // ✅ aqui
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const Step3: React.FC<StepProps> = ({ formData, updateFormData, onNext, onPrev }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  // ✅ defaults seguros
  const industries = formData.industries ?? [];
  const spaceUrl = formData.spaceUrl ?? "";
  const modelDescription = formData.modelDescription ?? "";
  const promotionStrategy = formData.promotionStrategy ?? "";

  const toggleIndustry = (industry: string) => {
    const current = industries;
    if (current.includes(industry)) {
      updateFormData({ industries: current.filter((i) => i !== industry) });
    } else {
      updateFormData({ industries: [...current, industry] });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!spaceUrl) newErrors.spaceUrl = "Obrigatório";
    if (!modelDescription) newErrors.modelDescription = "Obrigatório";
    if (industries.length === 0) newErrors.industries = "Selecione ao menos uma";

    if (!promotionStrategy || promotionStrategy.length < 50) {
      newErrors.promotionStrategy = "Por favor, forneça uma explicação mais detalhada (mínimo 50 caracteres).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) onNext();
  };

  return (
    <div className="p-8">
      <div className="mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Espaço publicitário</h2>
        <p className="text-gray-500">Onde e como você irá veicular as campanhas?</p>
      </div>

      <div className="space-y-6">
        <div className="w-full">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            URL do site, perfil social ou canal principal *
          </label>
          <input
            type="url"
            className={`form-input w-full ${errors.spaceUrl ? "border-red-500" : ""}`}
            placeholder="https://seu-site.com.br"
            value={spaceUrl}
            onChange={(e) => updateFormData({ spaceUrl: e.target.value })}
          />
          {errors.spaceUrl && <span className="text-xs text-red-500 mt-1">{errors.spaceUrl}</span>}
        </div>

        <div className="w-full">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Descrição breve do seu modelo de negócio *
          </label>
          <input
            type="text"
            className={`form-input w-full ${errors.modelDescription ? "border-red-500" : ""}`}
            placeholder="Ex: Blog de finanças pessoais com foco em cartões"
            value={modelDescription}
            onChange={(e) => updateFormData({ modelDescription: e.target.value })}
          />
          {errors.modelDescription && <span className="text-xs text-red-500 mt-1">{errors.modelDescription}</span>}
        </div>

        <div className="w-full">
          <label className="block text-sm font-semibold text-gray-700 mb-4">Indústrias de interesse *</label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {INDUSTRIES.map((ind) => {
              const checked = industries.includes(ind);

              return (
                <label
                  key={ind}
                  className={`
                    flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all
                    ${checked ? "bg-secondary/5 border-secondary shadow-sm" : "border-gray-100 bg-white"}
                  `}
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-secondary rounded border-gray-300 focus:ring-secondary"
                    checked={checked}
                    onChange={() => toggleIndustry(ind)}
                  />
                  <span className="text-sm font-medium text-gray-700">{ind}</span>
                </label>
              );
            })}
          </div>

          {errors.industries && <p className="text-xs text-red-500 mt-2">{errors.industries}</p>}
        </div>

        <div className="w-full">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Explique brevemente como você pretende divulgar campanhas da Trigger Ads *
          </label>
          <textarea
            rows={10}
            className={`form-input w-full resize-none ${errors.promotionStrategy ? "border-red-500" : ""}`}
            placeholder="Descreva seu método: tráfego pago (fontes), SEO, base de e-mails própria, etc. Detalhe sua experiência com performance."
            value={promotionStrategy}
            onChange={(e) => updateFormData({ promotionStrategy: e.target.value })}
          />

          <div className="flex justify-between mt-1">
            {errors.promotionStrategy && <span className="text-xs text-red-500">{errors.promotionStrategy}</span>}
            <span className="text-xs text-gray-400 ml-auto">{promotionStrategy.length} caracteres (mín. 50)</span>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-between items-center border-t border-gray-100 pt-8">
        <button
          onClick={onPrev}
          className="text-gray-500 font-semibold hover:text-primary transition-colors flex items-center gap-2 uppercase text-xs tracking-widest"
        >
          <i className="fas fa-arrow-left"></i> Voltar
        </button>

        <button onClick={handleNext} className="btn-primary px-16 shadow-primary/20">
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Step3;
