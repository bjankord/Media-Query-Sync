// Add Events Cross-browser
var event = {
	add: function(elem, type, fn) {
		if (elem.attachEvent) {
			elem['e'+type+fn] = fn;
			elem[type+fn] = function() {elem['e'+type+fn](window.event);}
			elem.attachEvent('on'+type, elem[type+fn]);
		} else
		elem.addEventListener(type, fn, false);
	}
};

// Set default
var currentMQ = "unknown";

// Checks CSS value in active media query and syncs Javascript functionality
var mqSync = function(){

	// Fix for Opera issue when using font-family to store value
	if (window.opera){
		var activeMQ = window.getComputedStyle(document.body,':after').getPropertyValue('content');
	}
	// For all other modern browsers
	else if (window.getComputedStyle) 
	{
		var activeMQ = window.getComputedStyle(document.head,null).getPropertyValue('font-family');
	}
	// For oldIE
	else {
		// Use .getCompStyle instead of .getComputedStyle so above check for window.getComputedStyle never fires true for old browsers
		window.getCompStyle = function(el, pseudo) {
			this.el = el;
			this.getPropertyValue = function(prop) {
				var re = /(\-([a-z]){1})/g;
				if (prop == 'float') prop = 'styleFloat';
				if (re.test(prop)) {
					prop = prop.replace(re, function () {
						return arguments[2].toUpperCase();
					});
				}
				return el.currentStyle[prop] ? el.currentStyle[prop] : null;
			}
			return this;
		}
		var compStyle = window.getCompStyle(document.getElementsByTagName('head')[0], "");
		var activeMQ = compStyle.getPropertyValue("font-family");
	}
	
	activeMQ = activeMQ.replace(/"/g, "");
	activeMQ = activeMQ.replace(/'/g, "");
	
	// Conditions for each breakpoint
	if (activeMQ != currentMQ) {
		if (activeMQ == 'XS') {
			 currentMQ = activeMQ;
			 // Add code you want to sync with this breakpoint
			 document.getElementById('msg').innerHTML = ('Active media query: <br><strong>' + currentMQ + '</strong>');
			 console.log(currentMQ);
		}
		if (activeMQ == 'S') {
			 currentMQ = activeMQ;
			 // Add code you want to sync with this breakpoint
			 document.getElementById('msg').innerHTML = ('Active media query: <br><strong>' + currentMQ + '</strong>');
			 console.log(currentMQ);
		}
		if (activeMQ == 'M') {
			 currentMQ = activeMQ;
			 // Add code you want to sync with this breakpoint
			 document.getElementById('msg').innerHTML = ('Active media query: <br><strong>' + currentMQ + '</strong>');
			 console.log(currentMQ);
		}
		if (activeMQ == 'L') {
			currentMQ = activeMQ;
			// Add code you want to sync with this breakpoint
			document.getElementById('msg').innerHTML = ('Active media query: <br><strong>' + currentMQ + '</strong>');
			console.log(currentMQ);
		}
	}
	
}; // End mqSync

// Run when DOM is ready
mqSync();
// Run on resize
event.add(window, "resize", mqSync);