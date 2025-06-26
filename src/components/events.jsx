import React from 'react';

const upcomingEvents = [
  { name: "ISAACS Congress 2029", url: "" }
];

const pastEvents = [
  { name: "Congreso ICMAM Latin América 2020", url: "https://sites.google.com/view/math08conference" },
  { name: "Congreso ICMAM Latin América 2022", url: "https://sites.google.com/view/matematicasunivalleicmam2022/home" },
  { name: "Congreso ICMAM Latin América 2024", url: "https://sites.google.com/view/icmam2024/home" },
  { name: "ISAACS-ICMAM Conference for Women in Mathematics 2024", url: "https://sites.google.com/view/isaac-icmam-conference-4-women/" }
];

const EventSection = ({ title, events }) => (
  <div>
    <h2 className="subSectionTitle">{title}</h2>
    <div className="nColumnSection">
      <div className="leftColumnEvents">
        <p>
          {title === "Próximos"
            ? "A seguir encontrará uma lista de eventos matemáticos que serão realizados próximamente."
            : "Histórico de eventos que foram realizados nos últimos anos."}
        </p>
        <ul className="linksEvents">
          {events.map((event, index) => (
            <li key={index}>
              <a className="link" href={event.url} target="_blank" rel="noopener noreferrer">
                {event.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="rightColumnEvents">
        <img
          src={`${process.env.PUBLIC_URL}/Logo_site_192.png`}
          width="200"
          height="200"
          alt="Logo Pessoal"
          className="Logo_site_192"
        />
      </div>
    </div>
  </div>
);

const Events = () => {
  return (
    <section id="events">
      <EventSection title="Próximos" events={upcomingEvents} />
      <EventSection title="Histórico" events={pastEvents} />
    </section>
  );
};

export default Events;
