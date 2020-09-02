class dustbin {
    constructor() {
        leftbox = createSprite(300, 610, 20, 100);
        leftbox.shapeColor = color("white");
        bottombox = createSprite(400, 650, 200, 20);
        bottombox.shapeColor = color("white");
        rightbox = createSprite(500, 610, 20, 100);
        rightbox.shapeColor = color("white");
    }
display() {

rightbox.isStatic(false);
leftbox.isStatic(false);
bottombox.isStatic(false);
}