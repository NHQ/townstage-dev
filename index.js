require('leaflet')

var ui = require('getids')(document.body)
var data = require('./getData')()
var createList = require('./createList');
var createMap = require('./createMap');
var getGenre = require('./getGenre')

ui.list.appendChild(createList(data.events))


createMap('map', data)

