import React from 'react';

const Biography = () => {
  return (
    <section className="sectionBiografia">
      <div className="nColumnSection">
        {/* Coluna da imagem */}
        <div className="imageColumn">
          <img 
            src="/images/Milton.jpeg"
            alt="Personal Photo" 
            className="image" 
          />
        </div>
        
        {/* Coluna do texto */}
        <div className="textColumn">
          <p>
            <strong>Milton Aguirre</strong> é formado em Matemática e possui mestrado na mesma área, 
            além de atuar como cientista de dados. Com um sólido background técnico, 
            também possui o título de Técnico em Instalações Elétricas. Além disso, 
            é especializado em Ensino de Educação a Distância, combinando conhecimentos 
            acadêmicos com experiência prática em tecnologia e educação. Seu trabalho é 
            marcado pela aplicação de métodos matemáticos avançados para resolver 
            problemas complexos e pela paixão por compartilhar conhecimento em sala de aula 
            e através de plataformas digitais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Biography;
