function callPrompt(){
    let day = window.prompt('Enter a number');
    document.getElementById("day_f").innerHTML=determineDayOfTheWeek(day);

}
function determineDayOfTheWeek(dayNumber){
    switch(dayNumber){
        case '1': return "Monday";break;
        case '2': return "Tuesday";break;
        case '3': return "Wednesday";break;
        case '4': return "Thursday";break;
        case '5': return "Friday";break;
        case '6': return "Saturday";break;
        case '7': return "Sunday";break;
        default:  return "Error";break;
    }
}