window.onload=function(){
	var oC=document.getElementById('c1');
	var gd=oC.getContext('2d');
	var out=50;
	var direction=[out,-out];
	var rule=0.05;
	var money=new Money();
	loadImg(resource,function(){
		var can1=new Cannon(7);
		var arrBullet=[];
		var arrFish=[];
		var arrShark=[];
		var arrCoin=[];
		var arrDelfish=[];
		var arrDelshark=[];
		var arrWeb=[];
		setInterval(function(){
			gd.clearRect(0,0,oC.width,oC.height);
			gd.beginPath();
			gd.drawImage(JSON['bottom'],
				0,0,765,70,
				0,oC.height-70,765,70
			);
			//画钱
			money.draw(gd);
			for(var i=0;i<arrBullet.length;i++){
				arrBullet[i].draw(gd);
			}
			// 子弹消失
			for(var i=0;i<arrBullet.length;i++){
				if(arrBullet[i].x<out || arrBullet[i].x>oC.width-out || arrBullet[i].y<out || arrBullet[i].y>oC.width-out){
					arrBullet.splice(i,1);
					i--;
				}
			}
			//画炮
			can1.draw(gd);
			//画鱼
			if(Math.random()<rule){
				direction.sort(function(){
					return Math.random()-0.5;
				});
				if(direction[0]>0){
					var f1=new Fish(rnd(1,6));
					f1.x=-out;
					f1.y=rnd(out,oC.height-out);
					f1.rotate=rnd(-45,45);
					arrFish.push(f1);
				}else{
					var f1=new Fish(rnd(1,6));
					f1.x=oC.width+out;
					f1.y=rnd(out,oC.height-out);
					f1.rotate=rnd(135,225);
					arrFish.push(f1);
				}
			}
			for(var i=0;i<arrFish.length;i++){
				arrFish[i].draw(gd);
			}
			//画鲨鱼
			if(Math.random()<0.001){
				direction.sort(function(){
					return Math.random()-0.5;
				});
				if(direction[0]>0){
					var s1=new Shark(rnd(1,3));
					s1.x=-out;
					s1.y=rnd(out,oC.height-out);
					s1.rotate=rnd(-45,45);
					arrShark.push(s1);
				}else{
					var s1=new Shark(rnd(1,3));
					s1.x=oC.width+out;
					s1.y=rnd(out,oC.height-out);
					s1.rotate=rnd(135,225);
					arrShark.push(s1);
				}
				
			}
			for(var i=0;i<arrShark.length;i++){
				arrShark[i].draw(gd);
			}

			//鱼优化
			for(var i=0;i<arrFish.length;i++){
				if(arrFish[i].x<-out || arrFish[i].x>oC.width+out || arrFish[i].y<-out || arrFish[i].y>oC.width+out){
					arrFish.splice(i,1);
					i--;
				}
			}
			//鲨鱼优化
			for(var i=0;i<arrShark.length;i++){
				if(arrShark[i].x<-out || arrShark[i].x>oC.width+out || arrShark[i].y<-out || arrShark[i].y>oC.width+out){
					arrShark.splice(i,1);
					i--;
				}
			}
			//鲨鱼捕捉
			for(var i=0;i<arrShark.length;i++){
				for(var j=0;j<arrBullet.length;j++){
					if(arrShark[i].isIn(arrBullet[j].x,arrBullet[j].y)){
						var x=arrShark[i].x;
						var y=arrShark[i].y;
						var type=arrShark[i].type;
						var rotate=arrShark[i].rotate;
						money.coinText+=type*100;
						arrShark.splice(i,1);
						i--;
						arrBullet.splice(j,1);
						j--;

						var coin=new Coin(type);
						coin.x=x;
						coin.y=y;
						arrCoin.push(coin);

						var delshark=new Delshark(type);
						delshark.x=x;
						delshark.y=y;
						delshark.rotate=rotate;
						arrDelshark.push(delshark);


						var web=new Web(can1.type);
						web.x=x;
						web.y=y;
						arrWeb.push(web);
					}
				}
			}
			//鱼捕捉
			for(var i=0;i<arrFish.length;i++){
				for(var j=0;j<arrBullet.length;j++){
					if(arrFish[i].isIn(arrBullet[j].x,arrBullet[j].y)){
						var x=arrFish[i].x;
						var y=arrFish[i].y;
						var type=arrFish[i].type;
						var rotate=arrFish[i].rotate;
						money.coinText+=type;
						arrFish.splice(i,1);
						i--;
						arrBullet.splice(j,1);
						j--;

						var coin=new Coin(type);
						coin.x=x;
						coin.y=y;
						arrCoin.push(coin);

						var delFish=new Delfish(type);
						delFish.x=x;
						delFish.y=y;
						delFish.rotate=rotate;
						arrDelfish.push(delFish);


						var web=new Web(can1.type);
						web.x=x;
						web.y=y;
						arrWeb.push(web);
					}
				}
			}
			//画硬币
			for(var i=0;i<arrCoin.length;i++){
				arrCoin[i].draw(gd);
			}
			//硬币消失
			for(var i=0;i<arrCoin.length;i++){
				if(arrCoin[i].x<25 || arrCoin[i].y>570){
					arrCoin.splice(i,1);
					i--;
				}
			}
			//画网和网消失
			for(var i=0;i<arrWeb.length;i++){
				arrWeb[i].draw(gd);
				arrWeb[i].scale+=0.01;
				if(arrWeb[i].scale>1.2){
					arrWeb.splice(i,1);
				}
			}
			//画死鱼
			for(var i=0;i<arrDelfish.length;i++){
				arrDelfish[i].draw(gd);
				setTimeout(function(){
					arrDelfish.shift();
				},500);
			}
			//死鲨鱼
			for(var i=0;i<arrDelshark.length;i++){
				arrDelshark[i].draw(gd);
				setTimeout(function(){
					arrDelshark.shift();
				},500);
			}

		},30);


		oC.onclick=function(ev){
			var x=ev.clientX-oC.offsetLeft-can1.x;
			var y=can1.y-ev.clientY+oC.offsetTop;
			var d=90-a2d(Math.atan2(y,x));
			can1.rotate=d;
			can1.emitChange();
			var bullet=new Bullet(can1.type);
			bullet.x=can1.x;
			bullet.y=can1.y;
			bullet.rotate=d;
			arrBullet.push(bullet);
		};
	});
};