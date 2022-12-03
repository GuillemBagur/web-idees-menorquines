const getJSON = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const sortBy = (param, array, orderBy = 1) => {
  return array.sort((a, b) => orderBy * (Number(a[param]) - Number(b[param])));
}

const setFullEmptyStar = (num, starsNum) => {
  if(num < starsNum) {
    return `
      <div class="star star--full">
        <img class="icon icon--mr-05 star__icon" src="https://unpkg.com/@icon/icofont/icons/star.svg" />
      </div>
    `;
  }

  return `
      <div class="star star--empty">
        <img class="icon icon--mr-05 star__icon" src="https://unpkg.com/@icon/icofont/icons/star.svg" />
        <img class="icon icon--mr-05 star__icon star__icon--negative" src="https://unpkg.com/@icon/icofont/icons/star.svg" />
      </div>
    `;
}

const drawStars = starsNum => {
  let returnHTML = ``;
  for(let i = 0; i < 5; i ++) {
    const starHTML = setFullEmptyStar(i, starsNum);
    returnHTML += starHTML;
  }

  return returnHTML;
}

const displayReviews = async () => {
  const allReviews = await getJSON("../data/reviews.json");
  const sortedReviews = sortBy("review_timestamp", allReviews, -1);
  const reviewsList = document.getElementById("reviews-list");
  let allReviewsString = "";
  for (let review of sortedReviews) {
    const text = review.review_text?.split("Original)\n")[1] ?? "";
    const htmlReview = `
    <div class="slider__slide">
        <div class="review">  
            <div class="review__author">
                <img class="review__author-img" src="${review.author_image}" />
                <h3 class="review__author-name">${review.author_title}</h3>
                <div class="stars-wrapper">
                ${drawStars(Number(review.review_rating))}
                </div>
            </div>
            <p class="review__text">${text}</p>
        </div>
    </div>
    `;

    allReviewsString += htmlReview;
  }

  reviewsList.innerHTML = allReviewsString;
};

displayReviews();