// model
let app = document.getElementById('app');
let characterChosen = false;
let playerCharacter;
let playerHealth;
let maxPlayerHealth;
let playerPower;
let bossHealth = 300;
// view
updateView();
function updateView() {
    if (characterChosen == false) {
        updateViewCharacterSelect();
    } else {
        updateViewBattle();
    }
    if (bossHealth <= 0) {
        confirm("You Win!")
    }
    if (playerHealth <= 0) {
        confirm("You Lose!")
    }
}

function updateViewCharacterSelect() {
    app.innerHTML = /*HTML*/`
    <div id="playerSelect">
        <h1>Choose your character</h1>
            <div id="characters">
                <div id="mario" onclick="chooseMario()"><img src="./img/mario.png" alt="" /></div>
                <div id="luigi" onclick="chooseLuigi()"><img src="./img/luigi.png" alt="" /></div>
                <div id="peach" onclick="choosePeach()"><img src="./img/peach.png" alt="" /></div>
                <div id="yoshi" onclick="chooseYoshi()"><img src="./img/yoshi.png" alt="" /></div>
                <div onclick="chooseSaiyan()"></div>
                <div onclick="chooseSaiyan()"></div>
            </div>
    </div>
`;
}

function updateViewBattle() {
    app.innerHTML = /*HTML*/`
    <div id="battlefield">
        <h1>Punch him!</h1>
            <div id="playerSide">
                <div id="mushroomPlayer" onclick="healPlayer()"><img src="./img/mushroom.png" alt="" /></div>
                <div id="characterPlayer"><img src="${playerCharacter}" alt="" /></div>
                <div id="healthPlayer">${playerHealth} HP</div>
            </div>
            <div id="bossSide">
                <div id="mushroomBoss"><img src="./img/bowserMushroom.png" alt="" /></div>
                <div id="characterBoss" onclick="attack()"><img src="./img/bowser.png" alt="" /></div>
                <div id="healthBoss">${bossHealth}</div>
            </div>
        </div>
    `;
}

// controller

function chooseMario() {
    characterChosen = true;
    playerCharacter = './img/marioBattle.png';
    playerHealth = 200;
    maxPlayerHealth = 200;
    playerPower = 5;
    updateView();
}

function chooseLuigi() {
    characterChosen = true;
    playerCharacter = './img/luigiBattle.png';
    playerHealth = 140;
    playerPower = 10;
    updateView();
}

function choosePeach() {
    characterChosen = true;
    playerCharacter = './img/peachBattle.png';
    playerHealth = 100;
    playerPower = 15;
    updateView();
}

function chooseYoshi() {
    characterChosen = true;
    playerCharacter = './img/yoshiBattle.png';
    playerHealth = 80;
    playerPower = 20;
    updateView();
}

function chooseSaiyan() {
    characterChosen = true;
    playerCharacter = './img/marioSaiyan.png';
    playerHealth = 9999;
    playerPower = 99;
    updateView();
}

function attack() {
    bossHealth = bossHealth - playerPower;
    updateView();
}

function healPlayer() {
    if (playerHealth <= maxPlayerHealth - 19) {
        playerHealth = playerHealth + 20;
    }
    updateView();
}