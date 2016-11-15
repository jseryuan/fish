COINTEXT_NUMBER=[1,10,100,1000,10000,100000];
function Money(){
	this.coinText=0;
}
Money.prototype.draw=function(gd){
	for(var i=0;i<6;i++){
		gd.drawImage(JSON['coinText'],
			36*((parseInt(this.coinText/COINTEXT_NUMBER[(5-i)]))%10),0,36,49,
			24*i+20,576,15,20
		);
	}
};