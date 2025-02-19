import React from 'react';

const LinksSection = () => {
    const links = [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/milton-aguirre-mat-52300751/" },
      { name: "CV Lattes", url: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8950240D2" },
      { name: "GitHub", url: "https://github.com/Milton-Aguirre" },
      { name: "ICMAM Latin América", url: "https://sites.google.com/view/icmamlatinamerica/home" }
    ];
  
    return (
        <div className="icons">
          {links.map((link, index) => (
            <a 
              key={index} 
              className="link" 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
    );
  };
  
  export default LinksSection;
  