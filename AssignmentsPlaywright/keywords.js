//Scenario1 : Using Const with var keyword
const browsername = 'chrome';
function getbrowsername(browsername) {
    if (browsername === "chrome") {
        var browsername = 'chrome inside the if statement';
    }
    console.log("Inside the function block"+browsername);      
}
console.log("Outside if block"+ browsername); 
getbrowsername(browsername);

//Scenario2 : Using Const with let keyword
const browName = 'firefox';
function getbrowsernames(browName) {
    if (browName === "firefox") {
        let browName = 'firefox inside the if statement';
    }
    console.log("Inside the function block"+ browName);      
}
console.log("Outside if block"+ browName);
getbrowsernames(browName);

