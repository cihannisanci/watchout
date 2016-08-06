// start slingin' some d3 here.
var updatePosition = function() {  
  var randomArray = [];

  for (var i = 0; i < 25; i++) {
    var cx = 700 * Math.random();
    var cy = 450 * Math.random();
    randomArray.push([cx, cy]);
  }

  var dataArray = randomArray;

  svg.selectAll('circle').data(dataArray).enter().append('circle').classed('enemy', true);

  var enemies = d3.selectAll('.enemy');
  
  enemies.transition().duration(1800).attr('cx', function(d) { return d[0]; }).attr('cy', function(d) { return d[1]; });

};

var updateCollisions = function() {

  enemies.each(function() {
    var enemy = d3.select(this);
    var distance = Math.sqrt(Math.pow((enemy.attr('cx') - player.attr('cx')), 2) + Math.pow((enemy.attr('cy') - player.attr('cy')), 2));
    if (distance < 20) {
      collisionCount++;
    }
  });

  console.log(collisionCount);
};


var svg = d3.select('body').append('svg').attr('height', '450').attr('width', '700');

var player = svg.append('circle').classed('player', true).attr('cx', '350').attr('cy', '225');

var drag = d3.drag().on('drag', function() { 
  player.attr('cx', d3.event.x).attr('cy', d3.event.y); 
});

player.call(drag);

var collisionCount = 0;

updatePosition();

var enemies = d3.selectAll('.enemy');

setInterval(updatePosition, 2000);

setInterval(updateCollisions, 50);

// update();

// update();

// update();

// update();

// update();