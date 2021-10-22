$(document).ready ( function() {
    var url = "https://api.apispreadsheets.com/data/19650/?dataFormat=column"

    var go = $.get(url, function(data) {
    const array = data.Quantity;
    let sum = 0;

   for (let i = 0; i < array.length; i++) {
    const number = parseInt(array[i]);
    if(!isNaN(number)){
    sum += number
    }
   }
        document.getElementById('count').innerHTML = sum.toLocaleString() + " jackets pledged!" ;

    });
  

})