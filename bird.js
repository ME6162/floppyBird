function bird() {
    this.y = height / 2;
    this.x = 25;

    this.gravity = .2;
    this.velocity = 0;
    this.lift = 5;

    this.show = function () {
        fill(255);
        ellipse(this.x, this.y, 25, 25);
    }

    this.up = function () {
        this.velocity -= this.lift;
        console.log(this.y + "   " + this.velocity);
    }

    this.update = function () {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y > height) {
            this.velocity = 0;
            this.y = height;
        }
        if (this.y < 0) {
            this.velocity = 0;
            this.y = 0;
        }
    }
}