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
    // var $doc = $.parseXML(data);
    // console.log($($doc).find('DirectUrl'));


}
/*
var XML, parser, xmlDoc, directURL;
    $.ajax({url: link, success: function (data){ XML = data;}});
    parser = new DOMParser();
    console.log(XML);
    xmlDoc = parser.parseFromString(XML,"text/xml");
    directURL = xmlDoc.getElementsByTagName("DirectUrl")[0].childNodes[0].nodeValue;
    console.log(directURL);
    document.getElementById(codename).setAttribute('href', directURL);
 */