const footer = document.getElementById("footer");

const generateFooter = (
  {
    nav,
    legal,
    catalog,
    contact,
    legal_advice,
    privacy_politics,
    cookies_politics,
  } = {
    nav: "Navegación",
    legal: "Legal",
    catalog: "Catálogo",
    contact: "Contacto",
    legal_advice: "Aviso legal",
    privacy_politics: "Política de privacidad",
    cookies_politics: "Política de cookies",
  }
) => {
  let navLinksList = "";
  for (let key in navLinks) {
    const linkTitle = key;
    const link = navLinks[key];
    const toRender = `
      <li class="footer-list__el">
          <a class="nav__nav-link" href="${link}">${linkTitle}</a>
      </li>`;

    navLinksList += toRender;
  }

  let catalogsList = "";
  for (let catalog of allCatalogs) {
    const htmlCatalog = `
    <li class="footer-list__el" title="${catalog.title}">
        <a class="catalog__link" href="${catalog.url}" target="_blank">${catalog.title}</a>
    </li>
    `;

    catalogsList += htmlCatalog;
  }

  const footerHTML = `
<section class="footer-main">
          <div class="footer-list-wrapper">
            <ul class="footer-list">
              <li class="footer-list__el footer-list__el--title">
                <img src="imgs/logo.png" alt="" class="footer-logo" />
              </li>
              <li class="footer-list__el footer-list__el--title">
                Idees Menorquines, SL
              </li>
              <li class="footer-list__el">
                C/ Fusters n5 - POICI 07760 Ciutadella de Menorca
              </li>
              <li class="footer-list__el">
                <a href="/contacto.html">${contact}</a>
              </li>
              <li class="footer-list__el">
                <a href="mailto:info@ideesmenorquines.com"
                  >info@ideesmenorquines.com</a
                >
              </li>
              <li class="footer-list__el">
                <a href="tel:971 48 25 61">971 48 25 61</a>
              </li>
            </ul>
          </div>

          <div class="footer-list-wrapper">
            <ul id="footer-nav" class="footer-list footer-list--nav">
              <li class="footer-list__el footer-list__el--title">${nav}</li>
                ${navLinksList}
            </ul>

            <ul class="footer-list">
              <li class="footer-list__el footer-list__el--title">${legal}</li>
              <li class="footer-list__el"><a href="aviso-legal.html" target="_blank">${legal_advice}</a></li>
              <li class="footer-list__el"><a href="politica-privacidad.html" target="_blank">${privacy_politics}</a></li>
              <li class="footer-list__el"><a href="politica-cookies.html" target="_blank">${cookies_politics}</a></li>
            </ul>
          </div>

          <div class="footer-list-wrapper">
            <ul id="footer-brands" class="footer-list footer-list--brands">
              <li class="footer-list__el footer-list__el--title">${catalog}</li>
              ${catalogsList}
            </ul>
          </div>
        </section>

        <section class="footer-credits">
          <div class="footer-credits__credit">© Idees Menorquines 2022</div>
          <div class="footer-credits__credit">
            <a class="word word--orange" href="mailto:guillembagurmoll@gmail.com">web by Guillem Bagur</a>
          </div>
        </section>
`;

  footer.innerHTML = footerHTML;
};
const footerSpecial = document.querySelector(`[data-id="footer-special"]`);

generateFooter();
