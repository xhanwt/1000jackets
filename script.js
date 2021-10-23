
$(document).ready ( function(e) {

    var url = 'https://script.google.com/macros/s/AKfycbzRmpspcZ5xRb9eHaKlvn9QpNzXy30gcPbCY5m4WlATxS29UEVhdhdsKb7DRtZatzCl9g/exec';

    var go = $.post(url, function(data) {
        console.log(data)
        document.getElementById('count').innerHTML = data.rowCount.toLocaleString() + " jackets pledged!" ;
       

    })
})