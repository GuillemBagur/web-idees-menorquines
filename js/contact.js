const changeStylesIfFilled = (el) => {
  if (!el.value.length) {
    el.classList.remove("contact-form__input--filled");
    return;
  }

  el.classList.add("contact-form__input--filled");
};

const execAnimation = (animName) => {
  const allEls = document.querySelectorAll(`[data-animation="${animName}"]`);
  if (!allEls.length) return;

  for (let el of allEls) {
    el.classList.add("animation");
  }
};

let sending = false;
const sendForm = async () => {
  if(sending) return;
  sending = true;
  const params = new URLSearchParams();
  params.append("name", document.getElementById("name").value);
  params.append("email", document.getElementById("email").value);
  params.append("message", document.getElementById("message").value);

  console.log(params);

  const res = await axios.post(
    "https://ideesmenorquines.com/rest-contacto.php",
    params
  );

  console.log(res);

  return res;
};

const form = document.getElementById("contact-form");

form.addEventListener("change", (e) => {
  const target = e.target;
  if (!target.classList.contains("contact-form__input")) return;
  changeStylesIfFilled(target);
});

const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", async () => {
  execAnimation("send");
  await sendForm();
});
