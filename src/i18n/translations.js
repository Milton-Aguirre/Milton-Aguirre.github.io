// Todos os textos do site em português (pt), espanhol (es) e inglês (en).
// Para corrigir uma tradução, edite só este arquivo.
// Nomes próprios (eventos, instituições) e títulos de trabalhos acadêmicos
// ficam no idioma original e não estão aqui.

const translations = {
  pt: {
    meta: {
      title: 'Milton Aguirre · Matemática e Ciência de Dados',
      description:
        'Site pessoal de Milton Aguirre, matemático e cientista de dados: biografia, eventos da ICMAM, trabalhos acadêmicos, disciplinas e jogos matemáticos.',
    },
    layout: {
      subtitle: 'Matemático · Cientista de Dados',
      skip: 'Pular para o conteúdo',
      mainNav: 'Navegação principal',
      language: 'Idioma',
      nav: { home: 'Home', disciplinas: 'Disciplinas', jogos: 'Jogos' },
      rights: 'Todos os direitos reservados.',
      social: {
        linkedin: 'LinkedIn de Milton Aguirre',
        github: 'GitHub de Milton Aguirre',
        facebook: 'Facebook da ICMAM',
        instagram: 'Instagram da ICMAM',
        youtube: 'YouTube da ICMAM',
      },
    },
    bio: {
      label: 'Biografia',
      photoAlt: 'Foto de Milton Aguirre',
      p1:
        'é formado em Matemática e possui mestrado na mesma área, além de atuar como cientista de dados. ' +
        'Com um sólido background técnico, também possui o título de Técnico em Instalações Elétricas. ' +
        'Além disso, é especializado em Ensino de Educação a Distância, combinando conhecimentos acadêmicos ' +
        'com experiência prática em tecnologia e educação. Seu trabalho é marcado pela aplicação de métodos ' +
        'matemáticos avançados para resolver problemas complexos e pela paixão por compartilhar conhecimento ' +
        'em sala de aula e através de plataformas digitais.',
      p2:
        'Em 2020, juntou-se a seus colegas de graduação da Universidad del Valle para criar a International ' +
        'Community of Mathematicians from Latin America (ICMAM), que mais tarde se tornou um evento bienal de ' +
        'grande impacto na comunidade matemática da América Latina e do Caribe.',
    },
    events: {
      title: 'Eventos',
      upcoming: 'Próximos',
      upcomingIntro: 'Eventos matemáticos que serão realizados em breve.',
      past: 'Histórico',
      pastIntro: 'Eventos realizados nos últimos anos.',
    },
    links: { title: 'Links' },
    titles: {
      title: 'Títulos',
      logoAlt: 'Logo',
      items: {
        bachelor: 'TCC Bacharelado',
        master: 'Dissertação de Mestrado',
        specialization: 'TCC Especialização',
        mba: 'MBA em andamento',
      },
      mbaDescription: 'Trabalho em desenvolvimento.',
    },
    contact: {
      title: 'Contato',
      intro: 'O seu endereço de e-mail não será publicado. Campos obrigatórios são marcados com *',
      name: 'Nome',
      namePlaceholder: 'Seu nome',
      email: 'Email',
      emailPlaceholder: 'exemplo@email.com',
      message: 'Mensagem',
      messagePlaceholder: 'Entre em contato para discutir assuntos acadêmicos',
      send: 'Enviar',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Erro ao enviar. Tente novamente.',
    },
    visitors: {
      title: 'Visitantes',
      thanks: 'Agradeço com grande carinho as visitas a este site de pessoas de diferentes partes do mundo.',
      counterAlt: 'Contador de visitantes por país',
    },
    pdf: {
      view: 'Visualizar PDF',
      soon: 'Em breve',
      dialog: 'Visualização de PDF',
      frame: 'Arquivo PDF',
      close: 'Fechar',
      newTab: 'Abrir em nova aba',
    },
    disciplinas: {
      title: 'Disciplinas',
      intro: 'Materiais de estudo com exercícios resolvidos das disciplinas de matemática e ciência de dados.',
      card: 'PDF com exercícios resolvidos.',
      courses: {
        dynamical: 'Sistemas Dinâmicos',
        galois: 'Teoria de Galois',
        forms: 'Formas Diferenciais',
        riemann: 'Geometria Riemanniana',
        numerical: 'Análise Numérica',
        graphs: 'Teoria dos Grafos',
        datascience: 'Data Science e Analytics',
      },
    },
    games: {
      title: 'Jogos',
      intro: 'Quebra-cabeças clássicos com um toque de matemática.',
      rule: 'Regra:',
      goal: 'Objetivo:',
      reset: 'Reiniciar',
      win: 'Parabéns! Você venceu!',
      newGame: 'Novo jogo',
      theory: 'A matemática por trás do jogo',
      back: 'Voltar aos jogos',
      play: 'Ir para os jogos',
      loading: 'Carregando…',
      puzzle: {
        title: 'Racha Cuca',
        rule: 'deslocar uma peça vertical ou horizontalmente para o espaço em branco.',
        goal: 'organizar os números em ordem crescente, começando no canto superior esquerdo.',
        board: 'Tabuleiro do Racha Cuca',
        solve: 'Resolver',
        newGame: 'Novo jogo',
        article: {
          title: 'Permutações e o Racha Cuca',
          lead: 'Por que metade das posições do Racha Cuca não tem solução — e como a teoria das permutações prova isso.',
        },
      },
      hanoi: {
        title: 'Torres de Hanói',
        rule: 'um disco maior nunca pode ficar sobre um menor.',
        goal: 'mover todos os discos da torre A para a torre C, usando a torre B como auxiliar.',
        disks: 'Discos:',
        moves: 'Movimentos:',
        minimum: 'mínimo:',
        perfect: 'Perfeito! Você venceu com o mínimo de movimentos!',
        tower: (name, count, selected) =>
          `Torre ${name}, ${count} disco(s)${selected ? ', selecionada' : ''}`,
        article: {
          title: 'A combinatória das Torres de Hanói',
          lead: 'De onde vem a fórmula 2ⁿ − 1, por que ela é o mínimo e como a paridade do número de discos decide o primeiro movimento.',
        },
      },
      nim: {
        title: 'Nim',
        rule: 'na sua vez, retire quantos palitos quiser (pelo menos um) de uma única fileira.',
        goal: 'ser quem retira o último palito. Você joga contra o computador.',
        first: 'Quem começa:',
        you: 'Você',
        computer: 'Computador',
        showBinary: 'Mostrar em binário',
        nimSum: 'nim-soma',
        yourTurn: 'Sua vez: clique num palito para retirá-lo junto com os que estão à direita dele.',
        thinking: 'O computador está pensando…',
        computerMoved: (n, row) => `O computador retirou ${n} palito(s) da fileira ${row}. Sua vez!`,
        youWin: 'Parabéns! Você pegou o último palito e venceu!',
        computerWins: 'O computador pegou o último palito. Tente de novo!',
        take: (n, row) => `Retirar ${n} palito(s) da fileira ${row}`,
        article: {
          title: 'Nim, o XOR e o teorema de Bouton',
          lead: 'Como a soma binária sem “vai um” revela, em qualquer posição, quem vai ganhar — e qual é a jogada certa.',
        },
      },
      lights: {
        title: 'Painel de Luzes',
        rule: 'clicar numa casa inverte o estado dela e das vizinhas de cima, de baixo, da esquerda e da direita.',
        goal: 'apagar todas as luzes.',
        size: 'Tamanho:',
        clicks: 'Cliques:',
        minimum: 'mínimo:',
        perfect: 'Perfeito! Você apagou tudo com o mínimo de cliques!',
        showSolution: 'Mostrar solução',
        hideSolution: 'Ocultar solução',
        cell: (r, c, on, marked) =>
          `Linha ${r}, coluna ${c}, ${on ? 'acesa' : 'apagada'}${marked ? ', clique aqui' : ''}`,
        article: {
          title: 'Álgebra linear no Painel de Luzes',
          lead: 'Um sistema de equações em que 1 + 1 = 0 decide quais tabuleiros têm solução e encontra a mais curta.',
        },
      },
    },
  },

  es: {
    meta: {
      title: 'Milton Aguirre · Matemáticas y Ciencia de Datos',
      description:
        'Sitio personal de Milton Aguirre, matemático y científico de datos: biografía, eventos de ICMAM, trabajos académicos, asignaturas y juegos matemáticos.',
    },
    layout: {
      subtitle: 'Matemático · Científico de Datos',
      skip: 'Saltar al contenido',
      mainNav: 'Navegación principal',
      language: 'Idioma',
      nav: { home: 'Inicio', disciplinas: 'Asignaturas', jogos: 'Juegos' },
      rights: 'Todos los derechos reservados.',
      social: {
        linkedin: 'LinkedIn de Milton Aguirre',
        github: 'GitHub de Milton Aguirre',
        facebook: 'Facebook de ICMAM',
        instagram: 'Instagram de ICMAM',
        youtube: 'YouTube de ICMAM',
      },
    },
    bio: {
      label: 'Biografía',
      photoAlt: 'Foto de Milton Aguirre',
      p1:
        'es licenciado en Matemáticas y tiene una maestría en la misma área, además de trabajar como científico ' +
        'de datos. Con una sólida formación técnica, también tiene el título de Técnico en Instalaciones Eléctricas. ' +
        'Además, es especialista en Enseñanza de Educación a Distancia, combinando conocimientos académicos con ' +
        'experiencia práctica en tecnología y educación. Su trabajo se caracteriza por la aplicación de métodos ' +
        'matemáticos avanzados para resolver problemas complejos y por la pasión de compartir conocimiento en el ' +
        'aula y a través de plataformas digitales.',
      p2:
        'En 2020, se unió a sus compañeros de pregrado de la Universidad del Valle para crear la International ' +
        'Community of Mathematicians from Latin America (ICMAM), que más tarde se convirtió en un evento bienal ' +
        'de gran impacto en la comunidad matemática de América Latina y el Caribe.',
    },
    events: {
      title: 'Eventos',
      upcoming: 'Próximos',
      upcomingIntro: 'Eventos matemáticos que se realizarán próximamente.',
      past: 'Historial',
      pastIntro: 'Eventos realizados en los últimos años.',
    },
    links: { title: 'Enlaces' },
    titles: {
      title: 'Títulos',
      logoAlt: 'Logo',
      items: {
        bachelor: 'Trabajo de grado',
        master: 'Tesis de maestría',
        specialization: 'Trabajo de especialización',
        mba: 'MBA en curso',
      },
      mbaDescription: 'Trabajo en desarrollo.',
    },
    contact: {
      title: 'Contacto',
      intro: 'Tu correo electrónico no será publicado. Los campos obligatorios están marcados con *',
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Correo electrónico',
      emailPlaceholder: 'ejemplo@correo.com',
      message: 'Mensaje',
      messagePlaceholder: 'Ponte en contacto para conversar sobre temas académicos',
      send: 'Enviar',
      sending: 'Enviando...',
      success: '¡Mensaje enviado con éxito!',
      error: 'Error al enviar. Inténtalo de nuevo.',
    },
    visitors: {
      title: 'Visitantes',
      thanks: 'Agradezco con mucho cariño las visitas a este sitio de personas de distintas partes del mundo.',
      counterAlt: 'Contador de visitantes por país',
    },
    pdf: {
      view: 'Ver PDF',
      soon: 'Próximamente',
      dialog: 'Vista de PDF',
      frame: 'Archivo PDF',
      close: 'Cerrar',
      newTab: 'Abrir en una pestaña nueva',
    },
    disciplinas: {
      title: 'Asignaturas',
      intro: 'Material de estudio con ejercicios resueltos de asignaturas de matemáticas y ciencia de datos.',
      card: 'PDF con ejercicios resueltos.',
      courses: {
        dynamical: 'Sistemas Dinámicos',
        galois: 'Teoría de Galois',
        forms: 'Formas Diferenciales',
        riemann: 'Geometría Riemanniana',
        numerical: 'Análisis Numérico',
        graphs: 'Teoría de Grafos',
        datascience: 'Data Science y Analytics',
      },
    },
    games: {
      title: 'Juegos',
      intro: 'Rompecabezas clásicos con un toque de matemáticas.',
      rule: 'Regla:',
      goal: 'Objetivo:',
      reset: 'Reiniciar',
      win: '¡Felicitaciones! ¡Ganaste!',
      newGame: 'Nuevo juego',
      theory: 'Las matemáticas detrás del juego',
      back: 'Volver a los juegos',
      play: 'Ir a los juegos',
      loading: 'Cargando…',
      puzzle: {
        title: 'Rompecabezas deslizante',
        rule: 'deslizar una ficha en vertical u horizontal hacia el espacio vacío.',
        goal: 'ordenar los números de menor a mayor, empezando por la esquina superior izquierda.',
        board: 'Tablero del rompecabezas deslizante',
        solve: 'Resolver',
        newGame: 'Nuevo juego',
        article: {
          title: 'Permutaciones y el rompecabezas deslizante',
          lead: 'Por qué la mitad de las posiciones del rompecabezas no tiene solución — y cómo lo prueba la teoría de permutaciones.',
        },
      },
      hanoi: {
        title: 'Torres de Hanói',
        rule: 'un disco más grande nunca puede quedar sobre uno más pequeño.',
        goal: 'mover todos los discos de la torre A a la torre C, usando la torre B como auxiliar.',
        disks: 'Discos:',
        moves: 'Movimientos:',
        minimum: 'mínimo:',
        perfect: '¡Perfecto! ¡Ganaste con el mínimo de movimientos!',
        tower: (name, count, selected) =>
          `Torre ${name}, ${count} disco(s)${selected ? ', seleccionada' : ''}`,
        article: {
          title: 'La combinatoria de las Torres de Hanói',
          lead: 'De dónde viene la fórmula 2ⁿ − 1, por qué es el mínimo y cómo la paridad del número de discos decide el primer movimiento.',
        },
      },
      nim: {
        title: 'Nim',
        rule: 'en tu turno, quita cuantos palitos quieras (al menos uno) de una sola fila.',
        goal: 'ser quien quita el último palito. Juegas contra el computador.',
        first: 'Empieza:',
        you: 'Tú',
        computer: 'Computador',
        showBinary: 'Mostrar en binario',
        nimSum: 'nim-suma',
        yourTurn: 'Tu turno: haz clic en un palito para quitarlo junto con los que están a su derecha.',
        thinking: 'El computador está pensando…',
        computerMoved: (n, row) => `El computador quitó ${n} palito(s) de la fila ${row}. ¡Tu turno!`,
        youWin: '¡Felicitaciones! ¡Tomaste el último palito y ganaste!',
        computerWins: 'El computador tomó el último palito. ¡Inténtalo de nuevo!',
        take: (n, row) => `Quitar ${n} palito(s) de la fila ${row}`,
        article: {
          title: 'El Nim, el XOR y el teorema de Bouton',
          lead: 'Cómo la suma binaria sin “llevar” revela, en cualquier posición, quién va a ganar — y cuál es la jugada correcta.',
        },
      },
      lights: {
        title: 'Panel de luces',
        rule: 'hacer clic en una casilla invierte su estado y el de sus vecinas de arriba, abajo, izquierda y derecha.',
        goal: 'apagar todas las luces.',
        size: 'Tamaño:',
        clicks: 'Clics:',
        minimum: 'mínimo:',
        perfect: '¡Perfecto! ¡Apagaste todo con el mínimo de clics!',
        showSolution: 'Mostrar solución',
        hideSolution: 'Ocultar solución',
        cell: (r, c, on, marked) =>
          `Fila ${r}, columna ${c}, ${on ? 'encendida' : 'apagada'}${marked ? ', haz clic aquí' : ''}`,
        article: {
          title: 'Álgebra lineal en el panel de luces',
          lead: 'Un sistema de ecuaciones en el que 1 + 1 = 0 decide qué tableros tienen solución y encuentra la más corta.',
        },
      },
    },
  },

  en: {
    meta: {
      title: 'Milton Aguirre · Mathematics and Data Science',
      description:
        "Milton Aguirre's personal website, mathematician and data scientist: biography, ICMAM events, academic work, courses and math games.",
    },
    layout: {
      subtitle: 'Mathematician · Data Scientist',
      skip: 'Skip to content',
      mainNav: 'Main navigation',
      language: 'Language',
      nav: { home: 'Home', disciplinas: 'Courses', jogos: 'Games' },
      rights: 'All rights reserved.',
      social: {
        linkedin: "Milton Aguirre's LinkedIn",
        github: "Milton Aguirre's GitHub",
        facebook: 'ICMAM on Facebook',
        instagram: 'ICMAM on Instagram',
        youtube: 'ICMAM on YouTube',
      },
    },
    bio: {
      label: 'Biography',
      photoAlt: 'Photo of Milton Aguirre',
      p1:
        "holds a bachelor's and a master's degree in Mathematics and works as a data scientist. With a solid " +
        'technical background, he is also a certified Electrical Installation Technician. In addition, he holds a ' +
        'specialization in Distance Education, combining academic knowledge with hands-on experience in technology ' +
        'and education. His work is marked by applying advanced mathematical methods to solve complex problems ' +
        'and by a passion for sharing knowledge in the classroom and through digital platforms.',
      p2:
        'In 2020, he joined his undergraduate classmates from Universidad del Valle to create the International ' +
        'Community of Mathematicians from Latin America (ICMAM), which later became a high-impact biennial event ' +
        'for the mathematical community in Latin America and the Caribbean.',
    },
    events: {
      title: 'Events',
      upcoming: 'Upcoming',
      upcomingIntro: 'Mathematics events coming up soon.',
      past: 'Past events',
      pastIntro: 'Events held in recent years.',
    },
    links: { title: 'Links' },
    titles: {
      title: 'Degrees',
      logoAlt: 'Logo of',
      items: {
        bachelor: "Bachelor's thesis",
        master: "Master's thesis",
        specialization: 'Specialization thesis',
        mba: 'MBA in progress',
      },
      mbaDescription: 'Work in progress.',
    },
    contact: {
      title: 'Contact',
      intro: 'Your email address will not be published. Required fields are marked with *',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'example@email.com',
      message: 'Message',
      messagePlaceholder: 'Get in touch to discuss academic topics',
      send: 'Send',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Could not send the message. Please try again.',
    },
    visitors: {
      title: 'Visitors',
      thanks: 'Warm thanks to everyone around the world who has visited this site.',
      counterAlt: 'Visitor counter by country',
    },
    pdf: {
      view: 'View PDF',
      soon: 'Coming soon',
      dialog: 'PDF viewer',
      frame: 'PDF file',
      close: 'Close',
      newTab: 'Open in a new tab',
    },
    disciplinas: {
      title: 'Courses',
      intro: 'Study materials with solved exercises for mathematics and data science courses.',
      card: 'PDF with solved exercises.',
      courses: {
        dynamical: 'Dynamical Systems',
        galois: 'Galois Theory',
        forms: 'Differential Forms',
        riemann: 'Riemannian Geometry',
        numerical: 'Numerical Analysis',
        graphs: 'Graph Theory',
        datascience: 'Data Science and Analytics',
      },
    },
    games: {
      title: 'Games',
      intro: 'Classic puzzles with a mathematical twist.',
      rule: 'Rule:',
      goal: 'Goal:',
      reset: 'Restart',
      win: 'Congratulations! You won!',
      newGame: 'New game',
      theory: 'The math behind the game',
      back: 'Back to games',
      play: 'Go to the games',
      loading: 'Loading…',
      puzzle: {
        title: 'Sliding Puzzle',
        rule: 'slide a tile vertically or horizontally into the empty space.',
        goal: 'arrange the numbers in ascending order, starting from the top-left corner.',
        board: 'Sliding puzzle board',
        solve: 'Solve',
        newGame: 'New game',
        article: {
          title: 'Permutations and the Sliding Puzzle',
          lead: 'Why half of all sliding puzzle positions have no solution — and how the theory of permutations proves it.',
        },
      },
      hanoi: {
        title: 'Tower of Hanoi',
        rule: 'a larger disk can never be placed on top of a smaller one.',
        goal: 'move all disks from tower A to tower C, using tower B as a helper.',
        disks: 'Disks:',
        moves: 'Moves:',
        minimum: 'minimum:',
        perfect: 'Perfect! You won with the minimum number of moves!',
        tower: (name, count, selected) =>
          `Tower ${name}, ${count} disk(s)${selected ? ', selected' : ''}`,
        article: {
          title: 'The Combinatorics of the Tower of Hanoi',
          lead: 'Where the formula 2ⁿ − 1 comes from, why it is the minimum, and how the parity of the number of disks decides the first move.',
        },
      },
      nim: {
        title: 'Nim',
        rule: 'on your turn, take as many sticks as you like (at least one) from a single row.',
        goal: 'be the one who takes the last stick. You play against the computer.',
        first: 'Who starts:',
        you: 'You',
        computer: 'Computer',
        showBinary: 'Show in binary',
        nimSum: 'nim-sum',
        yourTurn: 'Your turn: click a stick to take it along with every stick to its right.',
        thinking: 'The computer is thinking…',
        computerMoved: (n, row) => `The computer took ${n} stick(s) from row ${row}. Your turn!`,
        youWin: 'Congratulations! You took the last stick and won!',
        computerWins: 'The computer took the last stick. Try again!',
        take: (n, row) => `Take ${n} stick(s) from row ${row}`,
        article: {
          title: 'Nim, XOR and Bouton’s Theorem',
          lead: 'How binary addition without carrying reveals, in any position, who is going to win — and which move to make.',
        },
      },
      lights: {
        title: 'Light Grid',
        rule: 'clicking a cell flips it and its neighbours above, below, to the left and to the right.',
        goal: 'turn off all the lights.',
        size: 'Size:',
        clicks: 'Clicks:',
        minimum: 'minimum:',
        perfect: 'Perfect! You turned everything off with the minimum number of clicks!',
        showSolution: 'Show solution',
        hideSolution: 'Hide solution',
        cell: (r, c, on, marked) => `Row ${r}, column ${c}, ${on ? 'on' : 'off'}${marked ? ', click here' : ''}`,
        article: {
          title: 'Linear Algebra in the Light Grid',
          lead: 'A system of equations where 1 + 1 = 0 decides which boards can be solved and finds the shortest solution.',
        },
      },
    },
  },
};

export default translations;
