import React, { useState } from 'react';

const Card = ({ category, title, imgSrc, pdfUrl, onOpen, altText }) => {
    return (
      <div className="card">
        <div className="category-container">
          {/* {imgSrc && <img src={imgSrc} className="w-6" />} */}
          <img src={imgSrc} className="w-6" alt={altText} />
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
        imgSrc: "Logo_site_32.ico",
        pdfUrl:"",
        altText:"Matemática"
      },
      {
        category: "Proximamente PDF com exercicios resolvidos",
        title: "Teoria de Galois",
        imgSrc: "Logo_site_32.ico",
        pdfUrl:"",
        altText:"Matemática"
      },
      {
        category: "Proximamente PDF com exercicios resolvidos",
        title: "Formas Diferenciais",
        imgSrc: "Logo_site_32.ico",
        pdfUrl:"",
        altText:"Matemática"
      },
      {
        category: "Proximamente PDF com exercicios resolvidos",
        title: "Geometria Riemanniana",
        imgSrc: "Logo_site_32.ico",
        pdfUrl:"",
        altText:"Matemática"
      },
      {
        category: "Proximamente PDF com exercicios resolvidos",
        title: "Análisis Numérico",
        imgSrc: "Logo_site_32.ico",
        pdfUrl:"",
        altText:"Matemática"
      },
      {
        category: "Proximamente PDF com exercicios resolvidos",
        title: "Teoria de Grafos",
        imgSrc: "Logo_site_32.ico",
        pdfUrl:"",
        altText:"Matemática"
      },
      {
        category: "Proximamente PDF com exercicios resolvidos",
        title: "Data Science e Analytics",
        imgSrc: "Logo_site_32.ico",
        pdfUrl:"",
        altText:"Matemática"
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
            <iframe src={selectedPdf} title="Arquivo PDF" width="100%" height="500px" />
          </div>
        </div>
      )}
      </div>
    );
  };
  
  export default Material;
  