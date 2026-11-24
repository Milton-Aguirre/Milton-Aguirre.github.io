import React from 'react';

import { useI18n } from '../i18n/index.js';

const Biography = () => {
  const { t } = useI18n();

  return (
    <section id="biografia" className="grid scroll-mt-28 items-start gap-8 md:grid-cols-[220px_1fr]">
      <img
        src="/images/Milton.jpeg"
        alt={t.bio.photoAlt}
        className="mx-auto aspect-square w-48 rounded-2xl object-cover shadow-lg ring-4 ring-white md:w-full"
      />

      <div>
        <p className="text-sm font-semibold tracking-wider text-clay-dark uppercase">{t.bio.label}</p>
        <h1 className="mt-1 text-4xl font-bold text-brand">Milton Aguirre</h1>
        <p className="mt-1 text-lg text-slate-600">{t.layout.subtitle}</p>

        <div className="mt-5 space-y-4 leading-relaxed text-slate-700">
          <p>
            <strong>Milton Aguirre</strong> {t.bio.p1}
          </p>
          <p>{t.bio.p2}</p>
        </div>
      </div>
    </section>
  );
};

export default Biography;
