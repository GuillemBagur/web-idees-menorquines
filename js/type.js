const allTypingStrings = {
  es: [
    "Ideas originales",
    "Ideas sorprendentes",
    "Ideas a buen precio",
    "Simplemente, ¡buenas ideas!",
  ],

  en: [
    "Original ideas",
    "Amazing ideas",
    "Budget ideas",
    "Simply, great ideas!",
  ],

  ca: [
    "Idees originals",
    "Idees sorprenenents",
    "Idees a bon preu",
    "Simplement, bones idees!",
  ]
};


const typed = new Typed(".typed", {
  strings: allTypingStrings[lang], // lang defined in nav.js
  stringsElement: "#cadenas-texto", // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 60, // Velocidad en mlisegundos para poner una letra,
  startDelay: 4500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 40, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: false, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: "|", // Caracter para el cursor
  contentType: "html", // 'html' o 'null' para texto sin formato
});
