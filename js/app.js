/*global document, $ */
(function () {
    'use strict';

    $(document).ready(function () {
        /* ----- Begin writing your JavaScript here  ------*/
   
function ReadMore() {
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show()   
}
$('.readmore').click(ReadMore);

function ReadLess() {
    $('#show-this-on-click').slideUp();
    $('.readmore').show();
    $('.readless').hide();
}
$('.readless').click(ReadLess);

function LearnMore() {
    $('span').slideDown();
    $('.learnmore').hide();
}
$('.learnmore').click(LearnMore);
  
        /* ----- Finish writing your JavaScript here  -----*/
    });
}());