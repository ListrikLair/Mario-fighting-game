// model
let app = document.getElementById('app');
let characterChosen = false;
let playerCharacter;

// view
updateView();
function updateView() {
    if (characterChosen == false) {
        updateViewCharacterSelect();
    } else {
        updateViewBattle();
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
            </div>
    </div>
`;
}

function updateViewBattle() {
    app.innerHTML = /*HTML*/`
    <div id="battlefield">
        <div id="playerSide">
            <div id="mushroomPlayer" onclick="healPlayer()"><img src="./img/mushroom.png" alt="" /></div>
            <div id="characterPlayer"><img src="${playerCharacter}" alt="" /></div>
            <div id="healthPlayer">pHealth</div>
        </div>
        <div id="bossSide">
            <div id="mushroomBoss"><img src="./img/bowserMushroom.png" alt="" /></div>
            <div id="characterBoss"><img src="./img/bowser.png" alt="" /></div>
            <div id="healthBoss">bHealth</div>
        </div>
    </div>
    `;
}

// controller

function chooseMario() {
    characterChosen = true;
    playerCharacter = './img/marioBattle.png';
    updateView();
}

function chooseLuigi() {
    characterChosen = true;
    playerCharacter = './img/luigiBattle.png';
    updateView();
}

function choosePeach() {
    characterChosen = true;
    playerCharacter = './img/peachBattle.png';
    updateView();
}

function chooseYoshi() {
    characterChosen = true;
    playerCharacter = './img/yoshiBattle.png';
    updateView();
}