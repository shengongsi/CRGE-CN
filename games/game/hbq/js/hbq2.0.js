var bestcom = 0;var bestcomer = 0;var bestme = 0;var cancom = 1; var Xx; var Yy;var can1 = 1;var cannextc = 0;var cannextme = 0; var Xxc2; var Yyc2;
var first = 1;var point1 = 0; var point2 = 0;
var resultTxt = document.getElementById('title-result');
var tipTip = document.getElementById('tip-tip');var tipTip2 = document.getElementById('tip-2');
var pointPo = document.getElementById('point-p');
var me = 1; //me=1自己，me=2电脑
var nowChess = [];//棋盘
var backUp = [];//电脑第二次计算
var chess = document.getElementById("chess");
var context = chess.getContext('2d');
context.strokeStyle = '#bfbfff'; //棋盘线条颜色
document.getElementById("restart").onclick = function(){for(var i = 0; i < 10; i++){for(var j = 0; j < 10; j++){nowChess[i][j] = 0;}};  if(first == 1){me=2;first = 2;tipTip.innerHTML = '当前轮到：电脑';tipTip2.innerHTML = '执白';nowChess[4][4] = 2; nowChess[4][5] = 1; nowChess[5][5] = 2; nowChess[5][4] = 1;setTimeout('comPuter()', 1800 );}else{me=1;first = 1;tipTip.innerHTML = '当前轮到：自己';tipTip2.innerHTML = '执黑';nowChess[4][4] = 1; nowChess[4][5] = 2; nowChess[5][5] = 1; nowChess[5][4] = 2;}; pointPo.innerHTML = '2：2'; xianShi();} //重新开始
window.onload = function(){
	nowChess[4][4] = 1; nowChess[4][5] = 2; nowChess[5][5] = 1; nowChess[5][4] = 2; 
	xianShi();
}

//自己落子
chess.onclick = function(e){
	var x = e.offsetX;
	var y = e.offsetY;
	Xx = Math.floor((x+40) / 40);
	Yy = Math.floor((y+40) / 40);
	if(me==1 && nowChess[Xx][Yy] == 0){canCanme();
	if(can1 == 0 ){
		nowChess[Xx][Yy] = 1; stEp();neXt();
		xianShi();
	}}
}
//自己落子可行性判断
var canCanme = function() {
bestme=0;can1=1;
var lele = 0; var riri = 0; var toto = 0; var dodo = 0; var tole = 0; var tori = 0; var dole = 0; var dori = 0; 
	for(var i = Xx-1; i >= 1; i=i-1){
	if(nowChess[i][Yy] != 1 & nowChess[i][Yy] != 0){lele = 1;}
	else if(nowChess[i][Yy] == 1 & nowChess[i][Yy] != 0 & lele == 1){for(var temp = i+1; temp < Xx; temp=temp+1){bestme=bestme+1;};break;}
	else{lele = 0; break;}
	}

	for(var i = Xx+1; i <= 8; i=i+1){
	if(nowChess[i][Yy] != 1 & nowChess[i][Yy] != 0){riri = 1;}
	else if(nowChess[i][Yy] == 1 & nowChess[i][Yy] != 0 & riri == 1){for(var temp = Xx+1; temp < i ; temp=temp+1){bestme=bestme+1;};break;}
	else{riri = 0; break;}
	}

	for(var i = Yy-1; i >= 1; i=i-1){
	if(nowChess[Xx][i] != 1 & nowChess[Xx][i] != 0){dodo = 1;}
	else if(nowChess[Xx][i] == 1 & nowChess[Xx][i] != 0 & dodo == 1){for(var temp = i+1; temp <Yy; temp=temp+1){bestme=bestme+1;};break;}
	else{dodo = 0; break;}
	}

	for(var i = Yy+1; i <= 8; i=i+1){
	if(nowChess[Xx][i] != 1 & nowChess[Xx][i] != 0){toto = 1;}
	else if(nowChess[Xx][i] == 1 & nowChess[Xx][i] != 0 & toto == 1){for(var temp = Yy+1; temp <i; temp=temp+1){bestme=bestme+1;};break;}
	else{toto = 0; break;}
	}

//在右上角点击让左下方变色
if(Xx+Yy <= 9){for(var i = Xx-1; i >= 1; i=i-1){if(nowChess[i][Xx+Yy-i] != 1 & nowChess[i][Xx+Yy-i] != 0){dole = 1;}	
	else if(nowChess[i][Xx+Yy-i] == 1 & nowChess[i][Xx+Yy-i] != 0 & dole == 1){for(var temp = i+1; temp < Xx; temp=temp+1){bestme=bestme+1;};break;}
	else{dole = 0; break;}}
}else{for(var i = Yy+1; i <= 8; i=i+1){if(nowChess[Xx+Yy-i][i] != 1 & nowChess[Xx+Yy-i][i] != 0){dole = 1;}	
	else if(nowChess[Xx+Yy-i][i] == 1 & nowChess[Xx+Yy-i][i] != 0 & dole == 1){for(var temp = Yy+1; temp < i; temp=temp+1){bestme=bestme+1;};break;}
	else{dole = 0; break;}}}

//在左下角点击让右上方变色
if(Xx+Yy <= 9){for(var i = Yy-1; i >= 1; i=i-1){if(nowChess[Xx+Yy-i][i] != 1 & nowChess[Xx+Yy-i][i] != 0){tori = 1;}	
	else if(nowChess[Xx+Yy-i][i] == 1 & nowChess[Xx+Yy-i][i] != 0 & tori == 1){for(var temp = i+1; temp < Yy; temp=temp+1){bestme=bestme+1;};break;}
	else{tori = 0; break;}}
}else{for(var i = Xx+1; i <= 8; i=i+1){if(nowChess[i][Xx+Yy-i] != 1 & nowChess[i][Xx+Yy-i] != 0){tori = 1;}	
	else if(nowChess[i][Xx+Yy-i] == 1 & nowChess[i][Xx+Yy-i] != 0 & tori == 1){for(var temp = Xx+1; temp < i; temp=temp+1){bestme=bestme+1;};break;}
	else{tori = 0; break;}}}

//在右下角点击让左上方变色
if(Xx-Yy >= 0){for(var i = Xx-1; i >= 1; i=i-1){if(nowChess[i][Yy-Xx+i] != 1 & nowChess[i][Yy-Xx+i] != 0){tole = 1;}	
	else if(nowChess[i][Yy-Xx+i] == 1 & nowChess[i][Yy-Xx+i] != 0 & tole == 1){for(var temp = i+1; temp < Xx; temp=temp+1){bestme=bestme+1;};break;}
	else{tole = 0; break;}}
}else{for(var i = Yy-1; i >= 1; i=i-1){if(nowChess[Xx-Yy+i][i] != 1 & nowChess[Xx-Yy+i][i] != 0){tole = 1;}	
	else if(nowChess[Xx-Yy+i][i] == 1 & nowChess[Xx-Yy+i][i] != 0 & tole == 1){for(var temp = i+1; temp <Yy; temp=temp+1){bestme=bestme+1;};break;}
	else{tole = 0; break;}}}

//在左上角点击让右下方变色
if(Xx-Yy >= 0){for(var i = Xx+1; i <= 8; i=i+1){if(nowChess[i][Yy-Xx+i] != 1 & nowChess[i][Yy-Xx+i] != 0){dori = 1;}	
	else if(nowChess[i][Yy-Xx+i] == 1 & nowChess[i][Yy-Xx+i] != 0 & dori == 1){for(var temp = Xx+1; temp < i; temp=temp+1){bestme=bestme+1;};break;}
	else{dori = 0; break;}}
}else{for(var i = Yy+1; i <= 8; i=i+1){if(nowChess[Xx-Yy+i][i] != 1 & nowChess[Xx-Yy+i][i] != 0){dori = 1;}	
	else if(nowChess[Xx-Yy+i][i] == 1 & nowChess[Xx-Yy+i][i] != 0 & dori == 1){for(var temp = Yy+1; temp < i; temp=temp+1){bestme=bestme+1;};break;}
	else{dori = 0; break;}}}

if (bestme != 0){can1 = 0;}else{can1 = 1;}
}




//电脑落子
var comPuter = function(){
if(me == 2 ){var bestcom2 = 0;var bestcom3 = 0;var Xxc; var Yyc;


	for(Xx = 1; Xx <= 8; Xx=Xx+1){for(Yy = 1; Yy <= 8; Yy=Yy+1){
		if(nowChess[Xx][Yy] == 0){canCancom();
			if(cancom == 0){bestcom=bestcom+1000;
				if((Xx==1&Yy==1)||(Xx==1&Yy==8)||(Xx==8&Yy==8)||(Xx==8&Yy==1)){bestcom=bestcom+1000;}else if(Xx<=6&&Xx>=3&&Yy<=6&&Yy>=3){bestcom=bestcom+3;}else if((Xx<=6&&Xx>=3&&Yy==1)||(Xx<=6&&Xx>=3&&Yy==8)||(Xx==1&&Yy>=3&&Yy<=6)||(Xx==8&&Yy>=3&&Yy<=6)){bestcom=bestcom+2;}else if((Xx==2&Yy==2)||(Xx==2&Yy==7)||(Xx==7&Yy==2)||(Xx==7&Yy==7)){bestcom=bestcom-200;}
				if((nowChess[1][1]==2)&&((Xx==2&&Yy==1)||(Xx==1&&Yy==2))){bestcom=bestcom+200;}else if((nowChess[8][1]==2)&&((Xx==7&&Yy==1)||(Xx==8&&Yy==2))){bestcom=bestcom+200;}else if((nowChess[8][8]==2)&&((Xx==7&&Yy==8)||(Xx==8&&Yy==7))){bestcom=bestcom+200;}else if((nowChess[1][8]==2)&&((Xx==1&&Yy==7)||(Xx==2&&Yy==8))){bestcom=bestcom+200;}
			//进入深层运算
			if((point1+point2)>=14){
				for(var i = 1; i <= 8; i++){for(var j = 1; j <= 8; j++){backUp[i][j] = nowChess[i][j];}};
				nowChess[Xx][Yy] = 2; stEp();
				for(Xxc2 = 1; Xxc2 <= 8; Xxc2=Xxc2+1){for(Yyc2 = 1; Yyc2 <= 8; Yyc2=Yyc2+1){
					
					if(nowChess[Xxc2][Yyc2] == 0){canCancom2();bestcom=bestcom-bestcomer;if(bestcomer != 0){if((Xxc2==1&Yyc2==1)||(Xxc2==1&Yyc2==8)||(Xxc2==8&Yyc2==8)||(Xxc2==8&Yyc2==1)){bestcom=bestcom-30;}else if(Xxc2<=6&&Xxc2>=3&&Yyc2<=6&&Yyc2>=3){bestcom=bestcom-3;}else if((Xxc2<=6&&Xxc2>=3&&Yyc2==1)||(Xxc2<=6&&Xxc2>=3&&Yyc2==8)||(Xxc2==1&&Yyc2>=3&&Yyc2<=6)||(Xxc2==8&&Yyc2>=3&&Yyc2<=6)){bestcom=bestcom-2;}}}
				}}
				for(var i = 1; i <= 8; i++){for(var j = 1; j <= 8; j++){nowChess[i][j] = backUp[i][j];}};
			}

				if(bestcom >= bestcom2){bestcom2 = bestcom;  if(bestcom3 == 0 || bestcom3 <= bestcom2 +Math.random()){bestcom3=bestcom2+Math.random(); Xxc=Xx; Yyc=Yy;}}
			}
		}
	}}
nowChess[Xxc][Yyc] = 2; 
Xx=Xxc; Yy=Yyc;stEp();neXt();
xianShi();}
}


//电脑专用判断代码
var canCancom = function() {
bestcom=0;
var lele = 0; var riri = 0; var toto = 0; var dodo = 0; var tole = 0; var tori = 0; var dole = 0; var dori = 0; 
	for(var i = Xx-1; i >= 1; i=i-1){
	if(nowChess[i][Yy] != 2 & nowChess[i][Yy] != 0){lele = 1;}
	else if(nowChess[i][Yy] == 2 & nowChess[i][Yy] != 0 & lele == 1){for(var temp = i+1; temp < Xx; temp=temp+1){bestcom=bestcom+1;};break;}
	else{lele = 0; break;}
	}

	for(var i = Xx+1; i <= 8; i=i+1){
	if(nowChess[i][Yy] != 2 & nowChess[i][Yy] != 0){riri = 1;}
	else if(nowChess[i][Yy] == 2 & nowChess[i][Yy] != 0 & riri == 1){for(var temp = Xx+1; temp < i ; temp=temp+1){bestcom=bestcom+1;};break;}
	else{riri = 0; break;}
	}

	for(var i = Yy-1; i >= 1; i=i-1){
	if(nowChess[Xx][i] != 2 & nowChess[Xx][i] != 0){dodo = 1;}
	else if(nowChess[Xx][i] == 2 & nowChess[Xx][i] != 0 & dodo == 1){for(var temp = i+1; temp <Yy; temp=temp+1){bestcom=bestcom+1;};break;}
	else{dodo = 0; break;}
	}

	for(var i = Yy+1; i <= 8; i=i+1){
	if(nowChess[Xx][i] != 2 & nowChess[Xx][i] != 0){toto = 1;}
	else if(nowChess[Xx][i] == 2 & nowChess[Xx][i] != 0 & toto == 1){for(var temp = Yy+1; temp <i; temp=temp+1){bestcom=bestcom+1;};break;}
	else{toto = 0; break;}
	}

//在右上角点击让左下方变色
if(Xx+Yy <= 9){for(var i = Xx-1; i >= 1; i=i-1){if(nowChess[i][Xx+Yy-i] != 2 & nowChess[i][Xx+Yy-i] != 0){dole = 1;}	
	else if(nowChess[i][Xx+Yy-i] == 2 & nowChess[i][Xx+Yy-i] != 0 & dole == 1){for(var temp = i+1; temp < Xx; temp=temp+1){bestcom=bestcom+1;};break;}
	else{dole = 0; break;}}
}else{for(var i = Yy+1; i <= 8; i=i+1){if(nowChess[Xx+Yy-i][i] != 2 & nowChess[Xx+Yy-i][i] != 0){dole = 1;}	
	else if(nowChess[Xx+Yy-i][i] == 2 & nowChess[Xx+Yy-i][i] != 0 & dole == 1){for(var temp = Yy+1; temp < i; temp=temp+1){bestcom=bestcom+1;};break;}
	else{dole = 0; break;}}}

//在左下角点击让右上方变色
if(Xx+Yy <= 9){for(var i = Yy-1; i >= 1; i=i-1){if(nowChess[Xx+Yy-i][i] != 2 & nowChess[Xx+Yy-i][i] != 0){tori = 1;}	
	else if(nowChess[Xx+Yy-i][i] == 2 & nowChess[Xx+Yy-i][i] != 0 & tori == 1){for(var temp = i+1; temp < Yy; temp=temp+1){bestcom=bestcom+1;};break;}
	else{tori = 0; break;}}
}else{for(var i = Xx+1; i <= 8; i=i+1){if(nowChess[i][Xx+Yy-i] != 2 & nowChess[i][Xx+Yy-i] != 0){tori = 1;}	
	else if(nowChess[i][Xx+Yy-i] == 2 & nowChess[i][Xx+Yy-i] != 0 & tori == 1){for(var temp = Xx+1; temp < i; temp=temp+1){bestcom=bestcom+1;};break;}
	else{tori = 0; break;}}}

//在右下角点击让左上方变色
if(Xx-Yy >= 0){for(var i = Xx-1; i >= 1; i=i-1){if(nowChess[i][Yy-Xx+i] != 2 & nowChess[i][Yy-Xx+i] != 0){tole = 1;}	
	else if(nowChess[i][Yy-Xx+i] == 2 & nowChess[i][Yy-Xx+i] != 0 & tole == 1){for(var temp = i+1; temp < Xx; temp=temp+1){bestcom=bestcom+1;};break;}
	else{tole = 0; break;}}
}else{for(var i = Yy-1; i >= 1; i=i-1){if(nowChess[Xx-Yy+i][i] != 2 & nowChess[Xx-Yy+i][i] != 0){tole = 1;}	
	else if(nowChess[Xx-Yy+i][i] == 2 & nowChess[Xx-Yy+i][i] != 0 & tole == 1){for(var temp = i+1; temp <Yy; temp=temp+1){bestcom=bestcom+1;};break;}
	else{tole = 0; break;}}}

//在左上角点击让右下方变色
if(Xx-Yy >= 0){for(var i = Xx+1; i <= 8; i=i+1){if(nowChess[i][Yy-Xx+i] != 2 & nowChess[i][Yy-Xx+i] != 0){dori = 1;}	
	else if(nowChess[i][Yy-Xx+i] == 2 & nowChess[i][Yy-Xx+i] != 0 & dori == 1){for(var temp = Xx+1; temp < i; temp=temp+1){bestcom=bestcom+1;};break;}
	else{dori = 0; break;}}
}else{for(var i = Yy+1; i <= 8; i=i+1){if(nowChess[Xx-Yy+i][i] != 2 & nowChess[Xx-Yy+i][i] != 0){dori = 1;}	
	else if(nowChess[Xx-Yy+i][i] == 2 & nowChess[Xx-Yy+i][i] != 0 & dori == 1){for(var temp = Yy+1; temp < i; temp=temp+1){bestcom=bestcom+1;};break;}
	else{dori = 0; break;}}}

if (bestcom != 0){cancom = 0;}else{cancom = 1;}
}


//电脑第二层判断代码
var canCancom2 = function() {
bestcomer = 0;
var lele = 0; var riri = 0; var toto = 0; var dodo = 0; var tole = 0; var tori = 0; var dole = 0; var dori = 0; 
	for(var i = Xxc2-1; i >= 1; i=i-1){
	if(nowChess[i][Yyc2] != 1 & nowChess[i][Yyc2] != 0){lele = 1;}
	else if(nowChess[i][Yyc2] == 1 & nowChess[i][Yyc2] != 0 & lele == 1){for(var temp = i+1; temp < Xxc2; temp=temp+1){bestcomer=bestcomer+1;};break;}
	else{lele = 0; break;}
	}

	for(var i = Xxc2+1; i <= 8; i=i+1){
	if(nowChess[i][Yyc2] != 1 & nowChess[i][Yyc2] != 0){riri = 1;}
	else if(nowChess[i][Yyc2] == 1 & nowChess[i][Yyc2] != 0 & riri == 1){for(var temp = Xxc2+1; temp < i ; temp=temp+1){bestcomer=bestcomer+1;};break;}
	else{riri = 0; break;}
	}

	for(var i = Yyc2-1; i >= 1; i=i-1){
	if(nowChess[Xxc2][i] != 1 & nowChess[Xxc2][i] != 0){dodo = 1;}
	else if(nowChess[Xxc2][i] == 1 & nowChess[Xxc2][i] != 0 & dodo == 1){for(var temp = i+1; temp <Yyc2; temp=temp+1){bestcomer=bestcomer+1;};break;}
	else{dodo = 0; break;}
	}

	for(var i = Yyc2+1; i <= 8; i=i+1){
	if(nowChess[Xxc2][i] != 1 & nowChess[Xxc2][i] != 0){toto = 1;}
	else if(nowChess[Xxc2][i] == 1 & nowChess[Xxc2][i] != 0 & toto == 1){for(var temp = Yyc2+1; temp <i; temp=temp+1){bestcomer=bestcomer+1;};break;}
	else{toto = 0; break;}
	}

//在右上角点击让左下方变色
if(Xxc2+Yyc2 <= 9){for(var i = Xxc2-1; i >= 1; i=i-1){if(nowChess[i][Xxc2+Yyc2-i] != 1 & nowChess[i][Xxc2+Yyc2-i] != 0){dole = 1;}	
	else if(nowChess[i][Xxc2+Yyc2-i] == 1 & nowChess[i][Xxc2+Yyc2-i] != 0 & dole == 1){for(var temp = i+1; temp < Xxc2; temp=temp+1){bestcomer=bestcomer+1;};break;}
	else{dole = 0; break;}}
}else{for(var i = Yyc2+1; i <= 8; i=i+1){if(nowChess[Xxc2+Yyc2-i][i] != 1 & nowChess[Xxc2+Yyc2-i][i] != 0){dole = 1;}	
	else if(nowChess[Xxc2+Yyc2-i][i] == 1 & nowChess[Xxc2+Yyc2-i][i] != 0 & dole == 1){for(var temp = Yyc2+1; temp < i; temp=temp+1){bestcomer=bestcomer+1;};break;}
	else{dole = 0; break;}}}

//在左下角点击让右上方变色
if(Xxc2+Yyc2 <= 9){for(var i = Yyc2-1; i >= 1; i=i-1){if(nowChess[Xxc2+Yyc2-i][i] != 1 & nowChess[Xxc2+Yyc2-i][i] != 0){tori = 1;}	
	else if(nowChess[Xxc2+Yyc2-i][i] == 1 & nowChess[Xxc2+Yyc2-i][i] != 0 & tori == 1){for(var temp = i+1; temp < Yyc2; temp=temp+1){bestcomer=bestcomer+1;};break;}
	else{tori = 0; break;}}
}else{for(var i = Xxc2+1; i <= 8; i=i+1){if(nowChess[i][Xxc2+Yyc2-i] != 1 & nowChess[i][Xxc2+Yyc2-i] != 0){tori = 1;}	
	else if(nowChess[i][Xxc2+Yyc2-i] == 1 & nowChess[i][Xxc2+Yyc2-i] != 0 & tori == 1){for(var temp = Xxc2+1; temp < i; temp=temp+1){bestcomer=bestcomer+1;};break;}
	else{tori = 0; break;}}}

//在右下角点击让左上方变色
if(Xxc2-Yyc2 >= 0){for(var i = Xxc2-1; i >= 1; i=i-1){if(nowChess[i][Yyc2-Xxc2+i] != 1 & nowChess[i][Yyc2-Xxc2+i] != 0){tole = 1;}	
	else if(nowChess[i][Yyc2-Xxc2+i] == 1 & nowChess[i][Yyc2-Xxc2+i] != 0 & tole == 1){for(var temp = i+1; temp < Xxc2; temp=temp+1){bestcomer=bestcomer+1;};break;}
	else{tole = 0; break;}}
}else{for(var i = Yyc2-1; i >= 1; i=i-1){if(nowChess[Xxc2-Yyc2+i][i] != 1 & nowChess[Xxc2-Yyc2+i][i] != 0){tole = 1;}	
	else if(nowChess[Xxc2-Yyc2+i][i] == 1 & nowChess[Xxc2-Yyc2+i][i] != 0 & tole == 1){for(var temp = i+1; temp <Yyc2; temp=temp+1){bestcomer=bestcomer+1;};break;}
	else{tole = 0; break;}}}

//在左上角点击让右下方变色
if(Xxc2-Yyc2 >= 0){for(var i = Xxc2+1; i <= 8; i=i+1){if(nowChess[i][Yyc2-Xxc2+i] != 1 & nowChess[i][Yyc2-Xxc2+i] != 0){dori = 1;}	
	else if(nowChess[i][Yyc2-Xxc2+i] == 1 & nowChess[i][Yyc2-Xxc2+i] != 0 & dori == 1){for(var temp = Xxc2+1; temp < i; temp=temp+1){bestcomer=bestcomer+1;};break;}
	else{dori = 0; break;}}
}else{for(var i = Yyc2+1; i <= 8; i=i+1){if(nowChess[Xxc2-Yyc2+i][i] != 1 & nowChess[Xxc2-Yyc2+i][i] != 0){dori = 1;}	
	else if(nowChess[Xxc2-Yyc2+i][i] == 1 & nowChess[Xxc2-Yyc2+i][i] != 0 & dori == 1){for(var temp = Yyc2+1; temp < i; temp=temp+1){bestcomer=bestcomer+1;};break;}
	else{dori = 0; break;}}}

}



//落子代码
var stEp = function() {

var lele = 0; var riri = 0; var toto = 0; var dodo = 0; var tole = 0; var tori = 0; var dole = 0; var dori = 0; 
	for(var i = Xx-1; i >= 1; i=i-1){
	if(nowChess[i][Yy] != me & nowChess[i][Yy] != 0){lele = 1;}
	else if(nowChess[i][Yy] == me & nowChess[i][Yy] != 0 & lele == 1){for(var temp = i+1; temp < Xx; temp=temp+1){nowChess[temp][Yy] = me;};break;}
	else{lele = 0; break;}
	}

	for(var i = Xx+1; i <= 8; i=i+1){
	if(nowChess[i][Yy] != me & nowChess[i][Yy] != 0){riri = 1;}
	else if(nowChess[i][Yy] == me & nowChess[i][Yy] != 0 & riri == 1){for(var temp = Xx+1; temp < i ; temp=temp+1){nowChess[temp][Yy] = me;};break;}
	else{riri = 0; break;}
	}

	for(var i = Yy-1; i >= 1; i=i-1){
	if(nowChess[Xx][i] != me & nowChess[Xx][i] != 0){dodo = 1;}
	else if(nowChess[Xx][i] == me & nowChess[Xx][i] != 0 & dodo == 1){for(var temp = i+1; temp <Yy; temp=temp+1){nowChess[Xx][temp] = me;};break;}
	else{dodo = 0; break;}
	}

	for(var i = Yy+1; i <= 8; i=i+1){
	if(nowChess[Xx][i] != me & nowChess[Xx][i] != 0){toto = 1;}
	else if(nowChess[Xx][i] == me & nowChess[Xx][i] != 0 & toto == 1){for(var temp = Yy+1; temp <i; temp=temp+1){nowChess[Xx][temp] = me;};break;}
	else{toto = 0; break;}
	}

//在右上角点击让左下方变色
if(Xx+Yy <= 9){for(var i = Xx-1; i >= 1; i=i-1){if(nowChess[i][Xx+Yy-i] != me & nowChess[i][Xx+Yy-i] != 0){dole = 1;}	
	else if(nowChess[i][Xx+Yy-i] == me & nowChess[i][Xx+Yy-i] != 0 & dole == 1){for(var temp = i+1; temp < Xx; temp=temp+1){nowChess[temp][Xx+Yy-temp] = me;};break;}
	else{dole = 0; break;}}
}else{for(var i = Yy+1; i <= 8; i=i+1){if(nowChess[Xx+Yy-i][i] != me & nowChess[Xx+Yy-i][i] != 0){dole = 1;}	
	else if(nowChess[Xx+Yy-i][i] == me & nowChess[Xx+Yy-i][i] != 0 & dole == 1){for(var temp = Yy+1; temp < i; temp=temp+1){nowChess[Xx+Yy-temp][temp] = me;};break;}
	else{dole = 0; break;}}}

//在左下角点击让右上方变色
if(Xx+Yy <= 9){for(var i = Yy-1; i >= 1; i=i-1){if(nowChess[Xx+Yy-i][i] != me & nowChess[Xx+Yy-i][i] != 0){tori = 1;}	
	else if(nowChess[Xx+Yy-i][i] == me & nowChess[Xx+Yy-i][i] != 0 & tori == 1){for(var temp = i+1; temp < Yy; temp=temp+1){nowChess[Xx+Yy-temp][temp] = me;};break;}
	else{tori = 0; break;}}
}else{for(var i = Xx+1; i <= 8; i=i+1){if(nowChess[i][Xx+Yy-i] != me & nowChess[i][Xx+Yy-i] != 0){tori = 1;}	
	else if(nowChess[i][Xx+Yy-i] == me & nowChess[i][Xx+Yy-i] != 0 & tori == 1){for(var temp = Xx+1; temp < i; temp=temp+1){nowChess[temp][Xx+Yy-temp] = me;};break;}
	else{tori = 0; break;}}}

//在右下角点击让左上方变色
if(Xx-Yy >= 0){for(var i = Xx-1; i >= 1; i=i-1){if(nowChess[i][Yy-Xx+i] != me & nowChess[i][Yy-Xx+i] != 0){tole = 1;}	
	else if(nowChess[i][Yy-Xx+i] == me & nowChess[i][Yy-Xx+i] != 0 & tole == 1){for(var temp = i+1; temp < Xx; temp=temp+1){nowChess[temp][Yy-Xx+temp] = me;};break;}
	else{tole = 0; break;}}
}else{for(var i = Yy-1; i >= 1; i=i-1){if(nowChess[Xx-Yy+i][i] != me & nowChess[Xx-Yy+i][i] != 0){tole = 1;}	
	else if(nowChess[Xx-Yy+i][i] == me & nowChess[Xx-Yy+i][i] != 0 & tole == 1){for(var temp = i+1; temp <Yy; temp=temp+1){nowChess[Xx-Yy+temp][temp] = me;};break;}
	else{tole = 0; break;}}}

//在左上角点击让右下方变色
if(Xx-Yy >= 0){for(var i = Xx+1; i <= 8; i=i+1){if(nowChess[i][Yy-Xx+i] != me & nowChess[i][Yy-Xx+i] != 0){dori = 1;}	
	else if(nowChess[i][Yy-Xx+i] == me & nowChess[i][Yy-Xx+i] != 0 & dori == 1){for(var temp = Xx+1; temp < i; temp=temp+1){nowChess[temp][Yy-Xx+temp] = me;};break;}
	else{dori = 0; break;}}
}else{for(var i = Yy+1; i <= 8; i=i+1){if(nowChess[Xx-Yy+i][i] != me & nowChess[Xx-Yy+i][i] != 0){dori = 1;}	
	else if(nowChess[Xx-Yy+i][i] == me & nowChess[Xx-Yy+i][i] != 0 & dori == 1){for(var temp = Yy+1; temp < i; temp=temp+1){nowChess[Xx-Yy+temp][temp] = me;};break;}
	else{dori = 0; break;}}}



}

//判断可否进行下一步
var neXt = function() {


point1 = 0; point2 = 0;



for( Xx = 1; Xx <= 8; Xx=Xx+1){for(Yy = 1; Yy <= 8; Yy=Yy+1){if(nowChess[Xx][Yy] == 0){canCancom();if(cancom == 0){cannextc = cannextc+1;}}}}
for( Xx = 1; Xx <= 8; Xx=Xx+1){for( Yy = 1; Yy <= 8; Yy=Yy+1){if(nowChess[Xx][Yy] == 0){canCanme();if(can1 == 0){cannextme = 1+cannextme;}}}}
//console.log(cannextme+"+"+cannextc);
if(cannextc != 0 && cannextme != 0){if(me == 2){me=1;tipTip.innerHTML = '当前轮到：自己';}else{me=2;tipTip.innerHTML = '当前轮到：电脑';setTimeout('comPuter()', 1800 );}}
else if(cannextme != 0){me = 1; tipTip.innerHTML = '当前轮到：自己';}
else if(cannextc != 0){me=2;tipTip.innerHTML = '当前轮到：电脑';setTimeout('comPuter()', 2800 );}
else{me=3}

for( Xx = 1; Xx <= 8; Xx=Xx+1){for(Yy = 1; Yy <= 8; Yy=Yy+1){

	if(nowChess[Xx][Yy]==1){point1=point1+1;}
		else if(nowChess[Xx][Yy]==2){point2=point2+1;};

}}

pointPo.innerHTML =point1 + '：'+ point2;
	if(point1 == 0 || point2 == 0 || point1+point2==64 || me == 3 ){
		if(point1>point2){pointPo.innerHTML =point1 + '：'+ point2+ ' 胜利';me=3;}else if(point1<point2){pointPo.innerHTML =point1 + '：'+ point2+ ' 失败';me=3;}else{pointPo.innerHTML =point1 + '：'+ point2+ ' 平局';me=3;}
	}
if(me == 3){tipTip.innerHTML = '游戏结束';}
cannextc = 0; cannextme = 0;
}




var xianShi = function() {
	context.clearRect(0,0,320,320);
	drawChessBoard();//绘制棋盘
	for(var i = 0; i < 9; i++){
		for(var j = 0; j < 9; j++){
		oneStep(i,j,nowChess[i+1][j+1]);
		}
	}
}
//画棋盘
var drawChessBoard = function() {
	for(var i = 0; i < 8; i++){
	context.moveTo(0 + i * 40 , 0);
	context.lineTo(0 + i * 40 , 320);
	context.stroke();
	context.moveTo(0 , 0 + i * 40);
	context.lineTo(320 , 0 + i * 40);
	context.stroke();}
}
//画棋子
var oneStep = function(i,j,me) {
	context.beginPath();
	context.arc(20 + i * 40, 20 + j * 40, 13, 0, 2 * Math.PI);// 画圆
	context.closePath();
	//渐变
	var gradient = context.createRadialGradient(20 + i * 40 + 2, 20 + j * 40 - 2, 13, 20 + i * 40 + 2, 20 + j * 40 - 2, 0);
	if(first == 1){if(me == 1){
		gradient.addColorStop(0,'#0a0a0a');
		gradient.addColorStop(1,'#636766');
	}else if(me == 2){
		gradient.addColorStop(0,'#d1d1d1');
		gradient.addColorStop(1,'#f9f9f9');
	}}
	if(first == 2){if(me == 1){
		gradient.addColorStop(0,'#d1d1d1');
		gradient.addColorStop(1,'#f9f9f9');
	}else if(me == 2){
		gradient.addColorStop(0,'#0a0a0a');
		gradient.addColorStop(1,'#636766');
	}}
	context.fillStyle = gradient;
	context.fill();
}
for(var i = 0; i < 10; i++){
	nowChess[i] = [];
	for(var j = 0; j < 10; j++){
		nowChess[i][j] = 0;
	}
}
for(var i = 0; i < 10; i++){
	backUp[i] = [];
	for(var j = 0; j < 10; j++){
		backUp[i][j] = 0;
	}
}