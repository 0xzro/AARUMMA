const dino = document.getElementById("dino");
const block = document.getElementById("block");
const scoreText = document.getElementById("score");
const jumpBtn = document.getElementById("jumpBtn");
const restartBtn = document.getElementById("restartBtn");
const gameOverText = document.getElementById("gameOver");

let score = 0;
let isGameOver = false;

function jump() {
  if (!dino.classList.contains("jump") && !isGameOver) {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 500);
  }
}

// controls
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") jump();
});
document.addEventListener("touchstart", jump);
jumpBtn.addEventListener("click", jump);

// collision check
let gameLoop = setInterval(() => {
  if (isGameOver) return;

  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
  const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("right"));

  if (blockLeft > 280 && blockLeft < 320 && dinoTop < 30) {
    isGameOver = true;

    block.style.animation = "none";
    gameOverText.classList.remove("hidden");
    restartBtn.classList.remove("hidden");
  } else {
    score++;
    scoreText.innerText = "Score: " + score;
  }
}, 100);

// restart game
restartBtn.addEventListener("click", () => {
  location.reload();
});
