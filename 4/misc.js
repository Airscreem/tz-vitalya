(function() {
  function Point(pos_x, pos_y) {
    if(pos_x === 'undefined') pos_x = 0;
    if(pos_y === 'undefined') pos_y = 0;

    var self = this;

    self.x = pos_x;
    self.y = pos_y;
  }

  function ctx(id, context) {
    var canvas = document.getElementById(id);
    var newContext = canvas ? canvas.getContext(context) : document.createElement('canvas').id(id).getContext(context);
    return newContext;
  }

  var Shape = function(option) {
    var self = this;

    self.option = option;

    self.Square = Square;
    self.Triangle = Triangle;

    function Square() {
      var ctx = option.ctx;

      ctx.beginPath();
      ctx.rect(188, 50, 100, 100);
      ctx.fillStyle = 'yellow';
      ctx.fill();
      ctx.lineWidth = 7;
      ctx.strokeStyle = 'black';
      ctx.stroke();
    }

    function Triangle() {
      var ctx = option.ctx;

      // Задаем свойства заливки и линий.
      ctx.fillStyle = '#00f';
      ctx.strokeStyle = '#f00';
      ctx.lineWidth = '#f00';

      ctx.beginPath();
      // Начинаем рисовать треугольник с верхней левой точки.
      ctx.moveTo(10, 10); // перемещаемся к координатам (x,y)
      ctx.lineTo(10, 10);
      ctx.lineTo(10, 100);
      ctx.lineTo(100, 10);


      // Заполняем фигуру заливкой и применяем линии
      // Фигура не будет отображена, пока не будет вызван хотя бы один из этих методов.
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
  }

  var shape = new Shape({
    size: 100,
    color: "red",
    ctx: ctx('test', '2d')
  });

  shape.Square();

  //s.draw(mass, ctx('test', '2d'));
})();

