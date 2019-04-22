/*global $, jQuery, alert*/


//  OnClick SlideDown Jobs

var speed = "10000";

$(document).ready(function(){
    "use strict";
    $('form').on('click', 'h2', function(){
        $(this).next().slideToggle(speed).siblings('.answers').slideUp();
    });
});


// Contact Form
$(document).ready(function(){ 
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });    
});


// scrol TO TOp

addEvent(window, "load", function () {
                addEvent(document.getElementById("scrollTop"), "click", scrollToTop);
                alignElements(true);
                loadBackgrounds();
            });



