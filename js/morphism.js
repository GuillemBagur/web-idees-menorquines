// By Dotonion
// https://codepen.io/alvarotrigo/pen/eYEqPZa

const elts = {
  text1: document.getElementById("morph-text-1"),
  text2: document.getElementById("morph-text-2"),
};

const allMorphTexts = {
  es: [
    "Bordado",
    "Diseño gráfico",
    "Ropa laboral",
    "Ropa publicitaria",
    "Impresión",
    "Serigrafía",
  ],

  en: [
    "Embroidering",
    "Graphic Design",
    "Work wear",
    "Advertising wear",
    "Digital printing",
    "Printing",
  ],

  ca: [
    "Brodat",
    "Disseny gràfic",
    "Roba laboral",
    "Roba publicitària",
    "Impressió",
    "Serigrafia",
  ],
};

const langMorphTexts = allMorphTexts[lang];


const morphTime = 1;
const cooldownTime = 2;

let textIndex = langMorphTexts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = langMorphTexts[textIndex % langMorphTexts.length];
elts.text2.textContent =
  langMorphTexts[(textIndex + 1) % langMorphTexts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = langMorphTexts[textIndex % langMorphTexts.length];
  elts.text2.textContent =
    langMorphTexts[(textIndex + 1) % langMorphTexts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}

animate();
