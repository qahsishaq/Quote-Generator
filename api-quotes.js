const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl = "https://api.quotable.io/random";
const newQuoteBtn = document.getElementById("newquote");

async function fetchQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
fetchQuote(apiUrl);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "  - by " +
      author.innerHTML,
    "X Window",
    " width= 700px, height= 300"
  );
}
