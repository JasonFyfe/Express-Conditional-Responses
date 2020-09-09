var express = require('express');
var app = express();
var port = 3000;


// Routes
app.get("/", function(req, res){
    res.send("Hi there, Welcome!");
});

app.get("/speak/:animal", function(req, res){
    let animal = req.params.animal;
    if(animal === "pig"){
        res.send("The pig says 'Oink'");
    }
    else if(animal === "cow"){
        res.send("The cow says 'Moo'");
    }
    else if(animal === "dog"){
        res.send("The dog says 'Woof Woof!'");
    }
});

app.get("/repeat/:text/:number", function(req, res){
    var text = req.params.text;
    var number = req.params.number;
    var output = "";

    for (let i = 0; i < number; i++) {
        output += `${text} `;
    }

    res.send(output);
});


app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you trying to do?");
});

// Init Server
app.listen(port, function(){
    console.log(`Listening on ${port}`);
});