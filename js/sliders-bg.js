const slidersBgWrapper = document.getElementById("auto-sliders-bg-wrapper");

const drawBGMotion = () => {
  let innerText = "";
  for (let slider = 0; slider < 9; slider++) {
    innerText += `<div class="auto-slider"><div class="auto-slide-track">`;
    for (let slide = 0; slide < 32; slide++) {
      innerText += `
        <div class="auto-slide">
            <img class="auto-slide__img" src="imgs/logo.png" alt="">
        </div>
        `;
    }

    innerText += `</div></div>`;
  }

  slidersBgWrapper.innerHTML = innerText;
};


drawBGMotion();