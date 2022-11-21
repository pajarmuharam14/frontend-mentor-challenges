const ratings = document.querySelectorAll(".number");
const submitBtn = document.getElementById("submitBtn");
const card = document.querySelector(".card");
const cardHidden = document.querySelector(".card-hidden");
const rating = document.getElementById("rating");

cardHidden.style.display = "none";

for (const el of ratings) {
  el.addEventListener("click", () => {
    el.style.backgroundColor = "hsl(217, 12%, 63%)";
    el.style.color = "hsl(0, 0%, 100%)";
    rating.innerHTML += el.innerHTML;
  });
}

submitBtn.addEventListener("click", () => {
  card.style.display = "none";
  cardHidden.style.display = "block";
  rating;
});
