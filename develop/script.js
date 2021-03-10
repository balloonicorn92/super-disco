//make sure html loads before JS 
$(document).ready(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"))
    //on click save button Take textarea input into localstorage
    $(".saveBtn").on("click", function(){
        let userInput = $(this).siblings(".description").val()
        let timeKey = $(this).parent().attr("id")
        console.log(userInput, timeKey)

        localStorage.setItem(timeKey, userInput)
    })
    //identifier get from local storage
        $("#9 .description").val(localStorage.getItem("9"));
        $("#10 .description").val(localStorage.getItem("10"));
        $("#11 .description").val(localStorage.getItem("11"));
        $("#12 .description").val(localStorage.getItem("12"));
        $("#13 .description").val(localStorage.getItem("13"));
        $("#14 .description").val(localStorage.getItem("14"));
        $("#15 .description").val(localStorage.getItem("15"));
        $("#16 .description").val(localStorage.getItem("16"));
        $("#17 .description").val(localStorage.getItem("17"));
        $("#18 .description").val(localStorage.getItem("18"));
    //onclick time block textarea edit... on blur save... make sure to call it
    let timeOfDay = function() {
        let currentTime = moment().hours()

        $(".time-block").each(function(){
            let divTime = parseInt($(this).attr("id"))
            if(divTime < currentTime){
                $(this).addClass("past")
            } else if(divTime === currentTime){
                $(this).removeClass("past")
                $(this).addClass("present")
            } else if (divTime > currentTime){
                $(this).removeClass("present past")
                $(this).addClass("future")
            }
        })
    }
    timeOfDay()
})