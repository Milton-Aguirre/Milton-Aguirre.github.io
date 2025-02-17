import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

function sendEmail(e) {
    e.preventDefault();

	emailjs.sendForm(
	 'service_aq8jvrgs', 
	 'template_f616eyv', 
	 e.target, 
	 'EyzbaRkLpdwqiu0JR'
	)
	.then((result) => {
	    console.log(result.text);
	  }, (error) => {
	console.log(error.text);
    });
    e.target.reset();
}

return (
    <div className="form_wrapper">
      <form onSubmit={sendEmail}>
        <label>O seu endereço de e-mail não será publicado. Campos obrigatorios são marcados com *</label>
        <label>Nome *</label>
        <input type="text" name="user_name" placeholder="Seu nome"/>
        <label>Email *</label>
        <input type="email" name="user_email" placeholder="exemplo@email.com"/>
        <label>Menssagem *</label>
        <textarea name="message" rows="5" placeholder="Entre em contato para discutir assuntos acadêmicos"/>
        <button type="submit" value="Submit"> Enviar </button>
      </form>
    </div>
  );
}