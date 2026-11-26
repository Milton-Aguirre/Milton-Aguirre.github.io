import React from 'react';

// Peças reutilizadas pelos artigos sobre a matemática dos jogos.

export const H2 = ({ children }) => <h2 className="mt-12 text-2xl font-bold text-brand">{children}</h2>;

export const P = ({ children }) => <p className="mt-4 leading-relaxed text-slate-700">{children}</p>;

export const UL = ({ children }) => (
  <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-700 marker:text-clay">{children}</ul>
);

export const OL = ({ children }) => (
  <ol className="mt-4 list-decimal space-y-2 pl-6 leading-relaxed text-slate-700 marker:font-semibold marker:text-clay">
    {children}
  </ol>
);

// Fórmula em destaque. Variáveis vão em <i>.
export const Formula = ({ children }) => (
  <div className="my-6 overflow-x-auto rounded-xl bg-stone-100 px-4 py-4 text-center font-serif text-xl whitespace-nowrap text-slate-800">
    {children}
  </div>
);

// Matemática no meio do texto.
export const M = ({ children }) => <span className="font-serif whitespace-nowrap">{children}</span>;

// Caixa de destaque ("como o jogo usa isso").
export const Note = ({ title, children }) => (
  <aside className="mt-8 rounded-xl border-l-4 border-clay bg-white p-5 shadow-sm ring-1 ring-slate-200">
    <p className="font-semibold text-clay-dark">{title}</p>
    <div className="text-sm [&_p]:mt-2 [&_p]:text-slate-700">{children}</div>
  </aside>
);

// Mini tabuleiro 3 × 3 (0 = espaço vazio).
export function Board({ tiles, caption, tone = 'brand' }) {
  const linhas = [0, 1, 2].map((l) => tiles.slice(l * 3, l * 3 + 3).map((v) => v || '—').join(' ')).join(' / ');
  return (
    <figure className="flex flex-col items-center gap-2">
      <div className="grid w-32 grid-cols-3 gap-1 rounded-lg bg-slate-100 p-1 ring-1 ring-slate-200" aria-hidden="true">
        {tiles.map((v, i) =>
          v === 0 ? (
            <span key={i} />
          ) : (
            <span
              key={i}
              className={`flex aspect-square items-center justify-center rounded-md text-lg font-bold text-white ${
                tone === 'clay' ? 'bg-clay' : 'bg-brand'
              }`}
            >
              {v}
            </span>
          )
        )}
      </div>
      <figcaption className="max-w-40 text-center text-sm text-slate-600">
        {caption}
        <span className="sr-only">: {linhas}</span>
      </figcaption>
    </figure>
  );
}

export const Boards = ({ children }) => <div className="my-8 flex flex-wrap justify-center gap-8">{children}</div>;

export function Table({ head, rows, caption }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full min-w-64 border-collapse text-sm">
        {caption && <caption className="mb-2 text-left text-slate-600">{caption}</caption>}
        <thead>
          <tr className="border-b-2 border-brand/30 text-left text-brand">
            {head.map((h) => (
              <th key={h} scope="col" className="px-3 py-2 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-200 odd:bg-white even:bg-stone-100/60">
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-slate-700 tabular-nums">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Grade de luzes n × n. `padrao` é uma string com uma linha por "/" (1 = marcada).
// tone 'luz' = casas acesas em amarelo; 'clique' = casas a clicar, com um ponto.
export function LightGrid({ padrao, caption, tone = 'luz' }) {
  const linhas = padrao.split('/');
  const n = linhas.length;
  const casas = linhas.join('').split('');
  return (
    <figure className="flex flex-col items-center gap-2">
      <div
        className="grid w-28 gap-0.5 rounded-lg bg-slate-800 p-1"
        style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}
        aria-hidden="true"
      >
        {casas.map((v, i) => (
          <span
            key={i}
            className={`flex aspect-square items-center justify-center rounded-sm ${
              tone === 'luz' && v === '1' ? 'bg-amber-300' : 'bg-slate-600'
            }`}
          >
            {tone === 'clique' && v === '1' && <span className="size-2 rounded-full bg-clay ring-1 ring-white" />}
          </span>
        ))}
      </div>
      <figcaption className="max-w-40 text-center text-sm text-slate-600">
        {caption}
        <span className="sr-only">: {padrao.replaceAll('/', ' / ')}</span>
      </figcaption>
    </figure>
  );
}
