class Box extends BaseClass {
    constructor(x,y,){
    super(x,y,50,50)
    this.visiblity=255;
}
display(){
    if(this.body.speed<5){
        super.display();
    }
    else{
        World.remove(world,this.body);
        this.visiblity=this.visiblity-5;
        tint(255,this.visiblity);
    }
}
}