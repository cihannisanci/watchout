var dataObject = {}

for (var i = 0; i < namesTable.data.length; i++) {
  var name = namesTable.data[i][11];
  var count = namesTable.data[i][12];
  if(dataObject.hasOwnProperty(name)) {
    dataObject[name] += parseInt(count);
  } else {
    dataObject[name] = parseInt(count);
  }
}

var data = [];

for (var key in dataObject) {
  if (dataObject.hasOwnProperty(key)) {
    data.push([key, dataObject[key]]);
  }
}

console.log(data);

var svg = d3.select('body').append('svg').attr('height', '1600px').attr('width', window.innerWidth);

var xArray = [];

for (x = 1; x < 50; x++) {
  xArray.push(x*20);
}

var yArray = [];

for(y = 1; y < 280; y++) {
  yArray.push(y*20);
}

var names = svg.selectAll('circle').data(data).enter().append('circle').classed('name', true).attr('cx', function(d, i) {
    return xArray[i%50];
}).attr('cy', function(d, i) {
  return yArray[Math.floor(i/280)];
}).attr('r', function(d) {
  return d[1]/100;
});