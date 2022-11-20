function show(){
const d = new Date();
document.getElementById("showdate").value = d;
document.getElementById("hours").value = d.getHours();
document.getElementById("minutes").value = d.getMinutes();
document.getElementById("seconds").value = d.getSeconds();
document.getElementById("milliseconds").value = d.getMilliseconds();
document.getElementById("weekday").value = d.getDay()+1;
document.getElementById("date").value = d.getDate();
document.getElementById("month").value = d.getMonth()+1;
document.getElementById("year").value = d.getFullYear();
}

var count = 0, hr = 0, min = 0, sec = 0;
var timer = true;
function start() {
timer = true;
document.getElementById("start-btn").disabled = true;
document.getElementById("stop-btn").disabled = false;
const myTimer = setInterval( function() {
if(min == 59 && sec == 59 && count == 100){
	hr++;
	document.getElementById("hrs").value = hr;
}
if(min == 59 && sec == 59 && count == 100){
	min = 0;
	document.getElementById("mins").value = min;
} else if(sec == 59 && count == 100){
	min++;
	document.getElementById("mins").value = min;
}
if(sec == 59 && count == 100){
	sec = 0;
	document.getElementById("secs").value = sec;
} else if(count == 100){
	sec++;
	document.getElementById("secs").value = sec;
}
if(count == 100) {
	count = 0;
	document.getElementById("millis").value = count;
} else {
	document.getElementById("millis").value = count;
	count++;
}
if(timer == true){

} else {
	clearInterval(myTimer);
}
},10);
}
function stop() {
	document.getElementById("start-btn").disabled = false;
	document.getElementById("stop-btn").disabled = true;	
	timer = false;
}
function reset() {
	timer = false;
	count = 0; hr = 0; min = 0; sec = 0;
	document.getElementById("start-btn").disabled = false;
	document.getElementById("stop-btn").disabled = false;
	document.getElementById("millis").value = 0;
	document.getElementById("secs").value = 0;
	document.getElementById("mins").value = 0;
	document.getElementById("hrs").value = 0;
}