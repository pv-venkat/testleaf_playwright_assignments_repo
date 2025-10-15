import { test } from "@playwright/test";

test("Frames using frame locator", async({page}) => { 

   await page.goto(`https://leafground.com/frame.xhtml`);
   const frameloc = page.frameLocator(`//iframe[@src="page.xhtml"]`).frameLocator('iframe');
   await frameloc.locator('#Click').click();
   await page.waitForTimeout(5000);

})

test.only("Frames using frame URL", async({page}) => { 

   await page.goto(`https://leafground.com/frame.xhtml`);
   const frameURL = page.frame({url:"https://leafground.com/framebutton.xhtml"});
   await frameURL?.locator('#Click').click();
   await page.waitForTimeout(5000);

})
