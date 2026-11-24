import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router';

import { LANGS, localizedPath, useI18n } from '../i18n/index.js';

const socialLinks = [
  { key: 'linkedin', url: 'https://www.linkedin.com/in/milton-aguirre-mat-52300751/', Icon: FaLinkedin },
  { key: 'github', url: 'https://github.com/Milton-Aguirre', Icon: FaGithub },
  { key: 'facebook', url: 'https://www.facebook.com/icmam', Icon: FaFacebook },
  { key: 'instagram', url: 'https://www.instagram.com/icmam_math_conference', Icon: FaInstagram },
  { key: 'youtube', url: 'https://www.youtube.com/@conferenciainternacionalma6791', Icon: FaYoutube },
];

const nav = [
  { key: 'home', page: '/' },
  { key: 'disciplinas', page: '/disciplinas' },
  { key: 'jogos', page: '/jogos' },
];

const navItem = 'rounded-md px-3 py-1.5 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white';

export default function Layout({ children }) {
  const { t, lang, htmlLang, page, to } = useI18n();
  const { pathname } = useLocation();

  // Atualiza o idioma do documento e o título da aba ao trocar de idioma
  useEffect(() => {
    document.documentElement.lang = htmlLang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
  }, [htmlLang, t]);

  // Endereço "oficial" de cada página e idioma, para o Google indexar /es e /en separadamente
  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://milton-aguirre.github.io${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-brand"
      >
        {t.layout.skip}
      </a>

      <header className="sticky top-0 z-40 bg-brand text-white shadow-md">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-3">
            <Link to={to('/')} className="flex items-center gap-3">
              <img src="/Logo_site_192.png" alt="" width="48" height="48" className="size-12 rounded-full ring-2 ring-white/30" />
              <div>
                <p className="text-xl leading-tight font-bold">Milton Aguirre</p>
                <p className="text-sm text-white/80">{t.layout.subtitle}</p>
              </div>
            </Link>
            <LanguageSwitcher className="sm:hidden" lang={lang} page={page} label={t.layout.language} />
          </div>

          <div className="flex items-center gap-3">
            <nav aria-label={t.layout.mainNav} className="-mx-3 flex flex-wrap sm:mx-0 sm:justify-end">
              {nav.map((item) => (
                <NavLink
                  key={item.key}
                  to={to(item.page)}
                  end
                  className={({ isActive }) => `${navItem} ${isActive ? 'bg-white/15 text-white' : ''}`}
                >
                  {t.layout.nav[item.key]}
                </NavLink>
              ))}
            </nav>
            <LanguageSwitcher className="hidden sm:flex" lang={lang} page={page} label={t.layout.language} />
          </div>
        </div>
      </header>

      <main id="conteudo" className="mx-auto w-full max-w-5xl flex-1 space-y-16 px-4 py-10">
        {children}
      </main>

      <footer className="bg-brand-dark text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} Milton Aguirre. {t.layout.rights}
          </p>
          <ul className="flex gap-2">
            {socialLinks.map((social) => (
              <li key={social.url}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.layout.social[social.key]}
                  title={t.layout.social[social.key]}
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

// Seletor PT · ES · EN: leva para a mesma página no outro idioma.
function LanguageSwitcher({ lang, page, label, className = '' }) {
  return (
    <ul aria-label={label} className={`flex items-center rounded-lg bg-white/10 p-0.5 text-xs font-semibold ${className}`}>
      {LANGS.map((l) => (
        <li key={l.code}>
          <Link
            to={localizedPath(l.code, page)}
            hrefLang={l.htmlLang}
            lang={l.htmlLang}
            title={l.name}
            aria-current={l.code === lang ? 'true' : undefined}
            className={`block rounded-md px-2 py-1 transition ${
              l.code === lang ? 'bg-white text-brand' : 'text-white/85 hover:bg-white/10 hover:text-white'
            }`}
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
