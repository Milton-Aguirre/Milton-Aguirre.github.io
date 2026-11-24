import React, { useState } from 'react';
import PdfModal from './PdfModal.jsx';

const Card = ({ category, title, imgSrc, pdfUrl, onOpen }) => {
  return (
    <div className="card">
      <div className="category-container">
        <img src={imgSrc} className="w-6" alt="" />
        <p className="font-bold text-sm text-gray-900/75">{category}</p>
      </div>
      <h4 className="text-sm font-bold mb-4">{title}</h4>
      <button
        type="button"
        className="buttonPDF"
        onClick={() => onOpen(pdfUrl)}
        disabled={!pdfUrl}
      >
        {pdfUrl ? 'Visualizar PDF' : 'Em breve'}
      </button>
    </div>
  );
};

const EM_BREVE = 'Em breve: PDF com exercícios resolvidos';

// Para publicar um PDF, coloque o arquivo em public/pdfs/ e preencha pdfUrl.
const data = [
  { title: 'Sistemas Dinâmicos', pdfUrl: '' },
  { title: 'Teoria de Galois', pdfUrl: '' },
  { title: 'Formas Diferenciais', pdfUrl: '' },
  { title: 'Geometria Riemanniana', pdfUrl: '' },
  { title: 'Análise Numérica', pdfUrl: '' },
  { title: 'Teoria dos Grafos', pdfUrl: '' },
  { title: 'Data Science e Analytics', pdfUrl: '' },
].map((d) => ({
  ...d,
  category: d.pdfUrl ? 'PDF com exercícios resolvidos' : EM_BREVE,
  imgSrc: '/Logo_site_32.ico',
}));

const Disciplinas = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="blog grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <Card key={item.title} {...item} onOpen={setSelectedPdf} />
      ))}
      <PdfModal url={selectedPdf} onClose={() => setSelectedPdf(null)} />
    </div>
  );
};

export default Disciplinas;
