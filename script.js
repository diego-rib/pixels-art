function selectColor() {
  let blackColor = document.getElementById('black');
  blackColor.classList.add('selected');

  let colorOptions = document.getElementsByClassName('color');
  for (let index = 0; index < colorOptions.length; index += 1) {
    colorOptions[index].addEventListener('click', function (event) {
      for (let index2 = 0; index2 < colorOptions.length; index2 += 1) {
        if (colorOptions[index2].classList.contains('selected') === true) {
          colorOptions[index2].classList.remove('selected');
        }
        event.target.classList.add('selected');
      }
    });
  }
};
selectColor();

function fillPixels() {
  let pixelGrid = document.getElementById('table');
  pixelGrid.addEventListener('click', function(event) {
    event.target.style.backgroundColor = document.querySelector('.selected').id;
  });
};
fillPixels()

function clearBoard() {
  let clearButton = document.querySelector('#clear-board');
  let pixels = document.querySelectorAll('.pixel');
  clearButton.addEventListener('click', function() {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  })
}
clearBoard();


function createGrid() { //melhorar criando igual html
  //let gridSize = 10;
  let gridButton = document.getElementById('generate-board');
  let tblSection = document.getElementById('section-teste')
  let tbl = document.createElement('table');
  tbl.id = 'table';
  gridButton.addEventListener('click', function() {
    let gridSize = document.getElementById('board-size').value;
    if (gridSize > 0) {
      for (let indexRow = 0; indexRow < gridSize; indexRow += 1) {
        let tr = tbl.insertRow();
        for (let indexColumn = 0; indexColumn < gridSize; indexColumn += 1) {
          let td = tr.insertCell();
          td.className = 'pixel';
        }
      }
    }
    if (gridSize === '') {
      alert('Board inválido!')
    }

    tblSection.appendChild(tbl)
  })
}
createGrid();