var fs = require('fs');

//console.log(process.argv);
var buffer = fs.readFileSync(process.argv[2]);
var lines = buffer.toString().split('\n').length;
console.log(lines > 2 ? lines - 1 : 0);