console.log("Game script is loaded!");
const COLUMNS = 9;
const ROWS = 9;
const TOTAL_CELLS = COLUMNS * ROWS;
const totalMines = 10
let mineLocations = []

const container = document.getElementById('container');

for (let i = 0; i < TOTAL_CELLS; i++) {
    const cell = document.createElement('button');
    cell.classList.add('cell');
    container.appendChild(cell);
}
for (let i = 0; i < totalMines; i++) {
let row, col;
do {
    row = Math.floor(Math.random() * ROWS);
    col = Math.floor(Math.random() * COLUMNS);
} while (mineLocations.includes(`${row},${col}`));
mineLocations.push(`${row},${col}`);
}
container.addEventListener('click', function(event) {
  if (event.target.classList.contains('cell')) {
    const cellIndex = Array.from(container.children).indexOf(event.target);
    const row = Math.floor(cellIndex / COLUMNS);
    const col = cellIndex % COLUMNS;
    
    if (mineLocations.includes(`${row},${col}`)) {
      event.target.style.backgroundColor = 'red';
      revealMines();
      alert('Game Over!');
    } else {
      const adjacentMines = countAdjacentMines(row, col);
      event.target.textContent = adjacentMines;
    }
  }
});
container.addEventListener("click", function(){console.log("Button was clicked")})