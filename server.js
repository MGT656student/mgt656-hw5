var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/kind-lemur', function(request, response){
    response.send('kind-lemur');
});

app.listen(process.env.PORT || 4000);