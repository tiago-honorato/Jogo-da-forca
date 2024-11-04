//palavras da forca.
var palavras = ["microfone","monitor","cadeira", "computador", "codigo"]
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

var btnSalvar = document.getElementById("btn-salvar")
var btnCancelar = document.getElementById("btn-cancelar")
var btnNovoJogo = document.getElementById("btn-novo-jogo")
var btnSair = document.getElementById("btn-sair")
var inpNovaPalavra = document.getElementById("input-nova-palavra")

btnSalvar.style.display = "none"
btnCancelar.style.display = "none"
btnNovoJogo.style.display = "none"
btnSair.style.display = "none"
inpNovaPalavra.style.display = "none"

function startGame() {

    //desaparece botões tela principal
    document.getElementById("opacidade").style.display = "none"

    //mostra os botões da tela da forca
    btnNovoJogo.style.display = "block"
    btnSair.style.display = "block"

    //sorteia a palavra a ser descoberta
    escolhePalavraOculta()

    //cria o canvas
    fazerCanvas()

    //cria os espaços da palavra oculta
    fazerTracos()

    document.addEventListener("keydown", verificaTecla)

}
//inicia o jogo ao clicar no botão Jogar
document.getElementById("iniciar-jogo").addEventListener("click", startGame)

//salva a palavra digitada
btnSalvar.addEventListener("click", salvaPalavra)

btnNovoJogo.addEventListener("click", recarrega)

btnSair.addEventListener("click", recarrega)

btnCancelar.addEventListener("click", recarrega)

//recarrega a página
function recarrega() {

    location.reload()

}

//oculta tela principal e mostra tela de adicionar palavra.
function mostrarAdicionarPalavra() {

    document.getElementById("adc-palavra").style.display = "block";    
    document.getElementById("opacidade").style.display = 'none';

    btnCancelar.style.display = 'block';
    btnSalvar.style.display = 'block';
    inpNovaPalavra.style.display = 'block';
}

//salva palavra escrita.
function salvaPalavra() {
    
    let palavraX = document.getElementById('input-nova-palavra').value;

    if(palavraX !== ""){

        palavras.push(palavraX.toUpperCase());
        alert('Adicionado!')
        
        document.getElementById("adc-palavra").style.display = "none";

        startGame();
    }
    else{
        alert("Digite uma palavra!")
    }

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

//função principal
function verificaTecla(e) {
    let letra = e.key.toUpperCase()

    verificaTeclaLetra(e.which)

    //se o jogador tem 8 ou menos erros.
    if (letrasErradas.length <= numeroErros) {

            //verifica qual letra foi clicada. e verifica se é uma tecla válida.
        if (!verificaLetra(e.key) && verificaTeclaLetra(e.which)) {
            
            if (palavraOculta.includes(letra)) {
                
                addLetraCorreta(palavraOculta.indexOf(letra))

                for (let i = 0; i < palavraOculta.length; i++) {
                    
                    if (palavraOculta[i] === letra){
                        
                        escreverLetraCerta(i)
                        vencer(letra)
                        
                    }
                }

            } else {

                if (!verificaLetra(e.key) && !vencer(letra)) return
                    
                FazerBoneco(erros)

                fimJogo(letra)
                
            }
        }
        
    } else{

        alert("Todas as chances esgotadas!")

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
        
        mostrarVenceu()

    }

}

function fimJogo(letra) {
    if (letraEscolhida.length < palavraOculta.length) {
        
        letrasErradas.push(letra)

        if (letrasErradas.length > numeroErros) {

            mostrarGameOver()

        } else if(letraEscolhida.length < palavraOculta.length){

            escreverLetraErrada(letra, erros)
            addLetraIncorreta()

        }
    }
}
