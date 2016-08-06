// start slingin' some d3 here.
var update = function() {  
  var randomArray = [];

  for (var i = 0; i < 25; i++) {
    var cx = 700 * Math.random();
    var cy = 450 * Math.random();
    randomArray.push([cx, cy]);
  }

  var dataArray = randomArray;

  svg.selectAll('circle').data(dataArray).enter().append('circle');
  d3.selectAll('circle').transition().attr('cx', function(d) { return d[0]; }).attr('cy', function(d) { return d[1]; }).attr('r', '10');

  console.log('running');

};

var svg = d3.select('body').append('svg').attr('height', '450').attr('width', '700'); 

setInterval(update, 1000);

// update();

// update();

// update();

// update();

// update();