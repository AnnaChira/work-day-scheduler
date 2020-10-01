
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

var hourofDay = ["09", "10", "11", "12", "01", "02", "03", "04", "05"]

function hourofDay() {
    var present = moment().format('H');
    for (var i = 0; i < hourofDay.length; i++){

        if(parseInt(hourofDay[i]) > present){
            $("#" + hourofDay[i].attr("style", "background-color: #77dd77"));
        }
        else if (parseInt(hourofDay[i]) < present){
            $("#" + hourofDay[i].attr("style", "background-color: #d3d3d3"));
        }
        else if (parseInt(hourofDay[i]) == present){
            $("#" + hourofDay[i].attr("style", "background-color: #ff6961"));
        }
    }
}




    