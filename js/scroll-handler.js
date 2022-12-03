const spinner = document.getElementById("spinner");
const centeringTransform = "translate(-50%, -50%)";
const quote = document.getElementById("quote");

const getRotationAngle = (target) => {
  const obj = window.getComputedStyle(target, null);
  const matrix =
    obj.getPropertyValue("-webkit-transform") ||
    obj.getPropertyValue("-moz-transform") ||
    obj.getPropertyValue("-ms-transform") ||
    obj.getPropertyValue("-o-transform") ||
    obj.getPropertyValue("transform");

  let angle = 0;

  if (matrix !== "none") {
    const values = matrix.split("(")[1].split(")")[0].split(",");
    const a = values[0];
    const b = values[1];
    angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  }

  return angle < 0 ? (angle += 360) : angle;
};

let rotation = 0;
let lastScroll;
const scrollbar = document.getElementById("scrollbar");
const mouseScrollHandler = (e) => {
  e.preventDefault();

  // Avoid scolling more than 360deg
  if (
    scrollbar.scrollHeight - scrollbar.scrollTop === scrollbar.clientHeight &&
    e.deltaY > 0
  )
    return;

  // Rotate the spinner the corresponding degrees
  const sensibility = 10;
  rotation += e.deltaY * 0.01 * sensibility;
  scrollbar.scrollTop += e.deltaY;
};

document.addEventListener("wheel", mouseScrollHandler, { passive: false });

let lastTouchY = undefined;
const touchScrollHandler = (e) => {
  const currentTouchY = e.changedTouches[0].clientY;
  if (!lastTouchY) lastTouchY = currentTouchY;
  const diff = lastTouchY - currentTouchY;
  const sensibility = 1.3;
  scrollbar.scrollTop += diff * sensibility;
  lastTouchY = currentTouchY;
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const touchEndHandler = async (e) => {
  const currentTouchY = e.changedTouches[0].clientY;
  const sensibility = 1.5;
  const friction = 0.2;
  let diff = lastTouchY - currentTouchY;
  const direction = diff / Math.abs(diff);
  while (diff * direction > 0) {
    diff -= friction * direction;
    scrollbar.scrollTop += diff * sensibility;
    await sleep(7);
  }

  checkContentisTotallyHorizontal();
  lastTouchY = undefined;
};

const maxScroll = (el) => {
  return el.scrollHeight - el.clientTop;
};

// Checks if the content is totally horizontal or not.
// If not, it'll force the rotation until it is.
const checkContentisTotallyHorizontal = () => {
  const allSections = document.getElementsByClassName("section-wrapper");
  const sectionDegrees = 360 / allSections.length;
  const spinner = document.getElementById("spinner");
  if (getRotationAngle(spinner) % sectionDegrees === 0) return;
  const degreesQuotient = getRotationAngle(spinner) / sectionDegrees;
  const nearestExactAngle = Math.round(degreesQuotient);
  const degreesDiff = nearestExactAngle - degreesQuotient;
  if (Math.abs(degreesDiff) < 0.1) {
    spinner.style.transform = `rotate(${
      nearestExactAngle * sectionDegrees
    }deg)`;
  }
};

document.addEventListener("touchmove", touchScrollHandler);
document.addEventListener("touchend", touchEndHandler);

const scrollbarHandler = (e) => {
  showQuote();
  const sensibility = 450 / scrollbar.scrollHeight;
  rotation = e.target.scrollTop * sensibility;
  spinner.style.transform = `rotate(${rotation}deg)`;
};

scrollbar.addEventListener("scroll", scrollbarHandler);

let quoteTranslate = 90;
function myFunction(x) {
  if (x.matches) {
    quoteTranslate = 66;
  } else {
    quoteTranslate = 90;
  }
}

var x = window.matchMedia("(min-width: 550px)");
myFunction(x); // Call listener function at run time

let quoteRotation = -30;
quote.classList.remove("visible");
const showQuote = () => {
  const minScroll = 100;
  const maxScroll = (scrollbar.scrollHeight * 30) / 100;
  if (scrollbar.scrollTop < minScroll || scrollbar.scrollTop > maxScroll) {
    quote.classList.remove("visible");
    return;
  }

  quote.classList.add("visible");
  const sensibility =
    ((window.innerHeight / window.innerWidth) * 350) / scrollbar.scrollHeight;
  quoteRotation = scrollbar.scrollTop * sensibility;
  quote.style.transform = `rotateZ(-${quoteRotation}deg) translateX(${quoteTranslate}vw) rotateZ(${quoteRotation}deg)`;
};
