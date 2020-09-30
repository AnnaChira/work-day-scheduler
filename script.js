
var currentDay = new Date();
console.log(currentDay);
document.write(currentDay);




var textArea = $("#scheduler").children("tbody").children();
$(".description").on("click", function(){
    var comment = $(this).val();
    console.log($(this).parent().attr("id"))
    var hour = $(this).parent().attr("id");
    console.log(comment);
    localStorage.setItem(hour, comment);

});
// var input = $
// var updateDescription = "<p> input </p>";
// updateDescription.innerHTML = input;

// var saveBtn = $("#button").bind("click", function(){
//     storeDates.addEventlister 
// });

// $("#past").children();
// //row.on("click", function(){
//     addEvent.getElementById("present");
    
// })




    