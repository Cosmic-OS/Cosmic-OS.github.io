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
