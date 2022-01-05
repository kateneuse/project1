var apiKey = "https://cat-fact.herokuapp.com"

fetch ("https://cat-fact.herokuapp.com/facts",{
  method:'GET',
  
})
.then (response => response.json())
.then (function(data){
    console.log(data)
})