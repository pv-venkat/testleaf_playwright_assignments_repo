function testtype()
{
    switch (testing) {
        case 'Sanity':
            console.log("This is Sanity testing");     
            break;
        case 'Smoke':
            console.log("This is Smoke testing");     
            break;
        case 'Regression':
            console.log("This is Regression testing");     
            break;
        default:
            console.log("Invalid testing type. By default Smoke testing will be executed");     
            break;
    }
}
    let testing = 'Sanity'
    testtype();