import React from 'react';

const Biography = () => {
  return (
    <section id="biografia" className="grid scroll-mt-28 items-start gap-8 md:grid-cols-[220px_1fr]">
      <img
        src="/images/Milton.jpeg"
        alt="Foto de Milton Aguirre"
        className="mx-auto aspect-square w-48 rounded-2xl object-cover shadow-lg ring-4 ring-white md:w-full"
      />

      <div>
        <p className="text-sm font-semibold tracking-wider text-clay-dark uppercase">Biografia</p>
        <h1 className="mt-1 text-4xl font-bold text-brand">Milton Aguirre</h1>
        <p className="mt-1 text-lg text-slate-600">Matemático · Cientista de Dados</p>

        <div className="mt-5 space-y-4 leading-relaxed text-slate-700">
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
