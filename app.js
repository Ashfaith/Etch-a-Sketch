const gameSpace = document.querySelector('#game-space');

for (let i = 0 ; i < 256 ; i++) {
    const tile = document.createElement('div');
    tile.classList.add("tile-size");
    gameSpace.appendChild(tile);
}
