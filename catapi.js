var apiKey = "a24b853d-07cb-41e6-92bc-bba4d171ec08"

fetch("https://api.thecatapi.com/v1/images/search?limit=25",{
    method: 'GET',
    //mode: 'CORS',
    headers: { 
       // 'Authorization':"a24b853d-07cb-41e6-92bc-bba4d171ec08"
},
})

.then (response => response.json())
.then (function(data){
    console.log(data)
})
 