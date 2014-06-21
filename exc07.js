var http = require('http');

for (var i = 2; i < process.argv.length; i++) {
    var url = process.argv[i];
    http.get(url, function(response) {
        response.on('data', function(data) {
            console.log(data.toString());
        });
    });
}
