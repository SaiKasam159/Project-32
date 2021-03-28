class Striker extends BaseClass{
    constructor(x, y, width, height, image){
        super(x,y,width,height);
        this.image = loadImage('striker.png')  

    }
    
    display(){
        push()
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
        pop()

    }

}