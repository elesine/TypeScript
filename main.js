var username = "Gretel Canasa";
var age = 20;
var isTrue = true;
var token = "puedo crear lo que sea";
var personas = ["chef", "software", "artist"];
console.log(username, age, isTrue);
var div_personas = document.querySelector("#personas");
div_personas.innerHTML = "<ul>" +
    personas.map(function (persona) {
        return "<li> ".concat(persona, " </li>");
    }).join("");
+"</ul>";
