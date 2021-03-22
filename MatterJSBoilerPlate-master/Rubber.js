class Rubber{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.5,
        }
        
        this.body = Bodies.rectangle(this.width,this.height, options);
        this.width = 100;
        this.height = 70;
        World.add(world, this.body);
      }
      display(){
        var angle=this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("blue");
        rectMode(CENTER);
        pop();
      }
}