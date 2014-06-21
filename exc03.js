var file = process.argv[2],
    fs = require('fs'),
    buffer = fs.readFileSync(file);

console.log(buffer.toString().split('\n').length-1);