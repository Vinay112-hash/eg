class bob {
    constructor(x, y, diameter) {
      var options = {
          isStatic:true,
          restitution:0.3,
          density:1.2,
          friction:0.5
      }
      this.body = Bodies.circle(x, y, (diameter-20)/2, options);
      this.x=x;
      this.y=y;
      this.diameter=diameter;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill(255,0,255);
      ellipse(0,0,this.diameter/2);
      pop();
      
    }
  };