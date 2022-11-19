const link = document.createElement("a");
link.classList.add(
  "accessibility-link",
  "accessibility-link--skip-to-main-content"
);
link.href = "#main-content";
link.innerHTML = "Saltar al contenido principal";

document.body.prepend(link);
