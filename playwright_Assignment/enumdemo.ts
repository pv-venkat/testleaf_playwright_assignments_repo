enum Environment {
    Envone = "Local",
    Envtwo= "Development" ,
    Envthree = "Staging",
    Envfour ="Production",
    PreProd = 5
}
function runTests(environmentStatus : Environment):void
{
    console.log(`${environmentStatus}`);
}
runTests(Environment.Envone);
runTests(Environment.PreProd);
runTests(Environment.Envfour);
