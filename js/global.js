function createCookie(name,valued,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+valued+expires+"; path=/; SameSite=Strict; Secure";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

if (readCookie("t1") == null || readCookie("t1") == ''){
    document.getElementById("styles").innerText = ":root{ --backcolor: rgba(255,255,255,1); --textcolor: black; --accentcolor: orangered} @media(prefers-color-scheme:dark){ :root{ --backcolor: rgba(0,0,0,1);  --textcolor: white; } }"

}

var s = window.localStorage;
if (s.getItem("locale") != null){
    var locale = document.createElement('locale');
    locale.setAttribute("value", s.getItem("locale"));
    document.body.appendChild(locale);
}
function resize(){
    const link = document.getElementById("ss1").getAttribute("href").split("-")[0];
    if (window.innerWidth >= 767){
        if (document.getElementById("ss1").getAttribute("href") != link + "-d.css"){
        document.getElementById("ss1").setAttribute("href", link + "-d.css");
        }
    } else{
        if (document.getElementById("ss1").getAttribute("href") != link + "-m.css"){
        document.getElementById("ss1").setAttribute("href", link + "-m.css");
        }
    }
}

window.onresize = resize;
const link = document.getElementById("ss1").getAttribute("href").split("-")[0];
if (window.innerWidth >= 767){
    if (document.getElementById("ss1").getAttribute("href") != link + "-d.css"){
    document.getElementById("ss1").setAttribute("href", link + "-d.css");
    }
} else{
    if (document.getElementById("ss1").getAttribute("href") != link + "-m.css"){
    document.getElementById("ss1").setAttribute("href", link + "-m.css");
    }
}


console.log("%cWelcome to the console log", "font-size: 20px;");