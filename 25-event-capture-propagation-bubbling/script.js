const divs = document.querySelectorAll('div');

function logText(e) {
	console.log(this.classList.value); 
	// Output: three / two/ one
	// bubbling - even if you click on div three, we also clicked on two bc it wraps around it, also clicked on one, body, html, etc 
	// browser figures out what you click on but also triggers parent elements in a ripple
	//console.log(this);
	e.stopPropagation(); // stop bubbling this event up, we clicked on element we actually wanted
}

document.body.addEventListener('click', logText); // when you click it ripples to all elements to top
// capture - clicks ripple down, captures all events, starts at bottom, then bubbles up - triggers events as it goes up

divs.forEach(div => div.addEventListener('click', logText,{
	capture: false, // logText will get run on capture down, default is false
	once: true // listen for click then unbind itself, similar to removeEventListener
}));

