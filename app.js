const cardArray = [
  {
    name: "fries",
    img: "/img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "/img/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "/img/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "/img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "/img/milkshake.png",
  },
  {
    name: "pizza",
    img: "/img/pizza.png",
  },
  {
    name: "fries",
    img: "/img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "/img/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "/img/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "/img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "/img/milkshake.png",
  },
  {
    name: "pizza",
    img: "/img/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChoosen = [];
let cardChoosenids = [];
let cardWon = [];
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "/img/blank.png");
    card.setAttribute("data-id", i);
    gridDisplay.append(card);
    card.addEventListener("click", flipCard);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardChoosenids[0];
  const optionTwoId = cardChoosenids[1];
  console.log(cards);
  console.log("check for a match!!");
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "/img/blank.png");
    cards[optionTwoId].setAttribute("src", "/img/blank.png");
    alert("You clicked the same image!!");
  }

  if (cardsChoosen[0] === cardsChoosen[1]) {
    alert("You found a Match!!!");
    cards[optionOneId].setAttribute("src", "/img/white.png");
    cards[optionTwoId].setAttribute("src", "/img/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardWon.push(cardsChoosen);
  } else {
    cards[optionOneId].setAttribute("src", "/img/blank.png");
    cards[optionTwoId].setAttribute("src", "/img/blank.png");
    alert("Sorry try again!!");
  }
  resultDisplay.textContent = cardWon.length;
  cardsChoosen = [];
  cardChoosenids = [];
  if (cardWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "Congratulation you found them all";
  }
}

function flipCard() {
  console.log(cardArray);
  const cardId = this.getAttribute("data-id");
  //  console.log(this)
  // console.log("clicked",cardId );
  // console.log(cardArray[cardId].name);
  cardsChoosen.push(cardArray[cardId].name);
  cardChoosenids.push(cardId);
  console.log(cardsChoosen);
  console.log(cardChoosenids);

  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChoosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
