var network = {
        domain: "https://bitbucket.org",
        redirect: "/account/signin/?next=/favicon.ico",
        name: "BitBucket",
		loggedIn : false,
		logoutPath:"/logout?continue=/",
}

var IDP= {
	domain: "https://accounts.google.com",
	redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
	name: "Gmail",
	loggedIn: false,
	logoutPath:"/logout"
}

var lastLoggedInTime={}
var refreshToken={};
var loggedInSocialMediaAccounts = function() {
			var img = document.createElement('img');
			img.src = network.domain + network.redirect;

			if(network.loggedIn==false){
			img.onload = function() {
				network.loggedIn=true
				var now = new Date().getTime()            
				logOutUser(IDP);		
				location.reload(true)
			}};

			img.onerror = function() {
					 var now = new Date().getTime()
						refreshToken[network] =now;
						console.log('Logged out ' + network.name)				
						console.log(now)
						// console.log(refreshToken[network]);
			};
};

function logOutUser(network){
	
			var img = document.createElement('img');
			img.src = network.domain + network.logoutPath;
						img.onload = function() {
		//This fuction will never be called because these url dont return an image
			};
			
			img.onerror = function() {
		console.log("Logging you out of " + network.name);                              
			};

};

// setInterval(logOutUser,1000);	
// var id =setInterval(loggedInSocialMediaAccounts,3000);

loggedInSocialMediaAccounts()