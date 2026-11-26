import React from 'react';

import { H2, P, UL, OL, Formula, M, Note, Table } from './parts.jsx';

// Artigo: a combinatória por trás das Torres de Hanói.

const n = <i>n</i>;
const T = <i>T</i>;
const k = <i>k</i>;
const m = <i>m</i>;
const Tn = <>{T}({n})</>;
const Tn1 = <>{T}({n} − 1)</>;

// Solução ótima para 3 discos (conferida por simulação): [disco, origem, destino]
const SOLUCAO_3 = [
  [1, 'A', 'C'],
  [2, 'A', 'B'],
  [1, 'C', 'B'],
  [3, 'A', 'C'],
  [1, 'B', 'A'],
  [2, 'B', 'C'],
  [1, 'A', 'C'],
];

const solucaoRows = () => SOLUCAO_3.map(([d, de, para], i) => [i + 1, d, `${de} → ${para}`]);

const minimoRows = (big) => [
  [1, 1],
  [2, 3],
  [3, 7],
  [4, 15],
  [5, 31],
  [6, 63],
  [10, big[0]],
  [64, big[1]],
];

const Recorrencia = () => (
  <Formula>
    {T}(1) = 1,&nbsp;&nbsp;&nbsp; {Tn} = 2·{Tn1} + 1
  </Formula>
);

const Fechada = () => (
  <Formula>
    {Tn} = 2<sup>{n}</sup> − 1
  </Formula>
);

function Pt() {
  return (
    <>
      <H2>A lenda</H2>
      <P>
        As Torres de Hanói foram criadas em 1883 pelo matemático francês Édouard Lucas, que as vendia como brinquedo sob
        o pseudônimo de “Professor N. Claus de Siam” — um anagrama de <em>Lucas d’Amiens</em>. O jogo vinha com uma
        lenda: num templo, monges movem 64 discos de ouro seguindo as mesmas regras, e quando terminarem o mundo acabará.
        A matemática a seguir mostra que não há motivo para pressa.
      </P>

      <H2>Pensar de forma recursiva</H2>
      <P>
        A chave é olhar para o <strong>maior disco</strong>. Ele só pode ir para a torre C quando estiver sozinho na torre
        A e a torre C estiver vazia — ou seja, com os outros <M>{n} − 1</M> discos empilhados na torre B. Isso sugere uma
        estratégia em três etapas:
      </P>
      <OL>
        <li>
          mover os <M>{n} − 1</M> discos de cima de A para B (usando C como auxiliar);
        </li>
        <li>mover o maior disco de A para C;</li>
        <li>
          mover os <M>{n} − 1</M> discos de B para C (usando A como auxiliar).
        </li>
      </OL>
      <P>
        As etapas 1 e 3 são o mesmo problema com um disco a menos. Chamando de <M>{Tn}</M> o número mínimo de movimentos
        para <M>{n}</M> discos, obtemos a <strong>relação de recorrência</strong>, uma das ferramentas centrais da
        combinatória:
      </P>
      <Recorrencia />

      <H2>Por que não dá para fazer melhor</H2>
      <P>
        A estratégia acima mostra que <M>2·{Tn1} + 1</M> movimentos <em>bastam</em>; falta mostrar que são{' '}
        <em>necessários</em>. Em qualquer solução, o maior disco precisa se mover pelo menos uma vez. Antes do seu
        primeiro movimento, os outros <M>{n} − 1</M> discos precisam sair de cima dele e ficar todos numa mesma torre — o
        que custa pelo menos <M>{Tn1}</M> movimentos. Depois do seu último movimento, eles precisam voltar para cima dele,
        o que custa mais <M>{Tn1}</M>. Somando, nenhuma solução usa menos de <M>2·{Tn1} + 1</M> movimentos: a recorrência
        descreve exatamente o mínimo.
      </P>

      <H2>Resolvendo a recorrência</H2>
      <P>Somando 1 aos dois lados, a recorrência fica mais simples:</P>
      <Formula>
        {Tn} + 1 = 2·({Tn1} + 1)
      </Formula>
      <P>
        A quantidade <M>{Tn} + 1</M> dobra a cada disco, começando em <M>{T}(1) + 1 = 2</M>. Portanto
      </P>
      <Fechada />
      <P>
        Uma prova por indução confirma: se <M>{Tn1} = 2<sup>{n}−1</sup> − 1</M>, então{' '}
        <M>{Tn} = 2·(2<sup>{n}−1</sup> − 1) + 1 = 2<sup>{n}</sup> − 1</M>.
      </P>
      <Table head={['Discos', 'Mínimo de movimentos']} rows={minimoRows(['1.023', '18.446.744.073.709.551.615'])} />
      <P>
        Os monges da lenda, fazendo um movimento por segundo sem parar, levariam cerca de <strong>585 bilhões de anos</strong>{' '}
        — mais de 40 vezes a idade atual do Universo.
      </P>

      <H2>Quantas vezes cada disco se move</H2>
      <P>
        Numerando os discos do menor (1) ao maior (<M>{n}</M>), o disco <M>{k}</M> se move <M>2<sup>{n}−{k}</sup></M>{' '}
        vezes na solução ótima: o maior se move uma vez, o seguinte duas, e assim por diante, sempre dobrando, até o
        menor, que se move <M>2<sup>{n}−1</sup></M> vezes — em todos os movimentos de número ímpar (1º, 3º, 5º, …). A
        soma é uma progressão geométrica:
      </P>
      <Formula>
        1 + 2 + 4 + ⋯ + 2<sup>{n}−1</sup> = 2<sup>{n}</sup> − 1
      </Formula>
      <P>
        Há também uma relação bonita com a base 2: no movimento de número <M>{m}</M>, o disco que se move é 1 mais a
        quantidade de zeros no final da representação binária de <M>{m}</M>. Por exemplo, <M>4 = 100<sub>2</sub></M>{' '}
        termina em dois zeros, então no 4º movimento quem se move é o disco 3. A sequência de discos movidos — 1, 2, 1, 3,
        1, 2, 1, … — é a mesma dos bits que mudam ao contar em binário, e por isso a solução das Torres de Hanói está
        ligada aos <strong>códigos de Gray</strong>.
      </P>

      <H2>Par ou ímpar: por onde começar</H2>
      <P>
        Na prática, a pergunta que mais importa é: para onde vai o primeiro disco? A resposta depende da{' '}
        <strong>paridade</strong> do número de discos:
      </P>
      <UL>
        <li>
          <strong><M>{n}</M> ímpar:</strong> o menor disco vai primeiro para a torre de destino (C);
        </li>
        <li>
          <strong><M>{n}</M> par:</strong> o menor disco vai primeiro para a torre auxiliar (B).
        </li>
      </UL>
      <P>
        O motivo também é recursivo. Para levar <M>{n}</M> discos para C, é preciso começar levando os <M>{n} − 1</M> de
        cima para B. Logo, o primeiro movimento com <M>{n}</M> discos é o primeiro movimento do problema com{' '}
        <M>{n} − 1</M> discos, mas com os papéis de B e C trocados. Com 1 disco, o primeiro (e único) movimento é A → C;
        com 2, A → B; com 3, A → C; com 4, A → B; e assim por diante, alternando a cada disco.
      </P>
      <P>
        Mais ainda: o menor disco <strong>sempre gira no mesmo sentido</strong> — A → C → B → A quando <M>{n}</M> é ímpar
        e A → B → C → A quando <M>{n}</M> é par. Isso dá um algoritmo que dispensa a recursão:
      </P>
      <OL>
        <li>mova o menor disco uma torre adiante, no seu sentido de giro;</li>
        <li>
          faça o único movimento válido que não envolve o menor disco (entre as duas outras torres, o disco de topo menor
          vai para cima do maior, ou para a torre vazia);
        </li>
        <li>repita até terminar.</li>
      </OL>
      <Table head={['Movimento', 'Disco', 'De → para']} rows={solucaoRows()} caption="Solução ótima com 3 discos (7 movimentos)" />

      <H2>Todas as configurações</H2>
      <P>
        Cada disco pode estar em qualquer uma das 3 torres, e dentro de uma torre a ordem é forçada (maior embaixo). Pelo{' '}
        <strong>princípio multiplicativo</strong>, há <M>3<sup>{n}</sup></M> configurações válidas — 27 para 3 discos.
        Ligando por uma linha as configurações que diferem por um único movimento, obtém-se um grafo com a forma do{' '}
        <strong>triângulo de Sierpiński</strong>; a solução ótima é o caminho ao longo de um dos lados do triângulo, com{' '}
        <M>2<sup>{n}</sup> − 1</M> arestas.
      </P>

      <Note title="Como o jogo usa essa teoria">
        <p>
          O contador mostra o mínimo <M>2<sup>{n}</sup> − 1</M> para o número de discos escolhido (de 7 com 3 discos a 63
          com 6), e a mensagem “Perfeito!” aparece quando você termina exatamente nesse número de movimentos. Dica: antes
          de começar, veja se o número de discos é par ou ímpar.
        </p>
      </Note>
    </>
  );
}

function Es() {
  return (
    <>
      <H2>La leyenda</H2>
      <P>
        Las Torres de Hanói fueron creadas en 1883 por el matemático francés Édouard Lucas, que las vendía como juguete
        bajo el seudónimo de “Profesor N. Claus de Siam” — un anagrama de <em>Lucas d’Amiens</em>. El juego venía con una
        leyenda: en un templo, unos monjes mueven 64 discos de oro siguiendo las mismas reglas, y cuando terminen el mundo
        se acabará. La matemática que sigue muestra que no hay motivo para apurarse.
      </P>

      <H2>Pensar de forma recursiva</H2>
      <P>
        La clave es fijarse en el <strong>disco más grande</strong>. Solo puede ir a la torre C cuando esté solo en la
        torre A y la torre C esté vacía — es decir, con los otros <M>{n} − 1</M> discos apilados en la torre B. Eso sugiere
        una estrategia en tres etapas:
      </P>
      <OL>
        <li>
          mover los <M>{n} − 1</M> discos de arriba de A a B (usando C como auxiliar);
        </li>
        <li>mover el disco más grande de A a C;</li>
        <li>
          mover los <M>{n} − 1</M> discos de B a C (usando A como auxiliar).
        </li>
      </OL>
      <P>
        Las etapas 1 y 3 son el mismo problema con un disco menos. Si llamamos <M>{Tn}</M> al número mínimo de movimientos
        para <M>{n}</M> discos, obtenemos la <strong>relación de recurrencia</strong>, una de las herramientas centrales de
        la combinatoria:
      </P>
      <Recorrencia />

      <H2>Por qué no se puede hacer mejor</H2>
      <P>
        La estrategia anterior muestra que <M>2·{Tn1} + 1</M> movimientos <em>bastan</em>; falta mostrar que son{' '}
        <em>necesarios</em>. En cualquier solución, el disco más grande debe moverse al menos una vez. Antes de su primer
        movimiento, los otros <M>{n} − 1</M> discos deben salir de encima y quedar todos en una misma torre — lo que cuesta
        al menos <M>{Tn1}</M> movimientos. Después de su último movimiento, deben volver encima de él, lo que cuesta otros{' '}
        <M>{Tn1}</M>. Sumando, ninguna solución usa menos de <M>2·{Tn1} + 1</M> movimientos: la recurrencia describe
        exactamente el mínimo.
      </P>

      <H2>Resolviendo la recurrencia</H2>
      <P>Sumando 1 a ambos lados, la recurrencia se simplifica:</P>
      <Formula>
        {Tn} + 1 = 2·({Tn1} + 1)
      </Formula>
      <P>
        La cantidad <M>{Tn} + 1</M> se duplica con cada disco, empezando en <M>{T}(1) + 1 = 2</M>. Por lo tanto
      </P>
      <Fechada />
      <P>
        Una prueba por inducción lo confirma: si <M>{Tn1} = 2<sup>{n}−1</sup> − 1</M>, entonces{' '}
        <M>{Tn} = 2·(2<sup>{n}−1</sup> − 1) + 1 = 2<sup>{n}</sup> − 1</M>.
      </P>
      <Table
        head={['Discos', 'Mínimo de movimientos']}
        rows={minimoRows(['1023', '18 446 744 073 709 551 615'])}
      />
      <P>
        Los monjes de la leyenda, haciendo un movimiento por segundo sin parar, tardarían unos{' '}
        <strong>585 mil millones de años</strong> — más de 40 veces la edad actual del Universo.
      </P>

      <H2>Cuántas veces se mueve cada disco</H2>
      <P>
        Numerando los discos del más pequeño (1) al más grande (<M>{n}</M>), el disco <M>{k}</M> se mueve{' '}
        <M>2<sup>{n}−{k}</sup></M> veces en la solución óptima: el más grande se mueve una vez, el siguiente dos, y así
        sucesivamente, siempre duplicando, hasta el más pequeño, que se mueve <M>2<sup>{n}−1</sup></M> veces — en todos
        los movimientos de número impar (1.º, 3.º, 5.º, …). La suma es una progresión geométrica:
      </P>
      <Formula>
        1 + 2 + 4 + ⋯ + 2<sup>{n}−1</sup> = 2<sup>{n}</sup> − 1
      </Formula>
      <P>
        También hay una relación muy bonita con la base 2: en el movimiento número <M>{m}</M>, el disco que se mueve es 1
        más la cantidad de ceros al final de la representación binaria de <M>{m}</M>. Por ejemplo,{' '}
        <M>4 = 100<sub>2</sub></M> termina en dos ceros, así que en el 4.º movimiento se mueve el disco 3. La sucesión de
        discos movidos — 1, 2, 1, 3, 1, 2, 1, … — coincide con la de los bits que cambian al contar en binario, y por eso
        la solución de las Torres de Hanói está ligada a los <strong>códigos de Gray</strong>.
      </P>

      <H2>Par o impar: por dónde empezar</H2>
      <P>
        En la práctica, la pregunta que más importa es: ¿adónde va el primer disco? La respuesta depende de la{' '}
        <strong>paridad</strong> del número de discos:
      </P>
      <UL>
        <li>
          <strong><M>{n}</M> impar:</strong> el disco más pequeño va primero a la torre de destino (C);
        </li>
        <li>
          <strong><M>{n}</M> par:</strong> el disco más pequeño va primero a la torre auxiliar (B).
        </li>
      </UL>
      <P>
        El motivo también es recursivo. Para llevar <M>{n}</M> discos a C, hay que empezar llevando los <M>{n} − 1</M> de
        arriba a B. Así, el primer movimiento con <M>{n}</M> discos es el primer movimiento del problema con{' '}
        <M>{n} − 1</M> discos, pero con los papeles de B y C intercambiados. Con 1 disco, el primer (y único) movimiento es
        A → C; con 2, A → B; con 3, A → C; con 4, A → B; y así sucesivamente, alternando con cada disco.
      </P>
      <P>
        Más aún: el disco más pequeño <strong>siempre gira en el mismo sentido</strong> — A → C → B → A cuando{' '}
        <M>{n}</M> es impar y A → B → C → A cuando <M>{n}</M> es par. Eso da un algoritmo que no necesita recursión:
      </P>
      <OL>
        <li>mueve el disco más pequeño una torre hacia adelante, en su sentido de giro;</li>
        <li>
          haz el único movimiento válido que no involucra al disco más pequeño (entre las otras dos torres, el disco
          superior más pequeño va encima del más grande, o a la torre vacía);
        </li>
        <li>repite hasta terminar.</li>
      </OL>
      <Table
        head={['Movimiento', 'Disco', 'De → a']}
        rows={solucaoRows()}
        caption="Solución óptima con 3 discos (7 movimientos)"
      />

      <H2>Todas las configuraciones</H2>
      <P>
        Cada disco puede estar en cualquiera de las 3 torres, y dentro de una torre el orden es forzado (el más grande
        abajo). Por el <strong>principio multiplicativo</strong>, hay <M>3<sup>{n}</sup></M> configuraciones válidas — 27
        para 3 discos. Si unimos con una línea las configuraciones que difieren en un solo movimiento, se obtiene un grafo
        con la forma del <strong>triángulo de Sierpiński</strong>; la solución óptima es el camino a lo largo de uno de los
        lados del triángulo, con <M>2<sup>{n}</sup> − 1</M> aristas.
      </P>

      <Note title="Cómo usa el juego esta teoría">
        <p>
          El contador muestra el mínimo <M>2<sup>{n}</sup> − 1</M> para el número de discos elegido (de 7 con 3 discos a
          63 con 6), y el mensaje “¡Perfecto!” aparece cuando terminas exactamente en ese número de movimientos. Consejo:
          antes de empezar, fíjate si el número de discos es par o impar.
        </p>
      </Note>
    </>
  );
}

function En() {
  return (
    <>
      <H2>The legend</H2>
      <P>
        The Tower of Hanoi was invented in 1883 by the French mathematician Édouard Lucas, who sold it as a toy under the
        pseudonym “Professor N. Claus de Siam” — an anagram of <em>Lucas d’Amiens</em>. The game came with a legend: in a
        temple, monks move 64 golden disks following the same rules, and when they finish, the world will end. The math
        below shows there is no reason to hurry.
      </P>

      <H2>Thinking recursively</H2>
      <P>
        The key is to look at the <strong>largest disk</strong>. It can only go to tower C when it is alone on tower A and
        tower C is empty — that is, with the other <M>{n} − 1</M> disks stacked on tower B. This suggests a three-step
        strategy:
      </P>
      <OL>
        <li>
          move the top <M>{n} − 1</M> disks from A to B (using C as a helper);
        </li>
        <li>move the largest disk from A to C;</li>
        <li>
          move the <M>{n} − 1</M> disks from B to C (using A as a helper).
        </li>
      </OL>
      <P>
        Steps 1 and 3 are the same problem with one disk fewer. Writing <M>{Tn}</M> for the minimum number of moves with{' '}
        <M>{n}</M> disks, we get a <strong>recurrence relation</strong>, one of the central tools of combinatorics:
      </P>
      <Recorrencia />

      <H2>Why you cannot do better</H2>
      <P>
        The strategy above shows that <M>2·{Tn1} + 1</M> moves are <em>enough</em>; we still need to show they are{' '}
        <em>necessary</em>. In any solution the largest disk must move at least once. Before its first move, the other{' '}
        <M>{n} − 1</M> disks must get off it and all sit on a single tower — which takes at least <M>{Tn1}</M> moves.
        After its last move, they must come back on top of it, which takes another <M>{Tn1}</M>. Adding up, no solution
        uses fewer than <M>2·{Tn1} + 1</M> moves: the recurrence describes exactly the minimum.
      </P>

      <H2>Solving the recurrence</H2>
      <P>Adding 1 to both sides makes the recurrence simpler:</P>
      <Formula>
        {Tn} + 1 = 2·({Tn1} + 1)
      </Formula>
      <P>
        The quantity <M>{Tn} + 1</M> doubles with each disk, starting at <M>{T}(1) + 1 = 2</M>. Therefore
      </P>
      <Fechada />
      <P>
        A proof by induction confirms it: if <M>{Tn1} = 2<sup>{n}−1</sup> − 1</M>, then{' '}
        <M>{Tn} = 2·(2<sup>{n}−1</sup> − 1) + 1 = 2<sup>{n}</sup> − 1</M>.
      </P>
      <Table head={['Disks', 'Minimum moves']} rows={minimoRows(['1,023', '18,446,744,073,709,551,615'])} />
      <P>
        The monks of the legend, making one move per second without stopping, would need about{' '}
        <strong>585 billion years</strong> — more than 40 times the current age of the Universe.
      </P>

      <H2>How many times each disk moves</H2>
      <P>
        Numbering the disks from smallest (1) to largest (<M>{n}</M>), disk <M>{k}</M> moves <M>2<sup>{n}−{k}</sup></M>{' '}
        times in the optimal solution: the largest moves once, the next one twice, and so on, always doubling, up to the
        smallest, which moves <M>2<sup>{n}−1</sup></M> times — on every odd-numbered move (1st, 3rd, 5th, …). The sum is a
        geometric series:
      </P>
      <Formula>
        1 + 2 + 4 + ⋯ + 2<sup>{n}−1</sup> = 2<sup>{n}</sup> − 1
      </Formula>
      <P>
        There is also a lovely link with base 2: on move number <M>{m}</M>, the disk that moves is 1 plus the number of
        trailing zeros in the binary representation of <M>{m}</M>. For example, <M>4 = 100<sub>2</sub></M> ends in two
        zeros, so on the 4th move disk 3 moves. The sequence of disks moved — 1, 2, 1, 3, 1, 2, 1, … — is the same as the
        sequence of bits that change when counting in binary, which is why the Tower of Hanoi solution is tied to{' '}
        <strong>Gray codes</strong>.
      </P>

      <H2>Even or odd: where to start</H2>
      <P>
        In practice, the question that matters most is: where does the first disk go? The answer depends on the{' '}
        <strong>parity</strong> of the number of disks:
      </P>
      <UL>
        <li>
          <strong><M>{n}</M> odd:</strong> the smallest disk goes first to the target tower (C);
        </li>
        <li>
          <strong><M>{n}</M> even:</strong> the smallest disk goes first to the helper tower (B).
        </li>
      </UL>
      <P>
        The reason is recursive too. To bring <M>{n}</M> disks to C, you must start by bringing the top <M>{n} − 1</M> to
        B. So the first move with <M>{n}</M> disks is the first move of the <M>{n} − 1</M> problem, but with the roles of B
        and C swapped. With 1 disk the first (and only) move is A → C; with 2, A → B; with 3, A → C; with 4, A → B; and so
        on, alternating with each disk.
      </P>
      <P>
        Even better: the smallest disk <strong>always cycles in the same direction</strong> — A → C → B → A when{' '}
        <M>{n}</M> is odd and A → B → C → A when <M>{n}</M> is even. This gives an algorithm with no recursion at all:
      </P>
      <OL>
        <li>move the smallest disk one tower forward, in its cycling direction;</li>
        <li>
          make the only legal move that does not involve the smallest disk (between the other two towers, the smaller top
          disk goes onto the larger one, or onto the empty tower);
        </li>
        <li>repeat until done.</li>
      </OL>
      <Table head={['Move', 'Disk', 'From → to']} rows={solucaoRows()} caption="Optimal solution with 3 disks (7 moves)" />

      <H2>All the configurations</H2>
      <P>
        Each disk can be on any of the 3 towers, and within a tower the order is forced (largest at the bottom). By the{' '}
        <strong>multiplication principle</strong>, there are <M>3<sup>{n}</sup></M> legal configurations — 27 for 3 disks.
        Connecting with a line the configurations that differ by a single move gives a graph shaped like the{' '}
        <strong>Sierpiński triangle</strong>; the optimal solution is the path along one side of the triangle, with{' '}
        <M>2<sup>{n}</sup> − 1</M> edges.
      </P>

      <Note title="How the game uses this theory">
        <p>
          The counter shows the minimum <M>2<sup>{n}</sup> − 1</M> for the chosen number of disks (from 7 with 3 disks to
          63 with 6), and the “Perfect!” message appears when you finish in exactly that number of moves. Tip: before you
          start, check whether the number of disks is even or odd.
        </p>
      </Note>
    </>
  );
}

const BODIES = { pt: Pt, es: Es, en: En };

export default function HanoiArticle({ lang }) {
  const Body = BODIES[lang] ?? Pt;
  return <Body />;
}
