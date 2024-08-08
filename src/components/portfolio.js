import React from 'react';

const Project = ({ title, institution, description, pdfLink }) => (
  <div className="project">
    <h3>{title}</h3>
    <h4>{institution}</h4>
    <p>{description}</p>
    <a href={pdfLink} target="_blank" rel="noopener noreferrer">
      <img 
        src={`${process.env.PUBLIC_URL}/images/logo-PDF-1.png`} 
        alt="PDF" 
        className="iconPDF" 
      />
    </a>
  </div>
);

const Portfolio = () => (
    <div className="nColumnSection">
      <Project 
        title="TCC Bacharel" 
        institution="Universidad del Valle" 
        description="Álgebras de Frobenius" 
        pdfLink="/pdfs/projeto_de_grado.pdf"
      />
      <Project 
        title="Disertação Mestrado" 
        institution="Universidade Federal de Viçosa" 
        description="Alguns resultados da teoria de Rk -ações sobre variedades diferenciáveis" 
        pdfLink="/pdfs/disertação_mestrado.pdf"
      />
      <Project 
        title="TCC Especialização" 
        institution="Univesp" 
        description="Perfil dos alunos da Universidade Virtual do Estado de São Paulo em relação à inclusão digital, 2022" 
        pdfLink="/pdfs/tcc_especializacao.pdf"
      />
    </div>
);

export default Portfolio;
