function getPic() {
    fetch("https://api.thecatapi.com/v1/images/search?limit=25", {
        method: 'GET',
        //mode: 'CORS',
        headers: {
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            // console.log(data[0].url)
            for (i = 0; i < 1; i++) {
                var displayEl = document.getElementById('display')
                information = data[i].url;
                console.log(information);
                // displayEl.textContent = information
                imgEl = document.createElement('img');
                displayEl.appendChild(imgEl);
                imgEl.src = information
            }
        })

}
var btnEl = document.getElementById('btn')
btnEl.addEventListener('click', function () {
    getPic()
    var displayEl = document.getElementById('display')
    displayEl.textContent = ''
})