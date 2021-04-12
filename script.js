 
    window.onload = function carregar() {
        document.getElementById('black').classList.add('selected');
      };
      function selecionaClasse(event) {
        const atribuiClasse = document.querySelectorAll('.selected');
        for (let index = 0; index < atribuiClasse.length; index += 1) {
          atribuiClasse[index].classList.remove('selected');
        }
        event.target.classList.add('selected');
      }
      const paleta = document.querySelector('#color-palette');
      paleta.addEventListener('click', selecionaClasse);


    let pixelBoard = document.querySelector('#pixel-board')
    pixelBoard.addEventListener('click', function (event){
        let colorSelected = document.querySelector('.selected')
        let sectedColor = window.getComputedStyle(colorSelected, null).getPropertyValue("background-color");
        let paintPinxel = event.target
        paintPinxel.style.backgroundColor = sectedColor 
        }) 

        function createDivs() {
            let getBody = document.querySelector('body')
            let session = document.createElement('section')
            let sessionButton = document.createElement('button')
            sessionButton.id = "clear-board"
            getBody.appendChild(sessionButton)
            session.id = "pixel-board"
            getBody.appendChild(session)
            }
          createDivs()

        function createButton() {
            let getButton = document.querySelector('#clear-board')
            getButton.innerHTML = "Limpar"
            getButton.addEventListener('click', function(){
                let getPixel = document.querySelectorAll('#pixel-board>div')
                let getPixelBoard = document.querySelector('#pixel-board')
                for(let index =0 ; index < getPixel.length; index += 1){ 
                getPixel[index].style.backgroundColor= 'white'
                getPixelBoard.style.backgroundColor= 'white'
                }
              })
            }
               createButton()
               
               function createPixel() {
                let getSession = document.querySelector('#pixel-board')
                let pixelSize = 5;
               }                     
               const botao = document.getElementById('clear-board');
               const quadrados = document.querySelectorAll('.pixel');
               const backgroundColor = 'white';
               
               function reset() {
                 for (let index = 0; index < quadrados.length; index += 1) {
                   while (quadrados[index].style.backgroundColor !== backgroundColor) {
                     quadrados[index].style.backgroundColor = backgroundColor;
                   }
                 }
               }
               botao.addEventListener('click', reset);
               
