//1. Named Function example

function userprofile(name)
{
    console.log(`Hello, ${name} ! `);
    
}
userprofile("Venkat");

//2. Arrow Functions example

let double = (a) => {
return a*2;
}
console.log("Doubling the number : "+ double(12));

//3. Anonymous function example

setTimeout(function () {
        console.log(`This message is delayed by 2 seconds`);

},2000);

//4. Call back function example

function getuserdata()
{
setTimeout(() => {
   timer()}, 3000);
}
function timer()
{
    console.log("Call back function after 3 seconds...");  
}
getuserdata();



 

