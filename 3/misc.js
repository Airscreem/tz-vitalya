(function(){

  function CarouselController(array) {
    var data = array,
        flag = false;

    var pub = {
      interval: 500,
      auto: false,
      init: init,
      nextSlide: nextSlide,
      prevSlide: prevSlide,
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

        this.nextSlide(count);
        this.prevSlide(count);

        if(flag) {
          clearInterval(newCount);
          flag = false;
        }
      } else {
        this.nextSlide(count);
        this.prevSlide(count);
      }
    }

    function next(count) {
      hide(data[count-1]);
      show(data[count]);
    }

    function prev(count) {
      hide(data[count+1]);
      show(data[count]);
    }

    function nextSlide(count) {
      flag = true;
      count++;
      next(count);
      return count;
    }

    function prevSlide(count) {
      flag = true;
      count--;
      prev(count);
      return count;
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