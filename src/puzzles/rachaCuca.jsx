import React, { useRef, useEffect, useState, useCallback } from 'react';

import { button } from '../components/styles.js';

const TAMANHO = 300;
const TAMANHO_CELULA = TAMANHO / 3;
const DURACAO_ANIMACAO = 200;

const movimentos = ['cima', 'baixo', 'esquerda', 'direita'];

function gerarTabuleiroSolucionavel() {
  let nums;
  do {
    nums = [...Array(9).keys()].sort(() => Math.random() - 0.5);
  } while (!ehSolucionavel(nums));
  return nums;
}

function ehSolucionavel(nums) {
  const inv = nums.filter(n => n !== 0).reduce((inv, val, i, arr) => {
    return inv + arr.slice(i + 1).filter(x => x < val).length;
  }, 0);
  return inv % 2 === 0;
}

function heuristica(estado) {
  let d = 0;
  for (let i = 0; i < 9; i++) {
    const val = estado[i];
    if (val === 0) continue;
    const [x1, y1] = [i % 3, Math.floor(i / 3)];
    const [x2, y2] = [(val - 1) % 3, Math.floor((val - 1) / 3)];
    d += Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
  return d;
}

function moverEstado(estado, dir) {
  const idx = estado.indexOf(0);
  const linha = Math.floor(idx / 3), coluna = idx % 3;
  let novoIdx = null;

  if (dir === 'cima' && linha > 0) novoIdx = idx - 3;
  else if (dir === 'baixo' && linha < 2) novoIdx = idx + 3;
  else if (dir === 'esquerda' && coluna > 0) novoIdx = idx - 1;
  else if (dir === 'direita' && coluna < 2) novoIdx = idx + 1;

  if (novoIdx === null) return null;

  const novo = [...estado];
  [novo[idx], novo[novoIdx]] = [novo[novoIdx], novo[idx]];
  return novo;
}

function resolverAEstrela(inicial) {
  const objetivo = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  const visitados = new Set();
  const fila = [[heuristica(inicial), 0, inicial, []]];

  while (fila.length > 0) {
    fila.sort((a, b) => a[0] - b[0]);
    const [, g, estado, caminho] = fila.shift();
    const chave = estado.join(',');
    if (visitados.has(chave)) continue;
    visitados.add(chave);

    if (estado.join() === objetivo.join()) return caminho;

    for (const dir of movimentos) {
      const novo = moverEstado(estado, dir);
      if (novo && !visitados.has(novo.join(','))) {
        fila.push([g + 1 + heuristica(novo), g + 1, novo, [...caminho, dir]]);
      }
    }
  }

  return null;
}

export default function RachaCuca() {
  const canvasRef = useRef(null);
  const somClique = useRef(null);
  const somVitoria = useRef(null);
  const [tabuleiro, setTabuleiro] = useState(gerarTabuleiroSolucionavel);
  const [animando, setAnimando] = useState(false);
  const [caminho, setCaminho] = useState([]);
  const [passo, setPasso] = useState(0);
  const [vitoria, setVitoria] = useState(false);

  useEffect(() => {
    somClique.current = new Audio('/sounds/clickV2.mp3');
    somVitoria.current = new Audio('/sounds/win.mp3');
  }, []);

  // venceu = true pinta as peças de laranja (cor de destaque do site)
  const desenharTabuleiro = useCallback((estado, animacao = null, venceu = false) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, TAMANHO, TAMANHO);

    for (let i = 0; i < 9; i++) {
      const val = estado[i];
      if (val === 0 && !animacao) continue;

      let x = (i % 3) * TAMANHO_CELULA;
      let y = Math.floor(i / 3) * TAMANHO_CELULA;

      if (animacao && animacao.valor === val) {
        x = animacao.x;
        y = animacao.y;
      }

      if (val !== 0) {
        // Peça com cantos arredondados nas cores do site
        const m = 4;
        ctx.fillStyle = venceu ? '#be6f44' : '#486a6e';
        ctx.beginPath();
        ctx.roundRect(x + m, y + m, TAMANHO_CELULA - 2 * m, TAMANHO_CELULA - 2 * m, 10);
        ctx.fill();
        ctx.font = 'bold 34px system-ui, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(val, x + TAMANHO_CELULA / 2, y + TAMANHO_CELULA / 2);
      }
    }
  }, []);

  useEffect(() => {
    desenharTabuleiro(tabuleiro, null, vitoria);
  }, [tabuleiro, vitoria, desenharTabuleiro]);

  const moverSeValido = (idx) => {
    if (animando || caminho.length > 0) return;

    const vazio = tabuleiro.indexOf(0);
    const [lv, cv] = [Math.floor(vazio / 3), vazio % 3];
    const [lc, cc] = [Math.floor(idx / 3), idx % 3];
    if (Math.abs(lv - lc) + Math.abs(cv - cc) === 1) {
      animarMovimento(tabuleiro, idx, vazio, () => {
        const novo = [...tabuleiro];
        [novo[vazio], novo[idx]] = [novo[idx], novo[vazio]];
        setTabuleiro(novo);
        if (checarVitoria(novo)) {
          setVitoria(true);
          if (somVitoria.current) {
            somVitoria.current.play();
          }
        }
      });
    }
  };

  const checarVitoria = (estado) => {
    return estado.every((v, i) => v === (i < 8 ? i + 1 : 0));
  };

  const animarMovimento = useCallback((estado, de, para, callback) => {
    setAnimando(true);
    const val = estado[de];
    const [xi, yi] = [(de % 3) * TAMANHO_CELULA, Math.floor(de / 3) * TAMANHO_CELULA];
    const [xf, yf] = [(para % 3) * TAMANHO_CELULA, Math.floor(para / 3) * TAMANHO_CELULA];
    const start = performance.now();

    const animar = (tempoAtual) => {
      const t = tempoAtual - start;
      const progresso = Math.min(t / DURACAO_ANIMACAO, 1);
      const x = xi + (xf - xi) * progresso;
      const y = yi + (yf - yi) * progresso;

      desenharTabuleiro(estado, { valor: val, x, y });

      if (progresso < 1) {
        requestAnimationFrame(animar);
      } else {
        setAnimando(false);
        callback();
      }
    };

    if (somClique.current) {
      somClique.current.currentTime = 0.01;
      somClique.current.play().catch(() => {});
    }
    requestAnimationFrame(animar);
  }, [desenharTabuleiro]);

  const handleClick = (e) => {
    if (vitoria || animando) return;
    // O canvas encolhe em telas pequenas: converte a posição do clique para a escala interna (300px)
    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) * TAMANHO) / rect.width;
    const y = ((e.clientY - rect.top) * TAMANHO) / rect.height;
    const coluna = Math.floor(x / TAMANHO_CELULA);
    const linha = Math.floor(y / TAMANHO_CELULA);
    moverSeValido(linha * 3 + coluna);
  };

  const resolver = () => {
    if (vitoria) return;
    const caminho = resolverAEstrela(tabuleiro);
    if (caminho) {
      setCaminho(caminho);
      setPasso(0);
    }
  };

  useEffect(() => {
    if (caminho.length > 0 && passo < caminho.length && !animando) {
      const idx0 = tabuleiro.indexOf(0);
      const proxEstado = moverEstado(tabuleiro, caminho[passo]);
      const idxMove = proxEstado.indexOf(0);
      animarMovimento(tabuleiro, idxMove, idx0, () => {
        setTabuleiro(proxEstado);
        setPasso(passo + 1);
        if (checarVitoria(proxEstado)) {
          setVitoria(true);
          if (somVitoria.current) {
            somVitoria.current.play();
          }
        }
      });
    }
  }, [caminho, passo, tabuleiro, animando, animarMovimento]);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <p className="min-h-6 text-center font-semibold text-emerald-700" role="status">
        {vitoria ? 'Parabéns! Você venceu!' : ''}
      </p>
      <canvas
        ref={canvasRef}
        width={TAMANHO}
        height={TAMANHO}
        onClick={handleClick}
        aria-label="Tabuleiro do Racha Cuca"
        className="aspect-square w-full max-w-[300px] cursor-pointer rounded-xl bg-slate-100 ring-1 ring-slate-200"
      />

      <div className="flex gap-3">
        <button type="button" className={button} onClick={resolver} disabled={vitoria || animando}>
          Resolver
        </button>
        <button
          type="button"
          className={button}
          onClick={() => {
            const novo = gerarTabuleiroSolucionavel();
            setTabuleiro(novo);
            setCaminho([]);
            setPasso(0);
            setVitoria(false);
          }}
        >
          Novo jogo
        </button>
      </div>
    </div>
  );
}
