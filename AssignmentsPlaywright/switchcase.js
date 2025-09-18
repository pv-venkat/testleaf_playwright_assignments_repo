let grade = 'B';
function student()
{
    switch (grade) {
        case 'A':
            console.log("Student passed with First Class");     
            break;
        case 'B':
            console.log("Student passed with Second Class");     
            break;
        case 'C':
            console.log("Student passed with Third Class");     
            break;
         case 'D':
            console.log("Student Failed");     
            break;
              
          default:
            console.log("Invalid grade");     
            break;
    }
}

    student();
