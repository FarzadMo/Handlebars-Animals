var express = require ("express");
var exphbs= require ("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


var animals = [
    {
      animalType: "dog",
      pet: true,
      fierceness: 4
    }, {
      animalType: "cat",
      pet: true,
      fierceness: 10
    }, {
      animalType: "giraffe",
      pet: false,
      fierceness: 4
    }, {
      animalType: "zebra",
      pet: false,
      fierceness: 8
    }, {
      animalType: "lion",
      pet: false,
      fierceness: 10
    }
];

//ROUTES:
// /dog
app.get("/dog", function(req, res){

    res.render("dog", animals[0]);
});

console.log("---------all-pets---------");
// /all-pets
app.get("/all-pets", function(req, res){
    var animalPet = [];
    
    for (var i =0; i<animals.length; i++){
        if (animals[i].pet){
            animalPet.push(animals[i]);
        }
        
    }
    console.log(animalPet);
    res.render("index", {petObj: animalPet});
});


// /all-non-pets
app.get("/all-non-pets", function(req, res){
    var animalPet = [];
    
    for (var i =0; i<animals.length; i++){
        if (!animals[i].pet){
            animalPet.push(animals[i]);
        }
        
    }
    console.log(animalPet);
    res.render("index", {petObj: animalPet});
});  





app.listen(PORT, function(){
    console.log("Server is listening to http://localhost/"+PORT);
});