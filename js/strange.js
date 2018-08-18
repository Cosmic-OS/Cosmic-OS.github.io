function getLink(codename) {
    let parse;
    var link = "https://raw.githubusercontent.com/Cosmic-OS/platform_vendor_ota/pulsar-release/" + codename + ".xml";
    var data;
    $.ajax({
        url: link,
        type: 'get',
        success: function(response){
            var $doc = $.parseXML(response);
            $data = ($($doc).find('DirectUrl').text());
            $('a#'+codename).attr('href', $data);
        },
        error: function () {
            alert('Server error');
        }
    });
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
        setCookie('themeStatus', 'light', 30);
        if (isDevicePage == 'yes') {
            console.log("true,light");
            changeAcc('light');
        }
    } else {
        applyTheme('dark');
        setCookie('themeStatus', 'dark', 30);
        if (isDevicePage == 'yes') {
            console.log("true,dark");
            changeAcc('dark');
        }
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