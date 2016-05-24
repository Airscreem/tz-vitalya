(function(){

	function CarouselController(array) {
		var data = array;

		var pub = {
			interval: 500,
			auto: false,
			init: init,
			addSlider: addSlider,
			removeSlider: removeSlider
		};

		return pub;

		////////////////////////////////////

		function init() {
      start();
		}

		function start() {
      var length = data.length,
          count = 0;

      while(++count) {
        if(auto) {
          withInterval(count);
        } else {

        }
        
        if(count >= length) count = 0;
      }
		}

    function withInterval(i) {
      setTimeout(function() {
        hide(data[i-1]);
        show(data[i]);
      }, this.interval);
    }

    function withoutInterval(i) {
      
    }

    function showNext(i) {
      i--;
      hide(data[i+1]);
      show(data[i]);
    }

    function showPrev(i) {
      i++;
      hide(data[i-1]);
      show(data[i]);
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