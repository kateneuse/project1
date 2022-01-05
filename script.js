console.log ("hello")

fetch("https://api.petfinder.com/v2/animals", {
    method: 'GET',
    mode: 'cors',
    //credentials:"omit",
    headers: {
        // 'Content-type': 'application/json',
        // 'Access-Control-Allow-Origin':"*",
        'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJFSHFqOW9Fb3FhUFlaMFR2TkJhSXhaV2hEUnYwVnU2cVdLTTJ3U0tLU3JmYkxkUGF2dSIsImp0aSI6IjdhYjBhZWY0MzlkZDQ1MTdkYTUwN2ZjMjJmNzcyM2I2YjQ5MzIxZWQyZThhODRkZjFkMTljYjI0OWQyMTY4ZTgwNDJhM2FmMjQwMTZhMzYzIiwiaWF0IjoxNjQxMzM5MTMxLCJuYmYiOjE2NDEzMzkxMzEsImV4cCI6MTY0MTM0MjczMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.AR3RE48hvHQepqH9gTX2s3iggsdBYZLRqNbDWleeJ1jy72xgfloREZBpBpiWx8jw5O2VTIBN4X1XwOmJwcqfAbD4e0iKikWiFwXQPztkIKipac9Q5CPbnUuF6Vj718AyvturMEvU4UIOxfD7DPsepjfjNN6GLfPkRoCShy_z8x7yiKJa5I-efBSR64DD4lwDx_dV6fk3xJY4hOtWs64EGUmr-zV7jHSD1pNnW0mhR05rkukWuLyrgghuJt9hUCpiRqNnW-LTM7pp7YBAjhAOT2LOXrDafMqfMFUjm1AEQBDPDnWGWtiBwqHY2ALZQSKImDdey45cL01nPN9rLbbH5A"

    },
})

.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.error(err)
})