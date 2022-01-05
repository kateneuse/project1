var apiKey = "https://cat-fact.herokuapp.com"

fetch ("https://cat-fact.herokuapp.com/facts",{
  method:'GET',
  
})
.then (response => response.json())
.then (function(data){
    console.log("we got a response")
})


const button = document.getElementById("button");

button.addEventListener('click', function() {


function getFact() {
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
  .then(response => response.text())
  .then(data => {
    let fact = JSON.parse(data).text
    console.log(fact)
    var p = document.createElement("p");
       var node = document.createTextNode(fact);
       p.appendChild(node);

       let facts = document.querySelector(".facts");
       
      })
  }
getFact()
})


