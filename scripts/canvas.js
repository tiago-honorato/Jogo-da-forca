//desenha a base do canvas
function fazerCanvas() {
    canvas.lineWidth= 8
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
function fazerTracos() {
    canvas.lineWidth= 6
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
//...
function escreverLetraCerta(index) {
    canvas.font = 'bold 52px Inter';
    canvas.lineWidth= 6
    canvas.lineCap="round"
    canvas.lineJoin="round"
    canvas.fillStyle= "#0A3871"
    let largura=600/palavraOculta.length
    canvas.fillText(palavraOculta[index],505+(largura*index),620)
    canvas.stroke()
}

function fazerErrosForca(pontos) {
    canvas.lineWidth= 8
    canvas.lineCap="round"
    canvas.lineJoin="round"
    canvas.strokeStyle = "#0A3871"
    if(pontos===8){
    //poste lateral
    canvas.moveTo(700,500)
    canvas.lineTo(700,100)
    }
    if(pontos===7){//teto 
    canvas.moveTo(850,100)
    canvas.lineTo(700,100)
    }
    if(pontos===6){//corda
    canvas.moveTo(850,100)
    canvas.lineTo(850,171)
    }
    if(pontos===5){//para cabeça
    canvas.moveTo(900,230)
    canvas.arc(850,230,50,0,Math.PI*2)
    }
    if(pontos===4){//para corpo
    canvas.moveTo(850,389)
    canvas.lineTo(850,289)
    }
    if(pontos===3){//para perna esquerda
    canvas.moveTo(850,389)
    canvas.lineTo(800,450)
    }
    if(pontos===2){//para perna direita
    canvas.moveTo(850,389)
    canvas.lineTo(890,450)
    }
    if(pontos===1){//para mão esquerda
    canvas.moveTo(850,330)
    canvas.lineTo(800,389)
    }
    if(pontos===0){//para mão direita
    canvas.moveTo(850,330)
    canvas.lineTo(890,389)
    }
    canvas.stroke()
    canvas.closePath()
  }

function FazerMelhor(pontos) {
    canvas.lineWidth= 8
    canvas.lineCap="round"
    canvas.lineJoin="round"
    canvas.strokeStyle = "#0A3871"

    switch (pontos) {
        case 8:

            canvas.moveTo(700,500)
            canvas.lineTo(700,100)

            break;
    
        case 7:

            canvas.moveTo(850,100)
            canvas.lineTo(700,100)

            break;

        case 6:

            canvas.moveTo(850,100)
            canvas.lineTo(850,171)

            break;

        case 5:

            canvas.moveTo(900,230)
            canvas.arc(850,230,50,0,Math.PI*2)

            break;

        case 4:

            canvas.moveTo(850,389)
            canvas.lineTo(850,289)

            break;

        case 3:

            

            break;
    }
}