var filter = function(dir, ext, callback) {
    var fs = require('fs'),
        path = require('path');

    ext = '.' + ext;

    fs.readdir(dir, function(err, fileList) {
        var resultado;
        if (!err) {
            resultado = fileList.filter(function(file) {
                return path.extname(file) == ext;
            });
        }
        callback(err, resultado);
    });
};

module.exports = filter;