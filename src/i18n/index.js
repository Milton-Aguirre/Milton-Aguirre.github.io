import { useLocation } from 'react-router';

import translations from './translations.js';

// Português fica na raiz do site (/); espanhol e inglês têm prefixo (/es, /en).
export const LANGS = [
  { code: 'pt', label: 'PT', name: 'Português', prefix: '', htmlLang: 'pt-BR' },
  { code: 'es', label: 'ES', name: 'Español', prefix: '/es', htmlLang: 'es' },
  { code: 'en', label: 'EN', name: 'English', prefix: '/en', htmlLang: 'en' },
];

const byPrefix = (segment) => LANGS.find((l) => l.prefix === `/${segment}`);

// Separa "/es/jogos" em { lang: es, page: "/jogos" }.
export function parsePath(pathname) {
  const [, first = '', ...rest] = pathname.split('/');
  const lang = byPrefix(first);
  if (!lang) return { lang: LANGS[0], page: pathname || '/' };
  const page = `/${rest.join('/')}`;
  return { lang, page };
}

// Monta o endereço de uma página num idioma: localizedPath('es', '/jogos') -> "/es/jogos".
export function localizedPath(code, page) {
  const { prefix } = LANGS.find((l) => l.code === code);
  if (page === '/' || page === '') return prefix || '/';
  return `${prefix}${page}`;
}

// Hook usado pelos componentes: textos do idioma atual + helpers de link.
export function useI18n() {
  const { pathname } = useLocation();
  const { lang, page } = parsePath(pathname);
  return {
    lang: lang.code,
    htmlLang: lang.htmlLang,
    page,
    t: translations[lang.code],
    to: (target) => localizedPath(lang.code, target),
  };
}
