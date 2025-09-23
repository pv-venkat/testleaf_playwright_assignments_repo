//Scenario1 : Using Const with var keyword
const browsername = 'Chrome';
function getbrowsername(browsername) {
    if (browsername === "chrome") {
        var browsername = 'Chrome';
    }
    console.log("Inside the function block"+browsername);      
}
console.log("Outside if block"+ browsername); 
getbrowsername(browsername);

//Scenario2 : Using Const with let keyword
const browserName = 'Firefox';
function getbrowsernames(browserName) {
    if (browserName === "Firefox") {
        let browserName = 'firefox';
    }
    console.log("Inside the function block"+ browserName);      
}
console.log("Outside if block"+ browserName);
getbrowsernames(browserName);

