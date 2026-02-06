"use client";

import React from "react";
import type { FormStep, FormData } from "../types";
import StepProgress from "./StepProgress";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import StepSuccess from "./steps/StepSuccess";

interface RegistrationContainerProps {
  currentStep: FormStep;
  formData: Partial<FormData>;
  updateFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const RegistrationContainer: React.FC<RegistrationContainerProps> = ({
  currentStep,
  formData,
  updateFormData,
  nextStep,
  prevStep,
}) => {
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} updateFormData={updateFormData} onNext={nextStep} />;
      case 2:
        return (
          <Step2
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <Step4
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 5:
        return <StepSuccess />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      {currentStep < 5 && (
        <div className="px-8 py-6 border-b border-gray-100 bg-white">
          <StepProgress currentStep={currentStep} />
        </div>
      )}
      <div className="bg-white">{renderStep()}</div>
    </div>
  );
};

export default RegistrationContainer;
