import React from 'react';

import { H2, P, UL, Formula, M, Note, Board, Boards } from './parts.jsx';

// Artigo: a teoria das permutações por trás do Racha Cuca (quebra-cabeça do 8).

const FINAL = [1, 2, 3, 4, 5, 6, 7, 8, 0];
const TROCADO = [1, 2, 3, 4, 5, 6, 8, 7, 0];
const EMBARALHADO = [8, 1, 3, 4, 0, 2, 7, 6, 5];

const inv = <i>inv</i>;
const sgn = <i>sgn</i>;
const sigma = <i>σ</i>;

function Pt() {
  return (
    <>
      <H2>Um pouco de história</H2>
      <P>
        O Racha Cuca é a versão 3 × 3 do famoso <strong>quebra-cabeça do 15</strong>, que virou febre nos Estados
        Unidos e na Europa entre 1879 e 1880. O enigmista Sam Loyd dizia ter oferecido um prêmio de 1.000 dólares a quem
        conseguisse, partindo da posição final, trocar de lugar apenas as peças 14 e 15. Ninguém ganhou o prêmio — e não
        por falta de tentativa: a tarefa é <em>impossível</em>. Ainda em 1879, os matemáticos W. W. Johnson e W. E. Story
        demonstraram, no <em>American Journal of Mathematics</em>, que exatamente metade das posições iniciais não tem
        solução. A explicação vem da álgebra, mais precisamente da <strong>teoria das permutações</strong>.
      </P>

      <H2>O tabuleiro como uma permutação</H2>
      <P>
        Lendo o tabuleiro linha por linha, da esquerda para a direita e ignorando o espaço vazio, cada configuração vira
        uma sequência dos números de 1 a 8. Em linguagem algébrica, essa sequência é uma <strong>permutação</strong>{' '}
        <M>{sigma}</M>: uma maneira de reordenar o conjunto <M>{'{1, 2, …, 8}'}</M>. O conjunto de todas as permutações
        de <M><i>n</i></M> elementos, com a operação de composição, forma o <strong>grupo simétrico</strong>{' '}
        <M>S<sub><i>n</i></sub></M>. Contando também onde fica o espaço vazio, há <M>9! = 362.880</M> maneiras de
        distribuir as peças no tabuleiro.
      </P>
      <Boards>
        <Board tiles={EMBARALHADO} caption="Lido como 8 1 3 4 2 7 6 5" />
        <Board tiles={FINAL} caption="Posição final: 1 2 3 4 5 6 7 8" tone="clay" />
      </Boards>

      <H2>Inversões e paridade</H2>
      <P>
        Uma <strong>inversão</strong> é um par de peças fora de ordem: uma peça maior que aparece antes de uma menor na
        leitura. Na posição final não há nenhuma; na sequência 1 2 3 4 5 6 8 7 há exatamente uma, o par (8, 7).
        Formalmente,
      </P>
      <Formula>
        {inv}({sigma}) = #{'{'} (<i>i</i>, <i>j</i>) : <i>i</i> &lt; <i>j</i> e {sigma}(<i>i</i>) &gt; {sigma}(
        <i>j</i>) {'}'}
      </Formula>
      <P>
        A paridade desse número define o <strong>sinal</strong> da permutação, <M>{sgn}({sigma}) = (−1)<sup>{inv}({sigma})</sup></M>.
        Permutações de sinal +1 são chamadas <em>pares</em>, e as de sinal −1, <em>ímpares</em>. Dois fatos clássicos da
        álgebra: o sinal é multiplicativo, <M>{sgn}({sigma}<i>τ</i>) = {sgn}({sigma})·{sgn}(<i>τ</i>)</M> — ou seja,{' '}
        <M>{sgn}</M> é um homomorfismo de <M>S<sub><i>n</i></sub></M> no grupo <M>{'{−1, +1}'}</M> —, e toda{' '}
        <strong>transposição</strong> (troca de apenas dois elementos) é ímpar.
      </P>

      <H2>O invariante que separa as posições</H2>
      <P>Vejamos o que cada movimento faz com o número de inversões:</P>
      <UL>
        <li>
          <strong>Movimento horizontal:</strong> a peça troca de lugar com o espaço vazio na mesma linha. A sequência lida
          linha por linha continua igual, e as inversões também.
        </li>
        <li>
          <strong>Movimento vertical:</strong> a peça sobe ou desce uma linha e, na sequência, “pula” exatamente as{' '}
          <strong>2 peças</strong> que ficam entre a posição antiga e a nova (o tabuleiro tem 3 colunas, e uma das casas é
          o espaço vazio). Com cada uma dessas duas peças, a inversão aparece ou desaparece, então o total muda em −2, 0
          ou +2.
        </li>
      </UL>
      <Formula>
        {inv}(depois) ≡ {inv}(antes) (mod 2)
      </Formula>
      <P>
        A paridade das inversões é um <strong>invariante</strong>: nenhuma sequência de movimentos consegue alterá-la.
        Como a posição final tem 0 inversões (número par), só as configurações com um número par de inversões podem ser
        resolvidas. A configuração com o 8 e o 7 trocados tem 1 inversão; por mais que se tente, ela nunca chegará à
        posição final.
      </P>
      <Boards>
        <Board tiles={EMBARALHADO} caption="12 inversões (par): tem solução" />
        <Board tiles={TROCADO} caption="1 inversão (ímpar): impossível" tone="clay" />
      </Boards>

      <H2>Exatamente a metade</H2>
      <P>
        O invariante prova que as configurações ímpares são impossíveis. A parte mais difícil — também demonstrada por
        Story em 1879 — é a recíproca: <strong>toda configuração par tem solução</strong>. Na linguagem dos grupos, as
        sequências de movimentos que levam o espaço vazio de volta ao canto inferior direito permutam as 8 peças, e as
        permutações obtidas assim são exatamente as pares, que formam o <strong>grupo alternado</strong>{' '}
        <M>A<sub>8</sub></M>:
      </P>
      <Formula>
        |A<sub>8</sub>| = 8! / 2 = 20.160
      </Formula>
      <P>
        Como o espaço vazio pode estar em qualquer uma das 9 casas, são <M>9 × 20.160 = 181.440</M> configurações
        solucionáveis — exatamente metade das 362.880 possíveis. A outra metade forma um “universo paralelo”: lá dentro as
        peças se movem à vontade, mas nunca alcançam a ordem crescente.
      </P>

      <Note title="Como o jogo usa essa teoria">
        <p>
          <strong>Novo jogo:</strong> o tabuleiro é embaralhado ao acaso e, se a permutação sair ímpar, é descartado e
          embaralhado de novo. Por isso você nunca recebe um tabuleiro impossível.
        </p>
        <p>
          <strong>Resolver:</strong> o botão usa o algoritmo A* (A-estrela), que explora primeiro as configurações mais
          promissoras segundo a <em>distância de Manhattan</em> — a soma, para cada peça, de quantas casas na horizontal
          e na vertical ela está do seu lugar. Como essa estimativa nunca passa do número real de movimentos necessários, o
          A* sempre encontra a solução mais curta. Percorrendo todas as 181.440 configurações, verifica-se que nenhuma
          precisa de mais de 31 movimentos, e apenas duas exigem exatamente 31.
        </p>
      </Note>

      <H2>E no quebra-cabeça do 15?</H2>
      <P>
        No tabuleiro 4 × 4 o argumento muda um pouco: num movimento vertical a peça pula 3 outras, e a paridade das
        inversões <em>troca</em>. Mas cada movimento vertical também muda a linha do espaço vazio. Juntando as duas
        coisas obtém-se um novo invariante: a paridade de <M>{inv} + <i>r</i></M>, onde <M><i>r</i></M> é a linha do
        espaço vazio contada de baixo para cima (de 1 a 4). Uma configuração 4 × 4 tem solução exatamente quando essa
        soma é ímpar. No desafio de Sam Loyd, com 14 e 15 trocados e o vazio na última linha, temos <M>{inv} = 1</M> e{' '}
        <M><i>r</i> = 1</M>: soma par, e portanto impossível. Em geral, tabuleiros com número ímpar de colunas seguem a
        regra do 3 × 3, e os de número par de colunas seguem a regra do 4 × 4.
      </P>
    </>
  );
}

function Es() {
  return (
    <>
      <H2>Un poco de historia</H2>
      <P>
        Este juego es la versión 3 × 3 del famoso <strong>rompecabezas del 15</strong>, que se volvió furor en Estados
        Unidos y Europa entre 1879 y 1880. El creador de acertijos Sam Loyd decía haber ofrecido un premio de 1000 dólares
        a quien lograra, partiendo de la posición final, intercambiar solo las fichas 14 y 15. Nadie ganó el premio — y no
        por falta de intentos: la tarea es <em>imposible</em>. Ya en 1879, los matemáticos W. W. Johnson y W. E. Story
        demostraron, en el <em>American Journal of Mathematics</em>, que exactamente la mitad de las posiciones iniciales no
        tiene solución. La explicación viene del álgebra, más precisamente de la <strong>teoría de permutaciones</strong>.
      </P>

      <H2>El tablero como una permutación</H2>
      <P>
        Si leemos el tablero fila por fila, de izquierda a derecha e ignorando el espacio vacío, cada configuración se
        convierte en una sucesión de los números del 1 al 8. En lenguaje algebraico, esa sucesión es una{' '}
        <strong>permutación</strong> <M>{sigma}</M>: una manera de reordenar el conjunto <M>{'{1, 2, …, 8}'}</M>. El
        conjunto de todas las permutaciones de <M><i>n</i></M> elementos, con la composición, forma el{' '}
        <strong>grupo simétrico</strong> <M>S<sub><i>n</i></sub></M>. Contando también dónde está el espacio vacío, hay{' '}
        <M>9! = 362 880</M> maneras de distribuir las fichas en el tablero.
      </P>
      <Boards>
        <Board tiles={EMBARALHADO} caption="Se lee 8 1 3 4 2 7 6 5" />
        <Board tiles={FINAL} caption="Posición final: 1 2 3 4 5 6 7 8" tone="clay" />
      </Boards>

      <H2>Inversiones y paridad</H2>
      <P>
        Una <strong>inversión</strong> es un par de fichas en desorden: una ficha mayor que aparece antes que una menor en
        la lectura. En la posición final no hay ninguna; en la sucesión 1 2 3 4 5 6 8 7 hay exactamente una, el par (8,
        7). Formalmente,
      </P>
      <Formula>
        {inv}({sigma}) = #{'{'} (<i>i</i>, <i>j</i>) : <i>i</i> &lt; <i>j</i> y {sigma}(<i>i</i>) &gt; {sigma}(
        <i>j</i>) {'}'}
      </Formula>
      <P>
        La paridad de ese número define el <strong>signo</strong> de la permutación,{' '}
        <M>{sgn}({sigma}) = (−1)<sup>{inv}({sigma})</sup></M>. Las permutaciones de signo +1 se llaman <em>pares</em>, y
        las de signo −1, <em>impares</em>. Dos hechos clásicos del álgebra: el signo es multiplicativo,{' '}
        <M>{sgn}({sigma}<i>τ</i>) = {sgn}({sigma})·{sgn}(<i>τ</i>)</M> — es decir, <M>{sgn}</M> es un homomorfismo de{' '}
        <M>S<sub><i>n</i></sub></M> en el grupo <M>{'{−1, +1}'}</M> —, y toda <strong>transposición</strong>{' '}
        (intercambio de solo dos elementos) es impar.
      </P>

      <H2>El invariante que separa las posiciones</H2>
      <P>Veamos qué hace cada movimiento con el número de inversiones:</P>
      <UL>
        <li>
          <strong>Movimiento horizontal:</strong> la ficha intercambia su lugar con el espacio vacío en la misma fila. La
          sucesión leída fila por fila no cambia, y las inversiones tampoco.
        </li>
        <li>
          <strong>Movimiento vertical:</strong> la ficha sube o baja una fila y, en la sucesión, “salta” exactamente las{' '}
          <strong>2 fichas</strong> que quedan entre su posición anterior y la nueva (el tablero tiene 3 columnas y una de
          las casillas es el espacio vacío). Con cada una de esas dos fichas la inversión aparece o desaparece, así que el
          total cambia en −2, 0 o +2.
        </li>
      </UL>
      <Formula>
        {inv}(después) ≡ {inv}(antes) (mod 2)
      </Formula>
      <P>
        La paridad de las inversiones es un <strong>invariante</strong>: ninguna sucesión de movimientos puede cambiarla.
        Como la posición final tiene 0 inversiones (número par), solo las configuraciones con un número par de inversiones
        pueden resolverse. La configuración con el 8 y el 7 intercambiados tiene 1 inversión; por más que se intente,
        nunca llegará a la posición final.
      </P>
      <Boards>
        <Board tiles={EMBARALHADO} caption="12 inversiones (par): tiene solución" />
        <Board tiles={TROCADO} caption="1 inversión (impar): imposible" tone="clay" />
      </Boards>

      <H2>Exactamente la mitad</H2>
      <P>
        El invariante prueba que las configuraciones impares son imposibles. La parte más difícil — también demostrada
        por Story en 1879 — es el recíproco: <strong>toda configuración par tiene solución</strong>. En el lenguaje de
        grupos, las sucesiones de movimientos que devuelven el espacio vacío a la esquina inferior derecha permutan las 8
        fichas, y las permutaciones que se obtienen así son exactamente las pares, que forman el{' '}
        <strong>grupo alternante</strong> <M>A<sub>8</sub></M>:
      </P>
      <Formula>
        |A<sub>8</sub>| = 8! / 2 = 20 160
      </Formula>
      <P>
        Como el espacio vacío puede estar en cualquiera de las 9 casillas, hay <M>9 × 20 160 = 181 440</M>{' '}
        configuraciones con solución — exactamente la mitad de las 362 880 posibles. La otra mitad forma un “universo
        paralelo”: allí las fichas se mueven libremente, pero nunca alcanzan el orden creciente.
      </P>

      <Note title="Cómo usa el juego esta teoría">
        <p>
          <strong>Nuevo juego:</strong> el tablero se mezcla al azar y, si la permutación resulta impar, se descarta y se
          vuelve a mezclar. Por eso nunca recibes un tablero imposible.
        </p>
        <p>
          <strong>Resolver:</strong> el botón usa el algoritmo A* (A estrella), que explora primero las configuraciones
          más prometedoras según la <em>distancia de Manhattan</em> — la suma, para cada ficha, de cuántas casillas en
          horizontal y en vertical está de su lugar. Como esa estimación nunca supera el número real de movimientos
          necesarios, A* siempre encuentra la solución más corta. Recorriendo las 181 440 configuraciones se comprueba que
          ninguna necesita más de 31 movimientos, y solo dos requieren exactamente 31.
        </p>
      </Note>

      <H2>¿Y en el rompecabezas del 15?</H2>
      <P>
        En el tablero 4 × 4 el argumento cambia un poco: en un movimiento vertical la ficha salta otras 3, y la paridad de
        las inversiones <em>cambia</em>. Pero cada movimiento vertical también cambia la fila del espacio vacío. Juntando
        ambas cosas se obtiene un nuevo invariante: la paridad de <M>{inv} + <i>r</i></M>, donde <M><i>r</i></M> es la
        fila del espacio vacío contada de abajo hacia arriba (de 1 a 4). Una configuración 4 × 4 tiene solución
        exactamente cuando esa suma es impar. En el desafío de Sam Loyd, con el 14 y el 15 intercambiados y el vacío en la
        última fila, tenemos <M>{inv} = 1</M> y <M><i>r</i> = 1</M>: suma par y, por lo tanto, imposible. En general, los
        tableros con un número impar de columnas siguen la regla del 3 × 3, y los de número par de columnas, la del 4 × 4.
      </P>
    </>
  );
}

function En() {
  return (
    <>
      <H2>A bit of history</H2>
      <P>
        This game is the 3 × 3 version of the famous <strong>15 puzzle</strong>, which became a craze in the United States
        and Europe in 1879–1880. The puzzle maker Sam Loyd claimed to have offered a $1,000 prize to anyone who could
        start from the solved position and swap only tiles 14 and 15. Nobody won — and not for lack of trying: the task is{' '}
        <em>impossible</em>. Back in 1879, the mathematicians W. W. Johnson and W. E. Story proved, in the{' '}
        <em>American Journal of Mathematics</em>, that exactly half of all starting positions have no solution. The
        explanation comes from algebra, more precisely from the <strong>theory of permutations</strong>.
      </P>

      <H2>The board as a permutation</H2>
      <P>
        Reading the board row by row, left to right and skipping the empty square, every configuration becomes a sequence
        of the numbers 1 to 8. In algebraic terms, that sequence is a <strong>permutation</strong> <M>{sigma}</M>: a way of
        reordering the set <M>{'{1, 2, …, 8}'}</M>. All permutations of <M><i>n</i></M> elements, under composition, form
        the <strong>symmetric group</strong> <M>S<sub><i>n</i></sub></M>. Counting where the empty square is as well,
        there are <M>9! = 362,880</M> ways to lay out the tiles on the board.
      </P>
      <Boards>
        <Board tiles={EMBARALHADO} caption="Read as 8 1 3 4 2 7 6 5" />
        <Board tiles={FINAL} caption="Solved position: 1 2 3 4 5 6 7 8" tone="clay" />
      </Boards>

      <H2>Inversions and parity</H2>
      <P>
        An <strong>inversion</strong> is a pair of tiles out of order: a larger tile that appears before a smaller one in
        the reading. The solved position has none; the sequence 1 2 3 4 5 6 8 7 has exactly one, the pair (8, 7).
        Formally,
      </P>
      <Formula>
        {inv}({sigma}) = #{'{'} (<i>i</i>, <i>j</i>) : <i>i</i> &lt; <i>j</i> and {sigma}(<i>i</i>) &gt; {sigma}(
        <i>j</i>) {'}'}
      </Formula>
      <P>
        The parity of that number defines the <strong>sign</strong> of the permutation,{' '}
        <M>{sgn}({sigma}) = (−1)<sup>{inv}({sigma})</sup></M>. Permutations with sign +1 are called <em>even</em>, and
        those with sign −1, <em>odd</em>. Two classic facts from algebra: the sign is multiplicative,{' '}
        <M>{sgn}({sigma}<i>τ</i>) = {sgn}({sigma})·{sgn}(<i>τ</i>)</M> — that is, <M>{sgn}</M> is a homomorphism from{' '}
        <M>S<sub><i>n</i></sub></M> to the group <M>{'{−1, +1}'}</M> — and every <strong>transposition</strong> (a swap
        of just two elements) is odd.
      </P>

      <H2>The invariant that splits the positions</H2>
      <P>Let us see what each move does to the number of inversions:</P>
      <UL>
        <li>
          <strong>Horizontal move:</strong> the tile swaps places with the empty square in the same row. The row-by-row
          sequence stays the same, and so do the inversions.
        </li>
        <li>
          <strong>Vertical move:</strong> the tile goes up or down one row and, in the sequence, “jumps over” exactly the{' '}
          <strong>2 tiles</strong> between its old and new positions (the board has 3 columns, and one of the squares is
          empty). With each of those two tiles an inversion appears or disappears, so the total changes by −2, 0 or +2.
        </li>
      </UL>
      <Formula>
        {inv}(after) ≡ {inv}(before) (mod 2)
      </Formula>
      <P>
        The parity of the inversions is an <strong>invariant</strong>: no sequence of moves can change it. Since the
        solved position has 0 inversions (an even number), only configurations with an even number of inversions can be
        solved. The configuration with 8 and 7 swapped has 1 inversion; no matter how hard you try, it will never reach
        the solved position.
      </P>
      <Boards>
        <Board tiles={EMBARALHADO} caption="12 inversions (even): solvable" />
        <Board tiles={TROCADO} caption="1 inversion (odd): impossible" tone="clay" />
      </Boards>

      <H2>Exactly half</H2>
      <P>
        The invariant proves that odd configurations are impossible. The harder part — also proved by Story in 1879 — is
        the converse: <strong>every even configuration can be solved</strong>. In group-theoretic language, the move
        sequences that bring the empty square back to the bottom-right corner permute the 8 tiles, and the permutations
        obtained this way are exactly the even ones, which form the <strong>alternating group</strong>{' '}
        <M>A<sub>8</sub></M>:
      </P>
      <Formula>
        |A<sub>8</sub>| = 8! / 2 = 20,160
      </Formula>
      <P>
        Since the empty square can be in any of the 9 cells, there are <M>9 × 20,160 = 181,440</M> solvable
        configurations — exactly half of the 362,880 possible ones. The other half forms a “parallel universe”: inside it
        the tiles move freely, but they never reach ascending order.
      </P>

      <Note title="How the game uses this theory">
        <p>
          <strong>New game:</strong> the board is shuffled at random and, if the permutation turns out odd, it is thrown
          away and shuffled again. That is why you never get an impossible board.
        </p>
        <p>
          <strong>Solve:</strong> the button uses the A* (A-star) algorithm, which explores the most promising
          configurations first according to the <em>Manhattan distance</em> — the sum, over all tiles, of how many squares
          each one is from its place horizontally and vertically. Since this estimate never exceeds the real number of
          moves needed, A* always finds the shortest solution. Going through all 181,440 configurations shows that none
          needs more than 31 moves, and only two need exactly 31.
        </p>
      </Note>

      <H2>What about the 15 puzzle?</H2>
      <P>
        On the 4 × 4 board the argument changes slightly: in a vertical move a tile jumps over 3 others, so the parity of
        the inversions <em>flips</em>. But every vertical move also changes the row of the empty square. Putting both
        together gives a new invariant: the parity of <M>{inv} + <i>r</i></M>, where <M><i>r</i></M> is the row of the
        empty square counted from the bottom (1 to 4). A 4 × 4 configuration is solvable exactly when that sum is odd. In
        Sam Loyd’s challenge, with 14 and 15 swapped and the empty square in the bottom row, we have <M>{inv} = 1</M> and{' '}
        <M><i>r</i> = 1</M>: an even sum, hence impossible. In general, boards with an odd number of columns follow the 3
        × 3 rule, and boards with an even number of columns follow the 4 × 4 rule.
      </P>
    </>
  );
}

const BODIES = { pt: Pt, es: Es, en: En };

export default function RachaCucaArticle({ lang }) {
  const Body = BODIES[lang] ?? Pt;
  return <Body />;
}
