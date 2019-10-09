let Aquarium = function(){
    this.poissonArray = [];
    this.canva = window.document.getElementById("aquarium");
    this.ctx = this.canva.getContext("2d");
    this.positionSourisX = 0;
    this.positionSourisY = 0;
    this.recupPosition = function(event){
        this.positionSourisX = event.clientX;
        this.positionSourisY = event.clientY;
    }  
    this.creationPoisson = function(){
        this.poissonArray.push(new Fish(this.positionSourisX, this.positionSourisY));
    }

    this.generationDePoisson = function(){
       for(let i = 0; i < this.poissonArray.length;i++){
           this.collision();
           this.ctx.fillStyle = "red";
           this.ctx.fillRect(this.poissonArray[i].x,this.poissonArray[i].y, this.poissonArray[i].width, this.poissonArray[i].height)
           this.poissonArray[i].move();
        //    console.log(this.poissonArray[i].x)
       }

    
    }

    this.update = function(){
        this.ctx.clearRect(0,0,500,500);
        this.generationDePoisson();
    }
// && this.poissonArray[j].y <= 0 || this.poissonArray[j].y >= 440
//this.poissonArray[j].x <= 0 || this.poissonArray[j].x >= 480 
    this.collision = function() {
        for(let j = 0; j < this.poissonArray.length; j++){
            if(this.poissonArray[j].y <= 100){
                this.poissonArray[j].x -= this.poissonArray[j].random.x;
                this.poissonArray[j].x -= this.poissonArray[j].random.x;
            }
        }
    }
}

let Fish = function(x, y){
    this.x = x;
    this.y = y;
    this.random = {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
    }
    this.width = 20;
    this.height = 20;

    this.move = function() {
        this.x += this.random.x;
        this.y += this.random.y;
    }
}