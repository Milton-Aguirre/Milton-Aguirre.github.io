import React, { useState } from 'react';

const Card = ({ category, title, imgSrc, pdfUrl, onOpen }) => {
    return (
      <div className="card w-full">
        <div className="flex items-center gap-2 mb-2">
          {imgSrc && <img src={imgSrc} className="w-6" />}
          {/* <img src={imgSrc} className="w-6" alt={altText} /> */}
          <p className="font-bold text-sm text-gray-900/75">{category}</p>
        </div>
        <h4 className="text-sm font-bold mb-4">{title}</h4>
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
  
  const Material = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);

    const data = [
      {
        category: "Proximamente PDF com exercicios resolvidos",
        title: "Sistemas Dinâmicos",
        imgSrc: "",
        pdfUrl:""
      },
      {
        category: "Proximamente PDF com exercicios resolvidos",
        title: "Teoria de Galois",
        imgSrc: "",
        pdfUrl:""
      },
      {
        category: "Proximamente PDF com exercicios resolvidos",
        title: "Formas Diferenciais",
        imgSrc: "",
        pdfUrl:""
      },
      {
        category: "Proximamente PDF com exercicios resolvidos",
        title: "Geometria Riemanniana",
        imgSrc: "",
        pdfUrl:""
      },
      {
        category: "Proximamente PDF com exercicios resolvidos",
        title: "Análisis Numérico",
        imgSrc: "",
        pdfUrl:""
      },
      {
        category: "Proximamente PDF com exercicios resolvidos",
        title: "Teoria de Grafos",
        imgSrc: "",
        pdfUrl:""
      },
      {
        category: "Proximamente PDF com exercicios resolvidos",
        title: "Data Science e Analytics",
        imgSrc: "",
        pdfUrl:""
      }
    ];
  
    return (
      <div className="blog grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Card key={index} {...item} onOpen={setSelectedPdf} />
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
  
  export default Material;
  