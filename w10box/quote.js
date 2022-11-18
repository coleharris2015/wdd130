import renderQuote from "./RandomQuote.mjs";

renderQuote(".selector");

document.querySelector('#refreshQuote').addEventListener('click',function(e){renderQuote("#selector")})