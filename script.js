
$(document).ready ( function(e) {
    var url = 'https://script.google.com/macros/s/AKfycbzyDsYS_my55wCcQZqZ8HgCHmdcjCw5lasu0HW8WQj7ILJrddjWV5f1EknV9plcch_fWA/exec';
    var go = $.post(url, function(data) {
        console.log(data)
        document.getElementById('count').innerHTML = "Total "+data.rowCount.toLocaleString() + " jackets pledged monthly!"
       
    })
})