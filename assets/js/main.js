$(function() {

    var wedding_date = new Date(2019,10,23);
    
    $("#daysLeft").text((function() {
        var today = new Date();
        return (Math.round((wedding_date-today)/(1000*60*60*24))) + " days left till the big day!";
    }))

})