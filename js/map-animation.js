
//动画展示
function showAnimation(){


	//防止被点击蒙版
	$(".noClick-mb").show();
	//省份展示
	$(".province").removeClass("noshow");
	$(".fg-dot").addClass("noshow");
	$(".fg-dot").removeClass("dotanimation");
	//四条线
	$(".xian1").addClass("noshow");
	$(".xian2").addClass("noshow");
	$(".xian3").addClass("noshow");
	$(".xian4").addClass("noshow");
	//三个板块echart
	$(".pie-box").removeClass("noshow");
	$(".pie-box2").removeClass("noshow");
	$(".histogram-week").removeClass("noshow");
	//隐藏四个数据板块
	$(".cz-png").addClass("noshow")
	$(".p-xian").addClass("noshow")
	$(".vip-box").addClass("noshow");
	$(".consume-box").addClass("noshow");
	$(".Order-volume").addClass("noshow");
	$(".region-box").addClass("noshow");
	//数字隐藏
	$(".vip-number").addClass("noshow")
	$(".vip-tit").addClass("noshow");
	
	
	
	$(".province").addClass("map2-animation");
	
	//第一部分动画
	setTimeout(function(){

		$(".fg-dot").removeClass("noshow");
		$(".fg-dot").addClass("dotanimation");
		

	},1000)

	//第二部分动画
	setTimeout("setTimeoutAnimation()",2000);

	//第三部分动画
	setTimeout("plateAnimation()",3000);

	//第四部分动画
	setTimeout("xianAnimation()",4000);

	//第五部分动画
	setTimeout("numberAnimation()",4500);
	//延迟执行动画

	
	//取消蒙版动画结束可以再次点击
	setTimeout(function(){
		$(".noClick-mb").hide();
	},6000)


	//移除动画的类 再次进来展示动画
	setTimeout("removeAnimation()",6000);
}

//动画结束移除类下次在加载
function removeAnimation(){

	$(".xian1").removeClass("xian1Animation");
	$(".xian2").removeClass("xian2Animation")
	$(".xian3").removeClass("xian3Animation")
	$(".xian4").removeClass("xian4Animation")
	$(".province").removeClass("map2-animation");
	$(".vip-box .cz-png").removeClass("vip-cz");
	$(".vip-box .p-xian").removeClass("vip-xian");
	$(".consume-box .cz-png").removeClass("vip-cz");
	$(".consume-box .p-xian").removeClass("vip-xian");
	$(".Order-volume .cz-png").removeClass("vip-cz");
	$(".Order-volume .p-xian").removeClass("vip-xianb");
	$(".region-box .cz-png").removeClass("vip-cz");
	$(".region-box .p-xian").removeClass("vip-xianb");


	$(".vip-tit").removeClass("vip-titanimation");

}

//延迟动画(－△－)充分展示左手右手慢动作
function setTimeoutAnimation(){

	// $(".fg-dot").addClass("faguang");

	$(".xian1").removeClass("noshow");
	$(".xian2").removeClass("noshow");
	$(".xian3").removeClass("noshow");
	$(".xian4").removeClass("noshow");
	
	$(".xian1").addClass("xian1Animation");
	$(".xian2").addClass("xian2Animation");
	$(".xian3").addClass("xian3Animation");
	$(".xian4").addClass("xian4Animation");
	
	

}

//四个板块动画
function plateAnimation(){

		
	//四个数据展示
	$(".vip-box").removeClass("noshow");
	$(".consume-box").removeClass("noshow");
	$(".Order-volume").removeClass("noshow");
	$(".region-box").removeClass("noshow");

	//圆的动画

	$('.o-yuan').circleProgress({
	    value: 0.75,
	    size: 90,
	    startAngle: -15,
	    fill: {
	        gradient: ["#00ddf7"]
	    }
	});

	$('.c-yuan').circleProgress({
	    value: 1,
	    size: 65,
	    startAngle: -15,
	    thickness: 3,
	    fill: {
	        gradient: ["#00ddf7"]
	    }
	});


	$('.n-yuan').circleProgress({
	    value: 1,
	    size: 50,
	    startAngle: -15,
	    thickness: 5,
	    fill: {
	        gradient: ["#00ddf7"]
	    }
	});


	//底部的圆

	$('.bo-yuan').circleProgress({
		//底部上来弧度95
	    value: 0.75,
	    size: 90,
	    startAngle: -0.8,
	    reverse: true,
	    fill: {
	        gradient: ["#00ddf7"]
	    }
	});

	$('.bc-yuan').circleProgress({
	    value: 1,
	    size: 65,
	    startAngle: -0.8,
	    thickness: 3,
	    reverse: true,
	    fill: {
	        gradient: ["#00ddf7"]
	    }
	});


	$('.bn-yuan').circleProgress({
	    value: 1,
	    size: 50,
	    startAngle: -0.8,
	    thickness: 5,
 		reverse: true,
	    fill: {
	        gradient: ["#00ddf7"]
	    }
	});


}


//板块下的动画线条
function xianAnimation(){


	$(".cz-png").removeClass("noshow")
	$(".p-xian").removeClass("noshow")
	//线的效果
	$(".vip-box .cz-png").addClass("vip-cz");
	$(".vip-box .p-xian").addClass("vip-xian");
	$(".consume-box .cz-png").addClass("vip-cz");
	$(".consume-box .p-xian").addClass("vip-xian");
	$(".Order-volume .cz-png").addClass("vip-cz");
	$(".Order-volume .p-xian").addClass("vip-xianb");
	$(".region-box .cz-png").addClass("vip-cz");
	$(".region-box .p-xian").addClass("vip-xianb");
}


//数字滚动动画
function numberAnimation(){

	$(".vip-tit").removeClass("noshow");
	$(".vip-tit").addClass("vip-titanimation");

	$(".vip-number").removeClass("noshow")

	var options = {
	  useEasing: true, 
	  useGrouping: true, 
	  separator: ',', 
	  decimal: '.', 
	};


	//目标= html元素id,输入,svg文本元素,或之前选定元素的var /输入计数发生的地方
	//startVal =你想开始的价值
	//endVal =你想要到达的价值
	//小数=(可选)的小数位数号码,默认为0
	//时间=(可选)持续时间以秒为单位,默认2
	//选择=(看演示,可选)格式/宽松的选择对象
	var vip = new CountUp('vip', 0, 6827100815, 0, 1.5, options);
	var consume = new CountUp('consume', 0, 5665157496, 0, 1.5, options);
	var OrderVolume = new CountUp('Order-volume', 0, 4387662, 0, 1.5, options);
	var region = new CountUp('region', 0, 14587348, 0, 1.5, options);	
	var pienumeber = new CountUp('pie-bg3', 0, 6827100815, 0, 1.5, options);

	if (!vip.error) {
		vip.start();
		consume.start();
	    OrderVolume.start();
		region.start();
		pienumeber.start();
	} else {
	  console.error(vip.error);
	}
}