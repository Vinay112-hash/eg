class n{
    constructor(bodyA,bodyB) {

        var options={bodyA:bodyA,
        bodyB:bodyB,
        length:10,
     stiffness:0.04}
      
      this.chain=Constraint.create(options);
      this.bodyA=bodyA;
      this.bodyB=bodyB;
      World.add(world, this.chain);
    }
    display(){
        var pointA =this.bodyA.position;
      var pointB =this.bodyB.position;
      strokeWeight(3);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
     

    }
  };