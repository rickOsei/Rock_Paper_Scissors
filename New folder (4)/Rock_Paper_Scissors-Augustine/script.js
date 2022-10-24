let playerPoints = 0;
let comPoints = 0;

let playerHand = document.getElementById("playerHand");
let comHand = document.getElementById("comHand");

let rock_btn = document.querySelector("#rock");
let paper_btn = document.getElementById("paper");
let scissors_btn = document.getElementById("scissors");
let p1 = document.querySelector("#playerPoints");
let c1 = document.querySelector("#comPoints");

let items = ["rock", "paper", "scissors"];

let srcList = ["com_rock.png", "com_paper.png", "com_scissors.png"];

rock_btn.addEventListener("click", (e) => {
  shakeHand();
  handMovement();

  setTimeout(() => {
    playerHand.classList.remove("shake");
    comHand.classList.remove("shake");
    playerChoice = "rock";
    randomNum = Math.floor(Math.random() * 3);
    computerChoice = items[randomNum];
    playerHand.src = "/images/player_rock.png";
    comHand.src = "/images/" + srcList[randomNum];
    determineWinner(playerChoice, computerChoice);
    console.log(computerChoice);
    p1.innerHTML = `Player Points : ${playerPoints} pts`;
    c1.innerHTML = `Computer Points : ${comPoints} pts`;
  }, 2000);
});

paper_btn.addEventListener("click", (e) => {
  shakeHand();
  handMovement();

  setTimeout(() => {
    playerHand.classList.remove("shake");
    comHand.classList.remove("shake");
    playerChoice = "paper";
    randomNum = Math.floor(Math.random() * 3);
    computerChoice = items[randomNum];
    playerHand.src = "/images/player_paper.png";
    comHand.src = "/images/" + srcList[randomNum];
    determineWinner(playerChoice, computerChoice);
    console.log(computerChoice);
    p1.innerHTML = `Player Points : ${playerPoints} pts`;
    c1.innerHTML = `Computer Points : ${comPoints} pts`;
  }, 2000);
});

scissors_btn.addEventListener("click", (e) => {
  shakeHand();
  handMovement();

  setTimeout(() => {
    playerHand.classList.remove("shake");
    comHand.classList.remove("shake");
    playerChoice = "scissors";
    randomNum = Math.floor(Math.random() * 3);
    computerChoice = items[randomNum];
    playerHand.src = "/images/player_scissors.png";
    comHand.src = "/images/" + srcList[randomNum];
    determineWinner(playerChoice, computerChoice);
    console.log(computerChoice);
    p1.innerHTML = `Player Points : ${playerPoints} pts`;
    c1.innerHTML = `Computer Points : ${comPoints} pts`;
  }, 2000);
});

// reload
function playAgain() {
  window.location.reload();
}

// winner
function determineWinner(playerChoice, computerChoice) {
  let frame = document.getElementById("gameFrame");
  let title = document.getElementById("title");
  let Congrats = document.getElementById("Congrats");
  let results = document.getElementById("results");

  // conditions
  if (playerChoice === computerChoice) {
    results.innerHTML = "It is a tie!";
  } else {
    if (
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "rock" && computerChoice === "scissors")
    ) {
      results.innerHTML = "You won!";
      playerPoints += 10;
    } else {
      results.innerHTML = "Computer won!";
      comPoints += 10;
    }

    // declear winner
    if (playerPoints == 20) {
      frame.classList.add("bgChange");
      playerHand.style.display = "none";
      comHand.style.display = "none";
      Congrats.style.display = "block";
      Congrats.textContent = "Player Wins Overall !";
      title.style.color = "rgb(209, 170, 96)";
      results.style.color = "rgb(225, 191, 129)";
      setTimeout(() => {
        playAgain();
      }, 7000);
    } else if (comPoints === 20) {
      frame.classList.add("bgChange");
      playerHand.style.display = "none";
      comHand.style.display = "none";
      Congrats.style.display = "block";
      Congrats.textContent = "Com Wins Overall !";
      title.style.color = "rgb(225, 191, 129)";
      results.style.color = "rgb(225, 191, 129)";

      setTimeout(() => {
        playAgain();
      }, 7000);
    }
  }
}

function handMovement() {
  playerHand.addEventListener("animationend", function () {
    this.classList.remove("move");
  });
  playerHand.classList.add("move");

  comHand.classList.add("move");
  comHand.addEventListener("animationend", function () {
    this.classList.remove("move");
  });
}

const shakeHand = () => {
  playerHand.classList.add("shake");
  comHand.classList.add("shake");
};
