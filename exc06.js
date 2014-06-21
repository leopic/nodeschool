var dir = process.argv[2],
    ext = process.argv[3],
    myMod = require('./exc06-module.js');

myMod(dir, ext, function(err, list) {
    if (!err) {
        list.forEach(function(file) {
            console.log(file);
        });
    }
});