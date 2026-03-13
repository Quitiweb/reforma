const quickTasks = [
  "Dar de alta la luz (3,45 kW o 4,6 kW) en el cuadro más accesible",
  "Comprar EPP completo: FFP3, gafas herméticas, guantes, botas, casco",
  "Comprar 2 extintores ABC de 6 kg y botiquín",
  "Ventilar toda la vivienda cada día de visita",
  "Documentar estado inicial con fotos/vídeo por planta",
  "Instalar absorbe-humedad en habitaciones críticas"
];

const fases = [
  {
    fase: "Fase 0 · Preparación",
    semanas: "Semana 1 (17-23 mar)",
    objetivo: "Alta de luz, compras iniciales, ventilación masiva y registro fotográfico.",
    tareas: ["Alta eléctrica provisional", "Compra EPP + herramientas", "2 extintores", "Inspección completa"]
  },
  {
    fase: "Fase 1 · Detener el agua",
    semanas: "Semanas 2-4",
    objetivo: "Cortar las dos filtraciones activas (azotea medianera y tejado sobre salón).",
    tareas: ["Reparar junta medianera", "Revisar sumidero azotea", "Limpiar canaleta y bajante", "Sellar fugas con poliuretano"]
  },
  {
    fase: "Fase 2 · Eliminar moho",
    semanas: "Semanas 3-6",
    objetivo: "Eliminar moho visible y sanear yesos/pinturas afectados.",
    tareas: ["Proteger suelos", "Aplicar anti-moho 2 pasadas", "Raspar/picar zonas huecas", "Pintura fungicida final"]
  },
  {
    fase: "Fase 3 · Anti-humedad temporal",
    semanas: "En paralelo",
    objetivo: "Bajar humedad ambiental mientras avanza la obra.",
    tareas: ["Absorbe-humedad químico", "Ventilación diaria", "Deshumidificador 20L/día cuando haya luz"]
  }
];

const shoppingItems = [
  {
    name: "Mascarilla FFP3 + gafas herméticas",
    store: "Leroy Merlin",
    category: "EPP",
    also: "Obramat",
    reason: "Máxima seguridad contra esporas de moho y polvo fino.",
    recommendation: "Elegir mascarilla certificada EN149 FFP3 y gafa anti-vaho cerrada.",
    image: "assets/ffp3.svg"
  },
  {
    name: "Guantes nitrilo largos + guante de obra",
    store: "Obramat",
    category: "EPP",
    also: "Leroy Merlin",
    reason: "Separar guante químico (lejía) de guante mecánico (escombro/herramienta).",
    recommendation: "Nitrilo largo para limpieza, guante reforzado para albañilería.",
    image: "assets/gloves.svg"
  },
  {
    name: "Mortero hidrófugo 25 kg",
    store: "Obramat",
    category: "Impermeabilización",
    also: "Leroy Merlin",
    reason: "Ideal para rehacer junta medianera en azotea y zonas degradadas.",
    recommendation: "Priorizar marcas con ficha técnica hidrófuga (Sika/Weber o equivalente).",
    image: "assets/mortero.svg"
  },
  {
    name: "Banda impermeabilizante autoadhesiva",
    store: "Leroy Merlin",
    category: "Impermeabilización",
    also: "Obramat",
    reason: "Refuerza puntos críticos (encuentros pared-suelo y medianeras).",
    recommendation: "Aplicar sobre soporte limpio, seco y con imprimación previa.",
    image: "assets/banda.svg"
  },
  {
    name: "Masilla poliuretano para canalones",
    store: "Obramat",
    category: "Impermeabilización",
    also: "Ferretería local",
    reason: "Sella microfugas y juntas en canaleta del tejado del salón.",
    recommendation: "Compatible con exterior y lluvia.",
    image: "assets/masilla.svg"
  },
  {
    name: "Lejía + anti-moho profesional",
    store: "Leroy Merlin",
    category: "Limpieza y moho",
    also: "Ferretería local",
    reason: "Tratamiento inicial económico y efectivo para manchas negras.",
    recommendation: "Aplicar con pulverizador, esperar 15-20 min, cepillar y repetir.",
    image: "assets/limpieza.svg"
  },
  {
    name: "Deshumidificador portátil 20L/día",
    store: "Leroy Merlin",
    category: "Humedad",
    also: "Obramat",
    reason: "La medida más eficaz una vez haya suministro eléctrico.",
    recommendation: "Mover entre salón y habitación grande según humedad.",
    image: "assets/dehumidifier.svg"
  },
  {
    name: "Alargador obra 25-50m 3x2,5 mm² IP44",
    store: "Obramat",
    category: "Herramientas",
    also: "Leroy Merlin",
    reason: "Permite llevar corriente segura durante la reforma.",
    recommendation: "Carrete homologado y desenrollado completo al usar herramientas potentes.",
    image: "assets/cable.svg"
  }
];

const guides = [
  {
    title: "Guía rápida: filtración azotea (medianera)",
    level: "Prioridad alta · Semana 2",
    steps: [
      "Limpia azotea completa: verdín, polvo, restos sueltos.",
      "Haz prueba de manguera por zonas para ubicar entrada real.",
      "Pica mortero dañado en la junta y rehace con mortero hidrófugo.",
      "Refuerza con banda impermeabilizante y revisa sumidero.",
      "Si hay muchas microfisuras, valora impermeabilización general de superficie."
    ]
  },
  {
    title: "Guía rápida: canaleta tejado sobre salón",
    level: "Prioridad alta · Semana 3",
    steps: [
      "No subir solo. Usa tablón para repartir peso sobre tejas.",
      "Retira tierra y vegetación con pala de mano + cubo.",
      "Comprueba bajante y desagüe hasta que evacúe sin retener agua.",
      "Sella fugas puntuales con masilla poliuretano.",
      "Retira obstáculos (toldo viejo, restos) para evitar nuevos atascos."
    ]
  },
  {
    title: "Guía rápida: saneado de moho en salón/chimenea",
    level: "Prioridad máxima · Semanas 4-6",
    steps: [
      "EPP completo obligatorio (FFP3 + gafas + guantes + manga larga).",
      "Pulveriza agua ligera antes de raspar para no dispersar esporas.",
      "Aplica anti-moho, espera 15-20 min y cepilla.",
      "Repite tratamiento y deja secar totalmente.",
      "Donde el yeso esté blando/hueco: picar y rehacer antes de pintar."
    ]
  }
];

function renderChecklist() {
  const list = document.getElementById("quickChecklist");
  quickTasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<input id="c${i}" type="checkbox" /><label for="c${i}">${task}</label>`;
    list.appendChild(li);
  });
}

function renderFases() {
  const el = document.getElementById("timeline");
  fases.forEach((f) => {
    const card = document.createElement("article");
    card.className = "card phase";
    card.innerHTML = `
      <h3>${f.fase}</h3>
      <p class="meta">${f.semanas}</p>
      <p>${f.objetivo}</p>
      <ul>${f.tareas.map((t) => `<li>${t}</li>`).join("")}</ul>
    `;
    el.appendChild(card);
  });
}

function renderShopping() {
  const store = document.getElementById("storeFilter").value;
  const category = document.getElementById("categoryFilter").value;
  const el = document.getElementById("shoppingList");
  el.innerHTML = "";

  const filtered = shoppingItems.filter((item) => {
    const byStore = store === "all" || item.store === store || item.also.includes(store);
    const byCategory = category === "all" || item.category === category;
    return byStore && byCategory;
  });

  filtered.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card product";
    card.innerHTML = `
      <img src="${item.image}" alt="Imagen de referencia para ${item.name}" loading="lazy" />
      <div>
        <h3>${item.name}</h3>
        <span class="badge best">Mejor compra: ${item.store}</span>
        <span class="badge">También en: ${item.also}</span>
        <span class="badge">${item.category}</span>
        <p><strong>Por qué:</strong> ${item.reason}</p>
        <p><strong>Consejo:</strong> ${item.recommendation}</p>
      </div>
    `;
    el.appendChild(card);
  });

  if (!filtered.length) {
    el.innerHTML = '<article class="card">No hay resultados con ese filtro. Prueba con "Todas".</article>';
  }
}

function renderGuides() {
  const el = document.getElementById("guides");
  guides.forEach((g) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${g.title}</h3>
      <p class="meta">${g.level}</p>
      <ol class="guide-step">${g.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
    `;
    el.appendChild(card);
  });
}

function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
}

document.getElementById("storeFilter").addEventListener("change", renderShopping);
document.getElementById("categoryFilter").addEventListener("change", renderShopping);

setupTabs();
renderChecklist();
renderFases();
renderShopping();
renderGuides();
