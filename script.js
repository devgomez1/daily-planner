
var exactHour = moment().hours()
var currentTime = moment().format('LLLL');
var showDate = $("#currentDay");
showDate.text(currentTime);


$(".saveBtn").on("click", function () {
    var savedText9 = $('#text9').val();
    localStorage.setItem('9text', savedText9)

    var savedText10 = $('#text10').val();
    localStorage.setItem('10text', savedText10)

    var savedText11 = $('#text11').val();
    localStorage.setItem('11text', savedText11)

    var savedText12 = $('#text12').val();
    localStorage.setItem('12text', savedText12)

    var savedText1 = $('#text1').val();
    localStorage.setItem('1text', savedText1)

    var savedText2 = $('#text2').val();
    localStorage.setItem('2text', savedText2)

    var savedText3 = $('#text3').val();
    localStorage.setItem('3text', savedText3)

    var savedText4 = $('#text4').val();
    localStorage.setItem('4text', savedText4)

    var savedText5 = $('#text5').val();
    localStorage.setItem('5text', savedText5)
});

    var output9 = localStorage.getItem('9text');
    $('#text9').val(output9); 

    var output10 = localStorage.getItem('10text');
    $('#text10').val(output10); 

    var output11 = localStorage.getItem('11text');
    $('#text11').val(output11); 

    var output12 = localStorage.getItem('12text');
    $('#text12').val(output12); 

    var output1 = localStorage.getItem('1text');
    $('#text1').val(output1); 

    var output2 = localStorage.getItem('2text');
    $('#text2').val(output2); 

    var output3 = localStorage.getItem('3text');
    $('#text3').val(output3); 

    var output4 = localStorage.getItem('4text');
    $('#text4').val(output4); 

    var output5 = localStorage.getItem('5text');
    $('#text5').val(output5);


$(".row").each(function () {
    var timeStamp = $(this).attr("id");
    if (timeStamp < exactHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
    else if (timeStamp === exactHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
})


