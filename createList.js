var html = require('hyperscript')
var stub = 'http://www.gravatar.com/avatar/'

module.exports = function(events){ // events should be sorted already
  var ul = html('ul.events')
  var list = events.map(function(e){
    return html('li.event', 
      [ 
        html('img.stub', {src: stub + String(Math.random()).slice(2) + '?d=identicon'}),
        html('a', {href: e.url}, e.headline),
        html('p', e.starts_at)
      ])
  })
  return html('ul.events', list)
}


function createTags(tags){
  return tags.map(function(tag){
    return html('p.tag', tag)
  })
}

