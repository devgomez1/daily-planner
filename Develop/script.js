
var exactHour = moment().format('LT'); 
var currentTime = moment().format('LLLL');
var showDate = $("#currentDay");
showDate.text(currentTime);


$(".saveBtn").on("click", function () {
    var savedText9 = document.getElementById('text9').value;
    localStorage.setItem('9text', savedText9)

    var savedText10 = document.getElementById('text10').value;
    localStorage.setItem('10text', savedText10)

    var savedText11 = document.getElementById('text11').value;
    localStorage.setItem('11text', savedText11)

    var savedText12 = document.getElementById('text12').value;
    localStorage.setItem('12text', savedText12)

    var savedText1 = document.getElementById('text1').value;
    localStorage.setItem('1text', savedText1)

    var savedText2 = document.getElementById('text2').value;
    localStorage.setItem('2text', savedText2)

    var savedText3 = document.getElementById('text3').value;
    localStorage.setItem('3text', savedText3)

    var savedText4 = document.getElementById('text4').value;
    localStorage.setItem('4text', savedText4)

    var savedText5 = document.getElementById('text5').value;
    localStorage.setItem('5text', savedText5)


});
    var saved9 = localStorage.getItem('9text');
    document.getElementById('text9').value = saved9;

    var saved10 = localStorage.getItem('10text');
    document.getElementById('text10').value = saved10;

    var saved11 = localStorage.getItem('11text');
    document.getElementById('text11').value = saved11;

    var saved12 = localStorage.getItem('12text');
    document.getElementById('text12').value = saved12;

    var saved1 = localStorage.getItem('1text');
    document.getElementById('text1').value = saved1;

    var saved2 = localStorage.getItem('2text');
    document.getElementById('text2').value = saved2;

    var saved3 = localStorage.getItem('3text');
    document.getElementById('text3').value = saved3;

    var saved4 = localStorage.getItem('4text');
    document.getElementById('text4').value = saved4;

    var saved5 = localStorage.getItem('5text');
    document.getElementById('text5').value = saved5;




