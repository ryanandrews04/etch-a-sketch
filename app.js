const container = document.querySelector('.container');

const numberButton = document.createElement('button');
numberButton.innerText = "Choose Size";
numberButton.addEventListener('click', setSize);

container.appendChild(numberButton);

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
container.appendChild(gridContainer);

// for (i = 1; i < 257; i++){
//     let div = document.createElement('div');
//     div.classList.add('grid-square');
//     gridContainer.appendChild(div);
//     div.addEventListener('mouseenter', () => {
//         div.classList.add('black');
//     })
// }

function setSize(){
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {gridContainer.removeChild(square)});
    let size = prompt('How many squares wide and tall would you like?');
    if (size > 100 || size < 1){
        alert("Cannot be larger than 100 or smaller than 1");
        return;
    }
    for (i = 1; i < size * size; i++){
        let div = document.createElement('div');
        div.classList.add('grid-square');
        div.setAttribute('style', `width: ${640 / size}px; height: ${640 / size}px;`);
        gridContainer.appendChild(div);
        div.addEventListener('mouseenter', () => {
            div.classList.add('black');
        })
    }
}

