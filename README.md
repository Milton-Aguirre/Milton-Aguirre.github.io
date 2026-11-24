# Milton Aguirre · site pessoal

Site pessoal publicado em <https://milton-aguirre.github.io/>: biografia, eventos da ICMAM, trabalhos acadêmicos, disciplinas e jogos matemáticos.

Feito com React 19, Vite, React Router e Tailwind CSS v4.

## Rodando localmente

```bash
npm install
npm run dev       # servidor de desenvolvimento em http://localhost:5173
npm run lint      # verifica o código
npm run build     # gera o site em dist/
npm run preview   # serve o build de dist/ para conferir antes de publicar
```

## Deploy

O deploy é automático: cada push na `main` roda o workflow `.github/workflows/deploy.yml`, que faz lint, build e publica no GitHub Pages. Pull requests para a `main` rodam só lint e build.

O build gera também um `404.html` (cópia do `index.html`), para que as rotas `/disciplinas` e `/jogos` funcionem ao recarregar a página.

## Idiomas

O site tem três versões: português em `/`, espanhol em `/es` e inglês em `/en` (por exemplo, `/es/jogos`). Todos os textos ficam em `src/i18n/translations.js`; ao adicionar um texto novo, inclua-o nos três idiomas. Nomes de eventos, instituições e títulos de trabalhos acadêmicos ficam no idioma original.

## Onde editar

| O quê | Arquivo |
|---|---|
| Cabeçalho, menu e rodapé (redes sociais) | `src/components/Layout.jsx` |
| Biografia | `src/components/biography.jsx` |
| Eventos | `src/components/events.jsx` |
| Links | `src/components/links.jsx` |
| Títulos (TCCs, dissertação) | `src/components/portfolio.jsx` |
| Disciplinas (PDFs em `public/pdfs/`) | `src/components/disciplinas.jsx` |
| Textos em PT, ES e EN | `src/i18n/translations.js` |
| Cores do site | `@theme` em `src/index.css` |
| Título, descrição e prévia para redes sociais | `index.html` |
