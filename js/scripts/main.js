 

const cardPokemon = document.querySelectorAll(".js-open-details-pokemon");
const removeModalCard = document.querySelectorAll(".js-close-details-pokemon");

function openDetailsPokemon() {
  document.documentElement.classList.add("open-modal");
}
function removeDetailsPokemon() {
  document.documentElement.classList.remove("open-modal");
}

cardPokemon.forEach((card) => {
  card.addEventListener("click", openDetailsPokemon);
});
removeModalCard.forEach((removeModalCard) => {
    removeModalCard.addEventListener("click", removeDetailsPokemon);
})
