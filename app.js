const gameSpace = document.querySelector('#game-space');
const gridBtn = document.querySelector('#new-grid');
let tileAmnt = 50;
let tile;


gridBtn.addEventListener('click', () => {
    let tilePrompt = prompt("Choose the length of tiles for the canvas");
    if (tilePrompt < 10 || tilePrompt > 100){
        do {
            alert("Length of sides must be between 10 and 100!");
            tilePrompt = prompt("Choose the length of tiles for the canvas");;
            if (tilePrompt === null){
                return
            } 
        } while (tilePrompt < 10 || tilePrompt > 100);
    } else {
        tileAmnt = tilePrompt;
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