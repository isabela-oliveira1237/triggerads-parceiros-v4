
import React from 'react';

const LogoTriggerFooter = () => (
  <div className="flex items-center gap-3">
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M35 25C50 12 85 20 85 50C85 80 50 88 35 75" 
        stroke="#f38d58" 
        stroke-width="8" 
        stroke-linecap="round"
      />
      <path 
        d="M45 35L68 50L45 65V35Z" 
        fill="#f38d58"
      />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="text-2xl font-black tracking-tight text-white">
        Trigger
      </span>
      <span className="text-[8px] font-bold text-white/50 tracking-[0.2em] self-end -mt-1 mr-0.5">ADS</span>
    </div>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0212] text-gray-400 py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <LogoTriggerFooter />
            </div>
            <p className="max-w-sm mb-8 text-sm leading-relaxed text-gray-500">
              A Trigger Ads é a rede líder em performance, transformando cliques em resultados reais através de tecnologia proprietária e parcerias estratégicas.
            </p>
            <div className="flex gap-5 text-xl">
              <a href="#" className="hover:text-[#f38d58] transition-colors"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-[#f38d58] transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-[#f38d58] transition-colors"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-[#f38d58] pl-4">Institucional</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade e Dados</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos do Parceiro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Código de Ética</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-[#f38d58] pl-4">Suporte</h4>
            <ul className="space-y-3 text-sm">
              <li><i className="fas fa-envelope mr-2 text-[#f38d58]"></i> parcerias@triggerads.com</li>
              <li><i className="fas fa-map-marker-alt mr-2 text-[#f38d58]"></i> São Paulo, SP</li>
              <li><i className="fas fa-question-circle mr-2 text-[#f38d58]"></i> FAQ - Parceiros</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 mt-16 pt-8 text-xs text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Trigger Ads. Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <span className="text-gray-700 font-medium">Um produto Trigger Media Group</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
