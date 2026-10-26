// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "feb"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        // break; //if this break is not there then all case statements are executed till a break is reached default case included
    case "march":
        console.log("march");
        break; 
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
} 