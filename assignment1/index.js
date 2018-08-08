var http = require('http');
var url = require('url');

//create http server
var httpServer = http.createServer(function(req, res){
  var parsedUrl = url.parse(req.url, true);
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, '');
  console.log('incoming path ', trimmedPath);

  //return response
  if(trimmedPath === 'hello'){
    var payload = {message : "hello"};
    writeResponse(200, 'application/json', JSON.stringify(payload));
  }
  else{
    writeResponse(404, 'text/html', "Not Found");
  }

  function writeResponse(status, contentType, payload){
    console.log('returning : ', status, payload);
    res.setHeader('Content-Type', contentType);
    res.writeHead(status);
    res.end(payload);
  }
});

//start http server
httpServer.listen(3000, function(){
  console.log("The server is listening on port " + 3000);
});
