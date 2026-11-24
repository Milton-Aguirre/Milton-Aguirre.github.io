import React, { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';

import PdfModal from './PdfModal.jsx';
import { card, button } from './styles.js';
import { useI18n } from '../i18n/index.js';

// Para publicar um PDF, coloque o arquivo em public/pdfs/ e preencha pdfUrl.
// Os nomes das disciplinas estão em src/i18n/translations.js (disciplinas.courses).
const data = [
  { key: 'dynamical', pdfUrl: '' },
  { key: 'galois', pdfUrl: '' },
  { key: 'forms', pdfUrl: '' },
  { key: 'riemann', pdfUrl: '' },
  { key: 'numerical', pdfUrl: '' },
  { key: 'graphs', pdfUrl: '' },
  { key: 'datascience', pdfUrl: '' },
];

const Card = ({ title, pdfUrl, onOpen, t }) => (
  <article className={`${card} flex flex-col p-5`}>
    <div className="flex items-start justify-between gap-3">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      {!pdfUrl && (
        <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">{t.pdf.soon}</span>
      )}
    </div>
    <p className="mt-2 flex-1 text-sm text-slate-600">{t.disciplinas.card}</p>
    <button type="button" className={`${button} mt-4 w-full`} onClick={() => onOpen(pdfUrl)} disabled={!pdfUrl}>
      <FaFilePdf aria-hidden="true" />
      {pdfUrl ? t.pdf.view : t.pdf.soon}
    </button>
  </article>
);

const Disciplinas = () => {
  const { t } = useI18n();
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.key} title={t.disciplinas.courses[item.key]} pdfUrl={item.pdfUrl} onOpen={setSelectedPdf} t={t} />
        ))}
      </div>
      <PdfModal url={selectedPdf} onClose={() => setSelectedPdf(null)} />
    </>
  );
};

export default Disciplinas;
