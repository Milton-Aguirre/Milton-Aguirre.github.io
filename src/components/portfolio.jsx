import React, { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';

import PdfModal from './PdfModal.jsx';
import { card, button } from './styles.js';

const data = [
  {
    title: 'TCC Bacharelado',
    institution: 'Universidad del Valle',
    description: 'Álgebras de Frobenius',
    pdfUrl: '/pdfs/projeto_de_grado.pdf',
    imgSrc: '/images/Univalle.jpg',
  },
  {
    title: 'Dissertação de Mestrado',
    institution: 'Universidade Federal de Viçosa',
    description: 'Alguns resultados da teoria de ℝᵏ-ações sobre variedades diferenciáveis',
    pdfUrl: '/pdfs/disertacao_mestrado.pdf',
    imgSrc: '/images/UFV.jpg',
  },
  {
    title: 'TCC Especialização',
    institution: 'Univesp',
    description: 'Perfil dos alunos da Universidade Virtual do Estado de São Paulo em relação à inclusão digital, 2022',
    pdfUrl: '/pdfs/tcc_especializacao.pdf',
    imgSrc: '/images/Univesp.jpg',
  },
  {
    title: 'MBA em andamento',
    institution: 'MBA USP Esalq',
    description: 'Trabalho em desenvolvimento.',
    pdfUrl: '',
    imgSrc: '/images/MBA_USP.jpg',
  },
];

const Project = ({ title, institution, description, imgSrc, pdfUrl, onOpen }) => (
  <article className={`${card} flex flex-col overflow-hidden`}>
    <div className="flex h-32 items-center justify-center border-b border-slate-100 bg-white p-4">
      <img src={imgSrc} alt={`Logo ${institution}`} loading="lazy" className="max-h-full max-w-full object-contain" />
    </div>
    <div className="flex flex-1 flex-col p-5">
      <p className="text-xs font-semibold tracking-wide text-clay-dark uppercase">{institution}</p>
      <h3 className="mt-1 font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-600">{description}</p>
      <button type="button" className={`${button} mt-4 w-full`} onClick={() => onOpen(pdfUrl)} disabled={!pdfUrl}>
        <FaFilePdf aria-hidden="true" />
        {pdfUrl ? 'Visualizar PDF' : 'Em breve'}
      </button>
    </div>
  </article>
);

const Portfolio = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <Project key={item.title} {...item} onOpen={setSelectedPdf} />
        ))}
      </div>
      <PdfModal url={selectedPdf} onClose={() => setSelectedPdf(null)} />
    </>
  );
};

export default Portfolio;
