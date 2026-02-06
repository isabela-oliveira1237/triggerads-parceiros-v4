
import React from 'react';

const StepSuccess: React.FC = () => {
  return (
    <div className="p-12 text-center">
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
        <i className="fas fa-check text-3xl"></i>
      </div>
      
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Cadastro em análise</h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-8">
        Obrigado por sua solicitação de acesso à Trigger Ads. Seus dados foram recebidos com sucesso e agora entram em nossa fila de triagem.
      </p>

      <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl text-left mb-8">
        <h3 className="text-blue-900 font-bold mb-3 flex items-center gap-2">
          <i className="fas fa-info-circle"></i> O que acontece agora?
        </h3>
        <ul className="space-y-3 text-sm text-blue-800">
          <li className="flex gap-2">
            <span className="font-bold">1.</span>
            <span>Nossa equipe revisará seu espaço publicitário e estratégia de divulgação em até 48 horas úteis.</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold">2.</span>
            <span>Você receberá um e-mail de confirmação ou um pedido de informações adicionais.</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold">3.</span>
            <span>Uma vez aprovado, um Gerente de Contas será designado para auxiliar na sua integração com nossos anunciantes exclusivos.</span>
          </li>
        </ul>
      </div>

      <p className="text-sm text-gray-400 italic">
        Fique atento à sua caixa de entrada (e pasta de spam) para mensagens de <strong>@triggerads.com</strong>.
      </p>

      <div className="mt-10">
        <a 
          href="/" 
          className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Voltar para Home
        </a>
      </div>
    </div>
  );
};

export default StepSuccess;
