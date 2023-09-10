const excerptCards = document.querySelectorAll(".card");
const cards = [...excerptCards];

function addClass(e) {
  console.log(this);
  e.stopPropagation();
  this.setAttribute("id", "active");
}

function removeClass(e) {
  e.stopPropagation();
  this.removeAttribute("id", "active");
}

cards.forEach((card) =>
  card.addEventListener("mouseover", addClass, { capture: true })
);

cards.forEach((card) =>
  card.addEventListener("mouseout", removeClass, { capture: true })
);
