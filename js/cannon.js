var CANNON_SIZE=[
	null,
	{w: 74, h: 74},
	{w: 74, h: 76},
	{w: 74, h: 76},
	{w: 74, h: 83},
	{w: 74, h: 85},
	{w: 74, h: 90},
	{w: 74, h: 94}
];
function Cannon(type){
	this.type=type;
	this.x=431;
	this.y=570;
	this.rotate=0;
	this.count=0;
	this.timer=null;

}
Cannon.prototype.draw=function(gd){
	var w=CANNON_SIZE[this.type].w;
	var h=CANNON_SIZE[this.type].h;
	gd.save();
	gd.translate(this.x,this.y);
	gd.rotate(d2a(this.rotate));
	gd.drawImage(JSON['cannon'+this.type],
		0,h*this.count,w,h,
		-w/2,-h/2,w,h
	);
	gd.restore();

};

Cannon.prototype.emitChange=function(){
	var _this=this;
	clearInterval(this.timer);
	this.timer=setInterval(function(){
		_this.count++;
		if(_this.count==5){
			_this.count=0;
			clearInterval(_this.timer);
		}
	},30);
};