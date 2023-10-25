let A = 100
let brzina = 1
let spin = 0
let spinSpeed = -1

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(31, 1);

    push();
  stroke (54,242,12)
    translate(200, 300); 
    rotate(radians(spin));
    noFill();
    triangle(-200, 0, 0, -300, 200, 0);  
    pop();

    fill(0);
    stroke(255);
    strokeWeight(2);

    rect(185, 250, 30, 50);
    ellipse(200, 200, A, 100);
    A = A + brzina;

    if (A > 200) {
        brzina = -brzina;
    }

    if (A < 100) {
        brzina = -brzina;
    }

    fill(54, 243, 12, 180);
    ellipse(180, 190, 10, 20);
    ellipse(220, 190, 10, 20);

    fill(54, 242, 13);
    triangle(200, 200, 190, 220, 210, 220);

    rect(185, 230, 30, 5);

    stroke (207,168,237)
    strokeWeight(5);
    line(170, 300, 170, 400);
    line(230, 300, 230, 400);
    line(120, 120, 0, 44);
    line(90, 160, 0, 100);
    line(280, 120, 400, 44);
    line(310, 160, 400, 100);

    spin = spin + spinSpeed; 
}