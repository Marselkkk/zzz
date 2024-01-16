let canva = document.getElementById("game");
let cont = canva.getContext("2D");

const grass = new Image();
grass.src = "../img/grass.png";

const appleImg = new Image();
appleImg.src = "../img/apple.png";

let square = 32;
let score = 0;

let apple = {
    x: Math.floor((Math.random() * 17 + 1)) * square,
    y: Math.floor((Math.random() * 15 + 3)) * square
};

// function eatHvost(head, arr) {
//     for(let i = 0; i < arr.lenght; i++) {
//         if(head.x == arr[i].x && head.y == arr[i].y)
//             clearInterval(int);
//     }
// };


function startGame() {
    cont.drawImage(grass, 0, 0);

    cont.drawImage(appleImg, apple.x, apple.y);

    for(let i = 0; i < snake.length; i++) {
        cont.fillStyle = i == 0 ? "black" : "white";
        // if(i % 2 == 0) {
        //     cont.fillStyle = "black";
        // }
        // else {
        //     cont.fillStyle = "white";
        // }
        cont.fillRect(snake[i].x, snake[i].y, square, square)
    }

    cont.fillStyle = "white";
    cont.font = "35px sans-serif";
    cont.fillText(score, square * 2, square * 1.6);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX == apple.x & snakeY == apple.y) {
        score ++;
        apple = {
            x: Math.floor((Math.random() * 17 + 1)) * square,
            y: Math.floor((Math.random() * 15 + 3)) * square,
        };
    }
    else {
        snake.pop();
    }

    if(snakeX < square || snakeX > square * 17
        || snakeY < 3 * square || snakeY > square * 17) {
            clearInterval(int);
    }

    if(dir == "left") snakeX -= square;
    if(dir == "right") snakeX += square;
    if(dir == "up") snakeY -= square;
    if(dir == "down") snakeY += square;


    let newHead = {
        x: snakeX,
        y: snakeY
    };

    function eatHvost(head, arr) {
        for(let i = 0; i < arr.lenght; i++) {
            if(head.x == arr[i].x && head.y == arr[i].y)
                clearInterval(int);
        }
    };

    eatHvost(newHead, snake);

    snake.unshift(newHead);
};


let snake = [];
snake[0] = {
    x: 9 * square,
    y: 10 * square
};


document.addEventListener("keydown", direction);

let dir;

function direction(event) {
    if(event.keyCode == 37 && dir != "right")
        dir = "left"
    else if(event.keyCode == 38 && dir != "down")
        dir = "up"
    else if(event.keyCode == 39 && dir != "left")
        dir = "right"
    else if(event.keyCode == 40 && dir != "up")
        dir = "down"
};


let int = setInterval(startGame, 200)