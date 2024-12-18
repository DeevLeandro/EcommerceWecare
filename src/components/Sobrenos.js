import React from "react";

export default function SobreNos() {
  return (
    <div className="sobre-nos">
      {/* Texto principal */}
      <div className="texto-sobre-nos">
        <h1>Quem Somos</h1>
        <h2>WECARE</h2>
        <p>
          Na <strong>WECARE</strong>, oferecemos uma curadoria exclusiva dos melhores produtos de beleza importados, com qualidade e eficácia comprovadas.
        </p>
        <p>
          Nosso compromisso é transformar sua rotina de cuidados pessoais, trazendo inovação, praticidade e produtos de alta performance para você se sentir ainda mais radiante.
        </p>

        {/* Lista de Diferenciais */}
        <ul className="diferenciais">
          <li><strong>Produtos de marcas renomadas</strong></li>
          <li><strong>Entrega rápida e segura</strong></li>
          <li><strong>Consultoria personalizada de beleza</strong></li>
          <li><strong>Preços competitivos e ofertas especiais</strong></li>
        </ul>
        
        {/* Chamada para ação */}
        <p className="chamada-para-acao">
          <strong>Descubra nossa seleção de produtos e transforme sua beleza hoje mesmo.</strong>
        </p>
      </div>

      {/* Informações adicionais */}
      <div className="informacoes-adicionais">
        <p>
          📍 <strong>Endereço:</strong> Av. T-7, 371 - sala 1310 - St. Oeste, Goiânia - GO, 74415-030
        </p>
        <p>
          🏢 <strong>Empresa:</strong> WECARE
        </p>
      </div>

      {/* Botão para WhatsApp */}
      <div className="whatsapp-container">
        <a 
          href="https://api.whatsapp.com/send/?phone=5562999581601&text=Ol%C3%A1+vim+pelo+google+e+gostaria+de+de+saber+mais%21&type=phone_number&app_absent=0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Fale conosco no WhatsApp
        </a>
      </div>
    </div>
  );
}