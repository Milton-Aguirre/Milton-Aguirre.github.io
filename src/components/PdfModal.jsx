import React, { useEffect, useRef } from 'react';

// Janela flutuante para visualizar PDFs.
// Fecha com o botão ×, com a tecla Esc ou clicando fora do conteúdo.
export default function PdfModal({ url, onClose }) {
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
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label="Visualização de PDF"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="close" onClick={onClose} aria-label="Fechar">
          &times;
        </button>
        <iframe src={url} title="Arquivo PDF" width="100%" height="500px" />
        <a className="link" href={url} target="_blank" rel="noopener noreferrer">
          Abrir em nova aba
        </a>
      </div>
    </div>
  );
}
