//desenha a base do canvas
function fazerCanvas() {
    canvas.lineWidth = 5
    canvas.lineJoin = "round"
    canvas.lineCap = "round"
    canvas.fillStyle = "#ffffff"
    canvas.strokeStyle = "#000000"
    canvas.fillRect(0,0,1200,800)
    canvas.beginPath();
    canvas.moveTo(650,500)
    canvas.lineTo(900,500)
    canvas.stroke()
    canvas.closePath()
}

//desenha os traços de acordo com o tamanho da palavra oculta.
function fazerTracos() {
    canvas.lineWidth = 5
    canvas.lineJoin = "round"
    canvas.lineCap = "round"
    canvas.strokeStyle = "#000000"
    canvas.beginPath()

    let largura=600/palavraOculta.length
    for (let i = 0; i < palavraOculta.length; i++){

      canvas.moveTo(500+(largura*i),640)
      canvas.lineTo(550+(largura*i),640)

    }
    canvas.stroke()
    canvas.closePath()
}

function escreverLetraCerta(i) {
    canvas.font = "bold 40px Inter"
    canvas.lineWidth = 5
    canvas.lineJoin = "round"
    canvas.lineCap = "round"
    canvas.fillStyle = "#000000"
    let largura=600/palavraOculta.length
    canvas.fillText(palavraOculta[i],505+(largura*i),635)
    canvas.stroke()
}

function escreverLetraErrada(letra, errosRestantes) {
    canvas.lineWidth = 5
    canvas.font = "bold 35px Inter"
    canvas.lineJoin = "round"
    canvas.lineCap = "round"
    canvas.fillStyle = "#000000"
    canvas.fillText(letra,535+(40*(10-errosRestantes)),710,40)
}

function mostrarDerrota() {
    canvas.font = "bold 40px Inter"
    canvas.lineCap = "round"
    canvas.fillStyle = "red"
    canvas.lineJoin = "round"
    canvas.fillText("Você perdeu!",930,320)
}

function FazerBoneco(erros) {
    canvas.lineWidth = 5
    canvas.lineJoin = "round"
    canvas.lineCap = "round"
    canvas.strokeStyle = "#000000"

    switch (erros) {
        case 8://forca

            canvas.moveTo(700,500)
            canvas.lineTo(700,100)
            break;
    
        case 7://cima

            canvas.moveTo(850,100)
            canvas.lineTo(700,100)
            break;

        case 6://corda

            canvas.moveTo(850,100)
            canvas.lineTo(850,180)

            break;
        case 5://cabeça

            canvas.moveTo(900,230)
            canvas.arc(850,230,50,0,Math.PI*2)
            break;

        case 4://corpo
                        //width//height
            canvas.moveTo(850,389)
            canvas.lineTo(850,280)
            break;

        case 3://braço esquerda

            canvas.moveTo(850,300)
            canvas.lineTo(800,389)
            break;

        case 2://braço direita

            canvas.moveTo(850,300)
            canvas.lineTo(890,389)
            break;

        case 1://perna esquerdo

            canvas.moveTo(850,389)
            canvas.lineTo(800,450)
            break;

        case 0://perna direito
            
            canvas.moveTo(850,389)
            canvas.lineTo(890,450)
            break;
    }

    canvas.stroke()

    canvas.closePath()
}