import React, { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';

import PdfModal from './PdfModal.jsx';
import { card, button } from './styles.js';

// Para publicar um PDF, coloque o arquivo em public/pdfs/ e preencha pdfUrl.
const data = [
  { title: 'Sistemas Dinâmicos', pdfUrl: '' },
  { title: 'Teoria de Galois', pdfUrl: '' },
  { title: 'Formas Diferenciais', pdfUrl: '' },
  { title: 'Geometria Riemanniana', pdfUrl: '' },
  { title: 'Análise Numérica', pdfUrl: '' },
  { title: 'Teoria dos Grafos', pdfUrl: '' },
  { title: 'Data Science e Analytics', pdfUrl: '' },
];

const Card = ({ title, pdfUrl, onOpen }) => (
  <article className={`${card} flex flex-col p-5`}>
    <div className="flex items-start justify-between gap-3">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      {!pdfUrl && (
        <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">Em breve</span>
      )}
    </div>
    <p className="mt-2 flex-1 text-sm text-slate-600">PDF com exercícios resolvidos.</p>
    <button type="button" className={`${button} mt-4 w-full`} onClick={() => onOpen(pdfUrl)} disabled={!pdfUrl}>
      <FaFilePdf aria-hidden="true" />
      {pdfUrl ? 'Visualizar PDF' : 'Em breve'}
    </button>
  </article>
);

const Disciplinas = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.title} {...item} onOpen={setSelectedPdf} />
        ))}
      </div>
      <PdfModal url={selectedPdf} onClose={() => setSelectedPdf(null)} />
    </>
  );
};

export default Disciplinas;
