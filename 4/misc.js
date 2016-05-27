(function() {
  function Point(pos_x, pos_y) {
    if(pos_x === 'undefined') pos_x = 0;
    if(pos_y === 'undefined') pos_y = 0;

    var self = this;

    self.x = pos_x;
    self.y = pos_y;
  }

  function Shape(point, option) {
    var self = this;

    self.point = point;
    self.option = option;
    self.ctx = ctx;
    self.draw = draw;

    function ctx(id, context) {
      var canvas = document.getElementById(id);
      var newContext = canvas ? canvas.getContext(context) : document.createElement('canvas').id(id).getContext(context);
      return newContext;
    }

    function draw(ctx) {

    }
  }
})();

