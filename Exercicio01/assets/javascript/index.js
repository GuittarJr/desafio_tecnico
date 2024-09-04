const inputValue = document.getElementById("inputValue");
const output = document.getElementById("output");
const btn = document.getElementById("btnSend");

btn.addEventListener("click", verificar);

function verificar() {
    try {
        const valor = analisarValor(parseFloat(inputValue.value));

        if (pertenceAFibonacci(valor)) {
            output.innerHTML = `<p class = "pertence">O numero ${valor}: pertence a sequência de Fibbonaci.</p>`
        }else{
            output.innerHTML = `<p class = "naoPertence">O numero ${valor}: não pertence a sequência de Fibbonaci.</p>`
        }

    } catch (error) {
        output.innerHTML= `<p class = "erro">${error.message}</p>`;
    }
}

function analisarValor(valor) {
    if (isNaN(valor) || valor < 0) {
        throw new Error("Por favor, insira um valor válido.");
    }
    return valor;
}

function pertenceAFibonacci(numero) {
    let a = 0, b = 1;
  
    while (b <= numero) {
      if (b === numero) {
        return true;
      }
      let temp = a;
      a = b;
      b = temp + b;
    }
  
    return false;
  }