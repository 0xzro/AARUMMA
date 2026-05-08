// script.js

const girl = document.getElementById("girl");
const mom = document.getElementById("mom");
const scoreText = document.getElementById("score");
const jumpBtn = document.getElementById("jumpBtn");

let jumping = false;
let score = 0;
let gameOver = false;

let momPosition = -120;

// START SLOW
let gameSpeed = 3;

// JUMP
jumpBtn.addEventListener("click", function(){

    if(jumping || gameOver) return;

    jumping = true;

    let position = 20;

    const jumpUp = setInterval(function(){

        if(position >= 220){

            clearInterval(jumpUp);

            const jumpDown = setInterval(function(){

                position -= 10;

                girl.style.bottom = position + "px";

                if(position <= 20){

                    clearInterval(jumpDown);

                    jumping = false;
                }

            },20);

        }

        position += 10;

        girl.style.bottom = position + "px";

    },20);

});

// MOM MOVEMENT
function moveMom(){

    if(gameOver) return;

    // MOVE MOM
    momPosition += gameSpeed;

    mom.style.right = momPosition + "px";

    // RESET AFTER CROSSING SCREEN
    if(momPosition > window.innerWidth){

        momPosition = -120;

        score++;

        scoreText.innerHTML = "Score: " + score;

        // SPEED INCREASE SLOWLY
        if(gameSpeed < 12){
            gameSpeed += 0.5;
        }

        // GIRL WIN
        if(score >= 15){
            girlVictory();
        }
    }

    checkCollision();

    requestAnimationFrame(moveMom);
}

moveMom();

// COLLISION
function checkCollision(){

    const girlRect = girl.getBoundingClientRect();

    const momRect = mom.getBoundingClientRect();

    if(
        girlRect.right > momRect.left &&
        girlRect.left < momRect.right &&
        girlRect.bottom > momRect.top &&
        girlRect.top < momRect.bottom
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

            <h2>👑 MOM WINS 👑</h2>

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
