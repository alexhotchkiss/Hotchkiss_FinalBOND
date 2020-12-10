var counterRpm = 800;

// Set this number you want your counter to count up to. Default is 20
var toprpm = 10;

// If yu don't want your speed to start at 0, change it here. Default is 0.
var rpmNumber = 0;

var myVar = setInterval(rpmCounter, counterRpm);

export function rpmCounter() {
	if (rpmNumber < toprpm) {
		rpmNumber++;
		document.getElementById("rpmTag").innerHTML = rpmNumber;
	} else {
		clearInterval(myVar);
	}
	return rpmNumber;
}

