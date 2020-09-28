
var textArea = $("#scheduler").children("tbody").children();
row.on("click", function(){
    console.log(this);
    var description = $(this).find(".description");
    console.log(description);
});


    