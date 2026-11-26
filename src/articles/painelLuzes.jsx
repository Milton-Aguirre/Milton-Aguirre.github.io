import React from 'react';

import { H2, P, UL, Formula, M, Note, Table, LightGrid, Boards } from './parts.jsx';

// Artigo: o Painel de Luzes como um sistema linear sobre F₂.
// Posto, núcleo e padrões silenciosos conferidos por eliminação de Gauss (src/puzzles/luzesAlgebra.js).

const CLIQUE_CENTRO = '00000/00100/01110/00100/00000';
const CLIQUE_CANTO = '11000/10000/00000/00000/00000';
const SILENCIOSO_1 = '10101/10101/00000/10101/10101';
const SILENCIOSO_2 = '01110/10101/11011/10101/01110';
const SILENCIOSO_3 = '11011/00000/11011/00000/11011';
const SO_CANTO = '10000/00000/00000/00000/00000';

const F2 = (
  <>
    𝔽<sub>2</sub>
  </>
);
const A = <i>A</i>;
const x = <b className="font-serif italic">x</b>;
const b = <b className="font-serif italic">b</b>;

const tabelaRows = (sim) => [
  ['3 × 3', 9, 0, sim, 1],
  ['4 × 4', 12, 4, '1/16', 16],
  ['5 × 5', 23, 2, '1/4', 4],
  ['6 × 6', 36, 0, sim, 1],
  ['7 × 7', 49, 0, sim, 1],
];

const Sistema = () => (
  <Formula>
    {A}
    {x} = {b}&nbsp;&nbsp; em {F2}
    <sup>25</sup>
  </Formula>
);

function Pt() {
  return (
    <>
      <H2>De onde vem o jogo</H2>
      <P>
        Quebra-cabeças em que apertar um botão inverte também os vizinhos foram estudados por matemáticos como Klaus
        Sutner no fim dos anos 1980 (com o nome de <em>σ-game</em>) e ficaram populares em brinquedos eletrônicos nos anos
        1990. Parece um jogo de tentativa e erro, mas é, na verdade, um <strong>sistema de equações lineares</strong> — só
        que com uma aritmética em que 1 + 1 = 0.
      </P>
      <Boards>
        <LightGrid padrao={CLIQUE_CENTRO} caption="Um clique no centro" />
        <LightGrid padrao={CLIQUE_CANTO} caption="Um clique no canto" />
      </Boards>

      <H2>Duas observações que simplificam tudo</H2>
      <UL>
        <li>
          <strong>A ordem dos cliques não importa.</strong> Cada casa termina acesa ou apagada conforme o número de vezes
          que foi invertida — e isso não depende da ordem.
        </li>
        <li>
          <strong>Clicar duas vezes na mesma casa é o mesmo que não clicar.</strong> As duas inversões se cancelam.
        </li>
      </UL>
      <P>
        Assim, uma solução não é uma sequência de cliques, e sim um <em>conjunto</em> de casas: para cada casa, só importa
        se ela é clicada (1) ou não (0).
      </P>

      <H2>Álgebra com 0 e 1</H2>
      <P>
        O conjunto <M>{F2} = {'{0, 1}'}</M>, com a soma “módulo 2” (em que <M>1 + 1 = 0</M>), é um{' '}
        <strong>corpo</strong>: nele se pode somar, subtrair, multiplicar e dividir por elementos não nulos, como nos
        números reais. Um tabuleiro 5 × 5 vira um vetor <M>{b}</M> de <M>{F2}<sup>25</sup></M>, com 1 nas casas acesas.
        Cada clique soma ao tabuleiro um vetor fixo — a “cruz” da casa clicada. Se <M>{x}</M> indica quais casas serão
        clicadas e a coluna <M><i>j</i></M> da matriz <M>{A}</M> (de tamanho 25 × 25) é a cruz da casa <M><i>j</i></M>, apagar
        tudo significa resolver
      </P>
      <Sistema />
      <P>
        Como <M>{F2}</M> é um corpo, vale tudo o que se aprende em álgebra linear: <strong>eliminação de Gauss</strong>,
        posto, núcleo. A matriz <M>{A}</M> é ainda <strong>simétrica</strong> — se clicar em <M><i>i</i></M> afeta{' '}
        <M><i>j</i></M>, clicar em <M><i>j</i></M> afeta <M><i>i</i></M> —, o que vai ser útil logo adiante.
      </P>

      <H2>Quando há solução</H2>
      <P>
        No tabuleiro 3 × 3, a matriz é invertível: <strong>toda</strong> configuração tem exatamente uma solução. No 5 ×
        5, porém, a eliminação de Gauss mostra que <M>{A}</M> tem posto 23, e não 25. Pelo teorema do posto e da
        nulidade, o <strong>núcleo</strong> de <M>{A}</M> tem dimensão 2, isto é, <M>2<sup>2</sup> = 4</M> elementos: o
        vetor nulo e três <strong>padrões silenciosos</strong> — conjuntos de cliques que, juntos, não mudam nada.
      </P>
      <Boards>
        <LightGrid padrao={SILENCIOSO_1} caption="Padrão silencioso 1" tone="clique" />
        <LightGrid padrao={SILENCIOSO_2} caption="Padrão silencioso 2" tone="clique" />
        <LightGrid padrao={SILENCIOSO_3} caption="Soma dos dois" tone="clique" />
      </Boards>
      <P>Isso tem duas consequências:</P>
      <UL>
        <li>
          <strong>Só 1/4 das configurações tem solução.</strong> A imagem de <M>{A}</M> tem <M>2<sup>23</sup></M> dos{' '}
          <M>2<sup>25</sup></M> vetores possíveis. E como <M>{A}</M> é simétrica, a imagem é exatamente o conjunto dos
          vetores ortogonais ao núcleo: uma configuração tem solução se, e somente se, tem uma quantidade{' '}
          <em>par</em> de luzes acesas sobre cada padrão silencioso. Uma única luz acesa no canto, por exemplo, cai sobre
          o padrão 1 — que tem 1 no canto — e por isso é impossível de apagar.
        </li>
        <li>
          <strong>Quando há solução, há 4.</strong> Somar um padrão silencioso a uma solução dá outra solução. Entre as
          quatro, vale a pena escolher a que usa menos cliques.
        </li>
      </UL>
      <Boards>
        <LightGrid padrao={SO_CANTO} caption="Uma luz no canto: sem solução" />
      </Boards>
      <Table
        head={['Tabuleiro', 'Posto', 'Dim. do núcleo', 'Fração com solução', 'Soluções']}
        rows={tabelaRows('todas')}
      />
      <P>
        O 4 × 4 é o mais traiçoeiro: só uma em cada 16 configurações tem solução. Mesmo assim, há um resultado geral
        bonito, também de Sutner: começando com <strong>todas as luzes acesas</strong>, sempre é possível apagá-las, em
        qualquer tabuleiro (e até em qualquer grafo). No 5 × 5, isso exige no mínimo 15 cliques.
      </P>

      <Note title="Como o jogo usa essa teoria">
        <p>
          <strong>Novo jogo:</strong> o tabuleiro é criado clicando em casas sorteadas a partir do tabuleiro apagado. Como
          cada clique é reversível, a configuração obtida sempre tem solução.
        </p>
        <p>
          <strong>Mínimo e Mostrar solução:</strong> o jogo resolve <M>{A}{x} = {b}</M> por eliminação de Gauss em{' '}
          <M>{F2}</M>, testa as soluções obtidas somando os padrões silenciosos (4 no 5 × 5, 16 no 4 × 4) e mostra a que
          usa menos cliques. As casas marcadas com um ponto são as que devem ser clicadas — em qualquer ordem.
        </p>
      </Note>
    </>
  );
}

function Es() {
  return (
    <>
      <H2>De dónde viene el juego</H2>
      <P>
        Los rompecabezas en los que presionar un botón también invierte a sus vecinos fueron estudiados por matemáticos
        como Klaus Sutner a fines de los años 1980 (con el nombre de <em>σ-game</em>) y se hicieron populares en juguetes
        electrónicos en los años 1990. Parece un juego de ensayo y error, pero en realidad es un{' '}
        <strong>sistema de ecuaciones lineales</strong> — solo que con una aritmética en la que 1 + 1 = 0.
      </P>
      <Boards>
        <LightGrid padrao={CLIQUE_CENTRO} caption="Un clic en el centro" />
        <LightGrid padrao={CLIQUE_CANTO} caption="Un clic en la esquina" />
      </Boards>

      <H2>Dos observaciones que lo simplifican todo</H2>
      <UL>
        <li>
          <strong>El orden de los clics no importa.</strong> Cada casilla queda encendida o apagada según el número de
          veces que se invirtió — y eso no depende del orden.
        </li>
        <li>
          <strong>Hacer clic dos veces en la misma casilla es lo mismo que no hacerlo.</strong> Las dos inversiones se
          cancelan.
        </li>
      </UL>
      <P>
        Así, una solución no es una sucesión de clics, sino un <em>conjunto</em> de casillas: para cada casilla solo
        importa si se hace clic (1) o no (0).
      </P>

      <H2>Álgebra con 0 y 1</H2>
      <P>
        El conjunto <M>{F2} = {'{0, 1}'}</M>, con la suma “módulo 2” (en la que <M>1 + 1 = 0</M>), es un{' '}
        <strong>cuerpo</strong>: en él se puede sumar, restar, multiplicar y dividir por elementos no nulos, como en los
        números reales. Un tablero 5 × 5 se convierte en un vector <M>{b}</M> de <M>{F2}<sup>25</sup></M>, con 1 en las
        casillas encendidas. Cada clic le suma al tablero un vector fijo — la “cruz” de la casilla. Si <M>{x}</M> indica en
        qué casillas se hará clic y la columna <M><i>j</i></M> de la matriz <M>{A}</M> (de 25 × 25) es la cruz de la casilla{' '}
        <M><i>j</i></M>, apagar todo significa resolver
      </P>
      <Formula>
        {A}
        {x} = {b}&nbsp;&nbsp; en {F2}
        <sup>25</sup>
      </Formula>
      <P>
        Como <M>{F2}</M> es un cuerpo, vale todo lo que se aprende en álgebra lineal: <strong>eliminación de Gauss</strong>,
        rango, núcleo. Además, la matriz <M>{A}</M> es <strong>simétrica</strong> — si hacer clic en <M><i>i</i></M> afecta
        a <M><i>j</i></M>, hacer clic en <M><i>j</i></M> afecta a <M><i>i</i></M> —, lo que será útil enseguida.
      </P>

      <H2>Cuándo hay solución</H2>
      <P>
        En el tablero 3 × 3 la matriz es invertible: <strong>toda</strong> configuración tiene exactamente una solución.
        En el 5 × 5, en cambio, la eliminación de Gauss muestra que <M>{A}</M> tiene rango 23, y no 25. Por el teorema del
        rango, el <strong>núcleo</strong> de <M>{A}</M> tiene dimensión 2, es decir, <M>2<sup>2</sup> = 4</M> elementos: el
        vector nulo y tres <strong>patrones silenciosos</strong> — conjuntos de clics que, juntos, no cambian nada.
      </P>
      <Boards>
        <LightGrid padrao={SILENCIOSO_1} caption="Patrón silencioso 1" tone="clique" />
        <LightGrid padrao={SILENCIOSO_2} caption="Patrón silencioso 2" tone="clique" />
        <LightGrid padrao={SILENCIOSO_3} caption="Suma de los dos" tone="clique" />
      </Boards>
      <P>Esto tiene dos consecuencias:</P>
      <UL>
        <li>
          <strong>Solo 1/4 de las configuraciones tiene solución.</strong> La imagen de <M>{A}</M> tiene{' '}
          <M>2<sup>23</sup></M> de los <M>2<sup>25</sup></M> vectores posibles. Y como <M>{A}</M> es simétrica, la imagen
          es exactamente el conjunto de vectores ortogonales al núcleo: una configuración tiene solución si y solo si tiene
          una cantidad <em>par</em> de luces encendidas sobre cada patrón silencioso. Una sola luz encendida en la esquina,
          por ejemplo, cae sobre el patrón 1 — que tiene un 1 en la esquina — y por eso es imposible de apagar.
        </li>
        <li>
          <strong>Cuando hay solución, hay 4.</strong> Sumarle un patrón silencioso a una solución da otra solución. Entre
          las cuatro, conviene elegir la que usa menos clics.
        </li>
      </UL>
      <Boards>
        <LightGrid padrao={SO_CANTO} caption="Una luz en la esquina: sin solución" />
      </Boards>
      <Table
        head={['Tablero', 'Rango', 'Dim. del núcleo', 'Fracción con solución', 'Soluciones']}
        rows={tabelaRows('todas')}
      />
      <P>
        El 4 × 4 es el más traicionero: solo una de cada 16 configuraciones tiene solución. Aun así, hay un resultado
        general muy bonito, también de Sutner: si se empieza con <strong>todas las luces encendidas</strong>, siempre es
        posible apagarlas, en cualquier tablero (e incluso en cualquier grafo). En el 5 × 5 eso requiere al menos 15 clics.
      </P>

      <Note title="Cómo usa el juego esta teoría">
        <p>
          <strong>Nuevo juego:</strong> el tablero se crea haciendo clic en casillas sorteadas a partir del tablero
          apagado. Como cada clic es reversible, la configuración obtenida siempre tiene solución.
        </p>
        <p>
          <strong>Mínimo y Mostrar solución:</strong> el juego resuelve <M>{A}{x} = {b}</M> por eliminación de Gauss en{' '}
          <M>{F2}</M>, prueba las soluciones que se obtienen sumando los patrones silenciosos (4 en el 5 × 5, 16 en el 4 ×
          4) y muestra la que usa menos clics. Las casillas marcadas con un punto son las que hay que presionar — en
          cualquier orden.
        </p>
      </Note>
    </>
  );
}

function En() {
  return (
    <>
      <H2>Where the game comes from</H2>
      <P>
        Puzzles where pressing a button also flips its neighbours were studied by mathematicians such as Klaus Sutner in
        the late 1980s (under the name <em>σ-game</em>) and became popular as electronic toys in the 1990s. It looks like a
        trial-and-error game, but it is really a <strong>system of linear equations</strong> — just with an arithmetic in
        which 1 + 1 = 0.
      </P>
      <Boards>
        <LightGrid padrao={CLIQUE_CENTRO} caption="One click in the centre" />
        <LightGrid padrao={CLIQUE_CANTO} caption="One click in the corner" />
      </Boards>

      <H2>Two observations that simplify everything</H2>
      <UL>
        <li>
          <strong>The order of clicks does not matter.</strong> Each cell ends up on or off according to how many times it
          was flipped — and that does not depend on the order.
        </li>
        <li>
          <strong>Clicking the same cell twice is the same as not clicking it.</strong> The two flips cancel out.
        </li>
      </UL>
      <P>
        So a solution is not a sequence of clicks but a <em>set</em> of cells: for each cell, all that matters is whether
        it is clicked (1) or not (0).
      </P>

      <H2>Algebra with 0 and 1</H2>
      <P>
        The set <M>{F2} = {'{0, 1}'}</M>, with addition “mod 2” (where <M>1 + 1 = 0</M>), is a <strong>field</strong>: you
        can add, subtract, multiply and divide by non-zero elements, just as with the real numbers. A 5 × 5 board becomes
        a vector <M>{b}</M> in <M>{F2}<sup>25</sup></M>, with 1 on the lit cells. Each click adds a fixed vector to the
        board — the “cross” of the clicked cell. If <M>{x}</M> says which cells will be clicked and column <M><i>j</i></M>{' '}
        of the 25 × 25 matrix <M>{A}</M> is the cross of cell <M><i>j</i></M>, turning everything off means solving
      </P>
      <Formula>
        {A}
        {x} = {b}&nbsp;&nbsp; in {F2}
        <sup>25</sup>
      </Formula>
      <P>
        Since <M>{F2}</M> is a field, everything from linear algebra applies: <strong>Gaussian elimination</strong>, rank,
        kernel. The matrix <M>{A}</M> is also <strong>symmetric</strong> — if clicking <M><i>i</i></M> affects{' '}
        <M><i>j</i></M>, clicking <M><i>j</i></M> affects <M><i>i</i></M> — which will come in handy shortly.
      </P>

      <H2>When there is a solution</H2>
      <P>
        On the 3 × 3 board the matrix is invertible: <strong>every</strong> configuration has exactly one solution. On the
        5 × 5 board, however, Gaussian elimination shows that <M>{A}</M> has rank 23, not 25. By the rank–nullity theorem,
        the <strong>kernel</strong> of <M>{A}</M> has dimension 2, that is, <M>2<sup>2</sup> = 4</M> elements: the zero
        vector and three <strong>quiet patterns</strong> — sets of clicks that, together, change nothing.
      </P>
      <Boards>
        <LightGrid padrao={SILENCIOSO_1} caption="Quiet pattern 1" tone="clique" />
        <LightGrid padrao={SILENCIOSO_2} caption="Quiet pattern 2" tone="clique" />
        <LightGrid padrao={SILENCIOSO_3} caption="Sum of the two" tone="clique" />
      </Boards>
      <P>This has two consequences:</P>
      <UL>
        <li>
          <strong>Only 1/4 of the configurations can be solved.</strong> The image of <M>{A}</M> contains{' '}
          <M>2<sup>23</sup></M> of the <M>2<sup>25</sup></M> possible vectors. And since <M>{A}</M> is symmetric, the image
          is exactly the set of vectors orthogonal to the kernel: a configuration is solvable if and only if it has an{' '}
          <em>even</em> number of lit cells on each quiet pattern. A single lit corner, for example, lies on pattern 1 —
          which has a 1 in the corner — and so it can never be turned off.
        </li>
        <li>
          <strong>When there is a solution, there are 4.</strong> Adding a quiet pattern to a solution gives another
          solution. Among the four, it pays to pick the one with the fewest clicks.
        </li>
      </UL>
      <Boards>
        <LightGrid padrao={SO_CANTO} caption="One lit corner: no solution" />
      </Boards>
      <Table head={['Board', 'Rank', 'Kernel dim.', 'Fraction solvable', 'Solutions']} rows={tabelaRows('all')} />
      <P>
        The 4 × 4 board is the trickiest: only one in 16 configurations can be solved. Even so, there is a lovely general
        result, also due to Sutner: starting with <strong>all lights on</strong>, you can always turn them off, on any
        board (and even on any graph). On the 5 × 5 board this takes at least 15 clicks.
      </P>

      <Note title="How the game uses this theory">
        <p>
          <strong>New game:</strong> the board is created by clicking randomly chosen cells starting from the dark board.
          Since every click can be undone, the resulting configuration is always solvable.
        </p>
        <p>
          <strong>Minimum and Show solution:</strong> the game solves <M>{A}{x} = {b}</M> by Gaussian elimination over{' '}
          <M>{F2}</M>, tries the solutions obtained by adding the quiet patterns (4 on 5 × 5, 16 on 4 × 4) and shows the one
          with the fewest clicks. Cells marked with a dot are the ones to click — in any order.
        </p>
      </Note>
    </>
  );
}

const BODIES = { pt: Pt, es: Es, en: En };

export default function PainelLuzesArticle({ lang }) {
  const Body = BODIES[lang] ?? Pt;
  return <Body />;
}
