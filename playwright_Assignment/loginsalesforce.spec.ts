import { test } from "@playwright/test";

test("Test to launch a browser", async({page}) => { 
    
   await page.goto(`https://login.salesforce.com`);
   await page.locator(`#username`).fill(`venkat.subbu582@agentforce.com`);
   await page.locator(`#password`).fill(`TestLeaf@123`);
   await page.locator(`#Login`).click();
      await page.waitForTimeout(10000);


   console.log(await page.url());
   console.log(await page.title());
   await page.close();



   })