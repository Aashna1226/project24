class Paper{
    constructor(x,y,width,height){
        var options={
            isStatic: false,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2,
        }
        Matter.Bodies.circle(x,y,radius,options);
        
        function keyPressed(){
            if(keyCode === UP_ARROW) {
                Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
            }
        }
    
        display();
            keyPressed()
    }
}   
   


