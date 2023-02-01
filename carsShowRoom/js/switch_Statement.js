function changeFunc() {
    let selectBox = document.getElementById("week")
    var n = selectBox.options[selectBox.selectedIndex].value
    let label_day=document.getElementById("day")
    switch(n){
        case '1': label_day.innerHTML="Monday";break;
        case '2': label_day.innerHTML="Tuesday";break;
        case '3': label_day.innerHTML="Wednesday";break;
        case '4': label_day.innerHTML="Thursday";break;
        case '5': label_day.innerHTML="Friday";break;
        case '6': label_day.innerHTML="Saturday";break;
        case '7': label_day.innerHTML="Sunday";break;
        default:  label_day.innerHTML="Error";break;
    }
   }