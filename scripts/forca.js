//seletores

var words = ["CARRO", "BANANA", "MONITOR", "MUSICA", "DADO"]//não pode por acento.
var table = document.getElementById("forca").getContext("2d")//getContext("2d") define um contexto de desenho 2d e pra utilizar a var tabuleiro para desenhar.
//ou separado: var pincel = tabuleiro.GetContext("2d");
var letters = []
var correctWord = ""//armazena a palavra a ser descoberta.
var errors = 0

function pickSecretWord() {
    var word = words[Math.floor(Math.random()*words.length)]//Math.floor impede que o número aleatório gerado pelo Math.random sejá com virgula. e *words.length faz o tamanho da array ser o número máximo que pode ser gerado.
    //básicamente vai pegar um indice aleário do array words.
    secretWord = word
    
    return word
} 

function writeTraces() {
    table.lineWidth = 5 //define a espessura da linha.
    table.lineCap = "round"//arredonda os cantos da linha.
    table.lineJoin = "round"//quando pontas de linhas se cruzam no final, arredonda a ponta.
    table.strokeStyle = "#000000"// define a cor da linha.
    table.beginPath()//precisa para inicia um caminho.
    var axis = 600/secretWord.length
    for(let i = 0; i < secretWord.length; i++){
        table.moveTo(500+(axis*i), 640)// ...
        table.lineTo(550+(axis*i), 640)// ...
    }
    table.stroke()//faz a linha ser desenhada
    table.closePath()//precisa para encerrar um caminho.
}
//-----------
writeTraces(pickSecretWord()) //DEFINIR ALGO PRA INICIAR
//-----------
function writeCorrectLetter(index) {
    table.font = "bold 52px sans-serif"//define a fonte que vai ser escrita no canvas.
    table.lineWidth = 5 //define a espessura da linha.
    table.lineCap = "round"//arredonda os cantos da linha.
    table.lineJoin = "round"//quando pontas de linhas se cruzam no final, arredonda a ponta.
    table.strokeStyle = "#000000"// define a cor da linha.

    var axis = 600/secretWord.length

    table.fillText(secretWord[index],505+(axis*index), 620)

}

function writeIncorrectLetter(letter, errorsLeft) {
    table.font = "bold 40px sans-serif"
    table.lineWidth = 6
    table.lineCap = "round"
    table.lineJoin = "round"
    table.strokeStyle = "#000000"
    table.fillText(letter, 535+(40*(10-errorsLeft)), 710, 40)
}

function verifyCorrectLetter(key) {
    if (letters.length < 1 || letters.indexOf(key) < 0) {
        letters.push(key)
        return false
    } else{
        letters.push(key.toUpperCase())
        return true
    }
}

function addCorrectLetter(i) {
    correctWord += secretWord[i].toUpperCase()
}

function addIncorrectLetter(i) {
    if (secretWord.indexOf(i) <= 0) {
        errors += 9
    }
    
}

document.onkeydown = (e) => {
    var letter = e.key.toUpperCase()
    if (!verifyCorrectLetter(e.key)) {
        
        if (secretWord.includes(letter)) {
            addCorrectLetter(secretWord.indexOf(letter))
            for(let i = 0; i < secretWord.length; i++){
                if (secretWord[i] === letter) {
                    writeCorrectLetter(i)
                }
            }

        }

    } else{
        
        if (!verifyCorrectLetter(e.key))
        return
        addIncorrectLetter(letter)
        writeIncorrectLetter(letter, errors)
            
    }
}