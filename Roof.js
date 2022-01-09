class Roof{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
           

        }
        this.x = x
        this.y=y
        this.w = w
        this.h = h

        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }
    display(){
        var roofposition = this.body.position
        push ()
        translate (roofposition.x,roofposition.y)
        rectMode(CENTER)            
        strokeWeight(5)
        fill ("brown")
        rect(0,0,this.w,this.h)
        pop ()

    }
}