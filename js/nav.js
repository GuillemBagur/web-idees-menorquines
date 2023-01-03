const getUserLang = () => {
  let userLang = navigator.language || navigator.userLanguage;
  const result = userLang.split("-")[1] ?? "es";
  return result.toLowerCase();
}

const allNavLinks = {
  es: {
    Inicio: "index.html",
    "¿Quiénes somos?": "quienes-somos.html",
    Servicios: "servicios.html",
    Catálogo: "catalogo.html",
    Contacta: "contacto.html",
  },

  en: {
    Home: "index.html",
    "About us": "quienes-somos.html",
    Services: "servicios.html",
    Catalog: "catalogo.html",
    Contact: "contacto.html",
  },

  ca: {
    Inici: "index.html",
    "Sobre nosaltres": "quienes-somos.html",
    Serveis: "servicios.html",
    Catàlegs: "catalogo.html",
    Contacte: "contacto.html",
  },
};

let lang = localStorage.getItem("lang") ?? getUserLang();;
const navLinks = allNavLinks[lang];

document.getElementById("nav").innerHTML = "";
let linksList = "";

for (let key in navLinks) {
  const linkTitle = key;
  const link = navLinks[key];
  const toRender = `
    <li class="nav__nav-link-li">
        <a onclick="toggleOpenNav()" class="nav__nav-link" href="${link}">${linkTitle}</a>
    </li>`;

  linksList += toRender;
}

linksList += `
<li class="nav__nav-link-li">
<button id="change-lang" class="change-lang"><img class="icon icon--nav" width="24" src="https://unpkg.com/@icon/icofont/icons/globe.svg" alt="Icono de cambiar de idioma" />
  <ul class="choose-lang">
    <li class="choose-lang__lang"><a class="choose-lang__link" data-lang="es">Español</a></li>
    <li class="choose-lang__lang"><a class="choose-lang__link" data-lang="ca">Català</a></li>
    <li class="choose-lang__lang"><a class="choose-lang__link" data-lang="en">English</a></li>
  </ul>
</button>
</li>
`;

document.getElementById("nav").innerHTML = `
<a class="nav__home-link" href="/index.html">
<img class="nav__logo" src="imgs/logo.png" alt="Nuestro logotipo" /></a>
  <button class="hamburger" id="hamburger">
    <div class="hamburger__bar hamburger__bar--1"></div>
    <div class="hamburger__bar hamburger__bar--2"></div>
    <div class="hamburger__bar hamburger__bar--3"></div>
  </button>
<ul class="nav__links-list" id="links-list"></ul>
`;

document.getElementById("links-list").innerHTML = linksList;


// Creates a bg layer to click on to hide the current active popup
const createTranspLayerToClick = (els) => {
  const layer = document.createElement("div");
  layer.classList.add("bg-layer");
  layer.addEventListener("click", () => {
    for (let el of els) {
      el.classList.remove("active");
      layer.remove();
    }
  });

  document.body.appendChild(layer);
};

const toggleOpenNav = () => {
  // Media query
  if (window.innerWidth > 550) return;
  const linksList = document.getElementById("links-list");
  linksList.classList.toggle("active");
  const hamburger = document.getElementById("hamburger");
  hamburger.classList.toggle("active");

  // Remove possible bgLayers
  const allBgLayers = document.getElementsByClassName("bg-layer");
  for (let layer of allBgLayers) {
    layer.remove();
  }

  if (linksList.classList.contains("active")) {
    createTranspLayerToClick([linksList, hamburger]);
  }
};

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", toggleOpenNav);

const allCatalogs = [
  {
    url: "https://viewer.joomag.com/clique-2022-spain/0654052001640687066?short",
    img: "imgs/logos/clique.jpg",
    title: "Clique",
  },

  {
    url: "https://www.sols-products.com/ecatalogue/2022/ES/index.html",
    img: "imgs/logos/sols.jpg",
    title: "Sol's",
  },

  {
    url: "https://static.gorfactory.es/catalogs/pdf/2022/roly_es.pdf",
    img: "imgs/logos/roly.jpg",
    title: "Roly",
  },

  {
    url: "https://www.acquaroyal.com/inicio-catalogo-productos/",
    img: "imgs/logos/acquaroyal.jpg",
    title: "Acqua Royal",
  },

  {
    url: "http://resources.jhktshirt.com/catalogue/jhktshirt_catalogue_es.pdf",
    img: "imgs/logos/jhk.jpg",
    title: "JHK",
  },

  {
    url: "https://www.velilla-group.com/es/catalogos?___store=es",
    img: "imgs/logos/velilla.jpg",
    title: "Velilla",
  },

  {
    url: "https://issuu.com/workteamoficial/docs/catalogo_completo_esp_2022",
    img: "imgs/logos/workteam.jpg",
    title: "WorkTeam",
  },

  {
    url: "https://www.payperwear.com/flex/AppData/Redational/ppw/cataloghi/corporate/PayperCatalogueCW_ED31_ES_PT.pdf",
    img: "imgs/logos/payper.jpg",
    title: "PayPerWear",
  },

  {
    url: "http://www.valentocatalog.eu/es-flash/index.html",
    img: "imgs/logos/valento.jpg",
    title: "Valento",
  },

  {
    url: "https://rogersev.info-ges.com/",
    img: "imgs/logos/roger.jpg",
    title: "Roger",
  },

  {
    url: "https://makito.es/epages/Makito.sf/sec4c0597f2f0/?ObjectPath=/Shops/Makito/Categories/CATALOGOS",
    img: "imgs/logos/makito.jpg",
    title: "Makito",
  },

  {
    url: "https://www.flipsnack.com/9FA75F58B7A/main20_enjoy_2020_es/full-view.html",
    img: "imgs/logos/elevate.jpg",
    title: "Elevate",
  },

  {
    url: "https://view.joomag.com/projob-projob-2020-sp/0289677001578467544?short&",
    img: "imgs/logos/projob.jpg",
    title: "Projob",
  },

  {
    url: "https://www.ggoya.com/?___store=es",
    img: "imgs/logos/goya.png",
    title: "Goya",
  },

  {
    url: "https://static.gorfactory.es/catalogs/pdf/2022/stamina_es.pdf",
    img: "imgs/logos/stamina.png",
    title: "Stamina",
  },
];
