console.log ("hello")

fetch("https://api.petfinder.com/v2/animals", {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJFSHFqOW9Fb3FhUFlaMFR2TkJhSXhaV2hEUnYwVnU2cVdLTTJ3U0tLU3JmYkxkUGF2dSIsImp0aSI6IjBhNzg5MWVjMzY2NDM0ODQzOTQyNzA1MjhmNDk0N2RiMWIxYTU5YjRhNDA3ZDVkZjkyMjVlOWY0ZGZhM2UyYjBlMjdmMzBhZmM2ZGI5ZTc4IiwiaWF0IjoxNjQxMzI1MjMzLCJuYmYiOjE2NDEzMjUyMzMsImV4cCI6MTY0MTMyODgzMywic3ViIjoiIiwic2NvcGVzIjpbXX0.MbkElRW0amz-4MD6_f0iymtFvhjFJLtsOeLV4PwulTkluRgLKxz1L0q9vCOQfb4pBvWucBN0U-vg1cjBK4RXHhMT85GxYXJwMxjjGo1L2sRXMnS35oeR3OSji-FWtTqdkkAWNc4h_hrHEyDuhmDSHG3rUF7xU_hGJmbAG4SQBoMDlmFQ-X-EnbnrpAyNZpu8KOVGhU44cDtIeh-n36Jf0eD4OhGgfkN0P8jDyRoJJ466rCrsgoUnDny7ghI6p3FzhHwitsylgXJ188tjikf42vRrzPqk0k5Js5b1WCJ2TkAUpOLX-63XJQwUga8gFRKoIeFIOtiYKrAsGps61iRYyw`, // notice the Bearer before your token
    },
    
}).then(function(response){console.log})