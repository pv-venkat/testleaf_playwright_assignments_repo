import { test,expect } from "@playwright/test";

test("Assertions Excercise", async({page}) => { 

    //"Type your name" assertion checking
   await page.goto(`https://leafground.com/input.xhtml`);
   const typeyournamelocator = page.locator(`//div[@class="grid formgrid"]/div[@class='col-12']/input[contains(@placeholder,"Babu Manickam")]`);
   await expect(typeyournamelocator).toBeEnabled();
   await expect(typeyournamelocator).toBeEditable();
   await page.waitForTimeout(3000);   

    //"Append Country to this City" assertion checking
   const enanblecheck = page.locator(`//input[@value="Chennai"]`);
   await expect(enanblecheck).toBeEditable();
   await page.waitForTimeout(3000);
   await page.locator(`//input[@value="Chennai"]`).fill("India");
   await page.waitForTimeout(3000);

   //"Verify if text box is disabled" assertion checking
    const disablecheck = page.locator(`//input[@placeholder="Disabled"]`);
    await expect(disablecheck).toBeDisabled();
    console.log("Verify if text box is disabled");

})

 



 