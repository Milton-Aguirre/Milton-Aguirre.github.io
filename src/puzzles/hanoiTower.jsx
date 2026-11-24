import React, { useState } from 'react';

import { button } from '../components/styles.js';
import { useI18n } from '../i18n/index.js';

const NOMES = ['A', 'B', 'C'];

const inicial = (n) => [Array.from({ length: n }, (_, i) => n - i), [], []];

const HanoiGame = () => {
  const { t } = useI18n();
  const h = t.games.hanoi;
  const [discos, setDiscos] = useState(3);
  const [towers, setTowers] = useState(() => inicial(3));
  const [selectedTower, setSelectedTower] = useState(null);
  const [moveCount, setMoveCount] = useState(0);

  const isWin = towers[2].length === discos;
  const minimo = 2 ** discos - 1;

  const handleTowerClick = (towerIndex) => {
    if (isWin) return;
    if (selectedTower === null) {
      if (towers[towerIndex].length === 0) return;
      setSelectedTower(towerIndex);
      return;
    }
    if (towerIndex === selectedTower) {
      setSelectedTower(null);
      return;
    }

    const origem = towers[selectedTower];
    const destino = towers[towerIndex];
    const disco = origem[origem.length - 1];
    const topo = destino[destino.length - 1];

    if (topo === undefined || disco < topo) {
      const novas = towers.map((t) => [...t]);
      novas[towerIndex].push(novas[selectedTower].pop());
      setTowers(novas);
      setMoveCount((c) => c + 1);
    }
    setSelectedTower(null);
  };

  const reiniciar = (n = discos) => {
    setDiscos(n);
    setTowers(inicial(n));
    setMoveCount(0);
    setSelectedTower(null);
  };

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex w-full flex-wrap items-center justify-between gap-2 text-sm text-slate-700">
        <label className="flex items-center gap-2">
          {h.disks}
          <select
            value={discos}
            onChange={(e) => reiniciar(Number(e.target.value))}
            className="rounded-md border border-slate-300 bg-white px-2 py-1"
          >
            {[3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <span>
          {h.moves} <strong>{moveCount}</strong> · {h.minimum} {minimo}
        </span>
      </div>

      <p className="min-h-6 text-center font-semibold text-emerald-700" role="status">
        {isWin && (moveCount === minimo ? h.perfect : t.games.win)}
      </p>

      <div className="grid w-full grid-cols-3 gap-3">
        {towers.map((tower, i) => (
          <button
            key={NOMES[i]}
            type="button"
            onClick={() => handleTowerClick(i)}
            aria-label={h.tower(NOMES[i], tower.length, selectedTower === i)}
            aria-pressed={selectedTower === i}
            className={`relative flex h-52 flex-col-reverse items-center gap-1 rounded-xl bg-slate-100 px-1 pt-2 pb-8 ring-2 transition ${
              selectedTower === i ? 'ring-clay' : 'ring-transparent hover:ring-slate-300'
            }`}
          >
            <span className="absolute left-1/2 bottom-8 top-3 w-1.5 -translate-x-1/2 rounded-full bg-slate-300" aria-hidden="true" />
            <span className="absolute bottom-1.5 text-xs font-bold text-slate-500" aria-hidden="true">{NOMES[i]}</span>
            {tower.map((disk) => (
              <span
                key={disk}
                className={`relative z-10 flex h-6 items-center justify-center rounded-md text-xs font-bold text-white shadow-sm transition-colors duration-500 ${
                  isWin ? 'bg-clay' : 'bg-brand'
                }`}
                style={{ width: `${30 + (disk / discos) * 70}%` }}
              >
                {disk}
              </span>
            ))}
          </button>
        ))}
      </div>

      <button type="button" className={button} onClick={() => reiniciar()}>
        {t.games.reset}
      </button>
    </div>
  );
};

export default HanoiGame;
