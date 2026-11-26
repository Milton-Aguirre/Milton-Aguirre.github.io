import React, { useEffect, useRef, useState } from 'react';

import { button } from '../components/styles.js';
import { useI18n } from '../i18n/index.js';

const ATRASO_COMPUTADOR = 800;

const nimSoma = (pilhas) => pilhas.reduce((s, h) => s ^ h, 0);

// 3 ou 4 fileiras com 1 a 7 palitos
function pilhasAleatorias() {
  const qtd = 3 + Math.floor(Math.random() * 2);
  return Array.from({ length: qtd }, () => 1 + Math.floor(Math.random() * 7));
}

// Estratégia de Bouton: deixar a nim-soma igual a zero.
// Se ela já é zero (posição perdedora), tira um palito e espera um erro do adversário.
function jogadaComputador(pilhas) {
  const s = nimSoma(pilhas);
  if (s !== 0) {
    const i = pilhas.findIndex((h) => (h ^ s) < h);
    return { fileira: i, quantidade: pilhas[i] - (pilhas[i] ^ s) };
  }
  const naoVazias = pilhas.map((h, i) => (h > 0 ? i : -1)).filter((i) => i >= 0);
  const i = naoVazias[Math.floor(Math.random() * naoVazias.length)];
  return { fileira: i, quantidade: 1 };
}

function tocar(som) {
  if (!som.current) return;
  som.current.currentTime = 0;
  som.current.play().catch(() => {});
}

const binario = (x, bits) => x.toString(2).padStart(bits, '0');

export default function Nim() {
  const { t } = useI18n();
  const g = t.games.nim;
  const somClique = useRef(null);
  const somVitoria = useRef(null);
  const [pilhas, setPilhas] = useState(pilhasAleatorias);
  const [vez, setVez] = useState('voce'); // 'voce' | 'computador'
  const [computadorComeca, setComputadorComeca] = useState(false);
  const [destaque, setDestaque] = useState(null); // { fileira, desde }
  const [ultima, setUltima] = useState(null);
  const [verBinario, setVerBinario] = useState(false);

  useEffect(() => {
    somClique.current = new Audio('/sounds/clickV2.mp3');
    somVitoria.current = new Audio('/sounds/win.mp3');
  }, []);

  const acabou = pilhas.every((h) => h === 0);
  // Quem fez a última jogada venceu: se agora seria a vez do computador, você venceu
  const vencedor = acabou ? (vez === 'computador' ? 'voce' : 'computador') : null;

  useEffect(() => {
    if (vencedor === 'voce') tocar(somVitoria);
  }, [vencedor]);

  // Jogada do computador, com uma pequena pausa
  useEffect(() => {
    if (vez !== 'computador' || acabou) return;
    const id = setTimeout(() => {
      const { fileira, quantidade } = jogadaComputador(pilhas);
      setPilhas((p) => p.map((h, i) => (i === fileira ? h - quantidade : h)));
      setUltima({ fileira, quantidade });
      setVez('voce');
      tocar(somClique);
    }, ATRASO_COMPUTADOR);
    return () => clearTimeout(id);
  }, [vez, acabou, pilhas]);

  const retirar = (fileira, desde) => {
    if (vez !== 'voce' || acabou) return;
    setPilhas((p) => p.map((h, i) => (i === fileira ? desde : h)));
    setDestaque(null);
    setUltima(null);
    setVez('computador');
    tocar(somClique);
  };

  const novoJogo = (comeca = computadorComeca) => {
    setPilhas(pilhasAleatorias());
    setVez(comeca ? 'computador' : 'voce');
    setUltima(null);
    setDestaque(null);
  };

  const bits = Math.max(3, ...pilhas.map((h) => h.toString(2).length));
  const s = nimSoma(pilhas);

  let status;
  if (vencedor === 'voce') status = <span className="text-emerald-700">{g.youWin}</span>;
  else if (vencedor === 'computador') status = <span className="text-clay-dark">{g.computerWins}</span>;
  else if (vez === 'computador') status = g.thinking;
  else if (ultima) status = g.computerMoved(ultima.quantidade, ultima.fileira + 1);
  else status = g.yourTurn;

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex w-full flex-wrap items-center justify-between gap-2 text-sm text-slate-700">
        <label className="flex items-center gap-2">
          {g.first}
          <select
            value={computadorComeca ? 'c' : 'v'}
            onChange={(e) => {
              const comeca = e.target.value === 'c';
              setComputadorComeca(comeca);
              novoJogo(comeca);
            }}
            className="rounded-md border border-slate-300 bg-white px-2 py-1"
          >
            <option value="v">{g.you}</option>
            <option value="c">{g.computer}</option>
          </select>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={verBinario}
            onChange={(e) => setVerBinario(e.target.checked)}
            className="size-4 accent-brand"
          />
          {g.showBinary}
        </label>
      </div>

      <p className="min-h-12 text-center text-sm font-semibold text-slate-700" role="status">
        {status}
      </p>

      <div className="w-full space-y-2 rounded-xl bg-slate-100 p-3">
        {pilhas.map((h, fileira) => (
          <div key={fileira} className="flex items-center gap-2">
            <span className="w-5 shrink-0 text-xs font-bold text-slate-500" aria-hidden="true">
              {fileira + 1}
            </span>
            <div className="flex h-12 flex-1 items-center gap-1.5" onMouseLeave={() => setDestaque(null)}>
              {Array.from({ length: h }, (_, k) => {
                const marcado = destaque && destaque.fileira === fileira && k >= destaque.desde;
                return (
                  <button
                    key={k}
                    type="button"
                    disabled={vez !== 'voce' || acabou}
                    onClick={() => retirar(fileira, k)}
                    onMouseEnter={() => setDestaque({ fileira, desde: k })}
                    onFocus={() => setDestaque({ fileira, desde: k })}
                    onBlur={() => setDestaque(null)}
                    aria-label={g.take(h - k, fileira + 1)}
                    className={`h-full w-4 rounded-full transition-colors disabled:cursor-default sm:w-5 ${
                      marcado ? 'bg-clay' : 'bg-brand'
                    }`}
                  />
                );
              })}
            </div>
            {verBinario && (
              <span className="shrink-0 font-mono text-xs text-slate-600 tabular-nums">
                {h} = {binario(h, bits)}
              </span>
            )}
          </div>
        ))}
        {verBinario && (
          <div className="flex justify-end border-t border-slate-300 pt-2 font-mono text-xs tabular-nums">
            <span className={s === 0 ? 'text-clay-dark' : 'text-emerald-700'}>
              {g.nimSum} = {binario(s, bits)}
            </span>
          </div>
        )}
      </div>

      <button type="button" className={button} onClick={() => novoJogo()}>
        {t.games.newGame}
      </button>
    </div>
  );
}
