const displayCatalogs = () => {
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

  let htmlContent = "";
  for (let catalog of allCatalogs) {
    const htmlCatalog = `
    <li class="catalog" title="${catalog.title}">
        <a class="catalog__link" href="${catalog.url}" target="_blank">
            <img class="catalog__logo" src="${catalog.img}" alt="Logo de nuestro proveedor ${catalog.title}" />
        </a>
    </li>
    `;

    htmlContent += htmlCatalog;
  }

  document.getElementById("catalogs-list").innerHTML = htmlContent;
};

displayCatalogs();