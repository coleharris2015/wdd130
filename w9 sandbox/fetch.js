const baseURL = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemon(url, stuff){
	const response = await fetch(url);
	if(response.ok){
		const data = await response.json();
		stuff(data);
	}
}
function pokemonTemplate(pokemon){
	return `<h2>${pokemon.name}</h2>
	<img src="${pokemon.sprites.other.home.front_default}" alt = "${pokemon.name}">`
}

function PokemonListTemplate(pokemon){
	return `<li data-url="${pokemon.url}">${pokemon.name}</li>`
}

function dostuff(data){
	const outputEl =document.querySelector("#output");
	const html = pokemonTemplate(data);
	outputEl.insertAdjacentHTML("afterbegin", html);
}

function doStuffList(data){
	const selectEl = document.querySelector("#PokemonList");
	const htmlStrings = data.results.map(PokemonListTemplate);
	console.log(htmlStrings);
	selectEl.insertAdjacentHTML("afterbegin",htmlStrings.join(""))

}
getPokemon(baseURL+"ditto",dostuff)
getPokemon(baseURL, doStuffList);