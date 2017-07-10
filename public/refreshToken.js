var network ={
domain: "https://www.khanacademy.org",
redirect: "/login?continue=%2Ffavicon.ico",
name: "KhanAcademy",
loggedIn : false,
logoutPath:"/logout?continue=/"
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
			img.onload = function() {
				if(network.loggedIn==false)
				{
				network.loggedIn=true;
				var now = new Date().getTime()            
				lastLoggedInTime[network]=now;
				console.log('Logged in ' + network.name)				
				console.log(now)
				logOutUser(IDP);		
				}
			};
			img.onerror = function() {
				if(network.loggedIn==true)
					{ var now = new Date().getTime()
						refreshToken[network] = lastLoggedInTime[network] - now;
						console.log('Logged out ' + network.name)				
						console.log(now)
						console.log(refreshToken[network].getHours() + " Hours " + refreshToken[network].getMinutes() + " Minutes " + refreshToken[network].getSeconds() + " Seconds");
						network.loggedIn=false;            
					}
			};
};

function logOutUser(network){
	
			var img = document.createElement('img');
			img.src = network.domain + network.logoutPath;
			
			console.log('Checking');
			console.log(img.src);			
			img.onload = function() {
		//This fuction will never be called because these url dont return an image
			};
			
			img.onerror = function() {
		console.log("Logging you out of " + network.name);                              
			};

};

// setInterval(logOutUser,1000);	
setInterval(loggedInSocialMediaAccounts,1000);