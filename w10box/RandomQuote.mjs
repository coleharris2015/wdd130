/* 
fetch quote
output quote
*/
const baseUrl = "https://api.quotable.io/";

function quoteTemplate(quote){
	return `<section class="quote">
	<p>
	<spanslass ="quote-mark">&ldquo;</span>${quote.content}
	<span class ="quote-mark">&rdquo;</span></p><p class="author">---${quote.author}</p></section>`;
}

async function getQuote(url){
	try{
	const response =  await fetch(url+ "random");
	if(response.ok){
		const data = await response.json();
		return data;

	}
	} catch (error){
		console.log(error);
	}
}

export default async function renderQuote(selector){
	const quote = await getQuote(baseUrl);
	const element = document.querySelector(selector);
	const html = quoteTemplate(quote);
	element.innerHTML = html;
	console.log(quote);
}





