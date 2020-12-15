class Rope{
    constructor(bodyA,bodyB,xoffset){
       // Mention options bodyA,bodyB,pointB
      //Use Constraint.create(option)
      var options = {
          bodyA: roof.body,
          bodyB: bodyB,

          stiffness:0.04,
          length:10
      }
     // this.rope = Constraint.create(options);
      this.rope = Constraint.create(options);
      this.bodyA = bodyA;
      this.bodyB=bodyB;
      World.add(world,this.rope);
    }
    display(){
       //USe line() instruction
      // line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);
       
    }
}