// start slingin' some d3 here.
var updatePosition = function() {  
  var randomArray = [];

  for (var i = 0; i < 25; i++) {
    var cx = 700 * Math.random();
    var cy = 450 * Math.random();
    randomArray.push([cx, cy]);
  }

  var dataArray = randomArray; //xlink:href="/files/2917/fxlogo.png" x="0" y="0" height="100" width="100" 

  svg.selectAll('image').data(dataArray).enter().append('image').attr('xlink:href', 'shuriken.svg').attr('width', '20px').attr('height', '20px').classed('enemy', true);

  var enemies = d3.selectAll('.enemy');
  
  enemies.transition().duration(1800).attr('x', function(d) { return d[0]; }).attr('y', function(d) { return d[1]; });

};

var updateScore = function() {

  score++;

  if (score > highScore) {
    highScore = score;
  }

  enemies.each(function() {
    var enemy = d3.select(this);
    var distance = Math.sqrt(Math.pow((enemy.attr('x') - player.attr('cx')), 2) + Math.pow((enemy.attr('y') - player.attr('cy')), 2));
    if (distance < 20) {
      score = 0;
      collisions++;
    }
  });

  d3.select('.current').text('Score: ' + score);
  d3.select('.highscore').text('High Score: ' + highScore);
  d3.select('.collisions').text('Collisions: ' + collisions);
  
  console.log(score);


};


var svg = d3.select('body').append('svg').attr('height', '450').attr('width', '700');

var player = svg.append('circle').classed('player', true).attr('cx', '350').attr('cy', '225');

var drag = d3.drag().on('drag', function() { 
  player.attr('cx', d3.event.x).attr('cy', d3.event.y); 
});

player.call(drag);

var score = 0;



var collisions = 0;

var highScore = 0;

updatePosition();

var enemies = d3.selectAll('.enemy');

setInterval(updatePosition, 2000);

setInterval(updateScore, 50);

// update();

// update();

// update();

// update();

// update();