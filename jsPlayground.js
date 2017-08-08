function initialize() {
  var latlng = new google.maps.LatLng(40.0301, 116.346);
  var myOptions = { 
    zoom: 16, 
    center: latlng, 
    mapTypeId: google.maps.MapTypeId.ROADMAP 
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  var marker = new google.maps.Marker({ position: latlng, title: "[位置]" }); marker.setMap(map);
}     		