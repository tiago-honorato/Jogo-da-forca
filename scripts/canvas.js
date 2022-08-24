//desenha a base do canvas
function desenharCanvas() {
    canvas.lineWidth=8
    canvas.lineCap="round"
    canvas.lineJoin="round"
    canvas.fillStyle= "#F3F5FC"
    canvas.strokeStyle = "#0A3871"
    canvas.fillRect(0,0,1200,800)
    canvas.beginPath();
    canvas.moveTo(650,500)
    canvas.lineTo(900,500)
    canvas.stroke()
    canvas.closePath()
}

//desenha os traços de acordo com o tamanho da palavra oculta.
function desenhartracos() {
    canvas.lineWidth=6
    canvas.lineCap="round"
    canvas.lineJoin="round"
    canvas.strokeStyle = "#0A3871"
    canvas.beginPath()

    let largura=600/palavraOculta.length
    for (let i = 0; i < palavraOculta.length; i++){

      canvas.moveTo(500+(largura*i),640)
      canvas.lineTo(550+(largura*i),640)

    }
    canvas.stroke()
    canvas.closePath()
}

