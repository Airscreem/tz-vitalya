(function(){

  function CarouselController(array) {
    var data = array;

    var pub = {
      interval: 500,
      auto: false,
      init: init,
      nextClick: nextClick,
      prevClick: prevClick,
      addSlider: addSlider,
      removeSlider: removeSlider
    };

    return pub;

    ////////////////////////////////////

    function init() {
      var length = data.length,
      count = 0;

      if(auto) {
        var newCount = setInterval(function() {
          count++;
          next(count);

          if(count >= length) count = 0;

        }, this.interval);
      }
    }

    function next(i) {
      hide(data[i-1]);
      show(data[i]);
    }

    function prev(i) {
      hide(data[i+1]);
      show(data[i]);
    }

    function nextSlide() {

    }

    function prevSlide() {
      
    }



    function show(item) {
      item.style.opacity = '1';
    }

    function hide(item) {
      item.style.opacity = '0';
    }

    function addSlider(item) {
      data.push(item);
    }

    function removeSlider(start, end) {
      if(end === 'undefined') end = 0;

      if(start > data.length || start > end) return console.log('Вы не можете удалить, попробуйте ещё разок!!!');

      data.splice(start, end);
    }
  }

})();