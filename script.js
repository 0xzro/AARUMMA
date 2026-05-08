// script.js

const girl = document.getElementById("girl");
const mom = document.getElementById("mom");
const scoreText = document.getElementById("score");
const jumpBtn = document.getElementById("jumpBtn");

let jumping = false;
let score = 0;
let gameOver = false;

// START SPEED
let gameSpeed = 3;

// MOM START POSITION
let momPosition = -120;

// JUMP SYSTEM
jumpBtn.addEventListener("click", function(){

    if(jumping || gameOver) return;

    jumping = true;

    let position = 20;

    // JUMP UP
    const jumpUp = setInterval(function(){

        if(position >= 180){

            clearInterval(jumpUp);

            // FALL DOWN
            const jumpDown = setInterval(function(){

                position -= 14;

                girl.style.bottom = position + "px";

                if(position <= 20){

                    clearInterval(jumpDown);

                    girl.style.bottom = "20px";

                    jumping = false;
                }

            },15);

        }

        position += 14;

        girl.style.bottom = position + "px";

    },15);

});

// MAIN GAME LOOP
function moveMom(){

    if(gameOver) return;

    // MOVE MOM
    momPosition += gameSpeed;

    mom.style.right = momPosition + "px";

    // IF MOM CROSSES SCREEN
    if(momPosition > window.innerWidth){

        // RESET POSITION
        momPosition = -120;

        // INCREASE SCORE
        score++;

        scoreText.innerHTML = "Score: " + score;

        // SLOWLY INCREASE SPEED
        if(gameSpeed < 14){
            gameSpeed += 0.4;
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

// COLLISION DETECTION
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

// MOM WIN POPUP
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

// GIRL WIN POPUP
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
