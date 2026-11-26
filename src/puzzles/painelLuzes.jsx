import React, { useEffect, useMemo, useRef, useState } from 'react';

import { button } from '../components/styles.js';
import { useI18n } from '../i18n/index.js';
import { contarBits, mascaras, solucaoMinima, tabuleiroAleatorio } from './luzesAlgebra.js';

function novoEstado(n) {
  const luzes = tabuleiroAleatorio(n);
  return { n, luzes, minimo: contarBits(solucaoMinima(luzes, n)), cliques: 0 };
}

export default function PainelLuzes() {
  const { t } = useI18n();
  const g = t.games.lights;
  const somClique = useRef(null);
  const somVitoria = useRef(null);
  const [estado, setEstado] = useState(() => novoEstado(5));
  const [verSolucao, setVerSolucao] = useState(false);
  const { n, luzes, minimo, cliques } = estado;

  useEffect(() => {
    somClique.current = new Audio('/sounds/clickV2.mp3');
    somVitoria.current = new Audio('/sounds/win.mp3');
  }, []);

  const ms = useMemo(() => mascaras(n), [n]);
  const venceu = luzes === 0;
  const solucao = useMemo(() => (verSolucao && !venceu ? solucaoMinima(luzes, n) : 0), [verSolucao, venceu, luzes, n]);

  const clicar = (j) => {
    if (venceu) return;
    const novas = luzes ^ ms[j];
    setEstado({ ...estado, luzes: novas, cliques: cliques + 1 });
    const som = novas === 0 ? somVitoria.current : somClique.current;
    if (som) {
      som.currentTime = 0;
      som.play().catch(() => {});
    }
  };

  const reiniciar = (tamanho = n) => {
    setEstado(novoEstado(tamanho));
    setVerSolucao(false);
  };

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex w-full flex-wrap items-center justify-between gap-2 text-sm text-slate-700">
        <label className="flex items-center gap-2">
          {g.size}
          <select
            value={n}
            onChange={(e) => reiniciar(Number(e.target.value))}
            className="rounded-md border border-slate-300 bg-white px-2 py-1"
          >
            {[3, 4, 5].map((k) => (
              <option key={k} value={k}>
                {k} × {k}
              </option>
            ))}
          </select>
        </label>
        <span>
          {g.clicks} <strong>{cliques}</strong> · {g.minimum} {minimo}
        </span>
      </div>

      <p className="min-h-6 text-center font-semibold text-emerald-700" role="status">
        {venceu && (cliques === minimo ? g.perfect : t.games.win)}
      </p>

      <div
        className="grid aspect-square w-full max-w-[300px] gap-1.5 rounded-xl bg-slate-800 p-2"
        style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}
      >
        {ms.map((_, j) => {
          const acesa = (luzes >> j) & 1;
          const marcada = (solucao >> j) & 1;
          return (
            <button
              key={`${n}-${j}`}
              type="button"
              onClick={() => clicar(j)}
              disabled={venceu}
              aria-label={g.cell(Math.floor(j / n) + 1, (j % n) + 1, acesa, marcada)}
              aria-pressed={!!acesa}
              className={`relative flex items-center justify-center rounded-md transition-colors duration-200 disabled:cursor-default ${
                acesa ? 'bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.7)]' : 'bg-slate-600 hover:bg-slate-500'
              }`}
            >
              {marcada ? (
                <span className="size-3 rounded-full bg-clay ring-2 ring-white" aria-hidden="true" />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <button type="button" className={button} onClick={() => setVerSolucao((v) => !v)} disabled={venceu}>
          {verSolucao ? g.hideSolution : g.showSolution}
        </button>
        <button type="button" className={button} onClick={() => reiniciar()}>
          {t.games.newGame}
        </button>
      </div>
    </div>
  );
}
