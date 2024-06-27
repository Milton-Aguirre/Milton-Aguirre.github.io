import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header style={styles.header}>
        <h1>Milton Aguirre</h1>
        <p>Formação em Matemática</p>
      </header>
      <nav style={styles.nav}>
        <a href="#links">Links</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#material">Material</a>
        <a href="#coment">Comentários</a>
      </nav>
      <div style={styles.container}>
        <div style={styles.main}>

          <div style={styles.leftColumn}>

            <h2>Calendário de Eventos</h2>
            <p>A seguir encontrará uma lista de eventos matemáticos que serão realizados nos próximos meses.</p>
            <ul style={styles.iconsCalendar}>
              <li><a className="link" href="https://sites.google.com/view/icmam2024/home" target="_blank" rel="noopener noreferrer">Congreso ICMAM Latin América 2024</a></li>
              <li><a className="link" href="https://sites.google.com/view/isaac-icmam-conference-4-women/p%C3%A1gina-principal" target="_blank" rel="noopener noreferrer">ISAACS-ICMAM Conference for Women in Mathematics 2024</a></li>
            </ul>

            <h2>Bolsas de Estudos</h2>
            <p>Os links a seguir são de processos seletivos para cursos de pós-graduação em matemática</p>
            <p>**Próximamente tera links atualizados de editais de bolsas**</p>
          </div>

          <div style={styles.rightColumn}>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Sobre Mim</h2>
              <div style={styles.nColumnSection}>
                <div style={styles.imageColumn}>
                  <img src="/images/Milton.jpeg" alt="Description of sunset" style={styles.image} />
                </div>
                <div style={styles.textColumn}>
                  <p>
                    <strong>Milton Aguirre</strong> é formado em Matemática e possui mestrado na mesma área, 
                    além de atuar como cientista de dados. Com um sólido background técnico, 
                    também possui o título de Técnico em Instalações Elétricas. Além disso, 
                    é especializado em Ensino de Educação a Distância, combinando conhecimentos 
                    acadêmicos com experiência prática em tecnologia e educação. Seu trabalho é 
                    marcado pela aplicação de métodos matemáticos avançados para resolver 
                    problemas complexos e pela paixão por compartilhar conhecimento em sala de aula e através de 
                    plataformas digitais.
                  </p>
                </div>
              </div>
            </section>

            <section id="links" style={styles.section}>
              <h2 style={styles.sectionTitle}>Links</h2>
              <div style={styles.icons}>
                <a className="link" href="https://www.linkedin.com/in/milton-aguirre-mat-52300751/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="link" href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8950240D2&tokenCaptchar=03AFcWeA7z4Qjl4qRQ4aBCqex6x1B9zSPzeZDg7-hAyKBGx3gLsqbRDLy4Z4Uj5urBINBzuenKqMHaovqVT4zbcLQHNrnYYPwgdsS12pyyaF1bi4SdsTmjrlU7mIv0HXR5iThkezDRcuF5A9UteSsQeeWnO8EqC36dX4BdpWMs75lW41VdZh2Y7BtJ6Ydzs9WMBZBHUaRnwj9ekWgjjIVyPVdICYTkvYpLvCSmBs67O-2-2TX1iQIkSgPoROLkvUycMDk3MO-RD369EkHjzroKdOnEPc-LKNk85dYTvAK76jG9l5FYZWtK7RNZTWyAm3Nb5HvEcAlSVvm-FavyBkKSR7KAHQLzPqk-8dSzaVcfqXKm8q_dJ7FmkUfWxluCMnhPOhDDiSEWD_ALX3jIjPFkTrIuWtPHP42WoPuhdH8UpZ9X9QqTZSoW4BqJWmaE3dWcX8Bjc7jJA6zj3K6VvYxVaM6Omhk7Ibr-nDwH3ZpnymspUF4J5qnEg6hif9Xmejb6sA0kjO7xObEzKb_zDm9NBoavtNPV2ps6k377PLn4xoDiQTXRlZmIwck1YBwx6sCwtkVgQdRW8JMxyDLCdt8Quy6eZ80dYjbOjiXFkYlQGQGfrdw08Ru4L0B9FIUrp7AAvGOXMZuVy-Op6IT1WD0PKrQUCxZUHo9zdg" target="_blank" rel="noopener noreferrer">Currículo Lattes</a>
                <a className="link" href="https://github.com/Milton-Aguirre" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="link" href="https://sites.google.com/view/icmamlatinamerica/home" target="_blank" rel="noopener noreferrer">ICMAM Latin América</a>
             </div>
            </section>

            <section id="portfolio">
              <h2 style={styles.sectionTitle}>Portfólio de Projetos</h2>
                <div style={styles.nColumnSection}>
                  <div style={styles.project}>
                    <h3>TCC Bacharel</h3>
                    <h5>Universidad del Valle</h5>
                    <p>Álgebras de Frobenius</p>
                    <a href="/pdfs/disertação_mestrado.pdf" target="_blank" rel="noopener noreferrer">
                      {/* <img src="/images/logo-PDF-1.png" alt="PDF" style={styles.iconPDF} /> */}
                    </a>
                  </div>
                  <div style={styles.project}>
                    <h3>Disertação Mestrado</h3>
                    <h5>Universidade Federal de Viçosa</h5>
                    <p>Alguns resultados da teoria de Rk -ações sobre variedades diferenciáveis</p>
                    <a href="/pdfs/disertação_mestrado.pdf" target="_blank" rel="noopener noreferrer">
                      <img src="/images/logo-PDF-1.png" alt="PDF" style={styles.iconPDF} />
                    </a>
                  </div>
                  <div style={styles.project}>
                    <h3>TCC Especialização</h3>
                    <h5>Univesp</h5>
                    <p>Descrição do projeto 3...</p>
                    <a href="/pdfs/disertação_mestrado.pdf" target="_blank" rel="noopener noreferrer">
                      {/* <img src="/images/logo-PDF-1.png" alt="PDF" style={styles.iconPDF} /> */}
                    </a>
                  </div>
                </div>
            </section>

            <section id="material">
              <h2 style={styles.sectionTitle}>Material</h2>
                <div style={styles.nColumnSection}>
                  <div style={styles.project}>
                    <h3>Cálculo 1</h3>
                    <p>Proximamente PDF com exercicios resolvidos</p>
                  </div>
                  <div style={styles.project}>
                    <h3>Cálculo 2</h3>
                    <p>Proximamente PDF com exercicios resolvidos</p>
                  </div>
                  <div style={styles.project}>
                    <h3>Cálculo 3</h3>
                    <p>Proximamente PDF com exercicios resolvidos</p>
                  </div>
                  <div style={styles.project}>
                    <h3>Álgebra Linear</h3>
                    <p>Proximamente PDF com exercicios resolvidos</p>
                  </div>
                </div>
            </section>

            <div id="coment">
              <h2 style={styles.sectionTitle}>Comentários</h2>
              <form style={styles.form}>
                <input type="text" placeholder="Seu nome" style={styles.input} />
                <input type="email" placeholder="Seu email" style={styles.input} />
                <textarea placeholder="Seu comentário" style={styles.textarea}></textarea>
                <button type="submit" style={styles.button}>Enviar</button>
              </form>
            </div>
          </div>
        </div>

        <aside style={styles.sidebar}>
          <div style={styles.icons}>
            <a href="https://www.facebook.com/cofradia.academica.1" target="_blank" rel="noopener noreferrer">
              <img src="/images/logo-facebook.jpg" alt="Facebook" style={styles.icon} />
            </a>
            <a href="https://www.instagram.com/icmam_math_conference?igsh=eWx2M3FlYWxucTJ0" target="_blank" rel="noopener noreferrer">
              <img src="/images/logo-instagram.png" alt="Instagram" style={styles.icon} />
            </a>
            <a href="https://www.youtube.com/@conferenciainternacionalma6791" target="_blank" rel="noopener noreferrer">
              <img src="/images/logo-youtube.jpg" alt="YouTube" style={styles.icon} />
            </a>
          </div>
        </aside>

      </div>
      <footer style={styles.footer}>
        <p>&copy; 2024 Site Pessoal. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#C70039',
    color: '#fff',
    padding: '1em 0',
    textAlign: 'center',
  },
  nav: {
    backgroundColor: '#444',
    color: '#fff',
    padding: '1em',
    display: 'flex',
    justifyContent: 'space-around',
  },
  container: {
    padding: '20px',
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sidebar: {
    flex: '25%',
    backgroundColor: '#C70039',
    color: '#fff',
    padding: '1em',
    margin: '1em',
  },
  section: {
    marginBottom: '2em',
  },
  sectionTitle: {
    backgroundColor: '#333', // Fundo negro
    color: '#ffffff', // Texto branco
    padding: '5px 10px', // Espaçamento interno
    borderRadius: '5px', // Bordas arredondadas (opcional)
  },
  nColumnSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  leftColumn: {
    flex: '1', //Ocupa uma quarta parte da distribuição horizontal da coluna
    marginRight: '10px',
    backgroundColor: '#FBE7E5', // Opcional: fundo cinza para a coluna da esquerda
    padding: '10px',
  },
  rightColumn: {
    flex: '3', //Ocupa três quartas partes da distribuição horizontal da coluna
    marginRight: '10px',
    marginLeft: '10px',
    backgroundColor: '#f0f0f0', // Opcional: fundo cinza muito claro para a coluna da direita
    padding: '10px',
  },
  column: {
    flex: '1',
    margin: '0 10px',
  },
  imageColumn: {
    display: '1', 
    justifyContent: 'center',
    flex: '1', //Ocupa uma quarta parte da distribuição horizontal da coluna
    marginRight: '10px',
    margin: '0 10px',
  },
  textColumn: {
    flex: '3', //Ocupa três quartas partes da distribuição horizontal da coluna
    margin: '0 10px',
    backgroundColor: '#d3d3d3', // Fundo cinza claro
    padding: '10px', // Espaçamento interno
    borderRadius: '5px', // Bordas arredondadas (opcional)
  },
  project: {
    flex: '1',
    margin: '0 10px',
    padding: '10px',
    backgroundColor: '#d3d3d3',
    borderRadius: '5px',
  },
  image: {
    width: '100%', // Ajusta a largura da imagem
    maxWidth: '200px', // Define a largura máxima da imagem
    height: 'auto', // Mantém a proporção da imagem
    border: '2px solid black', // Adiciona uma borda preta de 2px
  },
  iconsCalendar: {
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'disc', // Adiciona vinhetas do tipo ponto
    paddingLeft: '20px', // Espaçamento à esquerda para alinhar as vinhetas
  },
  icons: {
    display: 'flex',
    //flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  icon: {
    width: '50px', // Largura dos ícones
    height: '50px', // Altura dos ícones
  },
  iconPDF: {
    width: '80px', // Largura dos ícones
    height: '80px', // Altura dos ícones
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    marginBottom: '10px', // Espaçamento entre os links
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '0.5em 0',
    padding: '0.5em',
    fontSize: '1em',
  },
  textarea: {
    margin: '0.5em 0',
    padding: '0.5em',
    fontSize: '1em',
  },
  button: {
    padding: '0.5em',
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1em 0',
  },
};

export default App;
