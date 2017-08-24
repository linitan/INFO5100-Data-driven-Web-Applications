function fillMap(selection, color, data) {

  // TODO: minor fix, sometimes d gets a -99, why?
  selection
    .attr("fill", function(d) {
      if (data[d.id] == "2") {return "red";}
      return data[d.id] == "1"  ? color : color_na; });
}

function updateMap(color, data) {

  // fill paths
  d3.selectAll("path")

    .call(fillMap, color, data);

  // // update path titles
  // d3.selectAll("svg#map path title")
  //   .call(setPathTitle, data);
  //
  // // update headline
  // d3.select("h2").text(headline + d3.select("#year").node().value);
}

function updateIcon(opacity, data) {
  var key = Object.keys(data);
  for (var i = 0; i<key.length; i++){
    var key2 = key[i];
    if(data[key2] == "1") {
      svg2.select("#" + key2).attr("opacity",opacity);
  }
  else {
    svg2.select("#" + key2).attr("opacity",0.1);
  }
}}
  // for (var key in data) {
  //   if(data.key == "1") {
  //     console.log(key);
  //     // d3.select("#" + key).attr("opacity",opacity);
  //   }
  // }
//}
