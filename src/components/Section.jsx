import React from 'react';

// Seção da página com título padronizado.
// scroll-mt compensa o header fixo ao navegar pelos links do menu (#eventos, etc.).
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-brand">
        <span className="h-7 w-1.5 rounded-full bg-clay" aria-hidden="true" />
        {title}
      </h2>
      {children}
    </section>
  );
}
