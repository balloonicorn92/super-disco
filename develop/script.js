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
        $("#nine .description").val(localStorage.getItem("nine"));
        $("#ten .description").val(localStorage.getItem("ten"));
        $("#eleven .description").val(localStorage.getItem("eleven"));
        $("#twelve .description").val(localStorage.getItem("twelve"));
        $("#thirteen .description").val(localStorage.getItem("thirteen"));
        $("#fourteen .description").val(localStorage.getItem("fourteen"));
        $("#fifteen .description").val(localStorage.getItem("fifteen"));
        $("#sixteen .description").val(localStorage.getItem("sixteen"));
        $("#seventeen .description").val(localStorage.getItem("seventeen"));
        $("#eighteen .description").val(localStorage.getItem("eighteen"));
    //onclick time block textarea edit... on blur save... make sure to call it
    let timeOfDay = function() {
        let currentTime = moment().hours()

        $(".time-block").each(function(){
            let divTime = $(this).attr("id")
            
        })
    }

















})