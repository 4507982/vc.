class Food {
	constructor(x,y)
	  {

		  var options = { 
		
	  };
		  this.x=x;
		  this.y=y;
		  this.r=r;
		  this.image=loadImage("Images/Milk.png");
		  this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		  World.add(world, this.body);
	  	addFood = createButton("Add Food");
		  addFood.position(800,95);
		  addFood.mousePressed(addFoods);
	  }
	  display()
	  {
			  
      var x=80, y=100;

	   imageMode(CENTER);
	   image(this.image,720,220,70,70);

		if(this.foodStock!=0){
			for(var i=0;i<this.foodStock;i++){
				if(i%10==0){
					x=80;
					y=y+50;
				}
				image(this.image,x,y,50,50);
				x=x+30;
			}
		}	  
	  }
  }
  