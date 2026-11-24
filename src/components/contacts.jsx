import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { card, button } from './styles.js';
import { useI18n } from '../i18n/index.js';

const field =
  'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 ' +
  'focus:border-brand focus:ring-2 focus:ring-mint/60 focus:outline-none';

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [enviando, setEnviando] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    const form = e.target;
    setEnviando(true);

    emailjs
      .sendForm('service_aq8jvrgs', 'template_f616eyv', form, 'EyzbaRkLpdwqiu0JR')
      .then(
        () => {
          alert(c.success);
          form.reset();
        },
        (error) => {
          console.error(error?.text ?? error);
          alert(c.error);
        }
      )
      .finally(() => setEnviando(false));
  }

  return (
    <form onSubmit={sendEmail} className={`${card} max-w-2xl space-y-4 p-6`}>
      <p className="text-sm text-slate-600">{c.intro}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          {c.name} *
          <input type="text" name="user_name" placeholder={c.namePlaceholder} required className={field} />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          {c.email} *
          <input type="email" name="user_email" placeholder={c.emailPlaceholder} required className={field} />
        </label>
      </div>
      <label className="block text-sm font-medium text-slate-700">
        {c.message} *
        <textarea name="message" rows="5" placeholder={c.messagePlaceholder} required className={field} />
      </label>
      <div className="flex justify-end">
        <button type="submit" disabled={enviando} className={`${button} px-6`}>
          {enviando ? c.sending : c.send}
        </button>
      </div>
    </form>
  );
}
