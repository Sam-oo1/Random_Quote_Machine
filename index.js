
// Quotes
const quotes = [
  {
    quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison"
  },
  {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein"
  },
  {
    quote: "Money and success don’t change people; they merely amplify what is already there.",
    author: "Will Smith"
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    author: "Steve Jobs"
  },
  {
    quote: "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
    author: "Henry Ford"
  },
  {
    quote: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln"
  },
  {
    quote: "You must expect great things of yourself before you can do them.",
    author: "Michael Jordan"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Love the life you live. Live the life you love.",
    author: "Bob Marley"
  },
  {
    quote: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
    author: "Barak Obama"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }
]

// To Add a Quote UI
function displayNewQuote() {
  const qIndex = Math.floor(Math.random() * quotes.length);
  const newQuote = quotes[qIndex].quote;
  const quoteAuthor = quotes[qIndex].author;
  $('#text').text(newQuote);
  $('#author').text(quoteAuthor);
}

// To Get a new Quote
function getNewQuote() {
  displayNewQuote();
}

// To Display a new Quote on clicking (New Quote)
$(document).ready(function() {
  displayNewQuote();
  $('#new-quote').click(function(){
    getNewQuote();
  })
})
