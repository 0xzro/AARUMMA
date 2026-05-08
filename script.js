// script.js

const girl = document.getElementById("girl");
const mom = document.getElementById("mom");
const scoreText = document.getElementById("score");
const jumpBtn = document.getElementById("jumpBtn");

let jumping = false;
let score = 0;
let gameOver = false;

// BETTER GAME BALANCE
let gameSpeed = 5.5;

// START POSITION
let momPosition = -160;

// SMALLER COLLISION SIZE
const hitboxReduce = 20;

// JUMP SYSTEM
jumpBtn.addEventListener("click", function(){

    if(jumping || gameOver) return;

    jumping = true;

    let position = 20;

    // FAST UP
    const jumpUp = setInterval(function(){

        if(position >= 200){

            clearInterval(jumpUp);

            // FALL DOWN
            const jumpDown = setInterval(function(){

                position -= 16;

                girl.style.bottom = position + "px";

                if(position <= 20){

                    clearInterval(jumpDown);

                    girl.style.bottom = "20px";

                    jumping = false;
                }

            },15);

        }

        position += 16;

        girl.style.bottom = position + "px";

    },15);

});

// MAIN GAME LOOP
function moveMom(){

    if(gameOver) return;

    // MOVE FASTER
    momPosition += gameSpeed;

    mom.style.right = momPosition + "px";

    // RESET
    if(momPosition > window.innerWidth){

        momPosition = -160;

        score++;

        scoreText.innerHTML = "Score: " + score;

        // SLOW SPEED INCREASE
        if(gameSpeed < 13){
            gameSpeed += 0.25;
        }

        // WIN
        if(score >= 15){
            girlVictory();
        }
    }

    checkCollision();

    requestAnimationFrame(moveMom);
}

moveMom();

// BETTER COLLISION SYSTEM
function checkCollision(){

    const girlRect = girl.getBoundingClientRect();

    const momRect = mom.getBoundingClientRect();

    // REDUCED HITBOX
    const girlLeft = girlRect.left + hitboxReduce;
    const girlRight = girlRect.right - hitboxReduce;
    const girlTop = girlRect.top + hitboxReduce;
    const girlBottom = girlRect.bottom - hitboxReduce;

    const momLeft = momRect.left + hitboxReduce;
    const momRight = momRect.right - hitboxReduce;
    const momTop = momRect.top + hitboxReduce;
    const momBottom = momRect.bottom - hitboxReduce;

    if(
        girlRight > momLeft &&
        girlLeft < momRight &&
        girlBottom > momTop &&
        girlTop < momBottom
    ){
        momVictory();
    }
}

// MOM WIN
function momVictory(){

    gameOver = true;

    const popup = document.createElement("div");

    popup.className = "victory-popup";

    popup.innerHTML = `
        <div class="victory-card">

            <img src="mother.png" class="winner-photo">

            <h2>👑 Wo Wo MOM WINS 👑</h2>

            <p>💜💕😍 Mother Caught Her 😭</p>

            <button id="restartBtn" onclick="location.reload()">
                PLAY AGAIN 🔥
            </button>

        </div>
    `;

    document.body.appendChild(popup);
}

// GIRL WIN
function girlVictory(){

    gameOver = true;

    const popup = document.createElement("div");

    popup.className = "victory-popup";

    popup.innerHTML = `
        <div class="victory-card">

            <img src="girl.png" class="winner-photo">

            <h2>💜 LOVE ESCAPE 💜</h2>

            <p>✨🥳💕 She Escaped Successfully 💕</p>

            <button id="restartBtn" onclick="location.reload()">
                PLAY AGAIN 🔥
            </button>

        </div>
    `;

    document.body.appendChild(popup);
}
