// model
let app = document.getElementById('app');
let characterSelected = false;
let playerCharacter;
let playerHealth;
let maxPlayerHealth;
let playerPower;
let hpBarStageP = [0];
let hpBarStageB = [0];
let bossMushrooms = 1;
let mushroomImage = './img/bowserMushroom.png'
let bossHealth = 300;
const bossMaxHealth = 300;
const intervalAttacks = setInterval(bossAttacks, 1500);


// view
stopInterval();
setInterval(bossAttacks, 1500);
updateView();
function updateView() {
    if (characterSelected == false) {
        updateViewCharacterSelect();
    } else {
        updateViewBattle();
    }
}

function updateViewCharacterSelect() {
    app.innerHTML = /*HTML*/`
    <div id="playerSelect">
        <h1>CHOOSE YOUR CHARACTER</h1>
            <div id="characters">
                <div id="mario" onclick="selectMario()"><img src="./img/mario.png" alt="" /></div>
                <div id="luigi" onclick="selectLuigi()"><img src="./img/luigi.png" alt="" /></div>
                <div id="peach" onclick="selectPeach()"><img src="./img/peach.png" alt="" /></div>
                <div id="yoshi" onclick="selectYoshi()"><img src="./img/yoshi.png" alt="" /></div>
                <div onclick="selectSaiyan()"></div>
                <div onclick="selectSaiyan()"></div>
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
                <div id="healthPlayer" class="${hpBarStageP}" >${playerHealth} HP</div>
                </div>
                <div id="bossSide">
                <div id="mushroomBoss"><img src="${mushroomImage}" alt="" /></div>
                <div id="characterBoss" onclick="attack()"><img src="./img/bowser.png" alt="" /></div>
                <div id="healthBoss" class="${hpBarStageB}" >${bossHealth}</div>
            </div>
        </div>
        `;
}

// controller

function selectMario() {
    characterSelected = true;
    playerCharacter = './img/marioBattle.png';
    playerHealth = 200;
    maxPlayerHealth = 200;
    playerPower = 5;
    updateView();
}

function selectLuigi() {
    characterSelected = true;
    playerCharacter = './img/luigiBattle.png';
    playerHealth = 140;
    maxPlayerHealth = 140;
    playerPower = 10;
    updateView();
}

function selectPeach() {
    characterSelected = true;
    playerCharacter = './img/peachBattle.png';
    playerHealth = 100;
    maxPlayerHealth = 100;
    playerPower = 15;
    updateView();
}

function selectYoshi() {
    characterSelected = true;
    playerCharacter = './img/yoshiBattle.png';
    playerHealth = 80;
    maxPlayerHealth = 80;
    playerPower = 20;
    updateView();
}

function selectSaiyan() {
    characterSelected = true;
    playerCharacter = './img/marioSaiyan.png';
    playerHealth = 9999;
    maxPlayerHealth = 9999;
    playerPower = 99;
    updateView();
}

function attack() {
    if (bossHealth > 0) {
        bossHealth = bossHealth - playerPower;
        if (bossHealth <= 0) {
            alert("You Win!")
            characterSelected = false;
            playerHealth;
            bossHealth = bossMaxHealth;
            stopInterval();
        }
    }
    hpBar()
    updateView();
}

function healPlayer() {
    if (playerHealth <= maxPlayerHealth - 20) {
        playerHealth = playerHealth + 20;
        hpBar();
    }
    updateView();
}

function bossAttacks() {
    if (playerHealth > 0) {
        playerHealth = playerHealth - 20;
        hpBar();
        if (bossHealth <= 80 && bossMushrooms == 1) {
            bossHealth = bossHealth + 150;
            bossMushrooms = 0;
            mushroomImage = '';
        }
        if (playerHealth <= 0) {
            alert("You Lose!")
            characterSelected = false;
            playerHealth;
            bossHealth = bossMaxHealth;
            stopInterval();
        }
    }
    updateView();
}

function bossHeal() {
    if (bossHealth <= 80) {
        bossHealth = bossHealth + 150;
        hpBar();
    }
    updateView();
}

function hpBar(){
    if (playerHealth >= maxPlayerHealth * 0.75){
        hpBarStageP.splice(0, 1, 'healthy');
    } else if (playerHealth >= maxPlayerHealth * 0.33){
        hpBarStageP.splice(0, 1, 'hurt');
    } else {
        hpBarStageP.splice(0, 1, 'wounded');
    }
    if (bossHealth >= bossMaxHealth * 0.75){
        hpBarStageB.splice(0, 1, 'healthy');
    } else if (bossHealth >= bossMaxHealth * 0.33){
        hpBarStageB.splice(0, 1, 'hurt');
    } else {
        hpBarStageB.splice(0, 1, 'wounded');
    }
}

function stopInterval() {
    clearInterval(intervalAttacks);
}