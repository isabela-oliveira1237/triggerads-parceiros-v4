
import React from 'react';

const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 20C18.5 27 11 38.5 11 50.5C11 72.5 28.5 90 50.5 90C72.5 90 90 72.5 90 50.5C90 28.5 72.5 11 50.5 11" stroke="#f38d58" stroke-width="10" stroke-linecap="round"/>
    <path d="M45 35L68 50.5L45 66V35Z" fill="#f38d58"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <LogoIcon />
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-bold tracking-tight text-white">
                  Trigger
                </span>
                <span className="text-[10px] font-bold text-white/50 tracking-[0.2em] ml-auto -mt-1">ADS</span>
              </div>
            </div>
            <p className="max-w-sm mb-8 text-sm leading-relaxed">
              A Trigger Ads é a rede líder em performance, transformando cliques em resultados reais através de tecnologia proprietária e parcerias estratégicas.
            </p>
            <div className="flex gap-5 text-xl">
              <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-primary pl-4">Institucional</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade e Dados</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos do Parceiro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Código de Ética</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-primary pl-4">Suporte</h4>
            <ul className="space-y-3 text-sm">
              <li><i className="fas fa-envelope mr-2 text-primary"></i> parcerias@triggerads.com</li>
              <li><i className="fas fa-map-marker-alt mr-2 text-primary"></i> São Paulo, SP</li>
              <li><i className="fas fa-question-circle mr-2 text-primary"></i> FAQ - Parceiros</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 mt-16 pt-8 text-xs text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Trigger Ads. Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <span className="text-gray-600">Um produto Trigger Media Group</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
