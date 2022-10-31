
var exactHour = moment().format('LT'); 
var currentTime = moment().format('LLLL');
var showDate = $("#currentDay");
showDate.text(currentTime);


$(".saveBtn").on("click", function () {
    var savedText9 = document.getElementById('text9').value;
    localStorage.setItem('9text', savedText9)

});
var saved9 = localStorage.getItem('9text');
     document.getElementById('text9').value = saved9;

