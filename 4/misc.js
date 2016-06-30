(function() {
  function Point(pos_x, pos_y) {
    if(pos_x === 'undefined') pos_x = 0;
    if(pos_y === 'undefined') pos_y = 0;

    var self = this;

    self.x = pos_x;
    self.y = pos_y;
  }

  function ctx(id, context) {
    var canvas = document.getElementById(id),
        newContext;

    if(canvas) {
      newContext = canvas.getContext(context);
    } else {
      newContext = document.createElement('canvas').id(id).getContext(context);
      document.body.insertBefore(newContext, document.body.lastChild);
    }

    return newContext;
  }

  function Shape(points) {
    var self = this;

    self.arrayPoints = points;
    self.draw = draw;

    function draw() {
      console.log('Our square', this);
    }
  }

  /*Shape.prototype.draw = function(ctx) {
    console.log('Our square', this);
    .ctx = ctx;
    

    type = params.type;

    // Задаем свойства заливки и линий.
    ctx.fillStyle = params.color;
    ctx.strokeStyle = params.color;
    ctx.lineWidth = params.lineWidth || 1;

    ctx.beginPath();
    // Начинаем рисовать треугольник с верхней левой точки.
    ctx.moveTo(0, 0);
    //а здесь мы рисуем по точкам которые мы передадим в params(образно)
    ctx.lineTo(100, 0);
    ctx.lineTo(100, 100);
    ctx.lineTo(0, 100);
    ctx.lineTo(0, 0);

    // Заполняем фигуру заливкой и применяем линии
    // Фигура не будет отображена, пока не будет вызван хотя бы один из этих методов.
    switch(type) {
      case 'fill':
        ctx.fill(); break;
      case 'stroke':
        ctx.stroke(); break;
      default:
        ctx.fill(); ctx.stroke(); break;
    }
  };*/

  Shape.square = function(params) {
    var obj = {
      points: params.points,
      type: params.type,
      color: params.color,
      size: params.size,
      lineWidth: params.lineWidth
    }

    return obj;
  }

  var s = [new Point(100, 200), new Point(100, 200), new Point(100, 200)];

  var square = Shape.square({
    points: s,
    lineWidth: 1,
    size: 100,
    color: "blue",
    type: 'fill'
  });
  
  console.log(square, Shape);

  square.draw(ctx('test', '2d'));
})();

