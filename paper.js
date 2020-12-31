class Paper {
  constructor(x, y) {
    var options = {
      isStatic: false,
      restitution:0.3,
      friction:0.5,
      density:1.2
    }
    this.body = Bodies.circle(x, y, 20, options);
    this.radius = 20;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    //translate(12, 12);
    ellipseMode(CENTER);
    fill(255);
    ellipse(pos.x, pos.y, 20, 20);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,36,36);
    pop();
  }
};