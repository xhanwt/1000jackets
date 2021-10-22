$(document).ready(function() {
    $('#test-form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
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
        var url = 'https://api.apispreadsheets.com/data/19650/';
        var redirectUrl = 'success-page.html';
        // show the loading 
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var go = $.post(url, $form.serialize(), function(data) {
           document.getElementById("test-form").style.display = "none"
           document.getElementById("ty").style.display = "block"

        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                document.getElementById("test-form").style.display = "none"  
                    document.getElementById("ty").style.display = "block" 
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    document.getElementById("test-form").style.display = "none"  
                    document.getElementById("ty").style.display = "block"             
                }
            });
    });
});