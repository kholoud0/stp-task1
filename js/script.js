
function changeBackground() {
    var color = document.getElementById("color").value; // cached

    // The working function for changing background color.
    document.bgColor = color;
var elements = document.getElementsByClassName('coltext'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.color =color;
	}
    // The code I'd like to use for changing the text simultaneously - however it does not work.
   
}
var elements = document.getElementsByClassName('color'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.color =color;
	}

document.getElementById("submitColor").addEventListener("click", changeBackground, false);


window.initializeClock = function(clockId, dateId) {
    var getTimeRemaining = function(endtime) {
        var t = Date.parse(endtime) - (new Date()).getTime();
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60);
        var hours = Math.floor( (t/(1000*60*60)) % 24);
        var days = Math.floor( t/(1000*60*60*24) );
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    var clock = document.getElementById(clockId);
    var deadline = document.getElementById(dateId).value;
    var timeinterval = setInterval(function(){
        var t = getTimeRemaining(deadline);
        clock.innerHTML = 'days: ' + t.days + '<br>' + 'hours: ' + t.hours + '<br>' + 'minutes: ' + t.minutes + '<br>' + 'seconds: ' + t.seconds;
        if(t.total<=0){
            clearInterval(timeinterval);
        }
    }, 1000);
}