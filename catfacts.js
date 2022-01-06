var apiKey = "https://cat-fact.herokuapp.com"

fetch ("https://cat-fact.herokuapp.com/facts",{
  method:'GET',
  
})
.then (response => response.json())
.then (function(data){
    console.log("we got a response")
})


const button = document.getElementById("fun-fact-btn");

button.addEventListener('click', function() {


function getFact() {
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
  .then(response => response.text())
  .then(data => {
    let fact = JSON.parse(data).text
    console.log(fact)
    var displayEl = document.getElementById("display-fun-fact")
    displayEl.textContent = fact
       
       
      })
  }
getFact()
})

// modal //

var modal = document.getElementById("modal");
var btn = document.getElementById("fun-fact-btn");
var span = document.getElementsByClassName("close"[0]);

// modal opens when button is clicked
btn.onclick = function() {
  modal.style.display = "block";
}
// modal closes when span (x) is clicked
span.onclick = function() {
  modal.style.display = "none";
}

let generate_btn = document.querySelector("#generate");
let num_facts = document.querySelector("#num_facts");
let animal_type = document.querySelector("#animal_type");

generate_btn.addEventListener("click", function() {
  let animal_value = animal_type.value.toLowerCase()

  if(parseInt(num_facts.value) > 5) {
    alert("Max is 5")
  }
  function fetch() {
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=${animal_type}&amount=${num_facts}')
    .then(response => response.text()) 
    .then(data => {
      let fact = JSON.parse(data).text
      console.log(fact)
      var displayEl = document.getElementById("result")
      displayEl.textContent = fact

    })
  }

  fetch()

})
