//page menu的显示隐藏
$("#mouse-over").mouseenter(function(){
	$(this).next().slideDown(800);
})
$("#mouse-over").next().mouseleave(function(){
	$(this).slideUp(800);
})
	//放大镜
$("#small").mouseenter(function(){
 		$("#big").show();
 		$("#layer").show();
 		$("#mask").show();
}).mouseleave(function(){
		$("#big").hide();
		$("#layer").hide();
})
$("#bottom li").mouseenter(function(){
		var index=$(this).index();
		$("#small img").eq(index).show().siblings().hide();
		$("#big img").eq(index).show().siblings().hide();
		$("#mask").css("background","url(../img/page/"+(index+1)+"m.jpg)")
})
$("#small").mousemove(function(e){
		var e=e || event;
		var x=e.pageX-$("#con-left").offset().left-$("#mask").outerWidth()/2;
		var y=e.pageY-$("#con-left").offset().top-$("#mask").outerHeight()/2;
		var maxL=$("#con-left").outerWidth()-$("#mask").outerWidth();
		var maxT=$("#con-left").outerHeight()-$("#mask").outerHeight();
		x=Math.min(maxL,Math.max(0,x));
		y=Math.min(maxT,Math.max(0,y));
$("#mask").css({
			      "left":x,
			      "top" :y,
			      "backgroundPosition":-x+"px "+-y+"px"
})
$(".bigImage").css({
			      "left" : -x*800/450,
			      "top" : -y*800/450
		})
})
//吸顶效果
$(window).scroll(function(){
	var sTop=$(document).scrollTop();
	if(sTop>200){
		$("#xiding").css({"position":"fixed","top":0,
		                  "background":"#606982"
		                  ,"z-index":30});
		$("#xiding a").css("color","#fff");
		$("#xiding .active").css("color","");
		$("#compare").html("<span>加入购物车</span>")
	}else{
	  	$("#xiding").css({"position":"static","background":""});
	  	$("#xiding a").css("color","");
	  	$("#compare").html(`<input type="checkbox" /><label>将商品加入对比</label>`);
	 }
})
//购物数量加减
$("#count-number .count1").click(function(){
	var sign=$(this).data("number");
	var count=$(this).parent().find(".count2").html();
	if(count==1 && sign==-1){
			return;
	}else{
	    sign==1 ? count++ : count--;
	}
	$(this).parent().find(".count2").html(count);
})

