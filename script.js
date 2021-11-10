const quoteContainer = document.querySelector("#quote__container");
const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");



// Get Quotes API
async function getQuotes() {


  try {
    const response = await fetch("https://api.quotable.io/random");
    const quote = await response.json();
    if(quote.author) {
       quoteAuthor.textContent = quote.author;
     } else {
       quoteAuthor.textContent = "Unknown";
     }
     if(quote.content.length > 100) {
       quoteText.classList.add("long-quote");
     }else{
       quoteText.classList.remove("long-quote");
     }
   
     quoteText.textContent = quote.content;
  } catch (error) {
    alert("Something wrong with fetching data.. please try later");
  }
  
}



getQuotes();



// tweet quote
function tweetQuote() {
    const quote = quoteText.textContent;
    const author = quoteAuthor.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, "_blank");
}


// event listeners
newQuoteBtn.addEventListener("click", getQuotes);
twitterBtn.addEventListener("click", tweetQuote);
