function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed  = 1;
  this.yspeed  = 0;
  this.total = 0;
  this.body = [];

  this.dir = (x, y) => {
    this.xspeed = x;
    this.yspeed = y;
  }

  //  check if the snake is in the
  //  same position of the food
  this.eat = (pos) => {
    let d = dist(this.x, this.y, pos.x, pos.y);

    // checks if the snake reach the food
    if(d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.death = () => {
    for(let i = 0; i < this.body.length; i++) {
      let pos = this.body[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if(d < 1) {
        this.total = 0;
        this.body = [];
      }
    }
  }

  this.update = () => {
    if(this.total === this.body.length) {
      for(let i = 0; i < this.body.length - 1; i++) {
        this.body[i] = this.body[i + 1];
      }
    }
    this.body[this.total - 1] = createVector(this.x, this.y);
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = () => {
    fill(255); // sets rect as white
    for(let i = 0; i < this.body.length; i++) {
      rect(this.body[i].x, this.body[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }

}
