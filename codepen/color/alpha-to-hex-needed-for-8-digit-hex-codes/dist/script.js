var text = document.getElementById('chart');
var tableguts = "";
for (var i = 1; i >= 0; i -= 0.01) {
  i = Math.round(i * 100) / 100;
  var alpha = Math.round(i * 255);
  var hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
  var perc = Math.round(i * 100);
  tableguts += "<tr><td>" + perc + "%</td><td> " + hex + "</td><td>" + alpha + "</td></tr>";
}
text.innerHTML += tableguts;