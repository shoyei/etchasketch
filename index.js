//default variables and document selectors
const container = document.querySelector('.container');
const cell = document.getElementsByClassName("cell")
const resetButton = document.querySelector("#reset")
const colorButton = document.querySelector("#colorChoice")
const currentColor = document.querySelector("#colorSelection")
const gridSize = document.querySelector("#gridSize")
let gridCount = 16
let penColor = "black"

//Create 16 divs w/ class of "gridSquare"
function divGrid(gridNumber) {
    let _gridArea = gridCount * gridCount;
    for (let i = 1; i <= _gridArea; i++) {
        let _gridItem = document.createElement('div');
        _gridItem.classList.add('cell');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', _gridItem);
        
    }
    for (i = 0; i < _gridArea; i++) {
        cell[i].addEventListener('mouseenter', function (event) {
            event.target.style.backgroundColor = penColor;
            cell[i].style.backgroundColor = "#ededee";
        })
    currentColor.style.backgroundColor = "black";
    }
}

//function call to build css grid
divGrid(gridCount);

//reset grid backgrounds to white
resetButton.addEventListener("click", function () {
    for (i=0; i < (gridCount * gridCount); i++) {
        cell[i].style.backgroundColor = "#ededee";
    }

    penColor = "black";
    currentColor.style.backgroundColor = "black";
}, false)

//set new resolution for grid
gridSize.addEventListener("mouseup", function() {
    gridCount = this.value;
    divGrid(gridCount);
    for (i=0; i < (gridCount * gridCount); i++) {
        cell[i].style.backgroundColor = "#ededee";
    }
    penColor = "black";
  }, false)

//user color selection
function userColorSelection(event) {
    penColor = event.target.value;
    currentColor.style.backgroundColor = penColor
}

colorButton.addEventListener('change', userColorSelection, false);
colorButton.addEventListener('input', userColorSelection, false);
