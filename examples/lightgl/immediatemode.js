var nodejs = (typeof window === 'undefined');
if(nodejs) {
  WebGL = require('../../index');
  document = WebGL.document();
  alert=console.log;
  window = document;

  //Read and eval library
  var fs=require('fs');
  eval(fs.readFileSync(__dirname+ '/lightgl.js','utf8'));
}

requestAnimationFrame = document.requestAnimationFrame;

//Read and eval library
fs=require('fs');
eval(fs.readFileSync(__dirname+ '/lightgl.js','utf8'));

var angle = 0;
var gl = GL.create();
document.setTitle("Immediate mode");

gl.onupdate = function(seconds) {
  angle += 45 * seconds;
};

gl.ondraw = function() {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.loadIdentity();
  gl.translate(0, 0, -5);
  gl.rotate(30, 1, 0, 0);
  gl.rotate(angle, 0, 1, 0);

  gl.color(0.5, 0.5, 0.5);
  gl.lineWidth(1);
  gl.begin(gl.LINES);
  for (var i = -10; i <= 10; i++) {
    gl.vertex(i, 0, -10);
    gl.vertex(i, 0, +10);
    gl.vertex(-10, 0, i);
    gl.vertex(+10, 0, i);
  }
  gl.end();

  gl.pointSize(10);
  gl.begin(gl.POINTS);
  gl.color(1, 0, 0); gl.vertex(1, 0, 0);
  gl.color(0, 1, 0); gl.vertex(0, 1, 0);
  gl.color(0, 0, 1); gl.vertex(0, 0, 1);
  gl.end();

  gl.lineWidth(2);
  gl.begin(gl.LINE_LOOP);
  gl.color(1, 0, 0); gl.vertex(1, 0, 0);
  gl.color(0, 1, 0); gl.vertex(0, 1, 0);
  gl.color(0, 0, 1); gl.vertex(0, 0, 1);
  gl.end();

  gl.begin(gl.TRIANGLES);
  gl.color(1, 1, 0); gl.vertex(0.5, 0.5, 0);
  gl.color(0, 1, 1); gl.vertex(0, 0.5, 0.5);
  gl.color(1, 0, 1); gl.vertex(0.5, 0, 0.5);
  gl.end();
};

gl.fullscreen();
gl.animate();
