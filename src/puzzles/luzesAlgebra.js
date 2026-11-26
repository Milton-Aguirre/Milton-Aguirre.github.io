// Álgebra linear sobre F₂ = {0, 1} para o Painel de Luzes.
// Um tabuleiro n × n é guardado como um número inteiro: o bit i é a casa i
// (linha i / n, coluna i % n), 1 = acesa. Clicar na casa j faz XOR com mascaras[j].

export function mascaras(n) {
  const lista = [];
  for (let j = 0; j < n * n; j++) {
    const l = Math.floor(j / n);
    const c = j % n;
    let m = 0;
    for (const [dl, dc] of [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const L = l + dl;
      const C = c + dc;
      if (L >= 0 && L < n && C >= 0 && C < n) m |= 1 << (L * n + C);
    }
    lista.push(m);
  }
  return lista;
}

export const contarBits = (x) => {
  let k = 0;
  for (; x; x &= x - 1) k++;
  return k;
};

// Resolve A·x = luzes por eliminação de Gauss em F₂ e, entre as 2^(dimensão do núcleo)
// soluções, devolve a que usa menos cliques (bitmask). Devolve null se não houver solução.
export function solucaoMinima(luzes, n) {
  const N = n * n;
  // A matriz é simétrica: a linha i da equação é a máscara da casa i.
  const linhas = mascaras(n).map((m, i) => ({ m, b: (luzes >> i) & 1 }));
  const pivos = [];
  let r = 0;
  for (let c = 0; c < N && r < N; c++) {
    const p = linhas.findIndex((linha, k) => k >= r && (linha.m >> c) & 1);
    if (p < 0) continue;
    [linhas[r], linhas[p]] = [linhas[p], linhas[r]];
    for (let k = 0; k < N; k++) {
      if (k !== r && (linhas[k].m >> c) & 1) {
        linhas[k].m ^= linhas[r].m;
        linhas[k].b ^= linhas[r].b;
      }
    }
    pivos.push(c);
    r++;
  }
  // Linha 0 = 1: sistema impossível
  for (let k = r; k < N; k++) if (linhas[k].b) return null;

  const livres = [];
  for (let c = 0; c < N; c++) if (!pivos.includes(c)) livres.push(c);

  let melhor = null;
  for (let s = 0; s < 1 << livres.length; s++) {
    let x = 0;
    livres.forEach((f, i) => {
      if ((s >> i) & 1) x |= 1 << f;
    });
    for (let k = 0; k < r; k++) {
      let v = linhas[k].b;
      for (const f of livres) if ((linhas[k].m >> f) & 1 && (x >> f) & 1) v ^= 1;
      if (v) x |= 1 << pivos[k];
    }
    if (melhor === null || contarBits(x) < contarBits(melhor)) melhor = x;
  }
  return melhor;
}

// Sorteia cliques a partir do tabuleiro apagado: o resultado sempre tem solução.
export function tabuleiroAleatorio(n) {
  const ms = mascaras(n);
  let luzes = 0;
  while (contarBits(solucaoMinima(luzes, n) ?? 0) < Math.min(3, n)) {
    luzes = 0;
    for (const m of ms) if (Math.random() < 0.5) luzes ^= m;
  }
  return luzes;
}
