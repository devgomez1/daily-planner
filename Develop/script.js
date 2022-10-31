$(document).ready(function() {
var exactHour = moment().format('LT'); 
var currentTime = moment().format('LLLL');
var showDate = $("#currentDay");
showDate.text(currentTime);

//console.log(currentTime)


})

