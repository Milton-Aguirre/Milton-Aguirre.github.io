import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

import Section from './Section.jsx';
import { card, link } from './styles.js';

const upcomingEvents = [
  { name: 'ISAACS Congress 2029', url: 'https://isaacmath.org/' },
];

const pastEvents = [
  { name: 'Congreso ICMAM Latin America 2020', url: 'https://sites.google.com/view/math08conference' },
  { name: 'Congreso ICMAM Latin America 2022', url: 'https://sites.google.com/view/matematicasunivalleicmam2022/home' },
  { name: 'Congreso ICMAM Latin America 2024', url: 'https://sites.google.com/view/icmam2024/home' },
  { name: 'ISAACS-ICMAM Conference for Women in Mathematics 2024', url: 'https://sites.google.com/view/isaac-icmam-conference-4-women/' },
];

const EventList = ({ title, intro, events, badge }) => (
  <div className={`${card} p-6`}>
    <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
      {title}
      {badge && <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">{badge}</span>}
    </h3>
    <p className="mt-1 text-sm text-slate-600">{intro}</p>
    <ul className="mt-4 space-y-2">
      {events.map((event) => (
        <li key={event.name}>
          <a className={`${link} inline-flex items-start gap-2`} href={event.url} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="mt-1 shrink-0 text-xs opacity-60" aria-hidden="true" />
            {event.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Events = () => {
  return (
    <Section id="eventos" title="Eventos">
      <div className="grid gap-6 md:grid-cols-2">
        <EventList
          title="Próximos"
          badge="Em breve"
          intro="Eventos matemáticos que serão realizados em breve."
          events={upcomingEvents}
        />
        <EventList
          title="Histórico"
          intro="Eventos realizados nos últimos anos."
          events={pastEvents}
        />
      </div>
    </Section>
  );
};

export default Events;
