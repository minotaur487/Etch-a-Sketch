const body = document.querySelector('body');
const container = document.querySelector('#container');

function paint(e) {
    let val = Math.floor(Math.random() * 360);
    this.style.backgroundColor = `hsl(${val}, 100%, 50%)`;
}

function clear() {
    const gridNodeList = document.querySelectorAll('.grid');
    gridNodeList.forEach(slot => slot.remove());
}

function createGrid(rows, columns) {
    let numOfSlots = rows * columns;
    for (let i=0; i<numOfSlots; i++)
    {
        let slot = document.createElement('div');
        slot.classList.toggle('grid');
        container.appendChild(slot);
    }

    // Attach event listeners for painting
    const grid = document.querySelectorAll('.grid');
    grid.forEach(slot => slot.addEventListener('mouseover', paint));
}

function clearAndConstructNewGrid() {
    clear();
    let dimensions, rows, col;
    do {
        dimensions = window.prompt('Input the number of squares per each side for a new grid. Each side must be no more than 100. Separate the numbers by a space (Row Column)', '16 16');
        dimensions = dimensions.split(' ');
        rows = parseInt(dimensions[0]);
        col = parseInt(dimensions[1]);
    } while (rows > 100 || col > 100 || rows < 0 || col < 0)

    createGrid(rows, col);
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
}

// Initialize grid
createGrid(16, 16);

// Painting implementation
const button = document.querySelector('button')
button.addEventListener('click', clearAndConstructNewGrid)