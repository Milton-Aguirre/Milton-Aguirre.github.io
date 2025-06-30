import React, { useState } from 'react';
import './HanoiGame.css';

const HanoiGame = () => {
  const [towers, setTowers] = useState([[3, 2, 1], [], []]);
  const [selectedTower, setSelectedTower] = useState(null);
  const [moveCount, setMoveCount] = useState(0);

  const handleTowerClick = (towerIndex) => {
    if (selectedTower === null) {
      if (towers[towerIndex].length === 0) return;
      setSelectedTower(towerIndex);
    } else {
      if (towerIndex === selectedTower) {
        setSelectedTower(null);
        return;
      }

      const newTowers = towers.map(t => [...t]);
      const diskToMove = newTowers[selectedTower].pop();
      const destination = newTowers[towerIndex];
      const topDisk = destination[destination.length - 1];

      if (!topDisk || diskToMove < topDisk) {
        destination.push(diskToMove);
        setTowers(newTowers);
        setMoveCount(moveCount + 1);
      }

      setSelectedTower(null);
    }
  };

  const resetGame = () => {
    setTowers([[3, 2, 1], [], []]);
    setMoveCount(0);
    setSelectedTower(null);
  };

  const isWin = towers[2].length === 3;

  return (
    <div className="hanoi-game">
      <h2>Torres de Hanoi</h2>
      <p>Movimentos: {moveCount}</p>
      {isWin && <p className="win-text">🏆 Parabéns! Você venceu!</p>}

      <div className="towers-container">
        {towers.map((tower, i) => (
          <div
            key={i}
            className={`tower ${selectedTower === i ? 'selected' : ''}`}
            onClick={() => handleTowerClick(i)}
          >
            {tower.map((disk, j) => (
              <div
                key={j}
                className="disk"
                style={{ width: `${disk * 30}px` }}
              >
                {disk}
              </div>
            ))}
          </div>
        ))}
      </div>

      <button onClick={resetGame}>Reiniciar</button>
    </div>
  );
};

export default HanoiGame;
