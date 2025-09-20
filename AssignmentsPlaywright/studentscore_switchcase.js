function student() {
let score = ">60";
    switch (score) {
        case ">75":
            console.log("Student has passed with A grade");
            break;
        case ">60":
            console.log("Student has passed with B grade");
            break;
        case ">50":
            console.log("Student has passed with C grade");
            break;
        case ">40":
            console.log("Student has passed with D grade");
            break;
         case "<30":
            console.log("Student has failed with E grade");
            break;
        default:
              console.log( "Invalid marks.");
            break;
    }
}
student();


