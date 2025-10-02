import {test,chromium, webkit} from "@playwright/test";

test("Launching the browser demo", async() =>
       {
      const browser1 = await chromium.launch({headless: false,channel: "msedge"});
      const context1 = await browser1.newContext();
      const page1 = await context1.newPage();       
      await page1.goto("https://www.google.com/");
      console.log(await page1.title());
      console.log(await page1.url());
    
     });


