const dino = document.getElementById("dino");
const block = document.getElementById("block");
const scoreText = document.getElementById("score");

let score = 0;

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 500);
  }
}

// controls
document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);

// collision
setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
  const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("right"));

  if (blockLeft > 280 && blockLeft < 320 && dinoTop < 30) {
    alert("Game Over! Score: " + score);
    score = 0;
  } else {
    score++;
    scoreText.innerText = "Score: " + score;
  }
}, 100);