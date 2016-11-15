function Delshark(type){
	this.x=0;
	this.y=0;
	this.type=type;
	this.rotate=0;
	this.cur=0;
	this.move();
}
Delshark.prototype.draw=function(gd){
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
		0,h*(this.cur+6),w,h,
		-w/4,-h/4,w/2,h/2
	);
	gd.restore();
};
Delshark.prototype.move=function(){
	var _this=this;
	setInterval(function(){
		_this.cur++;
		if(_this.cur==6){
			_this.cur=0;
		}
	},100);
};