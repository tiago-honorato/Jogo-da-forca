
var palavras = ['MONITOR', 'FORCA', 'PAREDE', 'PIPOCA', 'MICROFONE', 'TECLADO', 'PROGRAMA', 'CADEIRA'];

var canvas = document.getElementById('forca').getContext('2d');
var palavraSecreta = "";//
var palavraCorreta = "";//
var letras = []//
let letrasIncorretas = []//
let numeroDeErros = 8
let letraEscolhida = [];
var erros = 8;

document.onkeydown = (e) => {

  let letra = e.key.toUpperCase()

  console.log("palavra Certa: " + palavraCorreta)
  console.log("Letras: " + letras)
  console.log("Letras erradas: " + letrasIncorretas)
  console.log("Letras escolhidas: " + letraEscolhida)
  console.log("Numero de erros: " + numeroDeErros)

  if (letrasIncorretas.length <= numeroDeErros) {//

    if (!verificarLetraClicada(e.key) && verificarLetra(e.which)) {//

      if (palavraSecreta.includes(letra)) {

        adicionarLetraCorreta(palavraSecreta.indexOf(letra))

        for (let i = 0; i < palavraSecreta.length; i++) {

          if (palavraSecreta[i] === letra) {

            verificarVencedor(letra)

          }
        }

      } else {

        if (!verificarLetraClicada(e.key) && !verificarVencedor(letra)) return

        //desenharForca(erros)

        verificarFimDeJogo(letra)

      }
    }
  }
  else {
    
    alert('Você atingiu o limíte de letras incorretas')
  }

};

function escolherPalavraSecreta() {//

    let palavra = palavras[Math.floor(Math.random() * palavras.length)]

    palavraSecreta = palavra

    return palavra

  }

function adicionarLetraCorreta(i) {//

    palavraCorreta += palavraSecreta[i].toUpperCase()
    
  }

function adicionarLetraIncorreta(letter) {//

  if (palavraSecreta.indexOf(letter) <= 0) {

    erros -= 1
  }
}



function verificarLetraClicada(key) {//

  if (letras.length < 1 || letras.indexOf(key) < 0) {

    letras.push(key)

    return false
      
    } else {

      letras.push(key)

      return true

    }
  }

function verificarFimDeJogo(letra) {//

  if(letraEscolhida.length < palavraSecreta.length) { 

    letrasIncorretas.push(letra);
      
    if (letrasIncorretas.length > numeroDeErros) {

      exibirDerrota()

    } else if(letraEscolhida.length < palavraSecreta.length) {

      adicionarLetraIncorreta(letra)

    }
  }
} 

function verificarVencedor(letra) {//

  letraEscolhida.push(letra.toUpperCase());

  if (letraEscolhida.length == palavraSecreta.length) {

    exibirVitoria()

  }
}

function verificarLetra(keyWhich) {//

  if (typeof keyWhich === "number" && keyWhich >= 65 && keyWhich <= 90) {

    return true;
  } else {

    return false;
  }
}

escolherPalavraSecreta()

console.log("Palavra oculta: " + palavraSecreta)
console.log("Erros restantes: " + erros)
