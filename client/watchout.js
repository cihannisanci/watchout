// start slingin' some d3 here.
var update = function() {  
  var randomArray = [];

  for (var i = 0; i < 25; i++) {
    var cx = 700 * Math.random();
    var cy = 450 * Math.random();
    randomArray.push([cx, cy]);
  }

  var dataArray = randomArray;

  svg.selectAll('circle').data(dataArray).enter().append('circle').classed('enemy', true);
  d3.selectAll('.enemy').transition().duration(1200).attr('cx', function(d) { return d[0]; }).attr('cy', function(d) { return d[1]; }).attr('r', '10');

  console.log('running');

};

var svg = d3.select('body').append('svg').attr('height', '450').attr('width', '700');

var player = svg.append('circle').classed('player', true).attr('cx', '350').attr('cy', '225').attr('r', '10');

var drag = d3.drag().on('drag', function() { 
  player.attr('cx', d3.event.x).attr('cy', d3.event.y); 
});

player.call(drag);


update();



setInterval(update, 1300);

// update();

// update();

// update();

// update();

// update();