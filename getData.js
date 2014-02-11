var events = require('./events.json').events
var venues = require('./venues.json').venues

module.exports = function(){
  return {events: events, venues: venues}
}
