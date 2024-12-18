import React from "react";

export default function Rodape() {
  return (
    <footer>
      <div className="pager-inner-content">
        <div className="download-options">
          <p>Está com dúvida? Entre em contato com Suporte</p>
          {/* Link para o WhatsApp */}
        <a
          href="https://api.whatsapp.com/send?phone=5562999581601&text=Preciso%20de%20Ajuda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/whatsapp.png" alt="WhatsApp" />
        </a>  
          <p>Nos siga no Instagram e fique por dentro das novidades</p>
                   {/* Link para o Instagram */}
        <a
          href="https://www.instagram.com/wecare.aesthetics/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/Instagram.png" alt="Instagram" />
        </a>
        </div>

        <div>
          <div className="logo-footer">
          <h1 className="logo1">
            <span>WECARE</span>
            </h1>
            <p>
            Agradecemos pela sua confiança na WECARE!
            É uma honra fazer parte da sua jornada de beleza e bem-estar, oferecendo tratamentos de qualidade que refletem o compromisso com a excelência e os resultados que você merece. 
            Trabalhamos com dedicação para proporcionar experiências transformadoras e cuidar de cada detalhe, sempre priorizando a sua satisfação e confiança.
            Estamos continuamente inovando para atender às suas expectativas e superar cada desafio, com serviços que valorizam sua autoestima e realçam sua melhor versão.
            Conte conosco como seu parceiro de confiança para alcançar os melhores resultados em estética e cuidado pessoal. Obrigado por fazer parte da nossa trajetória!
            </p>
            </div>
            <hr/>
            <p className="copyright">
             Copyright 2030 - WECARE - Todos Direitos Reservados 
            </p>
        </div>
      </div>
    </footer>
  );
}
