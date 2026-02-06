import React from "react";

interface StepProgressProps {
  currentStep: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ currentStep }) => {
  const steps = [
    { id: 1, name: "Configuração" },
    { id: 2, name: "Divulgação" },
    { id: 3, name: "Espaço" },
    { id: 4, name: "Verificação" },
  ];

  const totalSegments = steps.length - 1;

  // progresso por segmento (não por step inteiro)
  const progress =
    currentStep <= 1
      ? 0
      : ((currentStep - 1) / totalSegments) * 100;

  return (
    <div className="w-full">
      <div className="relative mx-auto max-w-2xl">

        {/* linha base */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gray-100 z-0" />

        {/* linha de progresso */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-primary transition-all duration-500 ease-out z-0"
          style={{ width: `${progress}%` }}
        />

        {/* steps */}
        <div className="relative z-10 flex items-center justify-between">
          {steps.map((step) => {
            const isActive = currentStep === step.id;
            const isDone = currentStep > step.id;

            return (
              <div key={step.id} className="flex flex-col items-center bg-white">
                <div
                  className={[
                    "w-10 h-10 rounded-xl border-2 flex items-center justify-center font-extrabold text-sm transition-all",
                    isActive
                      ? "border-primary bg-primary text-white shadow-lg shadow-orange-200"
                      : isDone
                      ? "border-primary bg-white text-primary"
                      : "border-gray-200 bg-white text-gray-300",
                  ].join(" ")}
                >
                  {isDone ? <i className="fas fa-check" /> : step.id}
                </div>

                <span
                  className={[
                    "mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest",
                    isActive ? "text-primary" : "text-gray-400",
                  ].join(" ")}
                >
                  {step.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepProgress;
