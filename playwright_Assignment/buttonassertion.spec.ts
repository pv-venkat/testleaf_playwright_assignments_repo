import { test,expect } from "@playwright/test";

test("Button assertion", async({page}) => { 

   await page.goto(`https://leafground.com/button.xhtml`);
   const Beforetitle = await page.title();
   console.log("Before the change of title is:"+ " "+Beforetitle);  
   await page.waitForTimeout(2000);
   const button1locator = await page.locator(`//form/div['.grid button-demo']/div[1]/div[1]/button[1]`);
   button1locator.click();
   await page.waitForTimeout(2000);
   const Aftertitle = await page.title();
   console.log("After the change of title is:"+ " "+Aftertitle);

   await page.goto(`https://leafground.com/button.xhtml`);
   const button2locator = await page.locator(`//form//div['.grid formgrid']/div['.col-6']/div[3]//div/button`);
   button2locator.click();
   await page.locator(`//div/div['.ui-overlaypanel-content']/img`).click();
   await page.waitForTimeout(2000);

   const roundedbuttons = page.locator('//*[@id="j_idt88"]/div/div[2]/div[4]/button');
   const buttoncounts = await roundedbuttons.count();
   console.log("Count of rounded buttons is : ",`${buttoncounts}`);   
})