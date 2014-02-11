require('leaflet')
var leaf = L;

module.exports = function(id, data){

  var icon = leaf.divIcon()
  var ll = [data.events[0].latitude, data.events[0].longitude] 
  var plotLayers = [];

  var map = window.map = new leaf.Map(id)
  var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmAttrib='Map data © OpenStreetMap contributors';
  var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 15, attribution: osmAttrib}); 
  map.setView(new leaf.LatLng(ll[0], ll[1]), 14)
  map.addLayer(osm)

  addMark({lat: ll[0], lon: ll[1], details: {name: data.events[0].headline }})

  function addMark(data){

    var plotll = new leaf.LatLng(data.lat, data.lon, true);
    var plotmark = new leaf.Marker(plotll, {icon: icon});
    plotmark.data=data.details;
    map.addLayer(plotmark);
    plotmark.bindPopup("<h3>"+data.details.name+"</h3>");
    plotLayers.push(plotmark);

  }

}
