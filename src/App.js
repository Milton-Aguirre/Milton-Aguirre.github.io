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
        <a href="#portfolio">Portfólio</a>
        <a href="#blog">Blog</a>
        <a href="#material">Material</a>
      </nav>
      <div style={styles.container}>
        <main style={styles.main}>
          <section style={styles.section}>
            <h2>Sobre Mim</h2>
            <div style={styles.twoColumnSection}>
              <div style={styles.column}>
                <img src="C:\Users\milton.aguirre\codes\site-milton\src\Milton.jpg" alt="Description of Image" style={styles.image} />
              </div>
              <div style={styles.column}>
                <p>
                  <strong>Milton Aguirre</strong> é formado em Matemática e possui mestrado na mesma área, 
                  além de atuar como cientista de dados. Com um sólido background técnico, 
                  também possui o título de Técnico em Instalações Elétricas. Além disso, 
                  é especializado em Ensino de Educação a Distância, combinando conhecimentos 
                  acadêmicos com experiência prática em tecnologia e educação. Seu trabalho é 
                  marcado pela aplicação de métodos matemáticos avançados para resolver 
                  problemas complexos e pela paixão por compartilhar conhecimento através de 
                  plataformas digitais.
                </p>
              </div>
            </div>
            <div style={styles.icons}>
              <a href="https://www.linkedin.com/in/milton-aguirre-mat-52300751/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8950240D2&tokenCaptchar=03AFcWeA7z4Qjl4qRQ4aBCqex6x1B9zSPzeZDg7-hAyKBGx3gLsqbRDLy4Z4Uj5urBINBzuenKqMHaovqVT4zbcLQHNrnYYPwgdsS12pyyaF1bi4SdsTmjrlU7mIv0HXR5iThkezDRcuF5A9UteSsQeeWnO8EqC36dX4BdpWMs75lW41VdZh2Y7BtJ6Ydzs9WMBZBHUaRnwj9ekWgjjIVyPVdICYTkvYpLvCSmBs67O-2-2TX1iQIkSgPoROLkvUycMDk3MO-RD369EkHjzroKdOnEPc-LKNk85dYTvAK76jG9l5FYZWtK7RNZTWyAm3Nb5HvEcAlSVvm-FavyBkKSR7KAHQLzPqk-8dSzaVcfqXKm8q_dJ7FmkUfWxluCMnhPOhDDiSEWD_ALX3jIjPFkTrIuWtPHP42WoPuhdH8UpZ9X9QqTZSoW4BqJWmaE3dWcX8Bjc7jJA6zj3K6VvYxVaM6Omhk7Ibr-nDwH3ZpnymspUF4J5qnEg6hif9Xmejb6sA0kjO7xObEzKb_zDm9NBoavtNPV2ps6k377PLn4xoDiQTXRlZmIwck1YBwx6sCwtkVgQdRW8JMxyDLCdt8Quy6eZ80dYjbOjiXFkYlQGQGfrdw08Ru4L0B9FIUrp7AAvGOXMZuVy-Op6IT1WD0PKrQUCxZUHo9zdg" target="_blank" rel="noopener noreferrer">Currículo Lates</a>
              <a href="https://sites.google.com/view/icmamlatinamerica/home" target="_blank" rel="noopener noreferrer">ICMAM Latin América</a>
            </div>
          </section>
          <section id="portfolio" style={styles.portfolio}>
            <section>
            <h2>Portfólio de Projetos</h2>
              <div>
                <h3>Projeto 1</h3>
                <p>Descrição do projeto 1...</p>
              </div>
              <div>
                <h3>Projeto 2</h3>
                <p>Descrição do projeto 2...</p>
              </div>
              <div>
                <h3>Projeto 3</h3>
                <p>Descrição do projeto 3...</p>
              </div>
              </section>
          </section>
          <section id="blog" style={styles.blog}>
            <h2>Blog Pessoal</h2>
            <div>
              <h3>Postagem 1</h3>
              <p>Conteúdo da postagem 1...</p>
            </div>
            <div>
              <h3>Postagem 2</h3>
              <p>Conteúdo da postagem 2...</p>
            </div>
            <div>
              <h3>Postagem 3</h3>
              <p>Conteúdo da postagem 3...</p>
            </div>
          </section>
          <section id="material" style={styles.material}>
            <h2>Material</h2>
            <div>
              <h3>Pasta 1</h3>
              <p>Descrição da pasta 1...</p>
            </div>
            <div>
              <h3>Pasta 2</h3>
              <p>Descrição da pasta 2...</p>
            </div>
            <div>
              <h3>Pasta 3</h3>
              <p>Descrição da pasta 3...</p>
            </div>
          </section>
          <div style={styles.comments}>
            <h2>Comentários</h2>
            <form style={styles.form}>
              <input type="text" placeholder="Seu nome" style={styles.input} />
              <input type="email" placeholder="Seu email" style={styles.input} />
              <textarea placeholder="Seu comentário" style={styles.textarea}></textarea>
              <button type="submit" style={styles.button}>Enviar</button>
            </form>
          </div>
        </main>
        <aside style={styles.sidebar}>
          <h2>Calendário de Eventos</h2>
          <p>Implementação do calendário...</p>
          <h2>Atualizações Recentes</h2>
          <p>Postagens recentes das redes sociais...</p>
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
    backgroundColor: '#333',
    color: '#fff',
    padding: '1em 0',
    textAlign: 'center',
  },
  nav: {
    backgroundColor: '#444',
    color: '#fff',
    padding: '1em',
    display: 'flex',
    justifyContent: 'space-between',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  main: {
    flex: '70%',
    backgroundColor: '#fff',
    padding: '2em',
    margin: '1em',
  },
  sidebar: {
    flex: '25%',
    backgroundColor: '#333',
    color: '#fff',
    padding: '1em',
    margin: '1em',
  },
  section: {
    marginBottom: '2em',
  },
  twoColumnSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: '2em',
  },
  column: {
    flex: '48%',
    padding: '1em',
  },
  image: {
    maxWidth: '30%',
    height: 'auto',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1em 0',
  },
  portfolio: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  blog: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  material: {
    display: 'flex',
    flexWrap: 'wrap',
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
