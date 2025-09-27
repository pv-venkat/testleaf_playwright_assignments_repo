let browser = 'Chrome';
function checkBrowserVersion(browserVersion)
{
    console.log("Checking the browser Name and Version...");

    setTimeout(() => {
        console.log(`Browser Version ${browserVersion}`);
       browserName()
     }, 2000);
}

function browserName()
{
    console.log("Browser Name is :"+ browser);
    
}
checkBrowserVersion("14.0.7");
