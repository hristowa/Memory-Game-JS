document.addEventListener("DOMContentLoaded", () => {
  //images in array
  const cardArray = [
    {
      name: "sandwich",
      img: "images/emoji-card1.png",
    },
    {
      name: "sandwich",
      img: "images/emoji-card1.png",
    },
    {
      name: "camera",
      img: "images/emoji-card2.png",
    },
    {
      name: "camera",
      img: "images/emoji-card2.png",
    },
    {
      name: "crown",
      img: "images/emoji-card3.png",
    },
    {
      name: "crown",
      img: "images/emoji-card3.png",
    },
    {
      name: "ghost",
      img: "images/emoji-card4.png",
    },
    {
      name: "ghost",
      img: "images/emoji-card4.png",
    },
    {
      name: "music",
      img: "images/emoji-card5.png",
    },
    {
      name: "music",
      img: "images/emoji-card5.png",
    },
    {
      name: "game",
      img: "images/emoji-card6.png",
    },
    {
      name: "game",
      img: "images/emoji-card6.png",
    },
  ];
  //sorting images on random
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardChosen = [];
  let cardChosenId = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/backgroundCard.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      card.style.border = "2px solid palevioletred";
      card.style.borderRadius = "15px";
      grid.appendChild(card);
    }
  }
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if (cardChosen[0] === cardChosen[1]) {
      alert("You found a match!");
      cards[optionOneId].setAttribute("src", "images/blank.jpg");
      cards[optionTwoId].setAttribute("src", "images/blank.jpg");
    } else {
      cards[optionOneId].setAttribute("src", "images/backgroundCard.png");
      cards[optionTwoId].setAttribute("src", "images/backgroundCard.png");
      alert("Sorry, try again!");
    }
    cardChosen = [];
    cardChosenId = [];
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  createBoard();
});
