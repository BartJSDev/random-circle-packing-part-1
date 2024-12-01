var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

$("canvas").css("width", 100 + "%")
$("canvas").css("height", 100 + "%")
$("body").css("backgroundColor", "black")
$("body").css("margin", 0)
$("body").css("overflow", "hidden")

var circles = []
var max = canvas.height / 4
var counter = 0
var maxNumCircles = 10000

function draw(){

    c.clearRect(0 , 0 , canvas.width , canvas.height)

    var newCircle = new Circle(

        random(0 , canvas.width),
        random(0 , canvas.height),
        1,
        randomColor()

    )
        
    while(!isValid(newCircle)){

        newCircle.x = random(0 , canvas.width),
        newCircle.y = random(0 , canvas.height),
        newCircle.r = 1

    }

    while(isValid(newCircle)){

        newCircle.r++
    }

    if(newCircle.insideBoundaries()){

        if(counter < maxNumCircles){

            circles.push(newCircle)
            counter++

        }else{

            console.log('we are done')
            drawCircles()
            return 
        }
       
    }

    drawCircles()

   requestAnimationFrame(draw)
}


function drawCircles(){

    circles.forEach(circle => {

        if(circle.r < max / 4){

            circle.spring()
            circle.drawAnimated()
        }
       
    })

}
function isValid(circle){

    if(circle.r > max){

        return
    }

    for(var i = 0 ; i < circles.length ; i++){

        var d = dist(circles[i].x , circles[i].y , circle.x , circle.y)

        if(d < circles[i].r + circle.r){

            return false
        }
    }

    return true
}


draw()