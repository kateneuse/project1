var apiKey = "https://cat-fact.herokuapp.com"

fetch("https://cat-fact.herokuapp.com/facts", {
  method: 'GET',

})
  .then(response => response.json())
  .then(function (data) {
    console.log("we got a response")
  })


// modal //

var modal = document.getElementById("modal");
var btn = document.getElementById("fun-fact-btn");
var span = document.getElementById("close");

// modal opens when button is clicked
btn.onclick = function () {
  modal.style.display = "block";
}
// modal closes when span (x) is clicked
span.onclick = function () {
  modal.style.display = "none";
  var displayEl = document.getElementById("result")
  displayEl.textContent = ''
}




let generate_btn = document.querySelector("#fun-fact-btn");
let num_facts = document.querySelector("#num_facts");
let animal_type = document.querySelector("#animal_type");
let closeEl = document.querySelector("#close");
const clearEl = document.getElementById("clear-history")
let searchHistory = JSON.parse(localStorage.getItem("generate")) || [];


generate_btn.addEventListener("click", function () {
  let animal_value = animal_type.value.toLowerCase();
  //console.log(animal_value);

  if (parseInt(num_facts.value) > 5) {
    alert("Max is 5")
  }
  var num_value = num_facts.value;
  fetchCatApi(animal_value, num_value)


  

})
closeEl.onclick = function (){
  modal.style.display = "none";
  var displayEl = document.getElementById("result")
  displayEl.textContent = ''

}
function fetchCatApi(animal_value, num_value) {
  //console.log(animal_value, num_facts);
  fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${animal_value}&amount=${num_value}`)
    .then(response => response.json())
    .then(data => {
      //let fact = JSON.parse(data).text
      var displayEl = document.getElementById("result")
      var displayList = document.createElement("ol")
      displayEl.appendChild(displayList)
      for (i = 0; i < num_value; i++) {
        var displayItem = document.createElement("li")
        console.log(data)
        displayItem.append(data[i].text + " ")
        displayList.appendChild(displayItem)
      }
    }
    )
}


//local storage//
generate_btn.addEventListener("click", function () {
  const generateFact = num_facts.value + animal_type.value;
  fetchCatApi(generateFact);
  searchHistory.push(generateFact);
  localStorage.setItem(generate, JSON.stringify(searchHistory));
  renderSearchHistory();

})



