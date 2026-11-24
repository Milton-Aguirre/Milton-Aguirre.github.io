import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const socialLinks = [
  { label: 'LinkedIn de Milton Aguirre', url: 'https://www.linkedin.com/in/milton-aguirre-mat-52300751/', Icon: FaLinkedin },
  { label: 'GitHub de Milton Aguirre', url: 'https://github.com/Milton-Aguirre', Icon: FaGithub },
  { label: 'Facebook da ICMAM', url: 'https://www.facebook.com/icmam', Icon: FaFacebook },
  { label: 'Instagram da ICMAM', url: 'https://www.instagram.com/icmam_math_conference', Icon: FaInstagram },
  { label: 'YouTube da ICMAM', url: 'https://www.youtube.com/@conferenciainternacionalma6791', Icon: FaYoutube },
];

const nav = [
  { label: 'Home', to: '/' },
  { label: 'Disciplinas', to: '/disciplinas' },
  { label: 'Jogos', to: '/jogos' },
];

const navItem = 'rounded-md px-3 py-1.5 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-brand"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-40 bg-brand text-white shadow-md">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/Logo_site_192.png" alt="" width="48" height="48" className="size-12 rounded-full ring-2 ring-white/30" />
            <div>
              <p className="text-xl leading-tight font-bold">Milton Aguirre</p>
              <p className="text-sm text-white/80">Matemático · Cientista de Dados</p>
            </div>
          </Link>

          <nav aria-label="Navegação principal" className="-mx-3 flex flex-wrap sm:mx-0 sm:justify-end">
            {nav.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end
                className={({ isActive }) => `${navItem} ${isActive ? 'bg-white/15 text-white' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="conteudo" className="mx-auto w-full max-w-5xl flex-1 space-y-16 px-4 py-10">
        {children}
      </main>

      <footer className="bg-brand-dark text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} Milton Aguirre. Todos os direitos reservados.
          </p>
          <ul className="flex gap-2">
            {socialLinks.map((social) => (
              <li key={social.url}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex size-10 items-center justify-center rounded-full text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  <social.Icon size={22} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
