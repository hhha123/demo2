//menu选项卡----------------------------------------------------
//.menu-nav-list li dd
$(".menu-nav-list li:not(.lastLi)").mouseenter(function(){
	$(this).css("border-right","none");
	$(this).find("dd").css({"display":"block","border-left":"none"});
}).mouseleave(function(){
	$(this).css("border-right","2px solid #ff6600");
	$(this).find("dd").css({"display":"none","border-left":"1px solid #ccc"});
})
//topbar移入移出------------------------------------------------
function topbar(){
	$("#topbar .infor ul li.f").mouseenter(function(){
		$(this).find("i").css("background","#fff");
		$(this).css("background","#fff");
		$(this).find("#inner").show(1000);
	}).mouseleave(function(){
		$(this).css("background","");
		$(this).find("i").css("background","");
		$(this).find("#inner").hide(1000);
	})
}
topbar();
//wrap时间倒计时----------------------------------------------------
function time(){
	    var start=new Date();
		var end=new Date( "2018-2-9 17:39" );
		var diff=timeDiff(start,end);
		function showTime(){
			var h=parseInt(diff/3600);
			var m=parseInt( (diff-h*3600)/60 );
			var s=parseInt( diff-h*3600-m*60 );
			$("#wrap .wrap-fenye-top-auto .hour").html(h<10 ? "0"+h:h);
			$("#wrap .wrap-fenye-top-auto .minute").html(m<10 ? "0"+m:m);
			$("#wrap .wrap-fenye-top-auto .second").html(s<10 ? "0"+s:s);
		}
		showTime();
		var timer=setInterval( function(){
			 diff--;
			 if(diff<0){
			 	  alert("此商品已过期");
			 	  clearInterval( timer );
			 }else{
			 	 showTime();
			 }
		},1000)
}
time();
//wrap轮播图1----------------------------------------------------
function wrapOne(){
    var timer=null;
	var index=0;
	timer=setInterval(autoPlay,2000);
	function autoPlay(){
		index++;
		if(index==$("#wrap .wrapper ol li").size()){
			index=0;
		}
		$("#wrap .wrapper ol li").eq(index).addClass("wrap-current")
		                    .siblings()
		                    .removeClass("wrap-current");
		$("#wrap .wrapper ul li").eq(index).fadeIn(1000)
		                    .siblings() 
		                    .fadeOut(1000);
	}
	$("#wrap .wrapper ol li").mouseenter(function(){
		clearInterval(timer);
		index=$(this).index()-1;
		autoPlay();
	}).mouseleave(function(){
		timer=setInterval(autoPlay,2000);
	})
}
wrapOne();
//wrap轮播图2-----------------------------------------------------------
function wrapTwo(){
    var timer1=null;
	var smallIndex=0;
	timer1=setInterval(autoWrap,3000);
	function autoWrap(){
		smallIndex++;
		if(smallIndex==5){
			$("#wrap .wrapper-small ul").css("left",0);
			smallIndex=1;
		}
		$("#wrap .wrapper-small ol li").eq(smallIndex==4 ? 0:smallIndex).addClass("wrap-active")
		                    .siblings()
		                    .removeClass("wrap-active");
		$("#wrap .wrapper-small ul").animate({"left":-smallIndex*226
		                                       },100);
	}
    $("#wrap .wrapper-small ol li").mouseenter(function(){
		clearInterval(timer1);
		smallIndex=$(this).index()-1;
		autoWrap();
	}).mouseleave(function(){
		timer1=setInterval(autoWrap,3000);
	})
}
wrapTwo();
//wrap分页图3-----------------------------------------------------------
function wrapThree(){
	var index=1;
	getData();
	function getData(){
		$.ajax({
			type : "get",
			url : "json/data.json",
			success : function(arr){
				var str="";
				for(var i=(index-1)*4; i<index*4; i++){
					if(i<arr.length){
						str+=`<li>
								<img src="${arr[i].src}" alt="" />
								<p><a href="html/page.html">${arr[i].name}</a></p>
								<p class="money-color">${arr[i].price}</p>
						      </li>`;
					}
				}
				$("#wrap .shoplist").html(str);
			}
		})
	}
	timer=setInterval(function(){
		index++;
		if(index==5){
			index=1;
		}
		getData();
	},6000);
	$("#wrap .fenye-good .left-jt").click(function(){
		$(this).css("border-color"," transparent #666666 transparent transparent");
		if(index==1){
			index=1;
		}else{
			index--;
		}
		getData();
	})
	$("#wrap .fenye-good .right-jt").click(function(){
		$(this).css("border-color"," transparent transparent transparent #666666");
		if(index==4){
			index=4;
		}else{
			index++;
		}
		getData();
	})
}
wrapThree();
//wrap分页图4-----------------------------------------------------------
function wrapFour(){
	var index=1;
	getData();
	function getData(){
		$.ajax({
			type : "get",
			url : "json/data1.json",
			success : function(arr){
				var str="";
				for(var i=(index-1)*4; i<index*4; i++){
					if(i<arr.length){
						str+=`<li>
								<img src="${arr[i].src}" alt="" />
								<p><a href="html/page.html">${arr[i].name}</a></p>
								<p class="money-color">${arr[i].price}<span>抢购</span></p>
						      </li>`;
					}
				}
				$("#wrap .secondBox-img").html(str);
			}
		})
	}
	$("#wrap .secondBox-top h2").click(function(){
		if(index==4){
			index=1;
		}else{
			index++;
		}
		getData();
	})
}
wrapFour();
//wrap淡入淡出图5-----------------------------------------------------------
function wrapFive(){
	var timer=null;
	var index=0;
	timer=setInterval(autoPlay,2000);
	function autoPlay(){
		index++;
		if(index==$("#wrap .wrap-secondBox .firstBoxsmall-img ul li").size()){
			index=0;
		}
		$("#wrap .wrap-secondBox .firstBoxsmall-img ul li").eq(index).fadeIn(1000)
		                    .siblings() 
		                    .fadeOut(1000)
	}
}
wrapFive();
//wrap手风琴图6-----------------------------------------------------------
function wrapSix(){
	$("#wrap .wrap-thirdBox-con li").each(function(index,ele){
		$(this).css("background-image","url(img/firstpage/thirdBox1_0"+(index+1)+".jpg)");
	}).mouseenter(function(){
		$(this).stop().animate({width:674},200)
		       .siblings()
		       .stop().animate({width:172},200)
	}).mouseleave(function(){
		$("this").stop().animate({width:172},200)
	})
}
wrapSix();
//wrap选项卡7-----------------------------------------------------------
function wrapSeven(){
	$("#wrap .wrap-thirdBox .tab a").mouseenter(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		$("#wrap .wrap-thirdBox .prolist").eq(index).addClass("list-current")
		                                  .siblings()
		                                  .removeClass("list-current");
    })
}
wrapSeven();
//wrap轮播图8-----------------------------------------------------------
function wrapEight(){
	var timer1=null;
	var index=0;
	timer1=setInterval(autoWrap,3000);
	function autoWrap(){
		index++;
		if(index==3){
			index=0;
		}
		$("#wrap .wrap-thirdBox .thirdBox-right ol li").eq(index).addClass("wrap-active")
		                    .siblings()
		                    .removeClass("wrap-active");
		$("#wrap .wrap-thirdBox .thirdBox-right ul").animate({"left":-index*238
		                                       },100);
	}
    $("#wrap .wrap-thirdBox .thirdBox-right ol li").mouseenter(function(){
		clearInterval(timer1);
		index=$(this).index()-1;
		autoWrap();
	}).mouseleave(function(){
		timer1=setInterval(autoWrap,3000);
	})
}
wrapEight();
//wrap轮播图9-----------------------------------------------------------
function wrapNine(id){
	var timer1=null;
	var index=0;
	timer1=setInterval(autoWrap,4000);
	function autoWrap(){
		index++;
		if(index==5){
			index=0;
		}
		$(id+"ol li").eq(index).addClass("wrap-active")
		                    .siblings()
		                    .removeClass("wrap-active");
		$(id+"ul").animate({"left":-index*480
		                                       },100);
	}
    $(id+"ol li").mouseenter(function(){
		clearInterval(timer1);
		index=$(this).index()-1;
		autoWrap();
	}).mouseleave(function(){
		timer1=setInterval(autoWrap,4000);
	})
}
wrapNine("#content-wrap .content-top .con-sports ");
wrapNine("#fiveBox-left .content-top .con-sports ");
//wrap选项卡10-----------------------------------------------------------
function wrapTen(){
	$("#wrap .fourBox-right p a").mouseenter(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		$("#wrap .fourBox-right .tab-shoplist").eq(index).addClass("current")
		                                  .siblings()
		                                  .removeClass("current");
    })
}
wrapTen();
//搜索框   跨域请求数据
    var oTxt=document.getElementById("txt");
	var oUl=document.getElementById("search-text");
	oTxt.onkeyup=function(){
		var sc=document.createElement("script");
		sc.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this.value+"&cb=fn";
		document.body.appendChild(sc);
	}
	function fn(msg){
		var arr=msg.s;
		var str="";
		for(var i=0; i<arr.length; i++){
			str+=`<li><a href="http://www.baidu.com/s?wd=${arr[i]}">${arr[i]}</a></li>`;
		}
		oUl.innerHTML=str;
	}