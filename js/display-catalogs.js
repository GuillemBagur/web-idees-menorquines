// All catalogs is in nav (due to var scope (footer is using this var, too))

const displayCatalogs = () => {
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
