function getLink(codename) {
    for (k=0;k<codename.length;k++) {
        var link = "https://raw.githubusercontent.com/Cosmic-OS/platform_vendor_ota/pulsar-release/" + codename[k] + ".xml";
        console.log(codename[k]);
        $.ajax({
            url: link,
            type: 'get',
            success: function (response) {
                var $doc = $.parseXML(response);
                $data = ($($doc).find('DirectUrl').text());
                $('a#' + codename[k]).attr('href', $data);
            },
            error: function () {
                alert('Server error');
            }
        });
    }
}
var isDevicePage;
function checkThemeStatus() {
    var themeStatus = getCookie('themeStatus');
    if (themeStatus == 'light') {
        applyTheme('light');
    } else {
        applyTheme('dark');
    }
}
function changeAcc(acTheme) {
    if (acTheme == "light"){
        athemeName = "css/accordion_light";
    } else {
        athemeName = "css/accordion_dark";
    }
    document.getElementById("acc_theme").href = athemeName + ".css";
}
function changeTheme() {
    if (themeName == "css/dark"){
        applyTheme('light');
        if (isDevicePage == 'yes') {
            console.log("true,light");
            changeAcc('light');
        }
        setCookie('themeStatus', 'light', 30);
    } else {
        applyTheme('dark');
        if (isDevicePage == 'yes') {
            console.log("true,dark");
            changeAcc('dark');
        }
        deleteCookie('themeStatus');
    }
}
function applyTheme(theme){
    console.log(theme);
    if (theme == 'light') {
        console.log("light, comin' right up");
        themeName = "css/light";
        if (isDevicePage == 'yes') {
            console.log("true");
            changeAcc('light');
        }
    } else {
        console.log("Dark it is!");
        themeName = "css/dark";
        if (isDevicePage == 'yes') {
            console.log("true");
            changeAcc('dark');
        }
    }
    document.getElementById("styleSheet").href = themeName + ".css";
}
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function deleteCookie(cname) {
    var d = new Date(); //Create an date object
    d.setTime(d.getTime() - (1000*60*60*24)); //Set the time to the past. 1000 milliseonds = 1 second
    var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
    window.document.cookie = cname+"="+"; "+expires;//Set the cookie with name and the expiration date

}