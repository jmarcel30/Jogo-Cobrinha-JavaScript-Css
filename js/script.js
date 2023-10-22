
const canvas = document.getElementById("meuCanvas")
const ctx =  canvas.getContext("2d")



// tamanho da cobrinha
const size = 30

// posição da cobrinha com array
const snake = [
    {x:200, y:200},
    {x:230, y:200}
]

// fazer a cobra se mexer
 let direction  ="left"

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

// mover a cobrinha

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

// função da cobra 

setInterval(() => {
    ctx.clearRect(0, 0, 600, 600)

    moveSnaker()
    drawSnake()
    
}, 300);


