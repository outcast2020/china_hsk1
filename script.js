const ANIMAIS_CHINESES = [
  "Rato", "Boi", "Tigre", "Coelho",
  "Dragão", "Serpente", "Cavalo", "Cabra",
  "Macaco", "Galo", "Cão", "Porco"
];

/*
  Datas de início do Ano Novo Chinês.
  A lógica é:
  - Se a pessoa nasceu antes do Ano Novo Chinês daquele ano,
    ela pertence ao animal do ano chinês anterior.
  - Se nasceu no dia do Ano Novo Chinês ou depois, pertence ao ano atual.
*/
const INICIO_ANO_CHINES = {
  1900: "1900-01-31",
  1901: "1901-02-19",
  1902: "1902-02-08",
  1903: "1903-01-29",
  1904: "1904-02-16",
  1905: "1905-02-04",
  1906: "1906-01-25",
  1907: "1907-02-13",
  1908: "1908-02-02",
  1909: "1909-01-22",
  1910: "1910-02-10",
  1911: "1911-01-30",
  1912: "1912-02-18",
  1913: "1913-02-06",
  1914: "1914-01-26",
  1915: "1915-02-14",
  1916: "1916-02-03",
  1917: "1917-01-23",
  1918: "1918-02-11",
  1919: "1919-02-01",
  1920: "1920-02-20",
  1921: "1921-02-08",
  1922: "1922-01-28",
  1923: "1923-02-16",
  1924: "1924-02-05",
  1925: "1925-01-24",
  1926: "1926-02-13",
  1927: "1927-02-02",
  1928: "1928-01-23",
  1929: "1929-02-10",
  1930: "1930-01-30",
  1931: "1931-02-17",
  1932: "1932-02-06",
  1933: "1933-01-26",
  1934: "1934-02-14",
  1935: "1935-02-04",
  1936: "1936-01-24",
  1937: "1937-02-11",
  1938: "1938-01-31",
  1939: "1939-02-19",
  1940: "1940-02-08",
  1941: "1941-01-27",
  1942: "1942-02-15",
  1943: "1943-02-04",
  1944: "1944-01-25",
  1945: "1945-02-13",
  1946: "1946-02-01",
  1947: "1947-01-22",
  1948: "1948-02-10",
  1949: "1949-01-29",
  1950: "1950-02-17",
  1951: "1951-02-06",
  1952: "1952-01-27",
  1953: "1953-02-14",
  1954: "1954-02-03",
  1955: "1955-01-24",
  1956: "1956-02-12",
  1957: "1957-01-31",
  1958: "1958-02-18",
  1959: "1959-02-08",
  1960: "1960-01-28",
  1961: "1961-02-15",
  1962: "1962-02-05",
  1963: "1963-01-25",
  1964: "1964-02-13",
  1965: "1965-02-02",
  1966: "1966-01-21",
  1967: "1967-02-09",
  1968: "1968-01-30",
  1969: "1969-02-17",
  1970: "1970-02-06",
  1971: "1971-01-27",
  1972: "1972-02-15",
  1973: "1973-02-03",
  1974: "1974-01-23",
  1975: "1975-02-11",
  1976: "1976-01-31",
  1977: "1977-02-18",
  1978: "1978-02-07",
  1979: "1979-01-28",
  1980: "1980-02-16",
  1981: "1981-02-05",
  1982: "1982-01-25",
  1983: "1983-02-13",
  1984: "1984-02-02",
  1985: "1985-02-20",
  1986: "1986-02-09",
  1987: "1987-01-29",
  1988: "1988-02-17",
  1989: "1989-02-06",
  1990: "1990-01-27",
  1991: "1991-02-15",
  1992: "1992-02-04",
  1993: "1993-01-23",
  1994: "1994-02-10",
  1995: "1995-01-31",
  1996: "1996-02-19",
  1997: "1997-02-07",
  1998: "1998-01-28",
  1999: "1999-02-16",
  2000: "2000-02-05",
  2001: "2001-01-24",
  2002: "2002-02-12",
  2003: "2003-02-01",
  2004: "2004-01-22",
  2005: "2005-02-09",
  2006: "2006-01-29",
  2007: "2007-02-18",
  2008: "2008-02-07",
  2009: "2009-01-26",
  2010: "2010-02-14",
  2011: "2011-02-03",
  2012: "2012-01-23",
  2013: "2013-02-10",
  2014: "2014-01-31",
  2015: "2015-02-19",
  2016: "2016-02-08",
  2017: "2017-01-28",
  2018: "2018-02-16",
  2019: "2019-02-05",
  2020: "2020-01-25",
  2021: "2021-02-12",
  2022: "2022-02-01",
  2023: "2023-01-22",
  2024: "2024-02-10",
  2025: "2025-01-29",
  2026: "2026-02-17",
  2027: "2027-02-06",
  2028: "2028-01-26",
  2029: "2029-02-13",
  2030: "2030-02-03",
  2031: "2031-01-23",
  2032: "2032-02-11"
};

const dados = {
  "Rato": {
    emoji: "🐭",
    hanzi: "鼠",
    pinyin: "shǔ",
    caracteristicas: "inteligente, curioso e rápido.",
    frase: "我是鼠。",
    frasePinyin: "Wǒ shì shǔ.",
    traducao: "Eu sou Rato."
  },
  "Boi": {
    emoji: "🐂",
    hanzi: "牛",
    pinyin: "niú",
    caracteristicas: "forte, paciente e trabalhador.",
    frase: "我是牛。",
    frasePinyin: "Wǒ shì niú.",
    traducao: "Eu sou Boi."
  },
  "Tigre": {
    emoji: "🐯",
    hanzi: "虎",
    pinyin: "hǔ",
    caracteristicas: "corajoso, intenso e protetor.",
    frase: "我是虎。",
    frasePinyin: "Wǒ shì hǔ.",
    traducao: "Eu sou Tigre."
  },
  "Coelho": {
    emoji: "🐰",
    hanzi: "兔",
    pinyin: "tù",
    caracteristicas: "sensível, calmo e elegante.",
    frase: "我是兔。",
    frasePinyin: "Wǒ shì tù.",
    traducao: "Eu sou Coelho."
  },
  "Dragão": {
    emoji: "🐉",
    hanzi: "龙",
    pinyin: "lóng",
    caracteristicas: "criativo, confiante e poderoso.",
    frase: "我是龙。",
    frasePinyin: "Wǒ shì lóng.",
    traducao: "Eu sou Dragão."
  },
  "Serpente": {
    emoji: "🐍",
    hanzi: "蛇",
    pinyin: "shé",
    caracteristicas: "sábia, observadora e estratégica.",
    frase: "我是蛇。",
    frasePinyin: "Wǒ shì shé.",
    traducao: "Eu sou Serpente."
  },
  "Cavalo": {
    emoji: "🐴",
    hanzi: "马",
    pinyin: "mǎ",
    caracteristicas: "livre, energético e comunicativo.",
    frase: "我是马。",
    frasePinyin: "Wǒ shì mǎ.",
    traducao: "Eu sou Cavalo."
  },
  "Cabra": {
    emoji: "🐐",
    hanzi: "羊",
    pinyin: "yáng",
    caracteristicas: "criativa, sensível e cooperativa.",
    frase: "我是羊。",
    frasePinyin: "Wǒ shì yáng.",
    traducao: "Eu sou Cabra."
  },
  "Macaco": {
    emoji: "🐵",
    hanzi: "猴",
    pinyin: "hóu",
    caracteristicas: "esperto, brincalhão e inventivo.",
    frase: "我是猴。",
    frasePinyin: "Wǒ shì hóu.",
    traducao: "Eu sou Macaco."
  },
  "Galo": {
    emoji: "🐓",
    hanzi: "鸡",
    pinyin: "jī",
    caracteristicas: "organizado, atento e expressivo.",
    frase: "我是鸡。",
    frasePinyin: "Wǒ shì jī.",
    traducao: "Eu sou Galo."
  },
  "Cão": {
    emoji: "🐶",
    hanzi: "狗",
    pinyin: "gǒu",
    caracteristicas: "leal, justo e protetor.",
    frase: "我是狗。",
    frasePinyin: "Wǒ shì gǒu.",
    traducao: "Eu sou Cão."
  },
  "Porco": {
    emoji: "🐷",
    hanzi: "猪",
    pinyin: "zhū",
    caracteristicas: "generoso, alegre e sincero.",
    frase: "我是猪。",
    frasePinyin: "Wǒ shì zhū.",
    traducao: "Eu sou Porco."
  }
};

let animalAtual = null;

const landing = document.getElementById("landing");
const resultado = document.getElementById("resultado");

document.getElementById("btnDescobrir").addEventListener("click", descobrirAnimal);
document.getElementById("btnVoltar").addEventListener("click", voltarInicio);
document.getElementById("btnNovaPesquisa").addEventListener("click", novaPesquisa);
document.getElementById("btnSom").addEventListener("click", ouvirMandarim);

function descobrirAnimal() {
  const nome = document.getElementById("nome").value.trim();
  const nascimento = document.getElementById("nascimento").value;

  if (!nome || !nascimento) {
    alert("Preencha seu nome e sua data de nascimento.");
    return;
  }

  const anoNascimento = Number(nascimento.slice(0, 4));

  if (!INICIO_ANO_CHINES[anoNascimento]) {
    alert("Este app calcula com precisão datas entre 1900 e 2032.");
    return;
  }

  const anoChines = calcularAnoChines(nascimento);
  const animal = calcularAnimalPorAnoChines(anoChines);
  const info = dados[animal];

  animalAtual = info;

  document.getElementById("emoji").textContent = info.emoji;
  document.getElementById("hanzi").textContent = info.hanzi;
  document.getElementById("tituloResultado").textContent = `${nome}, seu animal é ${animal}`;
  document.getElementById("pinyin").textContent = `${info.hanzi} · ${info.pinyin}`;
  document.getElementById("caracteristicas").textContent = info.caracteristicas;
  document.getElementById("frase").textContent = info.frase;
  document.getElementById("frasePinyin").textContent = info.frasePinyin;
  document.getElementById("traducao").textContent = info.traducao;

  landing.classList.remove("active");
  resultado.classList.add("active");
}

function calcularAnoChines(dataNascimento) {
  const ano = Number(dataNascimento.slice(0, 4));
  const inicioAnoChines = INICIO_ANO_CHINES[ano];

  if (dataNascimento < inicioAnoChines) {
    return ano - 1;
  }

  return ano;
}

function calcularAnimalPorAnoChines(anoChines) {
  const indice = ((anoChines - 1900) % 12 + 12) % 12;
  return ANIMAIS_CHINESES[indice];
}

function ouvirMandarim() {
  if (!animalAtual) return;

  if (!("speechSynthesis" in window)) {
    alert("Seu navegador não suporta leitura por voz.");
    return;
  }

  window.speechSynthesis.cancel();

  const fala = new SpeechSynthesisUtterance(animalAtual.hanzi);
  fala.lang = "zh-CN";
  fala.rate = 0.75;
  fala.pitch = 1;

  const vozes = window.speechSynthesis.getVoices();
  const vozChinesa = vozes.find(voz =>
    voz.lang === "zh-CN" ||
    voz.lang === "zh_Hans_CN" ||
    voz.lang.startsWith("zh")
  );

  if (vozChinesa) {
    fala.voice = vozChinesa;
  }

  window.speechSynthesis.speak(fala);
}

function voltarInicio() {
  resultado.classList.remove("active");
  landing.classList.add("active");
}

function novaPesquisa() {
  document.getElementById("nome").value = "";
  document.getElementById("nascimento").value = "";
  animalAtual = null;
  voltarInicio();
}
