var diameter = 1200,
radius = diameter / 2,
innerRadius = radius - 100;



var svg3 = d3.select("#banner3").append("svg")
  .attr("id","sneakySvg")
  .attr("width", diameter+220)
  .attr("height", diameter)
  .append("g")
//  .attr("transform", "translate(" + radius + "," + radius + ")");

var alle_icon = ['arryn.png','baratheon.png','greyjoy.png','lannister.png','martell.png','stark.png','targaryen.png','tully.png','tyrell.png'];
var alle = ['Arryn','Baratheon','Greyjoy','Lannister','Martell','Stark','Targaryen','Tully','Tyrell'];
//alle_icon.push();

var num = 0;
var widthicon = 70;
var heighticon = 100;
var xicon = 1160;
var yicon = 100;
var i = 0;

                    //  d3.select("svg").append("svg:image")
                    svg3.append("svg:image")
               .attr('x', xicon)
               .attr('y', yicon)
               .attr('width',widthicon)
               .attr('height',heighticon)
               .attr('id',alle[0])
               .attr('xlink:href',alle_icon[0])
               .on('mouseover',function(){
                updateData(alle[0]);}
                );
                      // d3.select("svg").append("svg:image")
                      svg3.append("svg:image")
               .attr('x', xicon)
               .attr('y', yicon+110)
               .attr('width',widthicon)
               .attr('height',heighticon)
               .attr('id',alle[1])
               .attr('xlink:href',alle_icon[1])
               .on('mouseover',function(){
                updateData(alle[1]);}
                );
                      // d3.select("svg").append("svg:image")
                      svg3.append("svg:image")
               .attr('x', xicon)
               .attr('y', yicon+220)
               .attr('width',widthicon)
               .attr('height',heighticon)
               .attr('id',alle[2])
               .attr('xlink:href',alle_icon[2])
               .on('mouseover',function(){
                updateData(alle[2]);}
                );
                      // d3.select("svg").append("svg:image")
                      svg3.append("svg:image")
               .attr('x', xicon)
               .attr('y', yicon+330)
               .attr('width',widthicon)
               .attr('height',heighticon)
               .attr('id',alle[3])
               .attr('xlink:href',alle_icon[3])
               .on('mouseover',function(){
                updateData(alle[3]);}
                );
                      // d3.select("svg").append("svg:image")
                      svg3.append("svg:image")
               .attr('x', xicon)
               .attr('y', yicon+440)
               .attr('width',widthicon)
               .attr('height',heighticon)
               .attr('id',alle[4])
               .attr('xlink:href',alle_icon[4])
               .on('mouseover',function(){
                updateData(alle[4]);}
                );
                      // d3.select("svg").append("svg:image")
                      svg3.append("svg:image")
               .attr('x', xicon)
               .attr('y', yicon+550)
               .attr('width',widthicon)
               .attr('height',heighticon)
               .attr('id',alle[5])
               .attr('xlink:href',alle_icon[5])
               .on('mouseover',function(){
                updateData(alle[5]);}
                );
                      // d3.select("svg").append("svg:image")
                      svg3.append("svg:image")
               .attr('x', xicon)
               .attr('y', yicon+660)
               .attr('width',widthicon)
               .attr('height',heighticon)
               .attr('id',alle[6])
               .attr('xlink:href',alle_icon[6])
               .on('mouseover',function(){
                updateData(alle[6]);}
                );
                      // d3.select("svg").append("svg:image")
                      svg3.append("svg:image")
               .attr('x', xicon)
               .attr('y', yicon+770)
               .attr('width',widthicon)
               .attr('height',heighticon)
               .attr('id',alle[7])
               .attr('xlink:href',alle_icon[7])
               .on('mouseover',function(){
                updateData(alle[7]);}
                );
                      // d3.select("svg").append("svg:image")
                      svg3.append("svg:image")
               .attr('x', xicon)
               .attr('y', yicon+880)
               .attr('width',widthicon)
               .attr('height',heighticon)
               .attr('id',alle[8])
               .attr('xlink:href',alle_icon[8])
               .on('mouseover',function(){
                updateData(alle[8]);}
                );


svg3.append("text")
    .attr("x", 280)
    .attr("y", 1170)
    .attr("fill", "white")
    .style('font-family', 'Impact')
    .style("font-size", "40pt")
    .text("Life Span of Main Characters")

var tau = 2 * Math.PI/5;
var arc = d3.arc()
    .innerRadius(495)
    .outerRadius(505)
    .startAngle(0);
var arc2 = d3.arc()
    .innerRadius(495)
    .outerRadius(505)
    .startAngle(tau);
var arc3 = d3.arc()
    .innerRadius(495)
    .outerRadius(505)
    .startAngle(tau*2);
var arc4 = d3.arc()
    .innerRadius(495)
    .outerRadius(505)
    .startAngle(tau*3);


    g = svg3.append("g").attr("transform", "translate(" + 600 + "," + 600 + ")");

var background = g.append("path")
    .datum({endAngle: tau})
    .style("fill", "red")
    .attr("d", arc);
var background = g.append("path")
    .datum({endAngle: tau*2})
    .style("fill", "green")
    .attr("d", arc2);
var background = g.append("path")
    .datum({endAngle: tau*3})
    .style("fill", "yellow")
    .attr("d", arc3);
var background = g.append("path")
    .datum({endAngle: tau*4})
    .style("fill", "purple")
    .attr("d", arc4);


    svg3.append("text")
    .attr("x", 100)
    .attr("y", 950)
    .attr("fill", "red")
    .style('font-family', 'Impact')
    .style("font-size", "20pt")
    .text("book 1")

        svg3.append("text")
    .attr("x", 100)
    .attr("y", 975)
    .attr("fill", "green")
    .style('font-family', 'Impact')
    .style("font-size", "20pt")
    .text("book 2")

        svg3.append("text")
    .attr("x", 100)
    .attr("y", 1000)
    .attr("fill", "yellow")
    .style('font-family', 'Impact')
    .style("font-size", "20pt")
    .text("book 3")

        svg3.append("text")
    .attr("x", 100)
    .attr("y", 1025)
    .attr("fill", "purple")
    .style('font-family', 'Impact')
    .style("font-size", "20pt")
    .text("book 4")

        svg3.append("text")
    .attr("x", 100)
    .attr("y", 1050)
    .attr("fill", "white")
    .style('font-family', 'Impact')
    .style("font-size", "20pt")
    .text("book 5")


var circle =
// d3.select("svg").append("circle")
svg3.append("circle")
    .attr("stroke", "white")
    .attr("fill", 'none')
    .attr('id','thecircle')
    .style("opacity", 0.6)
    .style("stroke-width", 5)
    //.attr("transform", "translate(40, 40)")
    .attr('cx', 600)
    .attr('cy', 600)
    .attr('r', innerRadius);

var ChaName =
// d3.select("svg").append("text")
svg3.append("text")
    .attr("id", "ChaName")
    .attr("x", 50)
    .attr("y", 50)
    .attr("fill", "white")
    .style("font-size", "25pt");

var ChaDeath =
// d3.select("svg").append("text")
svg3.append("text")
    .attr("id", "ChaDeath")
    .attr("x", 50)
    .attr("y", 100)
    .attr("fill", "white")
    .style("opacity", 0.8)
    .style("font-size", "15pt");

var AlleName2 =
// d3.select("svg").append("text")
svg3.append("text")
    .attr("id", "AlleName")
    .attr("x", 950)
    .attr("y", 50)
    .attr("fill", "white")
    .style('font-family', 'Impact')
    .style("font-size", "25pt")
    .text("(Choose an Allegiance)");

var AlleName =
// d3.select("svg").append("text")
svg3.append("text")
    .attr("id", "AlleName")
    .attr("x", 950)
    .attr("y", 50)
    .attr("fill", "white")
    .style('font-family', 'Impact')
    .style("font-size", "25pt")
    //.text("(Choose an Allegiance)");

    var chaImage =
                 d3.select("svg").append("svg:image")
                   .attr('x', 50)
                   .attr('y', 130)
                   .attr('width',150)
                   .attr('height',150)
                   .attr('id',chaImage);
                   //.attr('xlink:href',alle_icon[8])



var rawTripData;



d3.csv("final_death.csv" , function (error, data) {
  rawDeathData = data;
  rawDeathData.forEach(function (cha) {
      var temp = "M"+cha.x1+","+cha.y1+"Q 600, 600,"+cha.x2+","+cha.y2
      var tempid = "theid"+cha.Id
      var tempidt = "theidt"+cha.Id
      var tempimage = "chaImage/"+cha.Name+".png"

      var temppath = svg3.append("path")
          .attr("d", temp)
          .attr("id",tempid)
          .style("stroke-width", 3)
          .style("stroke", "white")
          .attr('fill','none')
          .style("opacity", 0.3)
          .on("mouseover", function () {
               ChaName.text(cha.Name);
               ChaDeath.text("Intro "+cha.BookIntro + "     Death "+"Book "+cha.BookDeath+" Chapter "+cha.DeathChapter);
               chaImage.attr('xlink:href', tempimage);
               temppath.style("stroke", "red")
                       .style("opacity", 0.8)
                       .style("stroke-width", 9);
              })
          .on("mouseout", function(){
            temppath.style("stroke", "white")
                    .style("opacity", 0.3)
                    .style("stroke-width", 3);
          });


      var temprotate = "rotate("+cha.rot+","+cha.x1+","+cha.y1 +")"

      svg3.append("text")
         .attr("x", cha.x1)
         .attr("y", cha.y1)
         .text(cha.Name)
         .attr("id",tempidt)
         .style("stroke-width", 2)
         .attr("font-size", 10)
         .attr("fill", "white")
         .attr("transform", temprotate)
         .on("mouseover", function () {
               ChaName.text(cha.Name);
               ChaDeath.text("Intro "+cha.Intro + " Death "+cha.Death)
              });

        })
});


function updateData(theallegiance) {


  var num = 100;

  while (num>0){
    var tempde = "#theid"+num;
    var tempdet = "#theidt"+num;
    d3.select(tempde).remove();
    d3.select(tempdet).remove();
    num = num-1;
  }

AlleName2.text("");
AlleName.text(theallegiance);

d3.csv("final_death.csv" , function (error, data) {
  rawDeathData = data;
  rawDeathData.forEach(function (cha) {

   if (theallegiance == cha.Allegiances){

      var temp = "M"+cha.x1+","+cha.y1+"Q 600, 600,"+cha.x2+","+cha.y2
      var tempid = "theid"+cha.Id
      var tempidt = "theidt"+cha.Id
      var tempimage = "chaImage/"+cha.Name+".png"


      var temppath = svg3.append("path")
          .attr("d", temp)
          .attr("id",tempid)
          .style("stroke-width", 2)
          .style("stroke", "white")
          .attr('fill','none')
          .style("opacity", 0.3)
          .on("mouseover", function () {
               ChaName.text(cha.Name);
               ChaDeath.text("Intro "+cha.BookIntro + "     Death "+"Book "+cha.BookDeath+" Chapter "+cha.DeathChapter);
               chaImage.attr('xlink:href', tempimage)
               temppath.style("stroke", "red")
                       .style("opacity", 0.8)
                       .style("stroke-width", 8);
              })
          .on("mouseout", function(){
            temppath.style("stroke", "white")
                    .style("opacity", 0.3)
                    .style("stroke-width", 3);
          });


      var temprotate = "rotate("+cha.rot+","+cha.x1+","+cha.y1 +")"
      var temptrans = "translate("+cha.offset+","+cha.offset +")"

      svg3.append("text")
         .attr("x", cha.x1)
         .attr("y", cha.y1)
         .text(cha.Name)
         .attr("id",tempidt)
         .style("stroke-width", 2)
         .attr("font-size", 10)
         .attr("fill", "white")
         .attr("transform", temprotate+temptrans)
         .on("mouseover", function () {
               ChaName.text(cha.Name);
               ChaDeath.text("Intro "+cha.Intro + " Death "+cha.Death)
              });
  }

        })
});


}
