$(document).ready(function() {
    $('#test-form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: '',
            invalid: '',
            validating: ''
        },        
        fields: {
            Name: {
             message: 'The name is not valid.',
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty.'
                    },        
                    regexp: {
                        regexp: /^[A-Za-z\s]+$/,
                        message: 'The name can only accept alphabetical input.'
                    },
                }
            },
            Nickname: {
                message: 'Nickname is not valid.',
                validators: {
                    notEmpty: {
                        message: 'Nickname is required and cannot be empty.'
                    },
                    regexp: {
                        regexp: /^[A-Za-z\s]+$/,
                        message: 'Nicknames can only consist of alphabetical characters.'
                    },
                }
            },
            Quantity: {
                validators: {
                    notEmpty: {
                        message: 'Please choose quantity.'
                    },        
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'The name can only accept numerical input.'
                    },
                }
            }

        }
    })
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbzNmvjNezi3CZ5BVd5tQdlUJ29P5vEcIVoxYmP5DyO8n3aDVThAd4hOUKby2q5tKZtczw/exec';
        var redirectUrl = 'success-page.html';
        // show the loading 
        $('#postForm').prepend($('<span></span>').addClass(''));
        var go = $.post(url, $form.serialize(), function(data) {
            var url2 = 'https://script.google.com/macros/s/AKfycbzyDsYS_my55wCcQZqZ8HgCHmdcjCw5lasu0HW8WQj7ILJrddjWV5f1EknV9plcch_fWA/exec';
            var go = $.post(url2, function(data) {
                console.log(data)
                document.getElementById('count').innerHTML = "Total "+data.rowCount.toLocaleString() + " jackets pledged monthly!"
               
            })
           document.getElementById("test-form").style.display = "none"
           document.getElementById("ty").style.display = "block"
           setTimeout(() => {alert('Thanks for your pledge. Don\'t forget to screenshot and save your pledge!') }, 1000);
            
           

        })
            .fail(function(data) {
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    var url3 = 'https://script.google.com/macros/s/AKfycbzyDsYS_my55wCcQZqZ8HgCHmdcjCw5lasu0HW8WQj7ILJrddjWV5f1EknV9plcch_fWA/exec';
                    var go = $.post(url3, function(data) {
                        console.log(data)
                        document.getElementById('count').innerHTML = "Total "+data.rowCount.toLocaleString() + " jackets pledged monthly!" ;
                       
                    })
                    document.getElementById("test-form").style.display = "none"  
                    document.getElementById("ty").style.display = "block"
                    setTimeout(() => {alert('Thanks for your pledge. Don\'t forget to screenshot and save your pledge!') }, 1000);
                                
                }
            });
    });
});