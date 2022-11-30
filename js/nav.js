const navLinks = {
  Inicio: "index.html",
  "¿Quiénes somos?": "quienes-somos.html",
  Contacta: "contacto.html",
  Catálogo: "index.html#catalogo",
  Servicios: "servicios.html",
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
<img class="nav__logo" src="imgs/logo.png"/></a>
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
