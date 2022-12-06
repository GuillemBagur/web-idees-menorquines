const navLinks = {
  Inicio: "index.html",
  "¿Quiénes somos?": "quienes-somos.html",
  Servicios: "servicios.html",
  Catálogo: "index.html#catalogo",
  Contacta: "contacto.html",
};

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
  if(window.innerWidth > 550) return;
  const linksList = document.getElementById("links-list");
  linksList.classList.toggle("active");
  const hamburger = document.getElementById("hamburger");
  hamburger.classList.toggle("active");

  // Remove possible bgLayers
  const allBgLayers = document.getElementsByClassName("bg-layer");
  for(let layer of allBgLayers) {
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
    url: "https://view.joomag.com/clique-2020-clique-spain/0422615001576571696?short",
    img: "imgs/logos/clique.jpg",
    title: "Clique",
  },

  {
    url: "http://www.centraluniformes.com/online/catalogos/Cat_Roger.pdf",
    img: "imgs/logos/roger.jpg",
    title: "Roger",
  },

  {
    url: "https://issuu.com/workteamoficial/docs/catalogo_completo_esp_2020?fr=sYWQ3ZDMyNzgyMg",
    img: "imgs/logos/workteam.jpg",
    title: "WorkTeam",
  },

  {
    url: "https://acquaroyal.com/wp-content/uploads/2020/AcquaRoyal2020_baja.pdf",
    img: "imgs/logos/acquaroyal.jpg",
    title: "Acqua Royal",
  },

  {
    url: "https://www.velilla-group.com/media/flipbook/flipbook_catalogo_2020/pdf/VELILLA_Catalogo_2020_21.pdf",
    img: "imgs/logos/velilla.jpg",
    title: "Velilla",
  },

  {
    url: "https://www.flipsnack.com/9FA75F58B7A/main20_enjoy_2020_es/full-view.html",
    img: "imgs/logos/elevate.jpg",
    title: "Elevate",
  },

  {
    url: "https://www.jhktshirt.com/es/catalogo/online/",
    img: "imgs/logos/jhk.jpg",
    title: "JHK",
  },

  {
    url: "https://www.sols.es/catalogo.html",
    img: "imgs/logos/sols.jpg",
    title: "Sol's",
  },

  {
    url: "https://www.roly.es/?AspxAutoDetectCookieSupport=1",
    img: "imgs/logos/roly.jpg",
    title: "Roly",
  },

  {
    url: "https://view.joomag.com/projob-projob-2020-sp/0289677001578467544?short&",
    img: "imgs/logos/projob.jpg",
    title: "Projob",
  },

  {
    url: "https://www.payperwear.com/it/cataloghi",
    img: "imgs/logos/payper.jpg",
    title: "PayPerWear",
  },

  {
    url: "http://www.valentocatalog.eu/es-flash/files/basic-html/index.html",
    img: "imgs/logos/valento.jpg",
    title: "Valento",
  },

  {
    url: "https://www.nath.es/catalog_es.php",
    img: "imgs/logos/nath.jpg",
    title: "Nath",
  },

  {
    url: "https://makito.es/epages/Makito.sf/?URI",
    img: "imgs/logos/makito.jpg",
    title: "Makito",
  },

  {
    url: "",
    img: "imgs/logos/shortcut.jpg",
    title: "Shortcut",
  },
];