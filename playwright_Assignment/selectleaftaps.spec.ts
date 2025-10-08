import { test } from "@playwright/test";

test("Verifying dropdown elements using Select locator", async({page}) => { 

   await page.goto(`http://leaftaps.com/opentaps/control/main`);
   await page.locator(`#username`).fill(`Demosalesmanager`);
   await page.locator(`#password`).fill(`crmsfa`);
   await page.locator(`.decorativeSubmit`).click();  
   
   await page.locator(`//html[1]//body[1]//div[2]//div[2]//div[1]//div[1]//div[1]//a[1]`).click();
   await page.waitForLoadState("domcontentloaded");
   
   //Create Lead     
   await page.locator(`//html[1]//body[1]//ul[1]//li[2]//div[1]//div[1]//div[1]//div[1]//div[1]//a[1]`).click();
   await page.locator(`//a[text()="Create Lead"]`).click();
   await page.locator(`#createLeadForm_companyName`).fill("Testleaf");
   await page.locator(`#createLeadForm_firstName`).fill("Ravi");
   await page.locator(`#createLeadForm_lastName`).fill("Bishnoi");
   await page.locator(`#createLeadForm_personalTitle`).fill("MR");
   await page.locator(`#createLeadForm_generalProfTitle`).fill("Indian Crickter");
   
   await page.selectOption(`//select[@id="createLeadForm_currencyUomId"]`,{label:"INR - Indian Rupee"});
   await page.waitForTimeout(3000);

   await page.locator(`#createLeadForm_annualRevenue`).fill("40000");
   await page.locator(`#createLeadForm_departmentName`).fill("Accounts");
   await page.locator(`#createLeadForm_primaryPhoneNumber`).fill("9789837492");

   await page.selectOption(`//select[@id="createLeadForm_generalCountryGeoId"]`,{value:"IND"});
   await page.waitForTimeout(3000);

   await page.locator(`.smallSubmit`).click();
   await page.waitForTimeout(3000); 
   console.log(await page.title());
   await page.waitForTimeout(3000); 


})
