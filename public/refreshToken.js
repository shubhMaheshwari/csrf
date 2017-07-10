var network ={
        domain: "https://medium.com",
   redirect: "/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default",
        name: "Medium",
	loggedIn: false
}

var IDP= {
        domain: "https://www.facebook.com",
        redirect: "/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
        name: "Facebook",
      }

var lastLoggedInTime={}
var refreshToken={};

var loggedInSocialMediaAccounts = function() {
			var img = document.createElement('img');
			img.src = network.domain + network.redirect;
			img.onload = function() {
				if(network.loggedIn==false && loggedOut(IDP))
				{ 
				network.loggedIn=true;
				var now = new Date().getTime()            
				lastLoggedInTime[network]=now;
				console.log('Logged in ' + network.name)				
				console.log(now)
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

function loggedOut(network){
	
			var img = document.createElement('img');
			img.src = network.domain + network.logoutPath;
			
			console.log('Checking');
			console.log(img.src);			
			img.onload = function() {
				return false;
			};

			img.onerror = function() {
				return true;				
			};

};

// setInterval(logOutUser,1000);	
setInterval(loggedInSocialMediaAccounts,1000);