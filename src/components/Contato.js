import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Contato() {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
  const [formEnviado, setFormEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Monta a mensagem para enviar via WhatsApp
    const mensagemWhatsApp = `
      Olá! Meu nome é ${formData.nome}.
      Email: ${formData.email}
      Mensagem: ${formData.mensagem}
    `;

    // Número do WhatsApp (com DDI e DDD)
    const numeroWhatsApp = "5562999581601"; // Exemplo: +55 para Brasil, 62 para Goiás

    // URL para WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;

    // Redireciona para o WhatsApp
    window.open(urlWhatsApp, "_blank");

    // Reseta o formulário
    setFormData({ nome: "", email: "", mensagem: "" });
    setFormEnviado(false);
  };

  const endereco = "Av. T-7, 371 - sala 1310 - St. Oeste, Goiânia - GO, 74415-030";
  const urlMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;

  const telefone = "(62) 3434-0148";
  const urlTel = "tel:+5562999581601";

  return (
    <div className="contato-container">
      <h2>Entre em Contato</h2>
      <div className="info-container">
        <div>
          <FontAwesomeIcon icon={faPhone} />{" "}
          <a href={urlTel} style={{ textDecoration: "none", color: "inherit" }}>
            <span>{telefone}</span>
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
          <a href={urlMaps} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <span>{endereco}</span>
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contato-form">
        <input
          type="text"
          name="nome"
          placeholder="Seu Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensagem"
          placeholder="Sua Mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={formEnviado}>
          {formEnviado ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
