const pixBoard = document.getElementById('pixel-board');

for (let indexLine = 0; indexLine < 5; indexLine += 1) {
  const pixLine = document.createElement('div');
  pixLine.className = 'pixLine';
  pixBoard.appendChild(pixLine);
  for (let indexColumn = 0; indexColumn < 5; indexColumn += 1) {
    const pixelCell = document.createElement('div');
    pixelCell.className = 'pixel';
    pixLine.appendChild(pixelCell);
    pixelCell.style.backgroundColor = 'white';
  }
}
