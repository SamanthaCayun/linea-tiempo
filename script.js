const timelineData = [
  {
    year: "1820–1852",
    title: "Base del modelo agroexportador",
    events: [
      { text: "Revolución Industrial", category: "politica" },
      { text: "Caída del Directorio → Expansión ganadera en Bs.As.", category: "territorio" },
      { text: "Pacto de Benegas (ganado como moneda) / Ley de Enfiteusis (1826) → concentración de tierras.", category: "economia" },
      { text: "Pacto Federal. Santa Fe impulsa reparto de rentas portuarias → Rosas impone hegemonía.", category: "politica" },
      { text: "Consolidación de la oligarquía terrateniente porteña. Control aduanero. Bloqueos comerciales (1825–48).", category: "politica" },
      { text: "Relación: El comercio libre + demanda europea = base del modelo exportador.", category: "economia" }
    ]
  },
  {
    year: "1852–1862",
    title: "Organización institucional y tensiones regionales",
    events: [
      { text: "Batalla de Caseros: Urquiza derrota a Rosas → apertura liberal.", category: "politica" },
      { text: "Constitución Nacional: propiedad privada y federalismo.", category: "politica" },
      { text: "Expansión ovina reemplaza al tasajo. Ley de Derechos Diferenciales (1856) → tensión entre Bs.As. y Confederación.", category: "economia" },
      { text: "Batallas de Cepeda y Pavón: hegemonía porteña restablecida.", category: "politica" },
      { text: "Entre Ríos: modernización y resistencias federales (López Jordán).", category: "politica" }
    ]
  },
  {
    year: "1862–1880",
    title: "Estado nacional y expansión de la frontera",
    events: [
      { text: "Mitre y Sarmiento presidentes → censos, ferrocarriles, telégrafos, escuelas normales.", category: "politica" },
      { text: "Guerra de la Triple Alianza", category: "politica" },
      { text: "Control de fronteras norteñas.", category: "territorio" },
      { text: "Muerte de Urquiza → fin de caudillos federales.", category: "politica" },
      { text: "Ley Avellaneda de Inmigración y Colonización: llegada de inmigrantes europeos.", category: "politica" },
      { text: "Campaña del Desierto → incorporación de la Patagonia. Ley de Empréstito financia avance.", category: "territorio" },
      { text: "Roca presidente. Federalización de Bs.As. Consolidación del Estado-Nación.", category: "politica" },
      { text: "Relación: Estado fuerte + frontera ampliada + inmigración → crecimiento agroexportador.", category: "economia" }
    ]
  },
  {
    year: "1880–1900",
    title: "Consolidación del modelo y modernización",
    events: [
      { text: "Ley de Remate Público: venta de tierras fiscales → concentración de la propiedad.", category: "economia" },
      { text: "Fundación de La Plata y ciudades-puerto (Bahía Blanca, Zárate).", category: "territorio" },
      { text: "Segunda Revolución Industrial", category: "politica" },
      { text: "Cámara frigorífica → exportación de carne refrigerada.", category: "economia" },
      { text: "Capital británico: frigoríficos, ferrocarriles y puertos → integración con el mercado mundial.", category: "economia" }
    ]
  },
  {
    year: "1900–1915",
    title: "Cuestión social y reformas laborales",
    events: [
      { text: "FOA y FORA: sindicalismo organizado. Unión Gremial de Trabajadores (1903).", category: "sociedad" },
      { text: "Ley de Residencia: control de obreros inmigrantes.", category: "politica" },
      { text: "Ley de Tierras: regula arriendos.", category: "politica" },
      { text: "Ley de Descanso Dominical (solo Capital).", category: "politica" },
      { text: "Grito de Alcorta: pequeños productores reclaman mejores contratos.", category: "sociedad" },
      { text: "Ley Sáenz Peña: voto secreto, universal y obligatorio para varones.", category: "politica" },
      { text: "Ley de Accidentes de Trabajo.", category: "politica" }
    ]
  },
  {
    year: "1914–1921",
    title: "Auge exportador, crisis y conflictividad social",
    events: [
      { text: "Primera Guerra Mundial", category: "politica" },
      { text: "Neutralidad argentina → boom exportador, precios altos.", category: "economia" },
      { text: "Semana Trágica: huelgas urbanas reprimidas.", category: "sociedad" },
      { text: "Huelgas de la Patagonia: reclamos de peones rurales reprimidos por el Ejército.", category: "sociedad" }
    ]
  }
];

const timelineContainer = document.getElementById('timeline');

function crearBloque(anioData) {
  const bloque = document.createElement('div');
  bloque.classList.add('year-block');

  const yearTitle = document.createElement('div');
  yearTitle.classList.add('year');
  yearTitle.textContent = anioData.year + " | " + anioData.title;
  bloque.appendChild(yearTitle);

  anioData.events.forEach(evento => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event', evento.category);
    eventDiv.textContent = evento.text;
    bloque.appendChild(eventDiv);
  });

  return bloque;
}

function cargarTimeline() {
  timelineData.forEach(anioData => {
    const bloque = crearBloque(anioData);
    timelineContainer.appendChild(bloque);
  });
}

function scrollTimeline(direction) {
  const scrollAmount = 320;
  timelineContainer.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Botones de navegación
document.getElementById('btnAnterior').addEventListener('click', () => scrollTimeline(-1));
document.getElementById('btnSiguiente').addEventListener('click', () => scrollTimeline(1));

// Carga inicial
cargarTimeline();
