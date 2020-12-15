class Ball{
    constructor(x,y){
        var options = {
            restitution : 1.0,
            friction : 0.3,
            density : 0.8
        }
    //Use Bodies.circle to create the ball body
    //radius = 50
    this.body = Bodies.circle(x,y,50,options);
    this.radius=60;
    World.add(world,this.body);

    }
    display(){
        //display using ellipse()
        var pos= this.body.position;
        translate(pos.x,pos.y);

        fill ("pink");
        ellipse(0,0,this.radius,this.radius)
    }
}

