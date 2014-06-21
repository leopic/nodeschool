var file = process.argv[2],
    fs = require('fs');

fs.readFile(file, function(err, data) {
    if (!err) {
        console.log(data.toString().split('\n').length-1);
    }
});
