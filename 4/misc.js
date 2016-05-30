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
      ctx: ctx,
      draw: draw
    };

    return pub;

    function ctx(id, context) {
      var canvas = document.getElementById(id);
      var newContext = canvas ? canvas.getContext(context) : document.createElement('canvas').id(id).getContext(context);
      return newContext;
    }

    function draw(points, ctx) {
      var self = this;
      
      ctx.fillStyle = this.color || 'blue';
      ctx.lineWidth = this.lineWidth || 1;


      if(points.length > 0) {
        points.forEach(function(item) {

          switch(self.type) {
            case 'fillRect':
              ctx.fillRect(item.x, item.y, item.width, item.height);
              break;

            case 'strokeRect':
              ctx.strokeRect(item.x, item.y, item.width, item.height);
              break;

            case 'clearRect':
              ctx.clearRect(item.x, item.y, item.width, item.height);
              break;

            default:
              ctx.fillRect(item.x, item.y, item.width, item.height);
              break;
          }
        });
      }
    }
  }

  var s = new Shape();
  var mass = [new Point(2,3,5,5), new Point(10,10,5,5)];

  s.color = 'red';

  s.draw(mass, s.ctx('test', '2d'));
})();

