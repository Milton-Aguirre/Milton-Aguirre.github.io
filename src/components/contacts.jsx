import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [enviando, setEnviando] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    const form = e.target;
    setEnviando(true);

    emailjs
      .sendForm('service_aq8jvrgs', 'template_f616eyv', form, 'EyzbaRkLpdwqiu0JR')
      .then(
        () => {
          alert('Mensagem enviada com sucesso!');
          form.reset();
        },
        (error) => {
          console.error(error?.text ?? error);
          alert('Erro ao enviar. Tente novamente.');
        }
      )
      .finally(() => setEnviando(false));
  }

  return (
    <div className="form_wrapper">
      <form onSubmit={sendEmail}>
        <p>O seu endereço de e-mail não será publicado. Campos obrigatórios são marcados com *</p>
        <label htmlFor="user_name">Nome *</label>
        <input id="user_name" type="text" name="user_name" placeholder="Seu nome" required />
        <label htmlFor="user_email">Email *</label>
        <input id="user_email" type="email" name="user_email" placeholder="exemplo@email.com" required />
        <label htmlFor="message">Mensagem *</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Entre em contato para discutir assuntos acadêmicos"
          required
        />
        <button type="submit" disabled={enviando}>
          {enviando ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
}
