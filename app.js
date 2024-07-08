const gameSpace = document.querySelector('#game-space');
const gridBtn = document.querySelector('#new-grid');
let tileAmnt = 50;
let tile;


gridBtn.addEventListener('click', () => {
    tileAmnt = prompt("How many tiles would you like?");
    if (tileAmnt === null){
        return
    } else {
    clearSpace();
    makeGrid();
    draw();
    }
});

function makeGrid() {
    for (let i = 0 ; i < tileAmnt ; i++) {
        for (let j = 0 ; j < tileAmnt ; j++){
            tile = document.createElement('div');
            const tileSize = 500 / tileAmnt;
            tile.style.height = `${tileSize}px`;
            tile.style.width = `${tileSize}px`;
            tile.classList.add("tile");
            gameSpace.appendChild(tile);
        }
    }
}
makeGrid();


function clearSpace() {
    while (gameSpace.firstChild){
        gameSpace.firstChild.remove();
    }
}


function draw(){
    const tiles = document.querySelectorAll('#game-space div')
    tiles.forEach(function(div) {
        div.addEventListener('mouseover', function() {
            this.classList.add('colour');
        });
    });
}
draw();