//palavras da forca.
var palavras = ["MONITOR","CADEIRA","PIPOCA","PAREDE","HORA","PROGRAMA","MICROFONE"]
//variavel para desenhar no canvas.
var canvas = document.getElementById("forca").getContext("2d")

//palavra que será sorteada pela função
var palavraOculta = ""
//palavra que vai se formando ao decorrer do jogo
var palavraCerta = ""
//recipiente para todas letras pressionadas
var letras = []
//recipiente para letras erradas
var letrasErradas = []
//numero de erros que podem ser cometidos
var numeroErros = 8
//Letras corretas ficarão aqui(mesmo se for mais que uma.)
var letraEscolhida = []
// numero de letras erradas permitidas
var erros = 8

startGame()

function startGame() {

    //cria o canvas
    desenharCanvas()

    //sorteia a palavra a ser descoberta
    escolhePalavraOculta()

    //cria os espaços da palavra oculta
    desenhartracos()

    
}









//escolhe aleatoriamente a palavra a ser descoberta.
function escolhePalavraOculta() {
    let palavra = palavras[Math.floor(Math.random()* palavras.length)]

    palavraOculta = palavra

    return palavra
}
//verifica se é uma letra do alfabeto
function verificaTeclaLetra(key) {
    
    if (typeof key === "number" && key >= 65 && key <= 90) {

        return true

    } else {
        return false
    }

}


//verifica se alguma tecla foi pressionada e chama a função verificaTecla
document.addEventListener("keydown", verificaTecla)

//função principal
function verificaTecla(e) {
    let letra = e.key.toUpperCase()

    console.log("palavra Certa: " + palavraCerta)
    console.log("Letras: " + letras)
    console.log("Letras erradas: " + letrasErradas)
    console.log("Letras escolhidas: " + letraEscolhida)
    console.log("Numero de erros: " + numeroErros)
    verificaTeclaLetra(e.which)

    //se o jogador tem 8 ou menos erros.
    if (letrasErradas.length <= numeroErros) {

            //verifica qual letra foi clicada. e verifica se é uma tecla válida.
        if (!verificaLetra(e.key) && verificaTeclaLetra(e.which)) {
            
            if (palavraOculta.includes(letra)) {
                
                addLetraCorreta(palavraOculta.indexOf(letra))

                for (let i = 0; i < palavraOculta.length; i++) {
                    
                    if (palavraOculta[i] === letra){
                        
                        vencer(letra)

                    }
                    
                }

            } else {

                if (!verificaLetra(e.key) && !vencer(letra)) return
                    
                
                fimJogo(letra)
                
            }
        }
        
    } else{

        alert("Você atingiu o limíte de letras incorretas")

    }
}

function verificaLetra(key) {
    
    if (letras.length < 1 || letras.indexOf(key) < 0) {

        letras.push(key)
        return false
    } else {

        letras.push(key)
        return true
    }
    
}

function addLetraCorreta(i) {
    //vai fazendo uma cópia da palavra secreta pra no final verificar se são iguais
    palavraCerta += palavraOculta[i].toUpperCase()

}

function addLetraIncorreta(letra) {
    //se a letra n for um indice da paalvraOculta, perde uma vida. 
    if (palavraOculta.indexOf(letra) <= 0) {

        erros -= 1
    }
}

function vencer(letra) {
    //coloca a letra dentro do array de letras escolhidas.
    letraEscolhida.push(letra.toUpperCase())

    //é "letraEscolhida" pq pode ter letra repetida, senão poderia ser "palavraCerta"
    if (letraEscolhida.length == palavraOculta.length) {
        
        //exibirVitoria()
        console.log("Você venceu!")

    }

}

function fimJogo(letra) {
    if (letraEscolhida.length < palavraOculta.length) {
        
        letrasErradas.push(letra)

        if (letrasErradas.length > erros) {

            //exibirDerrota()
            console.log("Você perdeu!")

        } else if(letraEscolhida.length < palavraOculta.length){

            addLetraIncorreta()

        }
    }
}

console.log("Palavra oculta: " + palavraOculta)
console.log("Erros restantes: " + erros)
