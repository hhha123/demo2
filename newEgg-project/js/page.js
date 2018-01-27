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