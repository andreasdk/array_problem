// ** printReverse()
function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
};

// ** isUniform()
function isUniform(arr) {
	var first = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
};

// ** sumArray() **
function sumArray(arr) {
	var result = 0;
	arr.forEach(function(element){
		result += element;
	});
	return result;
}

// ** max()
function max(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}
