const loadFile = async (lang) => {
  const req = await fetch(`../langs/${lang}.json`);
  const file = await req.json();
  return file;
};

const translate = async (lang) => {
  const file = await loadFile(lang);
  for (let key in file) {
    const section = file[key];
    const sectionEl = document.querySelector(`[data-section="${key}"]`);
    if(!sectionEl) continue;
    for (let keyRole of Object.keys(section)) {
      const role = section[keyRole];
      const roleEls = sectionEl.querySelectorAll(`[data-role="${keyRole}"]`);
      if(!roleEls) continue;
      roleEls.forEach(roleEl => {
        roleEl.innerHTML = role;
      })
    }
  }

  generateFooter(file.footer);
};


translate("ca");