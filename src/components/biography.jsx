import React from 'react';

const Biography = () => {
  return (
    <section id="biografia" className="sectionBiografia">
      <h2 className="sectionTitle">Biografia</h2>
      <div className="nColumnSection">
        <div className="imageColumn">
          <img src="/images/Milton.jpeg" alt="Foto de Milton Aguirre" className="image" />
        </div>

        <div className="textColumn">
          <p>
            <strong>Milton Aguirre</strong> é formado em Matemática e possui mestrado na mesma área,
            além de atuar como cientista de dados. Com um sólido background técnico,
            também possui o título de Técnico em Instalações Elétricas. Além disso,
            é especializado em Ensino de Educação a Distância, combinando conhecimentos
            acadêmicos com experiência prática em tecnologia e educação. Seu trabalho é
            marcado pela aplicação de métodos matemáticos avançados para resolver
            problemas complexos e pela paixão por compartilhar conhecimento em sala de aula e através de
            plataformas digitais.
          </p>

          <p>
            Em 2020, juntou-se a seus colegas de graduação da Universidad del Valle para criar
            a International Community of Mathematicians from Latin America (ICMAM), que mais tarde se tornou
            um evento bienal de grande impacto na comunidade matemática da América Latina e do Caribe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Biography;
