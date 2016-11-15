//加载图片
var JSON={};
function loadImg(arr,fnSucc){
	var count=0;
	for(var i=0;i<arr.length;i++){
		var oImg=new Image();
		oImg.src='img/'+arr[i]+'.png';
		(function(i){
			oImg.onload=function(){
				JSON[arr[i]]=this;
				count++;
				if(count==arr.length){
					fnSucc&&fnSucc();
				}
			};
			
		})(i);
	}
}

function d2a(n){
	return n*Math.PI/180;
}
function a2d(n){
	return n*180/Math.PI;
}
function rnd(m,n){
	return parseInt(Math.random()*(n-m)+m);
}