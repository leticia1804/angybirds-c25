class Bird extends classebase{
    constructor(x, y) {
      super(x,y,50,50); // super - transfere todas as propriedade da classe base para sua herdeira
      this.image = loadImage("sprites/bird.png");

    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      super.display();// utiliza para referir a função display da classebase

    
    };
  };
  