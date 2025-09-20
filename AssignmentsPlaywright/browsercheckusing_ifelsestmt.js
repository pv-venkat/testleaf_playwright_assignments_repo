function launchbrowser(browsername)
{
    if (browsername === "chrome") {
        return "This is Chrome browser";        
    }
    else if (browsername === "firefox")
    {
        return "This is Firefox browser"
    }
    else
    {
        return "This is Default browser"
    }
}
console.log(launchbrowser("chrome"));
