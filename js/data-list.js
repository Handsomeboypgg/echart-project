function newData(argument) {

	var d = new Date()
	var month = d.getMonth()+1;
	var day = d.getDate()
	var hours =  d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();
	
	var min = min<10 ? "0" + min : min
	var sec = sec<10 ? "0" + sec : sec

	var people = parseInt($(".tit-2 .people").html());
	people += 10;
	$(".tit-2 .people").html(people);

	var transaction = $(".tit-2 .transaction").html();
	var transaction = Math.round(transaction*100)/100
	transaction += 999.13;
	var transaction = Math.round(transaction*100)/100
	$(".tit-2 .transaction").html(transaction);

	var income = $(".tit-2 .income").html();
	var income = Math.round(income*100)/100
	income = income + 19.23;
	var income = Math.round(income*100)/100
	$(".tit-2 .income").html(income);


	$(".timerno").countTo({
        lastSymbol: "", //显示在最后的字符
        from: people-10,  // 开始时的数字
        speed: 1000,  // 总时间
        refreshInterval:100,  // 刷新一次的时间
        beforeSize:0, //小数点前最小显示位数，不足的话用0代替 
        decimals: 0,  // 小数点后的位数，小数做四舍五入
        onUpdate: function() {

        },  // 更新时回调函数
        onComplete: function() {
            for(i in arguments){

                console.log(arguments[i]);
            }
        }
    });


    $(".timer").countTo({
        lastSymbol: "", //显示在最后的字符
        from: transaction-999.13,  // 开始时的数字
        speed: 1000,  // 总时间
        refreshInterval:100,  // 刷新一次的时间
        beforeSize:0, //小数点前最小显示位数，不足的话用0代替 
        decimals: 2,  // 小数点后的位数，小数做四舍五入
        onUpdate: function() {
        	
        },  // 更新时回调函数
        onComplete: function() {
            for(i in arguments){
                //console.log(arguments[i]);
            }
        }
    });


    $(".timer2").countTo({
        lastSymbol: "", //显示在最后的字符
        from: income-19.23,  // 开始时的数字
        speed: 1000,  // 总时间
        refreshInterval:100,  // 刷新一次的时间
        beforeSize:0, //小数点前最小显示位数，不足的话用0代替 
        decimals: 2,  // 小数点后的位数，小数做四舍五入
        onUpdate: function() {
        },  // 更新时回调函数
        onComplete: function() {
            for(i in arguments){
                //console.log(arguments[i]);
            }
        }
    });



	var str = '<ul class="list imgg">'
		str += '<li> '+month+'.'+day+' '+hours+':'+min+':'+sec+' </li>'
		str += '<li>135****2357</li>'
		str += '<li class="newtimer">120.00</li>'
		str += '<li>广州鸿德国际大酒店</li>'
		str += '<li class="newtimer">9.60</li>'
		str += '<li class="newtimer">1000.00</li>'
		str += '<li class="newtimer">18.00</li>'
		str += '<li class="newtimer">36.00</li>'
		str += '<li class="newtimer">4.80</li>'
		str += '<li class="newtimer">4.80</li>'
		str += '<li class="newtimer">1000.00</li>'
		str += '<li class="newtimer">19.20</li>'
		str += '</ul>'
		// console.log(str)

		setTimeout(numberAnimation, 1000);
		//头部添加
		$(".data-box").prepend(str);

		setTimeout(removeClass, 2000);

		//结束移除
		var datalengtg = $(".data-box .list").length
		if(datalengtg >= 22){
			$(".data-box .list").eq(-1).addClass("fadeOutDown")
			setTimeout(function(){
			 $(".data-box .list").eq(-1).remove();
			},1000)
		}

	
}

//移除效果
function removeClass(){

	$(".list").removeClass("imgg");
	$(".list li").removeClass("newtimer");
	$(".data-box").removeClass("dataAnimation");
}

//新数据插入
function dataAnimation(){

	$(".data-box").addClass("dataAnimation");

	setTimeout(newData, 10)

}


//数字滚动动画
function numberAnimation(){
	
	jQuery(function($) {
        $(".newtimer").countTo({
            lastSymbol: "", //显示在最后的字符
            from: 0,  // 开始时的数字
            speed: 1000,  // 总时间
            refreshInterval:100,  // 刷新一次的时间
            beforeSize:0, //小数点前最小显示位数，不足的话用0代替 
            decimals: 2,  // 小数点后的位数，小数做四舍五入
            onUpdate: function() {
            },  // 更新时回调函数
            onComplete: function() {
                for(i in arguments){
                    // console.log(arguments[i]);
                }
            }
        });
    });

}




