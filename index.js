require('leaflet');
var cal = require('sortof');
var ui = require('getids')(document.body);
var data = require('./getData')()
var createList = require('./createList');
var createMap = require('./createMap');
var getGenre = require('./getGenre')

var fmt = 'YYYY-MM-DD HH:mm:ss';
var key = 'starts_at';

ui.list.appendChild(createList(cal.thisWeek(data.events, key, fmt)))

ui.select.addEventListener('change', function(e){
  var filter = this.value
  var evts = cal[filter](data.events, key, fmt)
  console.log(filter, evts)
  updateList(createList(evts))
}, true)

createMap('map', data)

function updateList(list){
  ui.list.innerHTML = '';
  ui.list.appendChild(list)
}
