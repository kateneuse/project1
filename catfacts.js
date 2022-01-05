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


