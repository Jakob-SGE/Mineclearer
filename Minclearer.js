console.log("Game script is loaded!");
const cols = 9;
const rows = 9;
const TOTAL_CELLS = cols * rows;
const totalMines = 81;
let mineLocations = [];
const restartButton = document.getElementById("restartButton");

const container = document.getElementById('container');

function startGame () {
  container.innerHTML = '';
  mineLocations = []; 
  for (let i = 0; i < TOTAL_CELLS; i++) {
    const cell = document.createElement('button');
    cell.classList.add('cell');
    container.appendChild(cell);
  }
  for (let i = 0; i < totalMines; i++) {
    let row, col;
    do {
      row = Math.floor(Math.random() * rows);
      col = Math.floor(Math.random() * cols);
    } while (mineLocations.includes(`${row},${col}`));
    mineLocations.push(`${row},${col}`);
  }
}

container.addEventListener('click', function(event) {
if (event.target.classList.contains('cell')) {
  const cellIndex = Array.from(container.children).indexOf(event.target);
  const row = Math.floor(cellIndex / cols);
  const col = cellIndex % cols;
  
  if (mineLocations.includes(`${row},${col}`)) {
    event.target.style.backgroundColor = 'red';
    alert('Game Over!');
  } 
}
});

restartButton.addEventListener('click', function(){
  startGame();
})

container.addEventListener("click", function(){console.log("Button was clicked")})

startGame();