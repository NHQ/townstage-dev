module.exports = function(events){

  var genres = events.reduce(function(p,e,i,d){
    var g = e.genres
    g.forEach(function(ge){
      if(!p[ge]) p[ge] = []
      p[ge].push(e)
    })
    return p
  },{})

  return genres

}
