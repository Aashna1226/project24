class Dustbin{
    constructor(x,y,width,height){
        var option={
            'restitution':0.1,
            'friction':1.0,
            'density':1.0
        }
        Matter.Body.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    
}