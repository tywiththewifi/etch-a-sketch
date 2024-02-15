
const container = document.querySelector('#container');

// Logic for grid creation goes here
function createGrid(n) {

    container.innerHTML = '';

    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.className = "row";
        
        for (let j = 0; j < n; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.className = "gridSquare";
            row.appendChild(gridSquare);
            gridSquare.addEventListener('mouseover', () => {
                gridSquare.style.backgroundColor = 'red';
            });
            
        };

        container.appendChild(row);
    }
}

createGrid(16);


const newGrid = document.querySelector('#button');

// Logic for button press goes here
newGrid.addEventListener('click', () => {
    let userInput = prompt("How many squares per side for the new grid? Please choose a number less than 100");
    if (userInput < 100) {
        createGrid(userInput);
    } else {
        alert("Please enter a number smaller than 100")
    }
});

