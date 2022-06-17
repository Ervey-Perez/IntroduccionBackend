var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(request, response){
    console.log('request', request.url);

    var filePath = '.' + request.url;
    if(filePath == './'){
        filePath = './index.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var contentType = 'text/html';
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png'
    };

    contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error,content){
        if(error) {
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', function(error, content){
                    response.writeHead(200,{'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else{
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+ error.code+'..\n');
                error.response.end();
            }
        }
        else{
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content, 'utf-8');
        }
        
    });
}).listen(18000);
console.log('Server running at http://l18540327.itdelicias.edu.mx:18000');