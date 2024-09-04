const inputValue = document.getElementById("inputValue");
const output = document.getElementById("output");
const btn = document.getElementById("btnSend");

btn.addEventListener("click", verificar);

function verificar() {
    const string = inputValue.value
     let contador = 0;
     for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === 'a') {
         contador++;
        }
    }
    
    output.innerHTML = `<p class = "output">A palavra <b>${string}</b> contém a seguinte
     quantidade de letras '<b>A</b>'s: <br><br> <b>${contador}</b>`;
}

