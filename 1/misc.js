function getSequence(number) {

	var array = [1];

	return function(number) {
		var i, j,
		max = array.length - 1;

		if(number > max) {
			for(i = max; i < number; i++) {
				var s = array.slice(-3),
					count = 0;
				//console.log('slice ' + s + ' / length ' + s.length);

				for(j = 0; j < s.length; j++) {
					count += parseInt(s[j]);
					//console.log('count ' + count);
				}

				array.push(count);
				//console.log('push ' + array);
			}
		}

		return console.log(array[number-1]);
	}
}


var seq = getSequence();
seq(3);