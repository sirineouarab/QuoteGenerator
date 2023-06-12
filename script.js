// first, we need to declare an array of objects that contains authors and their quotes
let quotes = [
  {
    author: "Jay-Z",
    quote:
      "We got to pick and choose the ancestors who would inspire the world we were going to make for ourselves.",
  },
  {
    author: "Austin Kleon",
    quote: "Make things for people you love, for people you want to meet",
  },
  {
    author: "Jessica Hische",
    quote:
      "The work you do while you procrastinate is probably the work you should be doing for the rest of your life.",
  },
  {
    author: "Johann Wolfgang von Goethe",
    quote: "We are shaped and fashioned by what we love.",
  },
  {
    author: "Jennifer Dukes Lee",
    quote: "In a world where you can be anything, be kind.",
  },
  {
    author: "Austin Kleon",
    quote: "Wonder at something then Invite others to wonder with you.",
  },
  {
    author: "Austin Kleon",
    quote:
      "You are, in fact, a mashup of what you choose to let into your life.",
  },
];

// calling the function generate to show a quote the very first time when the user reaches the page
generate();

// the function generate:
function generate() {
  let quote = document.getElementById("quote"); //to access the element where we're going to put the quote
  const random = Math.floor(Math.random() * quotes.length); //generate a random integer number between 0 and the size of our array (random quote)
  quote.textContent = quotes[random].quote; //change the content of the element to a quote
  let author = document.getElementById("author"); //access the author element
  author.textContent = quotes[random].author; //change its content to the author's name
}

const btn = document.getElementById("generate"); //the button that the user will click
btn.onclick = generate; //regenerate another quote when the user clicks

//an array of saved quotes
let savedQuotes = [];
let save = document.getElementById("save"); //get the icon element
save.onclick = saveQuote; //when the user clicks, we call the saveQuote function

function saveQuote() {
  const quote = document.getElementById("quote").textContent;
  const author = document.getElementById("author").textContent;
  //adding the quote to the array
  if (
    !savedQuotes.some((obj) => obj.quote === quote && obj.author === author) //check it it doesnt exist already to not duplicate it
  ) {
    savedQuotes.push({ quote, author });
  }
}

//to check the bookmarked list
const bookmarked = document.getElementById("list");
bookmarked.onclick = bookmarkedList;

function bookmarkedList() {
  // clear the existing content
  const div = document.getElementById("bookmarked-quotes");
  if (div) {
    div.remove(); // to avoid showing it many times
  }

  // create a div of the list
  const bookmarkedQuotesDiv = document.createElement("div");
  bookmarkedQuotesDiv.id = "bookmarked-quotes";

  // create a title 'Saved Quotes'
  const title = document.createElement("h2");
  title.textContent = "Saved Quotes";
  title.style.textAlign = "center";
  bookmarkedQuotesDiv.appendChild(title); //append it to our div

  if (savedQuotes.length == 0) {
    //treat the case where the user didn't bookmark any quote yet (empty array)
    const nothing = document.createElement("p");
    nothing.textContent = "You Don't Have A Favorite Quote Yet";
    nothing.style.textAlign = "center";
    bookmarkedQuotesDiv.appendChild(nothing); //append it to the div
  }

  // create a container to center our div using the flexbox
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.justifyContent = "center";
  bookmarkedQuotesDiv.appendChild(container);

  // create the quotes container
  const quotesContainer = document.createElement("div");
  container.appendChild(quotesContainer);

  // iterate through the savedQuotes array and create elements for each quote
  savedQuotes.forEach((savedQuote) => {
    // create the quote-container div element
    const quoteContainer = document.createElement("div");
    quoteContainer.classList.add("quote-container");

    // create the quote paragraph element
    const quote = document.createElement("p");
    quote.textContent = savedQuote.quote;
    quote.style.fontWeight = 700;
    quote.style.textAlign = "center";

    // create the author paragraph element
    const author = document.createElement("p");
    author.textContent = savedQuote.author;
    author.style.textAlign = "right";

    // append the elements to the quoteContainer div
    quoteContainer.appendChild(quote);
    quoteContainer.appendChild(author);

    // append the quoteContainer div to the quotesContainer
    quotesContainer.appendChild(quoteContainer);
  });

  // and finally append the bookmarkedQuotesDiv div to the body to show it on our page
  document.body.appendChild(bookmarkedQuotesDiv);
}
