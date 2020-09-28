
var textArea = $("#scheduler").children("tbody").children();
rows.on("click", function(){
    console.log(this)
    var description = $(this).find(".description");
    console.log(description)
})

//     $(document).on("click", function(){
//         var workScheduler = document.getElementById("jumbotron");
//         var days = [
//             "Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//         ];
//         var times = "";
//         if (times !== true){
//           var times = document.createElement("p");
//         }
//         if (times !== false)

//         days.forEach(function(create){
//             var days = document.createElement("div");
//             newDaysDiv.textContent = event;
//             days.appendChild(newDaysDiv);
//         });
//     });

//    function init(){
//      var storeDates = JSON.parse(localStorage.getItem("days"));
//    }
    