const cardPokemon = document.querySelectorAll(".js-open-details-pokemon");
const removeModalCard = document.querySelectorAll(".js-close-details-pokemon");

cardPokemon.forEach((card) => {
  card.addEventListener("click", openDetailsPokemon);
});
removeModalCard.forEach((removeModalCard) => {
  removeModalCard.addEventListener("click", removeDetailsPokemon);
});

const listCard = document.getElementById("js-list-pokemon");

function toUpperCaseNamePokemon(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function createCardPokemon(name, type, code, imagePok) {
  let card = document.createElement("button");

  card.classList = `card-pokemon  js-open-details-pokemon ${type}`;
  listCard.appendChild(card);

  let image = document.createElement("div");
  image.classList = `image`;
  card.appendChild(image);

  let imageSrc = document.createElement("img");
  imageSrc.classList = "thumb-img";
  imageSrc.setAttribute("src", imagePok);
  image.appendChild(imageSrc);

  let inforCardPokemon = document.createElement("div");
  inforCardPokemon.classList = "info";
  card.appendChild(inforCardPokemon);

  let infoTextPokemon = document.createElement("div");
  infoTextPokemon.classList = "text";
  inforCardPokemon.appendChild(infoTextPokemon);

  let codePokemon = document.createElement("span");
  infoTextPokemon.appendChild(codePokemon);

  let namePokemon = document.createElement("h3");
  namePokemon.textContent = toUpperCaseNamePokemon(name);
  infoTextPokemon.appendChild(namePokemon);

  let iconPokemon = document.createElement("div");
  iconPokemon.classList = "icon";
  infoTextPokemon.appendChild(iconPokemon);

  let imgType = document.createElement("img");
  imgType.setAttribute("src", `img/icon-types/${type}.svg`);

  iconPokemon.appendChild(imgType);
}

function listingPokemon(url) {
  axios({
    method: "GET",
    url: url,
  }).then((response) => {
    const countPokemons = document.getElementById("js-count-pokemons");
    const { results, next, count } = response.data;

    results.forEach((pokemon) => {
      let urlApiDetails = pokemon.url;

      axios({
        method: "GET",
        url: `${urlApiDetails}`,
      }).then((response) => {
        const { name, id, sprites, types } = response.data;

        const infoCard = {
          name: name,
          code: id,
          image: sprites.other.dream_world.front_default,
          type: types[0].type.name,
        };
        createCardPokemon(
          infoCard.name,
          infoCard.type,
          infoCard.cpde,
          infoCard.image
        );

        const cardPokemon = document.querySelectorAll(
          ".js-open-details-pokemon"
        );

        cardPokemon.forEach((card) => {
          card.addEventListener("click", openDetailsPokemon);
          countPokemons.innerText = `${
            Number(count) - Number(infoCard.code)
          } - Pokémons`;
        });
      });
    });
  });
}
listingPokemon("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0");

function openDetailsPokemon() {
  document.documentElement.classList.add("open-modal");
}
function removeDetailsPokemon() {
  document.documentElement.classList.remove("open-modal");
}

//listar os tipos de pokemon

const areaTypes = document.getElementById("js-type-area");
axios({
  method: "GET",
  url: "https://pokeapi.co/api/v2/type",
}).then((response) => {
  const { results } = response.data;

  results.forEach((type, index) => {
    if (index !== 18 && index !== 19) {
      let itemType = document.createElement("li");

      areaTypes.appendChild(itemType);

      let buttonType = document.createElement("button");
      buttonType.classList = `type-filter ${type.name}`;

      itemType.appendChild(buttonType);

      let iconType = document.createElement("div");

      iconType.classList = "icon";
      buttonType.appendChild(iconType);

      let srcType = document.createElement("img");
      srcType.setAttribute("src", `img/icon-types/${type.name}.svg`);
      iconType.appendChild(srcType);

      let nameType = document.createElement("span");
      nameType.textContent = toUpperCaseNamePokemon(type.name);
      buttonType.appendChild(nameType);
    }
  });
});

const btnLoadMore = document.getElementById("btn-load-more");
let coutPaginationPokemons = 10;
function showMorePokemon() {
  listingPokemon(
    `https://pokeapi.co/api/v2/pokemon?limit=9&offset=${coutPaginationPokemons}`
  );
  coutPaginationPokemons = coutPaginationPokemons + 9;
}

btnLoadMore.addEventListener("click", showMorePokemon);
