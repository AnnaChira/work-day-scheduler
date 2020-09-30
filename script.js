
var currentDateInfo = (moment().format('LLLL'));
$("#currentDay").append(currentDateInfo);


var textArea = $("#scheduler").children("tbody").children();
$(".description").on("click", function(){
    var comment = $(this).val();
    console.log($(this).parent().attr("id"))
    var hour = $(this).parent().attr("id");
    console.log(comment);
    localStorage.setItem(hour, comment);
    $("#textArea").append(textArea);

});

("#past").children();
row.on("click", function(){
addEvent.getElementById("present");
});




    