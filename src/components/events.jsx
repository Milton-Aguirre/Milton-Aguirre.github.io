import React from 'react';

const upcomingEvents = [
  { name: 'ISAACS Congress 2029', url: 'https://isaacmath.org/' },
];

const pastEvents = [
  { name: 'Congreso ICMAM Latin America 2020', url: 'https://sites.google.com/view/math08conference' },
  { name: 'Congreso ICMAM Latin America 2022', url: 'https://sites.google.com/view/matematicasunivalleicmam2022/home' },
  { name: 'Congreso ICMAM Latin America 2024', url: 'https://sites.google.com/view/icmam2024/home' },
  { name: 'ISAACS-ICMAM Conference for Women in Mathematics 2024', url: 'https://sites.google.com/view/isaac-icmam-conference-4-women/' },
];

const EventList = ({ title, intro, events }) => (
  <div>
    <h3 className="subSectionTitle">{title}</h3>
    <div className="nColumnSection">
      <div className="leftColumnEvents">
        <p>{intro}</p>
        <ul className="linksEvents">
          {events.map((event) => (
            <li key={event.name}>
              <a className="link" href={event.url} target="_blank" rel="noopener noreferrer">
                {event.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="rightColumnEvents">
        <img src="/Logo_site_192.png" width="200" height="200" alt="" className="Logo_site_192" loading="lazy" />
      </div>
    </div>
  </div>
);

const Events = () => {
  return (
    <section id="events">
      <h2 className="sectionTitle">Eventos</h2>
      <EventList
        title="Próximos"
        intro="A seguir, uma lista de eventos matemáticos que serão realizados em breve."
        events={upcomingEvents}
      />
      <EventList
        title="Histórico"
        intro="Histórico de eventos realizados nos últimos anos."
        events={pastEvents}
      />
    </section>
  );
};

export default Events;
