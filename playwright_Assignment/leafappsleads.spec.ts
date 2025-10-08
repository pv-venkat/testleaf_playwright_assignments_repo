import { test } from "@playwright/test";

test("Salesforce application Demo", async({page}) => { 

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
   await page.locator(`#createLeadForm_firstName`).fill("Siva");
   await page.locator(`#createLeadForm_lastName`).fill("Doss");
   await page.locator(`#createLeadForm_personalTitle`).fill("MR");
   await page.locator(`#createLeadForm_generalProfTitle`).fill("Playwright Tester");
   await page.locator(`#createLeadForm_annualRevenue`).fill("300000");
   await page.locator(`#createLeadForm_departmentName`).fill("Accounts");
   await page.locator(`#createLeadForm_primaryPhoneNumber`).fill("9789837492");
   await page.locator(`.smallSubmit`).click();
   console.log(await page.title());
   await page.waitForTimeout(3000); 

   
   //Find Lead
   await page.waitForLoadState("domcontentloaded");
   await page.locator(`//a[text()="Find Leads"]`).click();
   await page.locator(`//input[@id='ext-gen248']`).fill("Siva");
   await page.locator(`//button[text()="Find Leads"]`).click();
   await page.waitForTimeout(3000); 


   //Edit Lead
   await page.waitForLoadState("domcontentloaded");
   await page.locator(`(//a[@class="linktext"])[4]`).click();
   await page.locator(`//a[text()="Edit"]`).click();
   await page.locator(`//input[@id='updateLeadForm_firstName']`).fill("SivaKarthikeyan");
   await page.locator(`//input[@id='updateLeadForm_annualRevenue']`).fill("250000");
   await page.locator(`//input[@id='updateLeadForm_departmentName']`).fill("Admin");
   await page.locator(`#updateLeadForm_description`).fill("Tamil Movie Actor");
   await page.locator("//input[@class='smallSubmit']").nth(0).click();
   await page.waitForTimeout(5000); 

   })
