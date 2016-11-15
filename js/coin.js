function Coin(type){
	this.x=0;
	this.y=0;
	this.type=type;
	this.cur=0;
	this.move();
}
Coin.prototype.draw=function(gd){
	gd.save();
	gd.translate(this.x,this.y);
	if(this.type<3){
		gd.drawImage(JSON['coinAni1'],
			0,60*this.cur,60,60,
			-30,-30,60,60
		);
	}else{
		gd.drawImage(JSON['coinAni2'],
			0,60*this.cur,60,60,
			-30,-30,60,60
		);
	}
	
	gd.restore();
};
Coin.prototype.move=function(){
	var _this=this;
	setInterval(function(){
		_this.x+=(20-_this.x)/20;
		_this.y+=(580-_this.y)/20;
		_this.cur++;
		if(_this.cur==10){
			_this.cur=0;
		}
	},30);
};