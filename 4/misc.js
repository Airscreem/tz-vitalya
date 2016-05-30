(function() {
  function Point(pos_x, pos_y, width, height) {
    if(pos_x === 'undefined') pos_x = 0;
    if(pos_y === 'undefined') pos_y = 0;
    if(width === 'undefined') width = 1;
    if(height === 'undefined') height = 1;

    var self = this;

    self.x = pos_x;
    self.y = pos_y;
    self.width = width;
    self.height = height;
  }

  function Shape() {
    var pub = {
      type: type,
      lineWidth: lineWidth,
      color: color,
      ctx: ctx,
      draw: draw
    };s

    return pub;

    function ctx(id, context) {
      var canvas = document.getElementById(id);
      var newContext = canvas ? canvas.getContext(context) : document.createElement('canvas').id(id).getContext(context);
      return newContext;
    }

    function draw(point, ctx) {
      ctx.fillStyle = this.color;
      ctx.lineWidth = this.lineWidth;
      ctx.type(point);
    }
  }
})();

