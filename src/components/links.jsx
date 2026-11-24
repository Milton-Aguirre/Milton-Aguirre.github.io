import React from 'react';
import { FaLinkedin, FaGithub, FaGraduationCap, FaGlobeAmericas } from 'react-icons/fa';

const links = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/milton-aguirre-mat-52300751/', Icon: FaLinkedin },
  { name: 'CV Lattes', url: 'https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8950240D2', Icon: FaGraduationCap },
  { name: 'GitHub', url: 'https://github.com/Milton-Aguirre', Icon: FaGithub },
  { name: 'ICMAM Latin America', url: 'https://sites.google.com/view/icmamlatinamerica/home', Icon: FaGlobeAmericas },
];

const LinksSection = () => {
  return (
    <ul className="flex flex-wrap gap-3">
      {links.map((item) => (
        <li key={item.name}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-medium text-brand shadow-sm ring-1 ring-slate-200 transition hover:bg-brand hover:text-white"
          >
            <item.Icon aria-hidden="true" />
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinksSection;
