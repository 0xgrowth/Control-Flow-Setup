paper.install(window);
paper.setup(document.getElementById('mainCanvas'));

var myCircle = new Path.Circle(new Point(100, 70), 50);
myCircle.fillColor = 'blue';

paper.view.draw();