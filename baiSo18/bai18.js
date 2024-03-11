console.log('Hello world from HTML')

let day='';
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wed";
        break;
    case 4:
        day = "Thur";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        break;
}
console.log('check day: ', day, new Date().getDate());