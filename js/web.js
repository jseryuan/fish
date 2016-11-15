var WEB_SIZE=[
	null,
	{x: 332, y: 372, w: 87, h: 86},
	{x: 13, y: 412, w: 109, h: 108},
	{x: 175, y: 370, w: 128, h: 126},
	{x: 252, y: 195, w: 150, h: 147},
	{x: 0, y: 244, w: 162, h: 154},
	{x: 0, y: 240, w: 182, h: 182},
	{x: 21, y: 21, w: 198, h: 200}
];
function Web(type){
	this.x=0;
	this.y=0;
	this.scale=1;
	this.type=type;
} 
Web.prototype.draw=function(gd){
	var x=WEB_SIZE[this.type].x;
	var y=WEB_SIZE[this.type].y;
	var w=WEB_SIZE[this.type].w;
	var h=WEB_SIZE[this.type].h;

	gd.save();
	gd.translate(this.x,this.y);
	gd.scale(this.scale,this.scale);
	gd.drawImage(JSON['web'],
		x,y,w,h,
		-w/2,-h/2,w,h
	);
	gd.restore();
};