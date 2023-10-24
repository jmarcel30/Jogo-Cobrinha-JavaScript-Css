
const canvas = document.getElementById("meuCanvas")
const ctx =  canvas.getContext("2d")




// tamanho da cobrinha
const size = 30

// posição da cobrinha com array
const snake = [
    {x:270, y:0},
   
]

// fazer a cobra se mexer
 let direction, loopId

// função para criar a cobrinha 
const drawSnake = () =>{
// cor da corinha 
    ctx.fillStyle = "#ddd"
// função para definir a posção 
   snake.forEach((position, index) => {
// definir a cor da cabeça da cobra
    if(index == snake.length -1){
        ctx.fillStyle = "blue"
         

    }
// criando a cobra com as posição de x e y e com size do tamanho 30
    ctx.fillRect(position.x, position.y, size,  size)
   })
}


// Função para mover a cobrinha
const moveSnaker = () => {
    if(!direction) return
    const head = snake[snake.length -1]
    
    
   
    // movendo para a direita
    if (direction == "right"){
        snake.push({x:head.x + size, y:head.y})
    }
   // movendo para esqueda
    if (direction == "left"){
        snake.push({x:head.x - size, y:head.y})
    } 
   // movendo para baixo
    if (direction == "down"){
        snake.push({x:head.x, y:head.y + size})
    }
   // movendo para cima
     if (direction == "up"){
        snake.push({x:head.x, y:head.y - size})
    }
    snake.shift() //remove o ultimo elemento
}

// criar um grid

const drawGrid = ()=> {
    ctx.lineWidth = 1
    ctx.strokeStyle = "#191919"

    for (let i = 30; i < canvas.width; i += 30) {
        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, 600)
        ctx.stroke()

        ctx.beginPath()
        ctx.lineTo(0, i)
        ctx.lineTo(600, i)
        ctx.stroke()
        
    
}
}



// função da cobra 
const gameLoop = () =>{
    clearInterval(loopId)


    ctx.clearRect(0, 0, 600, 600)  // loop para limpar a tela

    moveSnaker()  // função mover a cobra
    drawSnake() // desenha a cobra
    drawGrid()

    loopId =  setTimeout(() => {
        gameLoop()
    }, 300) // tempo
}


 gameLoop()

// criando movimento com teclado 
document.addEventListener("keydown", ({key})=> {
    if(key == "ArrowRight" && direction != "left"){
        direction = "right"
    }

    if(key == "ArrowLeft"  && direction != "right"){
        direction = "left"
    }

    if(key == "ArrowDown"  && direction != "up"){
        direction = "down"
    }
    

    if(key == "ArrowUp"  && direction != "down"){
        direction = "up"
    }
    
    
})





