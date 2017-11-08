window.onload =function(){
	var banner = document.getElementsByClassName("banner")[0];
	var images = document.getElementsByClassName("images");
	var oOl = document.getElementsByClassName("number")[0];
	var oUl = document.getElementsByClassName("bigul")[0];
	var oOlis = oOl.getElementsByTagName("li");
	var Dtop = document.getElementsByClassName("Dtop")[0];
	var Dright = document.getElementsByClassName("Dright")[0];
	var Dleft = document.getElementsByClassName("Dleft")[0];
	var Dbottom = document.getElementsByClassName("Dbottom")[0];
	var nav = document.getElementsByClassName("nav")[0];
	var nLis = document.getElementsByClassName("bonder");
	var reTop = document.getElementsByClassName("returntop")[0];
	var timer = null;
	var num = 0;
	window.onscroll=function(){
			var scroll =document.body.scrollTop;
			if(scroll>=nav1){
				nav.style.top=0;
				nav.style.left = 0;
				nav.style.background = "linear-gradient(#fff,#ccc)";
				nav.style.position = "fixed";
			}else{
				nav.style.position = "";
				nav.style.background = "";
			}
			if(scroll>=400){
				reTop.style.opacity = "1";
			}else{
				reTop.style.opacity = "0";
			}
		}
	Dtop.onmouseover=function(){
		oUl.style.transform = "rotateX(10deg)";
		clearInterval(timer);
	}
	Dtop.onmouseout=function(){
		oUl.style.transform = "rotateX(0deg)";
		clearInterval(timer);
	}
	Dbottom.onmouseover=function(){
		oUl.style.transform = "rotateX(-10deg)";
		clearInterval(timer);
	}
	Dbottom.onmouseout=function(){
		oUl.style.transform = "rotateX(0deg)";
		clearInterval(timer);
	}
	Dleft.onmouseover=function(){
		oUl.style.transform = "rotateY(10deg)";
		clearInterval(timer);
	}
	Dleft.onmouseout=function(){
		oUl.style.transform = "rotateY(0deg)";
		clearInterval(timer);
	}
	Dright.onmouseover=function(){
		oUl.style.transform = "rotateY(-10deg)";
		clearInterval(timer);
	}
	Dright.onmouseout=function(){
		oUl.style.transform = "rotateY(0deg)";
	}
	oUl.onmouseover=function(){
		this.style.boxShadow = "-2px -1px 45px -3px";
		clearInterval(timer);
	}
	oUl.onmouseout=function(){
		this.style.boxShadow = "none"
	}
	timer = setInterval(function(){
		if(images.length>0){
			num++;
		}else{
			num--;
		}
		if(num===images.length){
			num = 0;
		}
		for(var i=0;i<images.length;i++){
			images[i].style.opacity = "0";
			oOlis[i].className="";
		}
		images[num].style.opacity = "1";
		oOlis[num].className="over";
	},1000)
	banner.onmouseover=function(){
		clearInterval(timer);
	}
	banner.onmouseout=function(){
		timer = setInterval(function(){
		if(images.length>0){
			num++;
		}else{
			num--;
		}
		if(num===images.length){
			num = 0;
		}
		for(var i=0;i<images.length;i++){
			images[i].style.opacity = "0";
			oOlis[i].className="";
		}
		images[num].style.opacity = "1";
		oOlis[num].className="over";
	},1000)
	}
	for(var i=0;i<oOlis.length;i++){
		oOlis[i].index=i;
		oOlis[i].onclick=function(){
			for(var j=0;j<oOlis.length;j++){
				oOlis[j].className = "";
				images[j].style.opacity = "0";
			}
			this.className="over";
			images[this.value].style.opacity="1";
			num = this.index;
		}
	}
	for(var o=0;o<nLis.length;o++){
		nLis[o].onmouseover=function(){
			this.style.color="skyblue";
		}
		nLis[o].onmouseout=function(){
			this.style.color="#666";
		}
	}
	var bonder2 = document.getElementsByClassName("bonder")[1];
	var bonder3 = document.getElementsByClassName("bonder")[2];
	var bonder4 = document.getElementsByClassName("bonder")[3];
	var SubNav1 = document.getElementsByClassName("subnav1")[0];
	var SubNav2 = document.getElementsByClassName("subnav2")[0];
	var SubNav3 = document.getElementsByClassName("subnav3")[0];
	var SNul = SubNav1.getElementsByTagName("ul")[0];
	var SNul2 = SubNav2.getElementsByTagName("ul")[0];
	var SNul3 = SubNav3.getElementsByTagName("ul")[0];
	var SubULi = SNul.getElementsByTagName("li");
	var SubULi2 = SNul2.getElementsByTagName("li");
	var SubULi3 = SNul3.getElementsByTagName("li");
	var timera= null;
	bonder2.onmouseover=function(){
		this.style.color="skyblue";
			clearInterval(timera);
			SubNav1.style.display="block";
			SubNav2.style.display="none"
			SubNav3.style.display="none"
			move(SubNav3,{"top":50});
			move(SubNav2,{"top":50});
			move(SubNav1,{"top":40});
		bonder2.onmouseout=function(){
			this.style.color="#666";
			timera = setInterval(function(){
				SubNav1.style.display="none"
				move(SubNav1,{"top":50})
			},200)
	}
	SubNav1.onmouseover=function(){
		clearInterval(timera);
		this.style.display = "block";
		move(SubNav1,{"top":40})
	}
	SubNav1.onmouseout=function(){
			SubNav1.style.display="none"
			move(SubNav1,{"top":50})
	}
	}
	for(var i=0;i<SubULi.length;i++){
		SubULi[i].onmouseover=function(){
			this.style.background = "#eee"
		}
		SubULi[i].onmouseout=function(){
			this.style.background = "none";
		}
	}
	
	
	
	bonder3.onmouseover=function(){
		this.style.color="skyblue";
			clearInterval(timera);
			SubNav2.style.display="block";
			SubNav3.style.display="none"
			SubNav1.style.display="none";
			move(SubNav3,{"top":50});
			move(SubNav1,{"top":50});
			move(SubNav2,{"top":40});
		bonder3.onmouseout=function(){
			this.style.color="#666";
			timera = setInterval(function(){
				SubNav2.style.display="none"
				move(SubNav2,{"top":50})
			},200)
	}
	SubNav2.onmouseover=function(){
		clearInterval(timera);
		this.style.display = "block";
		move(SubNav2,{"top":40})
	}
	SubNav2.onmouseout=function(){
			SubNav2.style.display="none"
			move(SubNav2,{"top":50})
	}
	}
	for(var i=0;i<SubULi2.length;i++){
		SubULi2[i].onmouseover=function(){
			this.style.background = "#eee"
		}
		SubULi2[i].onmouseout=function(){
			this.style.background = "none";
		}
	}
	
	bonder4.onmouseover=function(){
		this.style.color="skyblue";
			clearInterval(timera);
			SubNav3.style.display="block";
			SubNav1.style.display="none";
			SubNav2.style.display="none";
			move(SubNav1,{"top":50})
			move(SubNav2,{"top":50});
			move(SubNav3,{"top":40});
		bonder4.onmouseout=function(){
			this.style.color="#666";
			timera = setInterval(function(){
				SubNav3.style.display="none"
				move(SubNav3,{"top":50})
			},200)
	}
	SubNav3.onmouseover=function(){
		clearInterval(timera);
		this.style.display = "block";
		move(SubNav3,{"top":40})
	}
	SubNav3.onmouseout=function(){
			SubNav3.style.display="none"
			move(SubNav3,{"top":50})
	}
	}
	for(var i=0;i<SubULi3.length;i++){
		SubULi3[i].onmouseover=function(){
			this.style.background = "#eee"
		}
		SubULi3[i].onmouseout=function(){
			this.style.background = "none";
		}
	}
	var bag = document.getElementsByClassName("bag");
	var procect = document.getElementsByClassName("procect")[0];
	var ul = procect.getElementsByTagName("ul")[0];
	var next = document.getElementsByClassName("right")[0];
	var prev = document.getElementsByClassName("left")[0];
	var uLis = document.getElementsByClassName("uLi");
	var btn = document.getElementsByClassName("btn");
	var num = 0;
	next.onclick = function(){
		num++;
		if(num>3)
			{
			num = 3;
			ul.style.left = num * -600 + "px";
			}		
			ul.style.left = num * -600 + "px";
	}
	prev.onclick =function(){
		num--;
		if(num<0){
			num=0;
			ul.style.left = num * -600 + "px";
		}
		ul.style.left = num * -600 + "px";
	}
	for(var i=0;i<uLis.length;i++){
		uLis[i].onmouseover=function(){
			this.style.boxShadow = "0px 0px 40px 0px #ccc inset";
			this.lastElementChild.style.opacity = "1";
		}
		uLis[i].onmouseout=function(){
			this.style.boxShadow = "none";
			this.lastElementChild.style.opacity = "0";
		}
	}
	var hold = document.getElementsByClassName("hold")[5];
	var card = document.getElementsByClassName("qecard")[0];
	hold.onmouseover = function(){
		move(card,{"opacity":100})
	}
	hold.onmouseout = function(){
		move(card,{"opacity":0})
	}
	var scroll = document.body.scroll;
	var nav1 = nav.offsetTop;
}
