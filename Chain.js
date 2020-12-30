class Chain 
{
    constructor(body1,point2)
    {
        var options=
        {
            bodyA : body1,
            pointB : point2,
            stiffness: 0.04,
            length :10
        }

        
         this.chain=Constraint.create(options);
        World.add(world,this.chain);


       
    }

display(){
 if(this.chain.bodyA){

 
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x, this.chain.pointB.y);

}

}
fly(){


this.chain.bodyA=null;


}



}