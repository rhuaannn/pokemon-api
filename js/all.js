"use strict";console.log("btn");var number=32,cardPokemon=(console.log(number),document.querySelectorAll(".js-open-details-pokemon")),removeModalCard=document.querySelectorAll(".js-close-details-pokemon"),listCard=(cardPokemon.forEach(function(e){e.addEventListener("click",openDetailsPokemon)}),removeModalCard.forEach(function(e){e.addEventListener("click",removeDetailsPokemon)}),document.getElementById("js-list-pokemon"));function toUpperCaseNamePokemon(e){return e.charAt(0).toUpperCase()+e.slice(1)}function createCardPokemon(e,t,n,o){var a=document.createElement("button"),c=(a.classList="card-pokemon  js-open-details-pokemon ".concat(t),listCard.appendChild(a),document.createElement("div")),m=(c.classList="image",a.appendChild(c),document.createElement("img")),o=(m.classList="thumb-img",m.setAttribute("src",o),c.appendChild(m),document.createElement("div")),c=(o.classList="info",a.appendChild(o),document.createElement("div")),m=(c.classList="text",o.appendChild(c),document.createElement("span")),a=(c.appendChild(m),document.createElement("h3")),o=(a.textContent=toUpperCaseNamePokemon(e),c.appendChild(a),document.createElement("div")),m=(o.classList="icon",c.appendChild(o),document.createElement("img"));m.setAttribute("src","img/icon-types/".concat(t,".svg")),o.appendChild(m)}function listinggPokemons(e){axios({method:"GET",url:e}).then(function(e){var c=document.getElementById("js-count-pokemons"),e=e.data,t=e.results,m=(e.next,e.count);t.forEach(function(e){e=e.url;axios({method:"GET",url:"".concat(e)}).then(function(e){var e=e.data,t=e.name,n=e.id,o=e.sprites,e=e.types,a={name:t,code:n,image:o.other.dream_world.front_default,type:e[0].type.name};createCardPokemon(a.name,a.type,a.cpde,a.image),document.querySelectorAll(".js-open-details-pokemon").forEach(function(e){e.addEventListener("click",openDetailsPokemon),c.innerText="".concat(Number(m)-Number(a.code)," - Pokémons")})})})})}function openDetailsPokemon(){document.documentElement.classList.add("open-modal")}function removeDetailsPokemon(){document.documentElement.classList.remove("open-modal")}listinggPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0");var areaTypes=document.getElementById("js-type-area");axios({method:"GET",url:"https://pokeapi.co/api/v2/type"}).then(function(e){e.data.results.forEach(function(e,t){var n,o;18!==t&&19!==t&&(t=document.createElement("li"),areaTypes.appendChild(t),(n=document.createElement("button")).classList="type-filter ".concat(e.name),t.appendChild(n),(t=document.createElement("div")).classList="icon",n.appendChild(t),(o=document.createElement("img")).setAttribute("src","img/icon-types/".concat(e.name,".svg")),t.appendChild(o),(t=document.createElement("span")).textContent=e.name,n.appendChild(t))})}),console.log("modal");