var express = require("express");

var app = express();

app.use(express.static('public_pwa'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public_pwa/css'));
app.use('/js', express.static(__dirname + '/public_pwa/js'));
app.use('/images', express.static(__dirname + '/public_pwa/images/icons'));

app.listen(5010, function(){   
    console.log("Server started");
});
