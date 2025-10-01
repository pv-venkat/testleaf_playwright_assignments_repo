import {test,chromium, webkit} from "@playwright/test";

test("Launching the browser demo", async() => {
      const browser1 = await chromium.launch({headless: false,channel: "msedge"});
      const context1 = await browser1.newContext();
      const page1 = await context1.newPage();       
      await page1.goto("https://www.redbus.in/");
      console.log(await page1.title());
      console.log(await page1.url());
    
      const browser2 = await webkit.launch({headless: false});
      const context2 = await browser2.newContext();
      const page2 = await context2.newPage();     
      await page2.goto("https://www.flipkart.com/",{waitUntil: 'load'});    
      await page2.waitForTimeout(2000);   
      console.log(await page2.title());
      console.log(await page2.url());    
      
      await page1.close();  
      await page2.close();  
});


