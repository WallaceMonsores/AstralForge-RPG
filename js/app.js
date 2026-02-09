const STORAGE_KEY = "rpg_astral_characters";

const screens = {
  home: document.getElementById("screen-home"),
  create: document.getElementById("screen-create"),
  list: document.getElementById("screen-list"),
  view: document.getElementById("screen-view"),
  catalog: document.getElementById("screen-catalog"),
};

const el = {
  goCreate: document.getElementById("go-create"),
  goList: document.getElementById("go-list"),
  goCatalog: document.getElementById("go-catalog"),
  name: document.getElementById("char-name"),
  birth: document.getElementById("birth-date"),
  signDisplay: document.getElementById("sign-display"),
  classSelect: document.getElementById("class-select"),
  btnClass: document.getElementById("btn-class"),
  raceSelect: document.getElementById("race-select"),
  subraceSelect: document.getElementById("subrace-select"),
  btnRace: document.getElementById("btn-race"),
  btnCreate: document.getElementById("btn-create"),
  preview: document.getElementById("preview"),
  previewClass: document.getElementById("preview-class"),
  previewType: document.getElementById("preview-type"),
  previewRace: document.getElementById("preview-race"),
  previewSubrace: document.getElementById("preview-subrace"),
  previewSign: document.getElementById("preview-sign"),
  previewZodiac: document.getElementById("preview-zodiac"),
  previewZodiacBonus: document.getElementById("preview-zodiac-bonus"),
  previewPV: document.getElementById("preview-pv"),
  previewMana: document.getElementById("preview-mana"),
  previewAura: document.getElementById("preview-aura"),
  previewStamina: document.getElementById("preview-stamina"),
  previewAttrs: document.getElementById("preview-attrs"),
  previewClassAbilities: document.getElementById("preview-class-abilities"),
  previewRaceAbilities: document.getElementById("preview-race-abilities"),
  previewSubraceAbilities: document.getElementById("preview-subrace-abilities"),
  list: document.getElementById("list"),
  listEmpty: document.getElementById("list-empty"),
  view: document.getElementById("view"),
  backToList: document.getElementById("back-to-list"),
  backToHome: document.getElementById("back-to-home"),
  tabButtons: Array.from(document.querySelectorAll(".tab-btn")),
  tabPanels: Array.from(document.querySelectorAll(".tab-panel")),
  catalogClasses: document.getElementById("catalog-classes"),
  catalogRaces: document.getElementById("catalog-races"),
  catalogSubraces: document.getElementById("catalog-subraces"),
};

const classData = {
  Mago: {
    type: "Magica",
    desc: "Erudito arcano que molda a realidade com estudo e disciplina.",
    mods: { int: 3, sab: 1 },
  },
  Feiticeiro: {
    type: "Magica",
    desc: "Canaliza magia inata herdada de linhagens antigas.",
    mods: { car: 3, con: 1 },
  },
  Bruxo: {
    type: "Magica",
    desc: "Faz pactos com entidades para obter poder arcano.",
    mods: { car: 2, int: 1, sab: 1 },
  },
  Clerigo: {
    type: "Magica",
    desc: "Serve a divindades e manifesta magia sagrada.",
    mods: { sab: 3, con: 1 },
  },
  Druida: {
    type: "Magica",
    desc: "Guardiao da natureza que transforma magia em equilibrio.",
    mods: { sab: 2, int: 1, con: 1 },
  },
  Bardo: {
    type: "Magica",
    desc: "A magia nasce da arte, cancoes e historias antigas.",
    mods: { car: 2, dex: 1, int: 1 },
  },
  Necromante: {
    type: "Magica",
    desc: "Domina os ciclos da vida e da morte em rituais proibidos.",
    mods: { int: 2, sab: 1, con: 1 },
  },
  Guerreiro: {
    type: "Fisica",
    desc: "Mestre das armas e da disciplina militar.",
    mods: { for: 3, con: 1 },
  },
  Barbaro: {
    type: "Fisica",
    desc: "Forca bruta e furia primordial no campo de batalha.",
    mods: { for: 2, con: 2 },
  },
  Ladino: {
    type: "Fisica",
    desc: "Astuto, rapido e letal nas sombras.",
    mods: { dex: 3, car: 1 },
  },
  Monge: {
    type: "Fisica",
    desc: "Disciplina corporal e espiritual em perfeita harmonia.",
    mods: { dex: 2, sab: 2 },
  },
  Ranger: {
    type: "Fisica",
    desc: "Cacador que domina a trilha e a precisao.",
    mods: { dex: 2, sab: 1, con: 1 },
  },
  Paladino: {
    type: "Mista",
    desc: "Guerreiro sagrado que equilibra fe e espada.",
    mods: { for: 2, car: 1, con: 1 },
  },
};

const classAbilities = {
  Barbaro: [
    {
      name: "Furia Ancestral",
      kind: "Passiva",
      cost: "Nenhum",
      desc: "Quanto menor o PV, maior o dano fisico.",
    },
    {
      name: "Golpe Brutal",
      kind: "Ativa",
      cost: "Aura",
      desc: "Ataque poderoso com bonus de dano.",
    },
    {
      name: "Rugido de Guerra",
      kind: "Ativa",
      cost: "Aura",
      desc: "Aumenta forca propria e intimida inimigos.",
    },
  ],
  Guerreiro: [
    {
      name: "Disciplina Marcial",
      kind: "Passiva",
      cost: "Nenhum",
      desc: "Bonus permanente em defesa.",
    },
    {
      name: "Ataque Preciso",
      kind: "Ativa",
      cost: "Aura",
      desc: "Ataque com maior chance de acerto.",
    },
    {
      name: "Postura Defensiva",
      kind: "Ativa",
      cost: "Aura",
      desc: "Reduz dano recebido por alguns turnos.",
    },
  ],
  Ladino: [
    {
      name: "Ataque Furtivo",
      kind: "Passiva",
      cost: "Nenhum",
      desc: "Dano bonus ao atacar inimigos desprevenidos.",
    },
    {
      name: "Golpe Sombrio",
      kind: "Ativa",
      cost: "Aura",
      desc: "Ataque rapido com alto dano.",
    },
    {
      name: "Esquiva Rapida",
      kind: "Ativa",
      cost: "Aura",
      desc: "Aumenta chance de esquiva temporariamente.",
    },
  ],
  Monge: [
    {
      name: "Corpo e Mente",
      kind: "Passiva",
      cost: "Nenhum",
      desc: "Aura regenera mais rapido.",
    },
    {
      name: "Rajada de Golpes",
      kind: "Ativa",
      cost: "Aura",
      desc: "Varios ataques rapidos.",
    },
    {
      name: "Palma Energizada",
      kind: "Ativa",
      cost: "Aura",
      desc: "Ataque que ignora parte da defesa.",
    },
  ],
  Ranger: [
    {
      name: "Predador Natural",
      kind: "Passiva",
      cost: "Nenhum",
      desc: "Bonus contra inimigos marcados.",
    },
    {
      name: "Disparo Preciso",
      kind: "Ativa",
      cost: "Aura",
      desc: "Ataque a distancia com bonus de dano.",
    },
    {
      name: "Marca do Cacador",
      kind: "Ativa",
      cost: "Aura",
      desc: "Marca alvo para dano aumentado.",
    },
  ],
  Mago: [
    {
      name: "Afinidade Arcana",
      kind: "Passiva",
      cost: "Nenhum",
      desc: "Reduz custo de mana em magias.",
    },
    {
      name: "Bola de Fogo",
      kind: "Ativa",
      cost: "Mana",
      desc: "Dano magico em area.",
    },
    {
      name: "Barreira Arcana",
      kind: "Ativa",
      cost: "Mana",
      desc: "Escudo magico temporario.",
    },
  ],
  Feiticeiro: [
    {
      name: "Magia Instintiva",
      kind: "Passiva",
      cost: "Nenhum",
      desc: "Chance de efeito critico magico.",
    },
    {
      name: "Explosao Caotica",
      kind: "Ativa",
      cost: "Mana",
      desc: "Dano magico imprevisivel.",
    },
    {
      name: "Surto Arcano",
      kind: "Ativa",
      cost: "Mana",
      desc: "Aumenta poder magico temporariamente.",
    },
  ],
  Bruxo: [
    {
      name: "Pacto Sombrio",
      kind: "Passiva",
      cost: "Nenhum",
      desc: "Recupera mana ao derrotar inimigos.",
    },
    {
      name: "Raio Profano",
      kind: "Ativa",
      cost: "Mana",
      desc: "Dano magico sombrio.",
    },
    {
      name: "Maldicao",
      kind: "Ativa",
      cost: "Mana",
      desc: "Reduz atributos do alvo.",
    },
  ],
  Clerigo: [
    {
      name: "Bencao Divina",
      kind: "Passiva",
      cost: "Nenhum",
      desc: "Aumenta cura recebida e concedida.",
    },
    {
      name: "Cura Sagrada",
      kind: "Ativa",
      cost: "Mana",
      desc: "Restaura PV.",
    },
    {
      name: "Luz Purificadora",
      kind: "Ativa",
      cost: "Mana",
      desc: "Dano contra criaturas sombrias.",
    },
  ],
  Druida: [
    {
      name: "Harmonia Natural",
      kind: "Passiva",
      cost: "Nenhum",
      desc: "Regenera mana lentamente.",
    },
    {
      name: "Raizes Enredantes",
      kind: "Ativa",
      cost: "Mana",
      desc: "Imobiliza inimigos.",
    },
    {
      name: "Forma Selvagem",
      kind: "Ativa",
      cost: "Mana",
      desc: "Aumenta atributos fisicos temporariamente.",
    },
  ],
  Bardo: [
    {
      name: "Inspiracao",
      kind: "Passiva",
      cost: "Nenhum",
      desc: "Buff leve constante ao grupo.",
    },
    {
      name: "Cancao de Batalha",
      kind: "Ativa",
      cost: "Mana",
      desc: "Aumenta atributos aliados.",
    },
    {
      name: "Nota Desorientadora",
      kind: "Ativa",
      cost: "Mana",
      desc: "Confunde inimigos.",
    },
  ],
  Necromante: [
    {
      name: "Senhor dos Mortos",
      kind: "Passiva",
      cost: "Nenhum",
      desc: "Invocacoes ficam mais fortes.",
    },
    {
      name: "Invocar Morto-Vivo",
      kind: "Ativa",
      cost: "Mana",
      desc: "Cria aliado temporario.",
    },
    {
      name: "Drenar Vida",
      kind: "Ativa",
      cost: "Mana",
      desc: "Rouba PV do inimigo.",
    },
  ],
  Paladino: [
    {
      name: "Juramento Sagrado",
      kind: "Passiva",
      cost: "Nenhum",
      desc: "Bonus defensivo e magico.",
    },
    {
      name: "Golpe Divino",
      kind: "Ativa",
      cost: "Aura + Mana",
      desc: "Ataque fisico com dano sagrado.",
    },
    {
      name: "Aura de Protecao",
      kind: "Ativa",
      cost: "Mana",
      desc: "Reduz dano recebido por aliados.",
    },
  ],
};

const raceData = {
  Humano: {
    desc: "Versatil e ambicioso, adapta-se a qualquer caminho.",
    mods: { for: 1, dex: 1, con: 1, int: 1, sab: 1, car: 1 },
    traits: ["Adaptavel", "Ambicioso", "Aprendizado rapido"],
    abilities: [
      {
        name: "Versatilidade Humana",
        kind: "Passiva",
        cost: "Nenhum",
        desc: "Pequeno bonus em versatilidade geral.",
      },
      {
        name: "Foco Determinado",
        kind: "Ativa",
        cost: "Aura",
        desc: "Aumenta a concentracao e a precisao por curto tempo.",
      },
    ],
    subraces: {
      "Humano Comum": {
        desc: "Humano comum, focado em equilibrio e resistencia.",
        traits: ["Equilibrado", "Resiliente"],
        mods: {},
        abilities: [
          {
            name: "Tenacidade",
            kind: "Passiva",
            cost: "Nenhum",
            desc: "Aumenta levemente a resistencia geral.",
          },
          {
            name: "Folego Extra",
            kind: "Ativa",
            cost: "Aura",
            desc: "Recupera folego em situacoes criticas.",
          },
        ],
      },
      "Humano Despertado (Hunter)": {
        desc: "Despertado para a caca e a percepcao do ambiente.",
        traits: ["Sentidos agucados", "Afinidade com feras"],
        mods: { dex: 1, sab: 1 },
        abilities: [
          {
            name: "Olhar do Cacador",
            kind: "Passiva",
            cost: "Nenhum",
            desc: "Percepcao ampliada de ameacas.",
          },
          {
            name: "Marca Instintiva",
            kind: "Ativa",
            cost: "Aura",
            desc: "Marca alvo para facilitar o rastreio.",
          },
        ],
      },
    },
  },
  Elfo: {
    desc: "Elegante e conectado a magia ancestral.",
    mods: { dex: 2, int: 1 },
    traits: ["Destreza elevada", "Visao no escuro", "Afinidade com magia ou natureza"],
    abilities: [
      {
        name: "Graca Elfica",
        kind: "Passiva",
        cost: "Nenhum",
        desc: "Bonus em destreza.",
      },
      {
        name: "Passos Leves",
        kind: "Ativa",
        cost: "Aura",
        desc: "Aumenta esquiva.",
      },
    ],
    subraces: {
      "Elfo da Floresta": {
        desc: "Furtivo e ligado aos bosques antigos.",
        traits: ["Furtividade natural", "Afinidade com natureza"],
        mods: { dex: 1 },
        abilities: [
          {
            name: "Camuflagem Verde",
            kind: "Passiva",
            cost: "Nenhum",
            desc: "Bonus em furtividade em areas naturais.",
          },
          {
            name: "Trilha Silenciosa",
            kind: "Ativa",
            cost: "Aura",
            desc: "Movimento silencioso por curto tempo.",
          },
        ],
      },
      "Elfo Alto": {
        desc: "Estudioso e refinado nas artes arcanas.",
        traits: ["Afinidade com magia arcana"],
        mods: { int: 1 },
        abilities: [
          {
            name: "Mente Arcana",
            kind: "Passiva",
            cost: "Nenhum",
            desc: "Bonus em concentracao magica.",
          },
          {
            name: "Pulso Arcano",
            kind: "Ativa",
            cost: "Mana",
            desc: "Explosao arcana de curto alcance.",
          },
        ],
      },
      "Elfo de Gelo": {
        desc: "Resistente ao frio e adaptado a regioes geladas.",
        traits: ["Resistencia a gelo", "Vulnerabilidade leve a fogo", "Afinidade com regioes frias"],
        mods: { con: 1 },
        abilities: [
          {
            name: "Sangue Gelado",
            kind: "Passiva",
            cost: "Nenhum",
            desc: "Resistencia a gelo.",
          },
          {
            name: "Explosao Glacial",
            kind: "Ativa",
            cost: "Mana",
            desc: "Dano de gelo.",
          },
        ],
      },
    },
  },
  Anao: {
    desc: "Resistente e determinado, forjado nas montanhas.",
    mods: { con: 2, for: 1 },
    traits: ["Resistencia elevada", "Forca de trabalho", "Afinidade com pedra"],
    abilities: [
      {
        name: "Robustez Anao",
        kind: "Passiva",
        cost: "Nenhum",
        desc: "Bonus em PV.",
      },
      {
        name: "Firme como Rocha",
        kind: "Ativa",
        cost: "Aura",
        desc: "Reduz dano recebido.",
      },
    ],
    subraces: {
      "Anao da Montanha": {
        desc: "Robusto e treinado para o combate em altitude.",
        traits: ["Vigor de montanha", "Disciplina militar"],
        mods: { for: 1, con: 1 },
        abilities: [
          {
            name: "Vigor Alpino",
            kind: "Passiva",
            cost: "Nenhum",
            desc: "Aumenta resistencia em altitude.",
          },
          {
            name: "Impacto de Rocha",
            kind: "Ativa",
            cost: "Aura",
            desc: "Golpe que desestabiliza o alvo.",
          },
        ],
      },
      "Anao da Colina": {
        desc: "Sabio e resistente, ligado a tradicoes antigas.",
        traits: ["Sabedoria pratica", "Resiliencia prolongada"],
        mods: { con: 1, sab: 1 },
        abilities: [
          {
            name: "Raizes Antigas",
            kind: "Passiva",
            cost: "Nenhum",
            desc: "Bonus em resistencia mental.",
          },
          {
            name: "Folego de Pedra",
            kind: "Ativa",
            cost: "Aura",
            desc: "Recupera vigor lentamente.",
          },
        ],
      },
    },
  },
  Halfling: {
    desc: "Pequeno, rapido e surpreendentemente corajoso.",
    mods: { dex: 2, car: 1 },
    traits: ["Sorte natural", "Coragem improvavel"],
    abilities: [
      {
        name: "Sorte Halfling",
        kind: "Passiva",
        cost: "Nenhum",
        desc: "Pequena chance de evitar falhas.",
      },
      {
        name: "Passo Pequeno",
        kind: "Ativa",
        cost: "Aura",
        desc: "Aumenta esquiva por curto tempo.",
      },
    ],
  },
  Gnomo: {
    desc: "Inventivo e curioso, com mente brilhante.",
    mods: { int: 2, dex: 1 },
    traits: ["Curiosidade", "Criatividade", "Detalhista"],
    abilities: [
      {
        name: "Mente Inventiva",
        kind: "Passiva",
        cost: "Nenhum",
        desc: "Bonus em solucoes criativas.",
      },
      {
        name: "Truque Rapido",
        kind: "Ativa",
        cost: "Mana",
        desc: "Pequeno truque magico de curto alcance.",
      },
    ],
  },
  "Meio-Orc": {
    desc: "Forca brutal e instinto de sobrevivencia.",
    mods: { for: 2, con: 1 },
    traits: ["Resistencia feroz", "Instinto de combate"],
    abilities: [
      {
        name: "Instinto Orc",
        kind: "Passiva",
        cost: "Nenhum",
        desc: "Bonus em ataque quando ferido.",
      },
      {
        name: "Investida Brutal",
        kind: "Ativa",
        cost: "Aura",
        desc: "Ataque rapido para fechar distancia.",
      },
    ],
  },
  Tiefling: {
    desc: "Tocado por herancas infernais e poder interior.",
    mods: { car: 2, int: 1 },
    traits: ["Resistencia a fogo", "Presenca sobrenatural"],
    abilities: [
      {
        name: "Sangue Infernal",
        kind: "Passiva",
        cost: "Nenhum",
        desc: "Resistencia a fogo.",
      },
      {
        name: "Chama Sombria",
        kind: "Ativa",
        cost: "Mana",
        desc: "Dano sombrio com chamas.",
      },
    ],
  },
  Dragonborn: {
    desc: "Orgulhoso, com heranca draconica poderosa.",
    mods: { for: 2, car: 1 },
    traits: ["Presenca imponente", "Sopro ancestral"],
    abilities: [
      {
        name: "Heranca Draconica",
        kind: "Passiva",
        cost: "Nenhum",
        desc: "Resistencia elemental.",
      },
      {
        name: "Sopro Elemental",
        kind: "Ativa",
        cost: "Mana",
        desc: "Dano elemental em cone curto.",
      },
    ],
    subraces: {
      "Dragonborn do Fogo": {
        desc: "Ligado ao fogo e a furia ardente.",
        traits: ["Resistencia a fogo", "Ataque flamejante"],
        mods: { con: 1 },
        abilities: [
          {
            name: "Fogo Interno",
            kind: "Passiva",
            cost: "Nenhum",
            desc: "Aumenta dano de fogo.",
          },
          {
            name: "Sopro Flamejante",
            kind: "Ativa",
            cost: "Mana",
            desc: "Dano de fogo em linha curta.",
          },
        ],
      },
      "Dragonborn do Gelo": {
        desc: "Ligado ao frio e a calma implacavel.",
        traits: ["Resistencia a gelo", "Vulnerabilidade leve a fogo"],
        mods: { sab: 1 },
        abilities: [
          {
            name: "Frio Draconico",
            kind: "Passiva",
            cost: "Nenhum",
            desc: "Resistencia a gelo.",
          },
          {
            name: "Sopro Congelante",
            kind: "Ativa",
            cost: "Mana",
            desc: "Dano de gelo em area.",
          },
        ],
      },
      "Dragonborn Eletrico": {
        desc: "Ligado a tempestades e energia eletrica.",
        traits: ["Resistencia a eletrico", "Movimento energizado"],
        mods: { dex: 1 },
        abilities: [
          {
            name: "Pulso Eletrico",
            kind: "Passiva",
            cost: "Nenhum",
            desc: "Resistencia leve a eletrico.",
          },
          {
            name: "Sopro Relampejante",
            kind: "Ativa",
            cost: "Mana",
            desc: "Dano eletrico em cone curto.",
          },
        ],
      },
    },
  },
};

const zodiacBonuses = {
  "Aries": { attrs: { for: 3 }, stats: { pv: 2 } },
  "Touro": { attrs: { con: 3 }, stats: { aura: 1 } },
  "Gemeos": { attrs: { dex: 2, car: 1 }, stats: {} },
  "Cancer": { attrs: { sab: 2 }, stats: { pv: 2 } },
  "Leao": { attrs: { car: 3 }, stats: { aura: 1 } },
  "Virgem": { attrs: { int: 2 }, stats: { mana: 1 } },
  "Libra": { attrs: { dex: 2, car: 1 }, stats: {} },
  "Escorpiao": { attrs: { int: 3 }, stats: { mana: 1 } },
  "Sagitario": { attrs: { dex: 2, for: 1 }, stats: {} },
  "Capricornio": { attrs: { con: 3 }, stats: { pv: 1 } },
  "Aquario": { attrs: { int: 3 }, stats: { mana: 1 } },
  "Peixes": { attrs: { sab: 2 }, stats: { mana: 1 } },
};

let draft = {
  className: null,
  race: null,
  zodiac: null,
  attrs: null,
  stats: null,
};

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
}

function getCharacters() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveCharacters(characters) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
}

function calcZodiac(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Touro";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemeos";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leao";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgem";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Escorpiao";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagitario";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricornio";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquario";
  return "Peixes";
}

function getZodiacBonus(sign) {
  return zodiacBonuses[sign] || { attrs: {}, stats: {} };
}

function randomRace() {
  const races = Object.keys(raceData);
  const baseName = races[Math.floor(Math.random() * races.length)];
  const base = raceData[baseName];
  const subraces = base && base.subraces ? Object.keys(base.subraces) : [];
  const subrace = subraces.length ? subraces[Math.floor(Math.random() * subraces.length)] : null;
  return { name: baseName, subrace };
}

function buildAttributesDetailed(className, race, zodiac) {
  const base = { for: 10, dex: 10, con: 10, int: 10, sab: 10, car: 10 };
  const classMods = classData[className].mods;
  const raceEntry = raceData[race.name];
  const raceMods = raceEntry.mods;
  const subraceMods =
    race.subrace && raceEntry.subraces && raceEntry.subraces[race.subrace]
      ? raceEntry.subraces[race.subrace].mods
      : null;
  const zodiacMods = getZodiacBonus(zodiac).attrs;

  const result = { ...base };
  Object.entries(classMods).forEach(([key, value]) => {
    result[key] += value;
  });
  Object.entries(raceMods).forEach(([key, value]) => {
    result[key] += value;
  });
  if (subraceMods) {
    Object.entries(subraceMods).forEach(([key, value]) => {
      result[key] += value;
    });
  }
  if (zodiacMods) {
    Object.entries(zodiacMods).forEach(([key, value]) => {
      result[key] += value;
    });
  }
  return {
    base,
    classMods,
    raceMods,
    subraceMods: subraceMods || {},
    zodiacMods: zodiacMods || {},
    total: result,
  };
}

function buildStatsDetailed(className, attrs, zodiac) {
  const type = classData[className].type;
  const con = attrs.con;
  let pv = 10 + con;
  let mana = 0;
  let aura = 0;
  let stamina = 20 + con;

  if (type === "Magica") {
    pv = 8 + con;
    mana = 25 + attrs.int + attrs.sab;
  } else if (type === "Fisica") {
    pv = 12 + con;
    aura = 25 + attrs.for + attrs.dex;
  } else {
    pv = 10 + con;
    mana = 15 + attrs.int + attrs.sab;
    aura = 15 + attrs.for + attrs.dex;
  }

  const zodiacStats = getZodiacBonus(zodiac).stats || {};
  return {
    base: { pv, mana, aura, stamina },
    zodiac: zodiacStats,
    total: {
      pv: pv + (zodiacStats.pv || 0),
      mana: mana + (zodiacStats.mana || 0),
      aura: aura + (zodiacStats.aura || 0),
      stamina: stamina + (zodiacStats.stamina || 0),
    },
  };
}

function renderAttrs(attrs, container) {
  const labels = {
    for: "Forca",
    dex: "Destreza",
    con: "Constituicao",
    int: "Inteligencia",
    sab: "Sabedoria",
    car: "Carisma",
  };

  container.innerHTML = "";
  Object.keys(labels).forEach((key) => {
    const div = document.createElement("div");
    div.className = "attr-pill";
    div.innerHTML = `<span>${labels[key]}</span><strong>${attrs[key]}</strong>`;
    container.appendChild(div);
  });
}

function normalizeText(value) {
  if (!value) return value;
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getRaceFromChar(char) {
  if (char.race && char.race.name) return char.race;
  return {
    name: normalizeText(char.raceName),
    subrace: normalizeText(char.subraceName || null),
  };
}

function getRaceInfo(race) {
  const base = raceData[race.name];
  const sub =
    race.subrace && base && base.subraces && base.subraces[race.subrace]
      ? base.subraces[race.subrace]
      : null;
  return { base, sub };
}

function buildTraitsHtml(traits) {
  if (!traits || !traits.length) return `<p class="muted">Nenhum.</p>`;
  return `<ul class="traits">${traits.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function formatBonusLine(label, value) {
  if (!value) return "";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value} ${label}`;
}

function buildBonusList(bonusObj) {
  const labels = {
    for: "Forca",
    dex: "Destreza",
    con: "Constituicao",
    int: "Inteligencia",
    sab: "Sabedoria",
    car: "Carisma",
    pv: "PV",
    mana: "Mana",
    aura: "Aura",
    stamina: "Stamina",
  };
  const items = Object.keys(bonusObj || {})
    .filter((key) => bonusObj[key])
    .map((key) => formatBonusLine(labels[key] || key, bonusObj[key]));
  if (!items.length) return `<p class="muted">Nenhum.</p>`;
  return `<ul class="traits">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function normalizeAbilityCost(cost, classType) {
  if (!cost || cost === "Nenhum") return cost;
  if (classType === "Mista") return cost;
  if (classType === "Magica") {
    if (cost === "Aura") return "Mana";
    if (cost === "Aura + Mana") return "Mana";
    return cost;
  }
  if (classType === "Fisica") {
    if (cost === "Mana") return "Aura";
    if (cost === "Aura + Mana") return "Aura";
    return cost;
  }
  return cost;
}

function buildAbilitiesHtml(abilities, classType, originLabel) {
  if (!abilities || !abilities.length) return `<p class="muted">Nenhuma.</p>`;
  return `
    <div class="abilities">
      ${abilities
        .map(
          (item) => `
        <div class="ability">
          <div class="ability-title">${item.name}</div>
          <div class="ability-meta">${item.kind} - Custo: ${normalizeAbilityCost(item.cost, classType)}${originLabel ? ` - Origem: ${originLabel}` : ""}</div>
          <div class="ability-desc">${item.desc}</div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

function updatePreview() {
  if (!draft.className || !draft.race || !draft.zodiac) {
    el.preview.classList.add("hidden");
    return;
  }

  const attrDetails = buildAttributesDetailed(draft.className, draft.race, draft.zodiac);
  const statsDetails = buildStatsDetailed(draft.className, attrDetails.total, draft.zodiac);
  draft.attrs = attrDetails.total;
  draft.stats = statsDetails.total;

  const raceInfo = getRaceInfo(draft.race);
  const classAbilitiesList = classAbilities[draft.className] || [];
  const raceAbilitiesList = raceInfo.base ? raceInfo.base.abilities || [] : [];
  const subraceAbilitiesList = raceInfo.sub ? raceInfo.sub.abilities || [] : [];

  el.previewClass.textContent = draft.className;
  el.previewType.textContent = `Tipo: ${classData[draft.className].type}`;
  el.previewRace.textContent = draft.race.name;
  el.previewSubrace.textContent = `Subraca: ${draft.race.subrace || "Nenhuma"}`;
  el.previewSign.textContent = `Signo: ${draft.zodiac}`;
  el.previewZodiac.textContent = draft.zodiac;
  const zodiacBonus = { ...(attrDetails.zodiacMods || {}), ...(statsDetails.zodiac || {}) };
  el.previewZodiacBonus.innerHTML = buildBonusList(zodiacBonus);
  el.previewPV.textContent = `PV: ${draft.stats.pv}`;
  el.previewMana.textContent = `Mana: ${draft.stats.mana}`;
  el.previewAura.textContent = `Aura: ${draft.stats.aura}`;
  el.previewStamina.textContent = `Stamina: ${draft.stats.stamina}`;

  renderAttrs(draft.attrs, el.previewAttrs);
  el.previewClassAbilities.innerHTML = buildAbilitiesHtml(
    classAbilitiesList,
    classData[draft.className].type,
    "Classe"
  );
  el.previewRaceAbilities.innerHTML = buildAbilitiesHtml(
    raceAbilitiesList,
    classData[draft.className].type,
    "Raca"
  );
  el.previewSubraceAbilities.innerHTML = buildAbilitiesHtml(
    subraceAbilitiesList,
    classData[draft.className].type,
    "Subraca"
  );
  el.preview.classList.remove("hidden");
}

function resetDraft() {
  draft = { className: null, race: null, zodiac: null, attrs: null, stats: null };
  if (el.signDisplay) el.signDisplay.value = "";
  el.preview.classList.add("hidden");
}

function getClassTypeLabel(type) {
  if (type === "Fisica") return "Fisica (Aura)";
  if (type === "Magica") return "Magica (Mana)";
  return "Mista (Mana + Aura)";
}

function guessRaceStyle(raceEntry) {
  const mods = raceEntry.mods || {};
  const physical = (mods.for || 0) + (mods.con || 0) + (mods.dex || 0);
  const magic = (mods.int || 0) + (mods.sab || 0) + (mods.car || 0);
  if (physical >= 4 && magic <= 1) return "Fisico";
  if (magic >= 4 && physical <= 1) return "Magico";
  if (mods.con >= 2) return "Defensivo";
  return "Versatil";
}

function renderCatalogClasses() {
  const items = Object.keys(classData).map((name) => {
    const data = classData[name];
    const typeLabel = getClassTypeLabel(data.type);
    const abilities = classAbilities[name] || [];
    const passives = abilities.filter((a) => a.kind === "Passiva");
    const actives = abilities.filter((a) => a.kind === "Ativa");
    return `
      <div class="catalog-item">
        <div class="catalog-title">${name}</div>
        <div class="catalog-meta">Tipo: ${typeLabel}</div>
        <div class="catalog-desc">${data.desc}</div>
        <div class="muted">Habilidades passivas</div>
        ${buildAbilitiesHtml(passives, data.type, "Classe")}
        <div class="muted">Habilidades ativas</div>
        ${buildAbilitiesHtml(actives, data.type, "Classe")}
      </div>
    `;
  });
  el.catalogClasses.innerHTML = items.join("");
}

function renderCatalogRaces() {
  const items = Object.keys(raceData).map((name) => {
    const data = raceData[name];
    const style = guessRaceStyle(data);
    return `
      <div class="catalog-item">
        <div class="catalog-title">${name}</div>
        <div class="catalog-meta">Estilo: ${style}</div>
        <div class="catalog-desc">${data.desc}</div>
        <div class="muted">Habilidades raciais</div>
        ${buildAbilitiesHtml(data.abilities || [], "Mista", "Raca")}
      </div>
    `;
  });
  el.catalogRaces.innerHTML = items.join("");
}

function renderCatalogSubraces() {
  const blocks = Object.keys(raceData).map((raceName) => {
    const race = raceData[raceName];
    const subraces = race.subraces ? Object.keys(race.subraces) : [];
    if (!subraces.length) {
      return `
        <div class="catalog-item">
          <div class="catalog-title">${raceName}</div>
          <div class="catalog-desc">Sem subracas.</div>
        </div>
      `;
    }
    const subItems = subraces
      .map((subName) => {
        const sub = race.subraces[subName];
        return `
          <div class="catalog-item">
            <div class="catalog-title">${subName}</div>
            <div class="catalog-desc">${sub.desc}</div>
            <div class="muted">Habilidades adicionais</div>
            ${buildAbilitiesHtml(sub.abilities || [], "Mista", "Subraca")}
          </div>
        `;
      })
      .join("");
    return `
      <div class="catalog-item">
        <div class="catalog-title">Raca: ${raceName}</div>
        <div class="catalog-desc">${race.desc}</div>
        <div class="catalog-grid">${subItems}</div>
      </div>
    `;
  });
  el.catalogSubraces.innerHTML = blocks.join("");
}

function renderCatalog() {
  renderCatalogClasses();
  renderCatalogRaces();
  renderCatalogSubraces();
}

function buildSelectOptions(select, items, placeholder) {
  select.innerHTML = "";
  if (placeholder) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = placeholder;
    select.appendChild(opt);
  }
  items.forEach((item) => {
    const opt = document.createElement("option");
    opt.value = item;
    opt.textContent = item;
    select.appendChild(opt);
  });
}

function initClassSelect() {
  buildSelectOptions(el.classSelect, Object.keys(classData), "Selecione a classe");
}

function initRaceSelect() {
  buildSelectOptions(el.raceSelect, Object.keys(raceData), "Selecione a raca");
  updateSubraceOptions();
}

function updateSubraceOptions() {
  const raceName = el.raceSelect.value;
  if (!raceName || !raceData[raceName] || !raceData[raceName].subraces) {
    buildSelectOptions(el.subraceSelect, [], "Nenhuma");
    return;
  }
  const subraces = Object.keys(raceData[raceName].subraces);
  buildSelectOptions(el.subraceSelect, subraces, "Nenhuma");
}

function setSelectedClass(name) {
  el.classSelect.value = name || "";
  draft.className = name || null;
  updatePreview();
}

function setSelectedRace(race) {
  el.raceSelect.value = race.name || "";
  updateSubraceOptions();
  el.subraceSelect.value = race.subrace || "";
  draft.race = race.name ? { name: race.name, subrace: race.subrace || null } : null;
  updatePreview();
}

function refreshSign() {
  const dateValue = el.birth.value;
  if (!dateValue) {
    el.signDisplay.value = "";
    draft.zodiac = null;
    updatePreview();
    return;
  }
  const date = new Date(`${dateValue}T12:00:00`);
  const zodiac = calcZodiac(date);
  draft.zodiac = zodiac;
  el.signDisplay.value = zodiac;
  updatePreview();
}

function renderList() {
  const characters = getCharacters();
  el.list.innerHTML = "";
  el.listEmpty.style.display = characters.length ? "none" : "block";

  characters.forEach((char) => {
    const race = getRaceFromChar(char);
    const raceLabel = race.subrace ? `${race.name} - ${race.subrace}` : race.name;
    const item = document.createElement("div");
    item.className = "list-item";
    item.innerHTML = `
      <div>
        <strong>${char.name}</strong>
        <div class="muted">${char.className} - ${raceLabel}</div>
      </div>
      <div class="list-actions">
        <button class="btn" data-action="view" data-id="${char.id}">Visualizar</button>
        <button class="btn danger" data-action="delete" data-id="${char.id}">Excluir</button>
      </div>
    `;
    el.list.appendChild(item);
  });
}

function renderView(char) {
  const type = classData[char.className].type;
  const race = getRaceFromChar(char);
  const attrDetails = buildAttributesDetailed(char.className, race, char.zodiac);
  const statsDetails = buildStatsDetailed(char.className, attrDetails.total, char.zodiac);
  const raceInfo = getRaceInfo(race);
  const baseTraits = buildTraitsHtml(raceInfo.base ? raceInfo.base.traits : []);
  const subraceTraits = buildTraitsHtml(raceInfo.sub ? raceInfo.sub.traits : []);
  const classAbilitiesList = classAbilities[char.className] || [];
  const raceAbilitiesList = raceInfo.base ? raceInfo.base.abilities || [] : [];
  const subraceAbilitiesList = raceInfo.sub ? raceInfo.sub.abilities || [] : [];
  const classBonusList = buildBonusList(attrDetails.classMods);
  const raceBonusList = buildBonusList(attrDetails.raceMods);
  const subraceBonusList = buildBonusList(attrDetails.subraceMods);
  const zodiacBonusList = buildBonusList({
    ...(attrDetails.zodiacMods || {}),
    ...(statsDetails.zodiac || {}),
  });
  el.view.innerHTML = `
    <div class="card">
      <h3>${char.name}</h3>
      <p>${char.className} - ${race.name}</p>
      <p class="muted">Signo: ${char.zodiac}</p>
    </div>
    <div class="view-grid">
      <div class="card">
        <h4>Status</h4>
        <p>PV: ${statsDetails.total.pv}</p>
        <p class="mana">Mana: ${statsDetails.total.mana}</p>
        <p class="aura">Aura: ${statsDetails.total.aura}</p>
        <p>Stamina: ${statsDetails.total.stamina}</p>
        <p class="muted">Tipo: ${type}</p>
      </div>
      <div class="card">
        <h4>Atributos</h4>
        <div class="attrs" id="view-attrs"></div>
      </div>
      <div class="card">
        <h4>Bonus de Classe</h4>
        ${classBonusList}
      </div>
      <div class="card">
        <h4>Bonus de Raca</h4>
        ${raceBonusList}
      </div>
      <div class="card">
        <h4>Bonus de Subraca</h4>
        ${subraceBonusList}
      </div>
      <div class="card">
        <h4>Bonus de Signo</h4>
        ${zodiacBonusList}
      </div>
      <div class="card">
        <h4>Descricao da Classe</h4>
        <p>${classData[char.className].desc}</p>
        <div class="muted">Habilidades da Classe</div>
        ${buildAbilitiesHtml(classAbilitiesList, type, "Classe")}
      </div>
      <div class="card">
        <h4>Raca</h4>
        <p><strong>${race.name}</strong></p>
        <p>${raceInfo.base ? raceInfo.base.desc : "Sem descricao."}</p>
        <div class="muted">Tracos herdados</div>
        ${baseTraits}
        <div class="muted">Habilidades da Raca</div>
        ${buildAbilitiesHtml(raceAbilitiesList, type, "Raca")}
      </div>
      <div class="card">
        <h4>Subraca</h4>
        <p><strong>${race.subrace || "Nenhuma"}</strong></p>
        <p>${raceInfo.sub ? raceInfo.sub.desc : "Sem subraca."}</p>
        <div class="muted">Tracos adicionais</div>
        ${subraceTraits}
        <div class="muted">Habilidades da Subraca</div>
        ${buildAbilitiesHtml(subraceAbilitiesList, type, "Subraca")}
      </div>
    </div>
  `;

  renderAttrs(attrDetails.total, document.getElementById("view-attrs"));
}

el.goCreate.addEventListener("click", () => {
  resetDraft();
  initClassSelect();
  initRaceSelect();
  refreshSign();
  showScreen("create");
});

el.goList.addEventListener("click", () => {
  renderList();
  showScreen("list");
});

el.goCatalog.addEventListener("click", () => {
  renderCatalog();
  showScreen("catalog");
});

el.backToList.addEventListener("click", () => {
  renderList();
  showScreen("list");
});

el.backToHome.addEventListener("click", () => {
  showScreen("home");
});

el.tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;
    el.tabButtons.forEach((btn) => btn.classList.remove("active"));
    el.tabPanels.forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    const panel = document.getElementById(target);
    if (panel) panel.classList.add("active");
  });
});

el.btnClass.addEventListener("click", () => {
  const classes = Object.keys(classData);
  const className = classes[Math.floor(Math.random() * classes.length)];
  setSelectedClass(className);
});

el.btnRace.addEventListener("click", () => {
  const race = randomRace();
  setSelectedRace(race);
});

el.classSelect.addEventListener("change", () => {
  setSelectedClass(el.classSelect.value || null);
});

el.raceSelect.addEventListener("change", () => {
  const raceName = el.raceSelect.value;
  updateSubraceOptions();
  if (!raceName) {
    draft.race = null;
    updatePreview();
    return;
  }
  const subrace = el.subraceSelect.value || null;
  draft.race = { name: raceName, subrace };
  updatePreview();
});

el.subraceSelect.addEventListener("change", () => {
  if (!draft.race || !draft.race.name) return;
  const subrace = el.subraceSelect.value || null;
  draft.race = { name: draft.race.name, subrace };
  updatePreview();
});

el.birth.addEventListener("change", () => {
  refreshSign();
});

el.btnCreate.addEventListener("click", () => {
  const name = el.name.value.trim();
  if (!name) {
    alert("Informe o nome do personagem.");
    return;
  }
  if (!draft.zodiac) {
    alert("Informe a data de nascimento para calcular o signo.");
    return;
  }
  if (!draft.className) {
    alert("Escolha uma classe ou use classe aleatoria.");
    return;
  }
  if (!draft.race) {
    alert("Escolha uma raca ou use raca aleatoria.");
    return;
  }

  const characters = getCharacters();
  const attrDetails = buildAttributesDetailed(draft.className, draft.race, draft.zodiac);
  const statsDetails = buildStatsDetailed(draft.className, attrDetails.total, draft.zodiac);
  const newChar = {
    id: crypto.randomUUID(),
    name,
    className: draft.className,
    race: draft.race,
    raceName: draft.race.name,
    zodiac: draft.zodiac,
    attrs: attrDetails.total,
    stats: statsDetails.total,
  };

  characters.push(newChar);
  saveCharacters(characters);
  renderList();
  showScreen("list");
  el.name.value = "";
  el.birth.value = "";
  resetDraft();
});

el.list.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const action = button.dataset.action;
  const id = button.dataset.id;
  const characters = getCharacters();
  const char = characters.find((item) => item.id === id);

  if (action === "view" && char) {
    renderView(char);
    showScreen("view");
  }

  if (action === "delete" && char) {
    const confirmDelete = confirm(`Excluir ${char.name}?`);
    if (!confirmDelete) return;
    const updated = characters.filter((item) => item.id !== id);
    saveCharacters(updated);
    renderList();
  }
});

showScreen("home");
