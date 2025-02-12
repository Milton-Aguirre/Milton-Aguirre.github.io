import React, { useState } from 'react';

const Project = ({ title, institution, description, imgSrc, pdfUrl, onOpen  }) => {
  return (
    <div className="card w-full">
      <div className="flex items-center gap-2 mb-2">
        {/* {imgSrc && <img src={imgSrc} className="w-6" alt={description} />} */}
        <img src={imgSrc} className="w-6" alt={description} />
        <p className="font-bold text-sm text-gray-900/75">{institution}</p>
      </div>
      <h4 className="text-sm font-bold mb-4">{title}</h4>
      <h5 className="font-bold text-sm text-gray-900/75">{description}</h5>
      <button 
        type="button" 
        className="buttonPDF"
        onClick={() => onOpen(pdfUrl)}
      >
        Visualizar PDF
      </button>
    </div>
  );
};

const Portfolio = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const data = [
    {
      title:"TCC Bacharel",
      institution:"Universidad del Valle", 
      description:"Álgebras de Frobenius",
      pdfUrl:"/pdfs/projeto_de_grado.pdf",
      imgSrc:"Logo_site_192.png"
    },
    {
      title:"Disertação Mestrado",
      institution:"Universidade Federal de Viçosa", 
      description:"Alguns resultados da teoria de Rk -ações sobre variedades diferenciáveis",
      pdfUrl:"/pdfs/disertação_mestrado.pdf",
      imgSrc:"Logo_site_192.png"
    },
    {
      title:"TCC Especialização",
      institution:"Univesp", 
      description:"Perfil dos alunos da Universidade Virtual do Estado de São Paulo em relação à inclusão digital, 2022",
      pdfUrl:"/pdfs/tcc_especializacao.pdf",
      imgSrc:"Logo_site_192.png"
    }
  ];
  
  return (
    <div className="blog grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <Project key={index} {...item} onOpen={setSelectedPdf} />
      ))}

      {selectedPdf && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedPdf(null)}>&times;</span>
            <iframe src={selectedPdf} width="100%" height="500px" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
