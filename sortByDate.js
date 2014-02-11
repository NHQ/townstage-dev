var moment = require('moment')
var fmt = 'YYYY-MM-DD HH-mm-ss'

module.exports.sort = linearSort
module.exports.today = today
module.exports.thisWeek = thisWeek
module.exports.thisMonth = thisMonth

function thisMonth(events, key, fmt){
  var nextMonth = moment().add('months', 1).hours(0).minutes(0).seconds(0)
  return linearSort(events.reduce(function(p,e){
    var _a = moment(e[key], fmt)
    if(_a.isBefore(nextMonth)) p.push(e)
    return p
  }, []), key, fmt)
}

function thisWeek(events, key, fmt){

  var weekFromNow = moment().add('weeks', 1).hours(0).minutes(0).second(0)

  return linearSort(events.reduce(function(p,e){
  
    var _a = moment(e[key], fmt)
    if(_a.isBefore(weekFromNow)) p.push(e)
    return p
  
  }, []), key, fmt)

}


function today(events, key, fmt){

  var tomorrow = moment().add('days', 1).hours(0).minutes(0).seconds(0)

  return linearSort(events.reduce(function(p,e,i,d){
    var _a = moment(e[key], fmt)
    if(_a.isBefore(tomorrow)) p.push(e)
    return p
  }, []), key, fmt)
    

}


function linearSort(events, key, fmt){

  return events.sort(function(a,b){
    var _a = moment(a[key], fmt)
    var _b = moment(b[key], fmt)
    if(_a.isBefore(_b)) return -1
    if(_a.isAfter(_b)) return 1
    else return 0
  })

}
