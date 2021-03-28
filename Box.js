class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.Visibilty = 255
    this.image = loadImage('rect.png')
  }
  display(){
    var threshold = 5
    //console.log(this.body.speed)
    
    if(this.body.speed < threshold){
      super.display()
    }
    else{
      World.remove(world, this.body)
      push()
      this.Visibilty = this.Visibilty - 5
      tint(255, this.Visibilty)
      image(this.image, this.body.position.x, this.body.position.y, this.width,this.height)
      pop()
    }
    

  }

};
