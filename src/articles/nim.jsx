import React from 'react';

import { H2, P, UL, OL, Formula, M, Note, Table } from './parts.jsx';

// Artigo: o Nim, o XOR e o teorema de Bouton.

const s = <i>s</i>;
const h = <i>h</i>;
const xor = ' ⊕ ';

// Exemplo 3, 4, 5 em binário (conferido: 3 ⊕ 4 ⊕ 5 = 2)
const exemploRows = (soma) => [
  ['3', '0 1 1'],
  ['4', '1 0 0'],
  ['5', '1 0 1'],
  [soma, <strong key="s">0 1 0</strong>],
];

const Bouton = () => (
  <Formula>
    <i>a</i>
    <sub>1</sub>
    {xor}
    <i>a</i>
    <sub>2</sub>
    {xor}⋯{xor}
    <i>a</i>
    <sub>k</sub> = 0
  </Formula>
);

function Pt() {
  return (
    <>
      <H2>Um jogo antigo com uma teoria completa</H2>
      <P>
        Jogos de retirar objetos de montes são muito antigos, mas o nome <strong>Nim</strong> e a sua solução completa
        vieram em 1901, quando o matemático Charles L. Bouton, de Harvard, publicou no <em>Annals of Mathematics</em> o
        artigo “Nim, a game with a complete mathematical theory”. A surpresa é que a estratégia perfeita depende de uma
        operação que hoje todo computador faz em um único passo: o <strong>XOR</strong>, a soma binária sem “vai um”.
      </P>

      <H2>Posições vencedoras e perdedoras</H2>
      <P>
        No Nim não há sorte nem informação escondida, e os dois jogadores têm as mesmas jogadas disponíveis — é um{' '}
        <strong>jogo combinatório imparcial</strong>. Nesses jogos, toda posição é de um de dois tipos:
      </P>
      <UL>
        <li>
          <strong>Posição P</strong> (vence o jogador <em>Anterior</em>, que acabou de jogar): quem joga agora perde se o
          adversário jogar bem.
        </li>
        <li>
          <strong>Posição N</strong> (vence o <em>próximo</em> jogador): quem joga agora tem uma jogada que garante a
          vitória.
        </li>
      </UL>
      <P>
        A mesa vazia é uma posição P: quem deveria jogar não tem palitos para retirar e já perdeu. A partir daí, a
        classificação segue duas regras: uma posição é N se <em>alguma</em> jogada leva a uma posição P, e é P se{' '}
        <em>todas</em> as jogadas levam a posições N. Jogar bem é simplesmente entregar sempre uma posição P ao
        adversário. O difícil é reconhecê-las sem analisar a árvore inteira do jogo — e é aqui que entra a base 2.
      </P>

      <H2>A nim-soma</H2>
      <P>
        Escreva a quantidade de palitos de cada fileira em binário e some coluna por coluna <em>sem transportar</em>: cada
        coluna dá 0 se tiver uma quantidade par de 1s e 1 se tiver uma quantidade ímpar. Essa operação é o{' '}
        <strong>ou exclusivo</strong> (XOR), indicado por ⊕, e o resultado é a <strong>nim-soma</strong>. Com fileiras de
        3, 4 e 5 palitos:
      </P>
      <Table head={['Fileira', 'Binário (4 2 1)']} rows={exemploRows('nim-soma = 2')} />
      <P>
        O XOR é associativo, comutativo, tem o 0 como elemento neutro e cada número é o seu próprio inverso (
        <M>
          <i>x</i>
          {xor}
          <i>x</i> = 0
        </M>
        ). Em outras palavras, os números com XOR formam o espaço vetorial <M>(ℤ/2ℤ)<sup><i>k</i></sup></M>: cada
        coluna de bits é uma coordenada somada módulo 2.
      </P>

      <H2>O teorema de Bouton</H2>
      <P>
        Uma posição do Nim com fileiras <M><i>a</i><sub>1</sub>, …, <i>a</i><sub>k</sub></M> é uma posição P{' '}
        <strong>se, e somente se,</strong>
      </P>
      <Bouton />
      <P>A prova verifica que as posições de nim-soma zero satisfazem as duas regras das posições P:</P>
      <OL>
        <li>
          <strong>De nim-soma 0, toda jogada leva a nim-soma diferente de 0.</strong> Uma jogada altera uma única fileira,
          de <M>{h}</M> para <M>{h}′ &lt; {h}</M>. Como <M>{h}′ ≠ {h}</M>, algum bit muda, e a paridade daquela coluna
          muda junto: a nim-soma deixa de ser zero.
        </li>
        <li>
          <strong>De nim-soma <M>{s} ≠ 0</M>, existe uma jogada que leva a nim-soma 0.</strong> Olhe o bit 1 mais à
          esquerda de <M>{s}</M>. Alguma fileira <M>{h}</M> tem 1 nessa coluna (senão a coluna somaria 0). Então{' '}
          <M>
            {h}
            {xor}
            {s} &lt; {h}
          </M>
          , pois esse bit vira 0 e os bits mais à esquerda não mudam. Basta reduzir essa fileira para{' '}
          <M>
            {h}
            {xor}
            {s}
          </M>
          : a nova nim-soma é{' '}
          <M>
            {s}
            {xor}
            {s} = 0
          </M>
          .
        </li>
      </OL>
      <P>
        Como a mesa vazia tem nim-soma 0, o teorema está provado. No exemplo 3, 4, 5 a nim-soma é <M>2 = 010₂</M>; a
        fileira com 3 palitos (<M>011₂</M>) tem 1 nessa coluna, e <M>3{xor}2 = 1</M>. A jogada vencedora é tirar 2 palitos
        dessa fileira, deixando 1, 4, 5 — e de fato <M>1{xor}4{xor}5 = 0</M>.
      </P>

      <Note title="Como o jogo usa essa teoria">
        <p>
          O computador joga exatamente a estratégia de Bouton: calcula a nim-soma e, se ela não for zero, faz a jogada que
          a zera. Se receber uma posição de nim-soma zero, sabe que está perdendo e tira um único palito, esperando um erro
          seu. Marque <strong>Mostrar em binário</strong> para ver cada fileira em base 2 e a nim-soma da posição: na sua
          vez, tente sempre deixá-la igual a zero. Se a posição inicial já tiver nim-soma zero, quem começa perde contra um
          jogo perfeito — por isso vale a pena escolher quem começa.
        </p>
      </Note>

      <H2>Além do Nim</H2>
      <P>
        O Nim é muito mais do que um passatempo. Pelo <strong>teorema de Sprague–Grundy</strong>, provado de forma
        independente por Roland Sprague (1935) e Patrick Grundy (1939), <em>todo</em> jogo combinatório imparcial em que
        perde quem não pode jogar equivale a uma única fileira do Nim, de tamanho igual ao seu <em>número de Grundy</em>.
        Jogar vários jogos ao mesmo tempo corresponde a fazer o XOR desses números — a mesma nim-soma de Bouton.
      </P>
      <P>
        Na variante <strong>misère</strong>, em que perde quem tira o último palito, a estratégia é quase a mesma: joga-se
        como no Nim normal até o momento em que a jogada deixaria só fileiras com 1 palito; nesse instante, deixa-se um
        número <em>ímpar</em> delas.
      </P>
    </>
  );
}

function Es() {
  return (
    <>
      <H2>Un juego antiguo con una teoría completa</H2>
      <P>
        Los juegos de retirar objetos de montones son muy antiguos, pero el nombre <strong>Nim</strong> y su solución
        completa llegaron en 1901, cuando el matemático Charles L. Bouton, de Harvard, publicó en los{' '}
        <em>Annals of Mathematics</em> el artículo “Nim, a game with a complete mathematical theory”. La sorpresa es que la
        estrategia perfecta depende de una operación que hoy cualquier computador hace en un solo paso: el{' '}
        <strong>XOR</strong>, la suma binaria sin “llevar”.
      </P>

      <H2>Posiciones ganadoras y perdedoras</H2>
      <P>
        En el Nim no hay azar ni información oculta, y ambos jugadores tienen las mismas jugadas disponibles — es un{' '}
        <strong>juego combinatorio imparcial</strong>. En estos juegos, toda posición es de uno de dos tipos:
      </P>
      <UL>
        <li>
          <strong>Posición P</strong> (gana el jugador <em>anterior</em>, el que acaba de jugar): quien juega ahora pierde
          si el rival juega bien.
        </li>
        <li>
          <strong>Posición N</strong> (gana el <em>siguiente</em> jugador): quien juega ahora tiene una jugada que le
          asegura la victoria.
        </li>
      </UL>
      <P>
        La mesa vacía es una posición P: a quien le toca no tiene palitos que retirar y ya perdió. A partir de ahí, la
        clasificación sigue dos reglas: una posición es N si <em>alguna</em> jugada lleva a una posición P, y es P si{' '}
        <em>todas</em> las jugadas llevan a posiciones N. Jugar bien es, simplemente, entregarle siempre una posición P al
        rival. Lo difícil es reconocerlas sin analizar todo el árbol del juego — y ahí entra la base 2.
      </P>

      <H2>La nim-suma</H2>
      <P>
        Escribe la cantidad de palitos de cada fila en binario y suma columna por columna <em>sin llevar</em>: cada columna
        da 0 si tiene una cantidad par de unos y 1 si tiene una cantidad impar. Esa operación es el{' '}
        <strong>o exclusivo</strong> (XOR), indicado por ⊕, y el resultado es la <strong>nim-suma</strong>. Con filas de
        3, 4 y 5 palitos:
      </P>
      <Table head={['Fila', 'Binario (4 2 1)']} rows={exemploRows('nim-suma = 2')} />
      <P>
        El XOR es asociativo, conmutativo, tiene al 0 como elemento neutro y cada número es su propio inverso (
        <M>
          <i>x</i>
          {xor}
          <i>x</i> = 0
        </M>
        ). En otras palabras, los números con el XOR forman el espacio vectorial <M>(ℤ/2ℤ)<sup><i>k</i></sup></M>: cada
        columna de bits es una coordenada que se suma módulo 2.
      </P>

      <H2>El teorema de Bouton</H2>
      <P>
        Una posición del Nim con filas <M><i>a</i><sub>1</sub>, …, <i>a</i><sub>k</sub></M> es una posición P{' '}
        <strong>si y solo si</strong>
      </P>
      <Bouton />
      <P>La prueba verifica que las posiciones de nim-suma cero cumplen las dos reglas de las posiciones P:</P>
      <OL>
        <li>
          <strong>Desde nim-suma 0, toda jugada lleva a nim-suma distinta de 0.</strong> Una jugada cambia una sola fila,
          de <M>{h}</M> a <M>{h}′ &lt; {h}</M>. Como <M>{h}′ ≠ {h}</M>, algún bit cambia, y con él la paridad de esa
          columna: la nim-suma deja de ser cero.
        </li>
        <li>
          <strong>Desde nim-suma <M>{s} ≠ 0</M>, existe una jugada que lleva a nim-suma 0.</strong> Mira el bit 1 más a
          la izquierda de <M>{s}</M>. Alguna fila <M>{h}</M> tiene un 1 en esa columna (si no, la columna sumaría 0).
          Entonces{' '}
          <M>
            {h}
            {xor}
            {s} &lt; {h}
          </M>
          , porque ese bit pasa a 0 y los bits más a la izquierda no cambian. Basta reducir esa fila a{' '}
          <M>
            {h}
            {xor}
            {s}
          </M>
          : la nueva nim-suma es{' '}
          <M>
            {s}
            {xor}
            {s} = 0
          </M>
          .
        </li>
      </OL>
      <P>
        Como la mesa vacía tiene nim-suma 0, el teorema queda probado. En el ejemplo 3, 4, 5 la nim-suma es{' '}
        <M>2 = 010₂</M>; la fila de 3 palitos (<M>011₂</M>) tiene un 1 en esa columna, y <M>3{xor}2 = 1</M>. La jugada
        ganadora es quitar 2 palitos de esa fila, dejando 1, 4, 5 — y en efecto <M>1{xor}4{xor}5 = 0</M>.
      </P>

      <Note title="Cómo usa el juego esta teoría">
        <p>
          El computador juega exactamente la estrategia de Bouton: calcula la nim-suma y, si no es cero, hace la jugada que
          la anula. Si recibe una posición de nim-suma cero, sabe que va perdiendo y quita un solo palito, esperando un
          error tuyo. Marca <strong>Mostrar en binario</strong> para ver cada fila en base 2 y la nim-suma de la posición:
          en tu turno, intenta dejarla siempre en cero. Si la posición inicial ya tiene nim-suma cero, quien empieza pierde
          contra un juego perfecto — por eso conviene elegir quién empieza.
        </p>
      </Note>

      <H2>Más allá del Nim</H2>
      <P>
        El Nim es mucho más que un pasatiempo. Por el <strong>teorema de Sprague–Grundy</strong>, demostrado de forma
        independiente por Roland Sprague (1935) y Patrick Grundy (1939), <em>todo</em> juego combinatorio imparcial en el
        que pierde quien no puede jugar equivale a una sola fila del Nim, de tamaño igual a su <em>número de Grundy</em>.
        Jugar varios juegos a la vez corresponde a hacer el XOR de esos números — la misma nim-suma de Bouton.
      </P>
      <P>
        En la variante <strong>misère</strong>, en la que pierde quien quita el último palito, la estrategia es casi la
        misma: se juega como en el Nim normal hasta el momento en que la jugada dejaría solo filas de 1 palito; en ese
        instante, se deja una cantidad <em>impar</em> de ellas.
      </P>
    </>
  );
}

function En() {
  return (
    <>
      <H2>An old game with a complete theory</H2>
      <P>
        Games of taking objects from piles are very old, but the name <strong>Nim</strong> and its complete solution came
        in 1901, when the Harvard mathematician Charles L. Bouton published “Nim, a game with a complete mathematical
        theory” in the <em>Annals of Mathematics</em>. The surprise is that perfect strategy depends on an operation every
        computer now does in a single step: <strong>XOR</strong>, binary addition without carrying.
      </P>

      <H2>Winning and losing positions</H2>
      <P>
        Nim has no luck and no hidden information, and both players have the same moves available — it is an{' '}
        <strong>impartial combinatorial game</strong>. In such games, every position is one of two kinds:
      </P>
      <UL>
        <li>
          <strong>P-position</strong> (the <em>Previous</em> player, who just moved, wins): whoever moves now loses if the
          opponent plays well.
        </li>
        <li>
          <strong>N-position</strong> (the <em>Next</em> player wins): whoever moves now has a move that guarantees
          victory.
        </li>
      </UL>
      <P>
        The empty table is a P-position: the player to move has no sticks to take and has already lost. From there the
        classification follows two rules: a position is N if <em>some</em> move leads to a P-position, and it is P if{' '}
        <em>every</em> move leads to an N-position. Playing well simply means always handing your opponent a P-position.
        The hard part is recognising them without analysing the whole game tree — and that is where base 2 comes in.
      </P>

      <H2>The nim-sum</H2>
      <P>
        Write the number of sticks in each row in binary and add column by column <em>without carrying</em>: each column
        gives 0 if it has an even number of 1s and 1 if it has an odd number. This operation is{' '}
        <strong>exclusive or</strong> (XOR), written ⊕, and the result is the <strong>nim-sum</strong>. With rows of 3, 4
        and 5 sticks:
      </P>
      <Table head={['Row', 'Binary (4 2 1)']} rows={exemploRows('nim-sum = 2')} />
      <P>
        XOR is associative, commutative, has 0 as its identity, and every number is its own inverse (
        <M>
          <i>x</i>
          {xor}
          <i>x</i> = 0
        </M>
        ). In other words, numbers under XOR form the vector space <M>(ℤ/2ℤ)<sup><i>k</i></sup></M>: each column of bits
        is a coordinate added modulo 2.
      </P>

      <H2>Bouton’s theorem</H2>
      <P>
        A Nim position with rows <M><i>a</i><sub>1</sub>, …, <i>a</i><sub>k</sub></M> is a P-position{' '}
        <strong>if and only if</strong>
      </P>
      <Bouton />
      <P>The proof checks that positions with nim-sum zero satisfy both rules for P-positions:</P>
      <OL>
        <li>
          <strong>From nim-sum 0, every move leads to a non-zero nim-sum.</strong> A move changes a single row, from{' '}
          <M>{h}</M> to <M>{h}′ &lt; {h}</M>. Since <M>{h}′ ≠ {h}</M>, some bit changes, and so does the parity of that
          column: the nim-sum is no longer zero.
        </li>
        <li>
          <strong>From nim-sum <M>{s} ≠ 0</M>, some move leads to nim-sum 0.</strong> Look at the leftmost 1 bit of{' '}
          <M>{s}</M>. Some row <M>{h}</M> has a 1 in that column (otherwise the column would add up to 0). Then{' '}
          <M>
            {h}
            {xor}
            {s} &lt; {h}
          </M>
          , because that bit becomes 0 and the bits to its left do not change. Just reduce that row to{' '}
          <M>
            {h}
            {xor}
            {s}
          </M>
          : the new nim-sum is{' '}
          <M>
            {s}
            {xor}
            {s} = 0
          </M>
          .
        </li>
      </OL>
      <P>
        Since the empty table has nim-sum 0, the theorem is proved. In the 3, 4, 5 example the nim-sum is{' '}
        <M>2 = 010₂</M>; the row with 3 sticks (<M>011₂</M>) has a 1 in that column, and <M>3{xor}2 = 1</M>. The winning
        move is to take 2 sticks from that row, leaving 1, 4, 5 — and indeed <M>1{xor}4{xor}5 = 0</M>.
      </P>

      <Note title="How the game uses this theory">
        <p>
          The computer plays exactly Bouton’s strategy: it computes the nim-sum and, if it is not zero, makes the move that
          brings it to zero. If it is handed a position with nim-sum zero, it knows it is losing and takes a single stick,
          waiting for you to slip. Tick <strong>Show in binary</strong> to see each row in base 2 and the nim-sum of the
          position: on your turn, always try to leave it at zero. If the starting position already has nim-sum zero, the
          first player loses against perfect play — so choosing who starts matters.
        </p>
      </Note>

      <H2>Beyond Nim</H2>
      <P>
        Nim is much more than a pastime. By the <strong>Sprague–Grundy theorem</strong>, proved independently by Roland
        Sprague (1935) and Patrick Grundy (1939), <em>every</em> impartial combinatorial game in which the player unable
        to move loses is equivalent to a single Nim row, whose size is the game’s <em>Grundy number</em>. Playing several
        games at once corresponds to taking the XOR of those numbers — Bouton’s nim-sum again.
      </P>
      <P>
        In the <strong>misère</strong> variant, where whoever takes the last stick loses, the strategy is almost the same:
        play as in normal Nim until the move would leave only rows with 1 stick; at that moment, leave an <em>odd</em>{' '}
        number of them.
      </P>
    </>
  );
}

const BODIES = { pt: Pt, es: Es, en: En };

export default function NimArticle({ lang }) {
  const Body = BODIES[lang] ?? Pt;
  return <Body />;
}
