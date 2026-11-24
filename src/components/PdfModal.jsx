import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

import { link } from './styles.js';
import { useI18n } from '../i18n/index.js';

// Janela flutuante para visualizar PDFs.
// Fecha com o botão ×, com a tecla Esc ou clicando fora do conteúdo.
export default function PdfModal({ url, onClose }) {
  const { t } = useI18n();
  const closeRef = useRef(null);

  useEffect(() => {
    if (!url) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [url, onClose]);

  if (!url) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4" onClick={onClose}>
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-white p-4 pt-12 shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-label={t.pdf.dialog}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t.pdf.close}
          className="absolute top-2 right-2 flex size-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100"
        >
          <FaTimes aria-hidden="true" />
        </button>
        <iframe src={url} title={t.pdf.frame} className="h-[70vh] w-full rounded-lg border border-slate-200" />
        <a className={`${link} mt-3 inline-block text-sm`} href={url} target="_blank" rel="noopener noreferrer">
          {t.pdf.newTab}
        </a>
      </div>
    </div>
  );
}
