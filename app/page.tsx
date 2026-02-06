"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import RegistrationContainer from "../components/RegistrationContainer";
import Footer from "../components/Footer";
import type { FormData, FormStep } from "../types";

const initialFormData: Partial<FormData> = {};

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<Partial<FormData>>(initialFormData);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => setCurrentStep((prev) => (prev < 5 ? ((prev + 1) as FormStep) : prev));
  const prevStep = () => setCurrentStep((prev) => (prev > 1 ? ((prev - 1) as FormStep) : prev));

  const handleStart = () => {
    setCurrentStep(1);
    setShowForm(true);
  };

  const closeModal = () => setShowForm(false);

  // trava scroll do fundo
  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showForm]);

  // fecha no ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    if (showForm) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showForm]);

  return (
    <>
      <Header />

      <main>
        <Hero onStart={handleStart} />
        <FeaturesSection />
      </main>

      <Footer />

      {showForm && (
        <div
          className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-4xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* botão fechar flutuando no canto */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute -top-4 -right-4 w-11 h-11 rounded-full bg-white shadow flex items-center justify-center text-lg font-extrabold"
              aria-label="Fechar"
            >
              ✕
            </button>

            {/* Aqui já é o card único */}
            <div className="max-h-[85vh] overflow-y-auto">
              <RegistrationContainer
                currentStep={currentStep}
                formData={formData}
                updateFormData={updateFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
