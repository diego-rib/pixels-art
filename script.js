function createDiv(number) {
  for (let index = 0; index < number; index += 1) {
    const createdDiv = document.createElement('div');
    createdDiv.className = 'pixel';
    document.getElementById('pixel-board').appendChild(createdDiv);
  }
}
createDiv(25);

function changeSelectedClass(event) {
  document.querySelectorAll('.selected')[0].classList.remove('selected');
  const eventTarget = event.target;
  eventTarget.className += ' selected';
}
document.getElementById('color-palette').addEventListener('click', changeSelectedClass);

function changeColorPixel(event) {
  const eventTarget = event.target;
  const classColor = document.querySelectorAll('.selected')[0].classList[1];
  if (event.target.classList.length !== 1) {
    eventTarget.classList.remove(event.target.classList[1]);
    eventTarget.className += ' ' + classColor;
  } else {
    eventTarget.className += ' ' + classColor;
  }
}
document.getElementById('pixel-board').addEventListener('click', changeColorPixel);

function clearPixel() {
  for (let contador = 0; contador < 25; contador += 1){
    document.querySelectorAll('.pixel')[contador].classList.remove(document.querySelectorAll('.pixel')[contador].classList[1]);
  }
}
document.getElementById('clear-board').addEventListener('click', clearPixel);