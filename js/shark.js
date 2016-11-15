function Shark(type){
	this.type=type;
	this.x=0;
	this.y=0;
	this.rotate=130;
	this.move();
	this.cur=0;
	this.iSpeed=2;
	this.collR=68;

} 

Shark.prototype.draw=function(gd){
	if(this.type==1){
		var w=509;
		var h=270;
	}else{
		var w=516;
		var h=273;
	}
	
	gd.save();
	gd.translate(this.x,this.y);
	gd.rotate(d2a(this.rotate));
	if(this.rotate>90&&this.rotate<270){
		gd.scale(1,-1);
	}
	gd.drawImage(JSON['shark'+this.type],
		0,h*this.cur,w,h,
		-w/4,-h/4,w/2,h/2
	);
	gd.restore();
};

Shark.prototype.move=function(){
	var _this=this;
	setInterval(function(){
		_this.x+=Math.cos(d2a(_this.rotate))*_this.iSpeed;
		_this.y+=Math.sin(d2a(_this.rotate))*_this.iSpeed;
	},30);
	setInterval(function(){
		_this.cur++;
		if(_this.cur==7){
			_this.cur=0;
		}
	},100);
};

Shark.prototype.isIn=function(x,y){
	var a=this.x-x;
	var b=this.y-y;
	var c=Math.sqrt(a*a+b*b);
	if(c<this.collR){
		return true;
	}else{
		return false;
	}
};