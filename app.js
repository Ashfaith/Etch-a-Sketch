const gameSpace = document.querySelector('#game-space');
let tileAmnt = prompt("How many tiles would you like?")

function makeGrid() {
    for (let i = 0 ; i < tileAmnt ; i++) {
        for (let j = 0 ; j < tileAmnt ; j++){
            const tile = document.createElement('div');
            const tileSize = 500 / tileAmnt;
            tile.style.height = `${tileSize}px`;
            tile.style.width = `${tileSize}px`;
            tile.classList.add("tile");
            gameSpace.appendChild(tile);
        }
    }
}
makeGrid()

const tiles = document.querySelectorAll('#game-space div')

function draw(){
    tiles.forEach(function(div) {
        div.addEventListener('mouseover', function() {
            this.classList.add('colour')
        })
    });
}
draw()
