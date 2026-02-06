"use client";

import React, { useState } from "react";
import type { FormData } from "../../types";
import { FiscalModel } from "../../types";
import { COUNTRIES } from "../../constants";

interface StepProps {
  formData: Partial<FormData>; // ✅ aqui
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

const Step1: React.FC<StepProps> = ({ formData, updateFormData, onNext }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isValidCPF = (cpf: string) => {
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
    let sum = 0, rest;
    for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cpf.substring(9, 10))) return false;
    sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cpf.substring(10, 11))) return false;
    return true;
  };

  const isValidCNPJ = (cnpj: string) => {
    cnpj = cnpj.replace(/[^\d]+/g, "");
    if (cnpj.length !== 14 || !!cnpj.match(/(\d)\1{13}/)) return false;
    let size = cnpj.length - 2;
    let numbers = cnpj.substring(0, size);
    let digits = cnpj.substring(size);
    let sum = 0;
    let pos = size - 7;
    for (let i = size; i >= 1; i--) {
      sum += parseInt(numbers.charAt(size - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(0))) return false;
    size = size + 1;
    numbers = cnpj.substring(0, size);
    sum = 0;
    pos = size - 7;
    for (let i = size; i >= 1; i--) {
      sum += parseInt(numbers.charAt(size - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(1))) return false;
    return true;
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.entityName) newErrors.entityName = "Obrigatório";
    if (!formData.firstName) newErrors.firstName = "Obrigatório";
    if (!formData.lastName) newErrors.lastName = "Obrigatório";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "E-mail inválido";
    if ((formData.email || "") !== (formData.confirmEmail || "")) newErrors.confirmEmail = "Os e-mails não conferem";
    if (!formData.password || formData.password.length < 8) newErrors.password = "Mínimo 8 caracteres";
    if ((formData.password || "") !== (formData.confirmPassword || "")) newErrors.confirmPassword = "As senhas não conferem";

    const fiscalDoc = (formData.fiscalDocument || "");
    const docValue = fiscalDoc.replace(/\D/g, "");

    const fiscalModel = formData.fiscalModel;
    if (fiscalModel === FiscalModel.PF) {
      if (!isValidCPF(docValue)) newErrors.fiscalDocument = "CPF inválido";
    } else if (fiscalModel === FiscalModel.PJ) {
      if (!isValidCNPJ(docValue)) newErrors.fiscalDocument = "CNPJ inválido";
    } else {
      newErrors.fiscalModel = "Obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) onNext();
  };

  const fiscalResidencyValue = formData.fiscalResidency ?? COUNTRIES[0];
  const fiscalModelValue = formData.fiscalModel ?? FiscalModel.PJ;

  return (
    <div className="p-8">
      <div className="mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Configuração da conta</h2>
        <p className="text-gray-500">Insira as informações básicas para análise inicial do seu perfil.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Nome da Empresa ou Pessoa Física *</label>
          <input
            type="text"
            className={`form-input ${errors.entityName ? "border-red-500" : ""}`}
            placeholder="Ex: Trigger Media Ltda"
            value={formData.entityName ?? ""}
            onChange={(e) => updateFormData({ entityName: e.target.value })}
          />
          {errors.entityName && <span className="text-xs text-red-500 mt-1">{errors.entityName}</span>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Residência Fiscal *</label>
          <select
            className="form-input bg-white"
            value={fiscalResidencyValue}
            onChange={(e) => updateFormData({ fiscalResidency: e.target.value })}
          >
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Modelo Fiscal *</label>
          <div className="flex gap-4">
            <button
              type="button"
              className={`flex-1 py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                fiscalModelValue === FiscalModel.PJ ? "border-primary bg-primary/5 text-primary" : "border-gray-200 text-gray-500"
              }`}
              onClick={() => updateFormData({ fiscalModel: FiscalModel.PJ })}
            >
              Pessoa Jurídica
            </button>
            <button
              type="button"
              className={`flex-1 py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                fiscalModelValue === FiscalModel.PF ? "border-primary bg-primary/5 text-primary" : "border-gray-200 text-gray-500"
              }`}
              onClick={() => updateFormData({ fiscalModel: FiscalModel.PF })}
            >
              Pessoa Física
            </button>
          </div>
          {errors.fiscalModel && <span className="text-xs text-red-500 mt-1">{errors.fiscalModel}</span>}
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {fiscalModelValue === FiscalModel.PJ ? "CNPJ" : "CPF"} *
          </label>
          <input
            type="text"
            className={`form-input ${errors.fiscalDocument ? "border-red-500" : ""}`}
            placeholder={fiscalModelValue === FiscalModel.PJ ? "00.000.000/0000-00" : "000.000.000-00"}
            value={formData.fiscalDocument ?? ""}
            onChange={(e) => updateFormData({ fiscalDocument: e.target.value })}
          />
          {errors.fiscalDocument && <span className="text-xs text-red-500 mt-1">{errors.fiscalDocument}</span>}
        </div>

        <hr className="col-span-1 md:col-span-2 border-gray-100 my-2" />

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Nome *</label>
          <input
            type="text"
            className={`form-input ${errors.firstName ? "border-red-500" : ""}`}
            value={formData.firstName ?? ""}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
          />
          {errors.firstName && <span className="text-xs text-red-500 mt-1">{errors.firstName}</span>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Sobrenome *</label>
          <input
            type="text"
            className={`form-input ${errors.lastName ? "border-red-500" : ""}`}
            value={formData.lastName ?? ""}
            onChange={(e) => updateFormData({ lastName: e.target.value })}
          />
          {errors.lastName && <span className="text-xs text-red-500 mt-1">{errors.lastName}</span>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail Corporativo *</label>
          <input
            type="email"
            className={`form-input ${errors.email ? "border-red-500" : ""}`}
            value={formData.email ?? ""}
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
          {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email}</span>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Confirmar E-mail *</label>
          <input
            type="email"
            className={`form-input ${errors.confirmEmail ? "border-red-500" : ""}`}
            value={formData.confirmEmail ?? ""}
            onChange={(e) => updateFormData({ confirmEmail: e.target.value })}
          />
          {errors.confirmEmail && <span className="text-xs text-red-500 mt-1">{errors.confirmEmail}</span>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Senha *</label>
          <input
            type="password"
            className={`form-input ${errors.password ? "border-red-500" : ""}`}
            value={formData.password ?? ""}
            onChange={(e) => updateFormData({ password: e.target.value })}
          />
          {errors.password && <span className="text-xs text-red-500 mt-1">{errors.password}</span>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Confirmar Senha *</label>
          <input
            type="password"
            className={`form-input ${errors.confirmPassword ? "border-red-500" : ""}`}
            value={formData.confirmPassword ?? ""}
            onChange={(e) => updateFormData({ confirmPassword: e.target.value })}
          />
          {errors.confirmPassword && <span className="text-xs text-red-500 mt-1">{errors.confirmPassword}</span>}
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <button onClick={handleNext} className="btn-primary px-12">
          Continuar para próxima etapa
        </button>
      </div>
    </div>
  );
};

export default Step1;
