$(document).ready(function(){
    $(".middle-rotate .rotate").textrotator({
        animation: "fade",
        speed: 1000
    });
})

creds = []
fs.readFile('creds.txt', (err, data) => { 
    if (err) throw err; 
  
    creds.append(data.toString()); 
}) 
const goodreads = require('goodreads-api-node');
const myCredentials = {
    key: creds[0],
    secret: creds[1]
  };