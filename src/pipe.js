function pipe(){
    this.x=width;
    this.gap=random(height/6,height/3);
    this.bottom=random(this.gap,height);
    this.top=this.bottom-this.gap;
    this.w=random(20,60);
    this.speed=1.5;


    this.show=function(){
        fill(255);
        rect(this.x,0,this.w,this.top);
        rect(this.x,this.bottom,this.w,height-this.bottom);
    }

    this.update=function(){
        this.x-=this.speed;
    }

    this.ofScreen=function(){
        if (this.x<-this.w){
            return true;
        }else{
            false;
        }
    }
}