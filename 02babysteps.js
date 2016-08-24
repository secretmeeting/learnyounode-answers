//console.log(process.argv);
var sum = process.argv.reduce(function(previous, next){
	var pAsInt = parseInt(previous);
	var nAsInt = parseInt(next);
	if(isNaN(pAsInt)){
		nAsInt = 0;
	}
	if(isNaN(nAsInt)){
		nAsInt = 0;
	}
	return pAsInt + nAsInt;
}, 0);
console.log(sum);