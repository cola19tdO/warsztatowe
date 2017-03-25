
var Ball = function(x, y, r){
	this.x = x;
	this.y = y;
	this.xSpeed = -2;
	this.ySpeed = 3;
	this.radious = r;
}

var circle = function(x, y, radious, fill){
	context.beginPath();
	context.arc(x,y,radious,0, Math.PI*2, false);
	if(fill){
		context.fill();
	} else {
		context.stroke();
	}
}

Ball.prototype.draw = function(){
	circle(this.x, this.y, this.radious, true);
}

Ball.prototype.move = function(){
	this.x += this.xSpeed;
	this.y += this.ySpeed;
}

Ball.prototype.checkCollision = function(){
	if(this.x < 0 || this.x > 600){
		this.xSpeed = -this.xSpeed;
	} 

	if(this.y < 0 || this.y > 400){
		this.ySpeed = -this.ySpeed;
	}

}