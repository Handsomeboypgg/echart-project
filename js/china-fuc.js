
function newData(){
	var d = new Date()
	var month = d.getMonth()+1;
	var day = d.getDate()
	var hours =  d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();

	var min = min<10 ? "0" + min : min
	var sec = sec<10 ? "0" + sec : sec
	var timeT = hours+":"+ min + ":" + sec
	var timeday = month+"月"+ day + "日"
	var year = d.getFullYear()
	$(".time .tt").html(timeT)
	$(".time .day .rz").html(timeday)
	$(".time .day .year").html(year)
}



	
	




