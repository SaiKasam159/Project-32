class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(7);
                
            line(pointA.x, pointA.y, pointB.x, pointB.y);
                //line(pointA.x+10, pointA.y, pointB.x+30, pointB.y);
                //image(this.slingshot3, pointA.x-30, pointA.y-10, 15, 30)
    
        }
    }
    
}

