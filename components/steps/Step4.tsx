"use client";

import React, { useState } from "react";
import type { FormData } from "../../types";
import { COUNTRIES } from "../../constants";

interface StepProps {
  formData: Partial<FormData>; // ✅ aqui
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const Step4: React.FC<StepProps> = ({ formData, updateFormData, onNext, onPrev }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ defaults seguros (pra não quebrar value/checked)
  const country = formData.country ?? COUNTRIES[0];
  const street = formData.street ?? "";
  const number = formData.number ?? "";
  const city = formData.city ?? "";
  const state = formData.state ?? "";
  const zipCode = formData.zipCode ?? "";
  const phone = formData.phone ?? "";
  const termsAccepted = formData.termsAccepted ?? false;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!street) newErrors.street = "Obrigatório";
    if (!number) newErrors.number = "Obrigatório";
    if (!city) newErrors.city = "Obrigatório";
    if (!state) newErrors.state = "Obrigatório";
    if (!zipCode) newErrors.zipCode = "Obrigatório";
    if (!phone) newErrors.phone = "Obrigatório";
    if (!termsAccepted) newErrors.termsAccepted = "Aceite os termos";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;

    setIsSubmitting(true);

    // ⚠️ aqui você pode trocar por POST real depois
    setTimeout(() => {
      setIsSubmitting(false);
      onNext();
    }, 2000);
  };

  return (
    <div className="p-8">
      <div className="mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Verificação e Endereço</h2>
        <p className="text-gray-500">Últimos detalhes para completar sua solicitação.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-3">
          <label className="block text-sm font-semibold text-gray-700 mb-2">País *</label>
          <select
            className="form-input bg-white"
            value={country}
            onChange={(e) => updateFormData({ country: e.target.value })}
          >
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Rua/Avenida *</label>
          <input
            type="text"
            className={`form-input ${errors.street ? "border-red-500" : ""}`}
            value={street}
            onChange={(e) => updateFormData({ street: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Número *</label>
          <input
            type="text"
            className={`form-input ${errors.number ? "border-red-500" : ""}`}
            value={number}
            onChange={(e) => updateFormData({ number: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Cidade *</label>
          <input
            type="text"
            className={`form-input ${errors.city ? "border-red-500" : ""}`}
            value={city}
            onChange={(e) => updateFormData({ city: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Estado *</label>
          <input
            type="text"
            className={`form-input ${errors.state ? "border-red-500" : ""}`}
            value={state}
            onChange={(e) => updateFormData({ state: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">CEP *</label>
          <input
            type="text"
            className={`form-input ${errors.zipCode ? "border-red-500" : ""}`}
            value={zipCode}
            onChange={(e) => updateFormData({ zipCode: e.target.value })}
          />
        </div>

        <div className="md:col-span-3">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone *</label>
          <input
            type="tel"
            className={`form-input ${errors.phone ? "border-red-500" : ""}`}
            placeholder="+55 (11) 99999-9999"
            value={phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
          />
        </div>

        <div className="md:col-span-3 bg-gray-50 p-6 rounded-xl mt-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 w-5 h-5"
              checked={termsAccepted}
              onChange={(e) => updateFormData({ termsAccepted: e.target.checked })}
            />
            <span className="text-sm text-gray-600">Aceito os Termos e Política de Privacidade.</span>
          </label>
          {errors.termsAccepted && <p className="text-xs text-red-500 mt-2">{errors.termsAccepted}</p>}
        </div>
      </div>

      <div className="mt-10">
        <button
          onClick={handleNext}
          disabled={isSubmitting}
          className={`w-full bg-[#f35831] hover:bg-[#e24722] text-white font-extrabold h-14 text-xl rounded-xl transition-all shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3 ${
            isSubmitting ? "opacity-70" : ""
          }`}
        >
          {isSubmitting ? <i className="fas fa-circle-notch fa-spin"></i> : "Solicitar análise de cadastro"}
        </button>
      </div>

      <div className="mt-8">
        <button onClick={onPrev} className="text-gray-500 text-xs font-bold uppercase tracking-widest hover:text-primary">
          <i className="fas fa-arrow-left mr-2"></i> Voltar
        </button>
      </div>
    </div>
  );
};

export default Step4;
