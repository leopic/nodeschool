var dir = process.argv[2],
    ext = process.argv[3],
    fs = require('fs'),
    path = require('path');

fs.readdir(dir, function(err, fileList) {
    if (!err) {
        fileList.filter(function(file) {
            if (path.extname(file) == '.' + ext) {
                console.log(file);
                return true;
            }
        });
    }
});
