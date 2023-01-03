const loadFile = async (lang) => {
  const req = await fetch(`langs/${lang}.json`);
  const file = await req.json();
  return file;
};

const translate = async (thisLang) => {
  const file = await loadFile(thisLang);
  for (let key in file) {
    const section = file[key];
    const sectionEl = document.querySelector(`[data-section="${key}"]`);
    if (!sectionEl) continue;
    for (let keyRole of Object.keys(section)) {
      const role = section[keyRole];
      const roleEls = sectionEl.querySelectorAll(`[data-role="${keyRole}"]`);
      if (!roleEls) continue;
      roleEls.forEach((roleEl) => {
        roleEl.innerHTML = role;
      });
    }
  }
  
  generateFooter(file.footer);
  localStorage.setItem("lang", thisLang);
};


const sessionLang = localStorage.getItem("lang") ?? getUserLang();;
translate(sessionLang);

const translateOnLoad = () => {

}

const translateHandler = async (e) => {
  const chosenLang = e.target.dataset.lang;
  if(!chosenLang) return;
  const availableLangs = ["es", "en", "ca"];
  if(availableLangs.includes(chosenLang)) {
    await translate(chosenLang);
    location.reload();
    return;
  }

  await translate("es");
  location.reload();
}

document.getElementById("change-lang").addEventListener("click", translateHandler);
