const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const scoreText = document.getElementById("score");

let score = 0;

function jump() {

  if(player.classList != "jump") {

    player.classList.add("jump");

    setTimeout(() => {
      player.classList.remove("jump");
    }, 700);
  }
}

setInterval(() => {

  let playerTop =
    parseInt(
      window.getComputedStyle(player)
      .getPropertyValue("bottom")
    );

  let enemyLeft =
    parseInt(
      window.getComputedStyle(enemy)
      .getPropertyValue("left")
    );

  if(enemyLeft < 120 && enemyLeft > 40 && playerTop < 80) {

    alert("AMMA CAUGHT YOU 😭");

    location.reload();
  }

}, 10);

setInterval(() => {
  score++;
  scoreText.innerText = "Score: " + score;
}, 1000);

document.addEventListener("keydown", (e) => {
  if(e.code === "Space") {
    jump();
  }
});

document.addEventListener("touchstart", jump);
