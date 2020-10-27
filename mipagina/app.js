var express = require('express');

var app = express();

app.set("views sengine", "jade");

app.use(express.static("public"));

app.get("/", function(solicitud, respuesta){
	respuesta.render("index");
});

app.listen(3000);