class Circle{

    constructor(x , y , r , color){

        this.x = x 
        this.y = y 
        this.r = r
        this.color = color
        this.tempradius_x = 0
        this.tempradius_y = 0
        this.easing_x = .07
        this.easing_y = .08
        this.spring_x = .06
        this.spring_y = .04
        this.friction = .85
        this.vx = 0
        this.vy = 0
    }

    draw(){

        c.beginPath()
        c.strokeStyle = this.color
        c.ellipse(this.x , this.y , this.r , this.r , 0 , 0 , 2 * Math.PI)
        c.stroke()
        c.closePath()
    }

    drawAnimated(){


        c.beginPath()
        c.strokeStyle = this.color
        c.ellipse(this.x , this.y , this.tempradius_x , this.tempradius_y , 0 , 0 , 2 * Math.PI)
        c.stroke()
        c.closePath()

    }

    ease(){

        this.tempradius_x += (this.r - this.tempradius_x) * this.easing_x
        this.tempradius_y += (this.r - this.tempradius_y) * this.easing_y

    }

    spring(){

        this.vx += (this.r - this.tempradius_x) * this.spring_x
        this.vy += (this.r - this.tempradius_y) * this.spring_y

        this.tempradius_x += (this.vx *= this.friction)
        this.tempradius_y += (this.vy *= this.friction)

    }

    insideBoundaries(){

        if(this.x + this.r < canvas.width && this.x - this.r > 0 && this.y + this.r < canvas.height && this.y - this.r > 0){

            return true
        }
    }
}