import { test } from "@playwright/test";
import inputdata from "../../Data/leaftapdata.json";
    
for(let entry of inputdata){

test(`Login test using JSON data `, async ({ page }) => {
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
  
    await page.locator("#username").fill(entry.Username); 
    await page.locator("#password").fill(entry.Password); 
    await page.locator(".decorativeSubmit").click();
    await page.locator(`//div[@class='crmsfa']//div[@id='label']/a[1]`).click();
    await page.locator(`//div[@class="frameSectionHeader"]//a[text()="Leads"]`).click();
    await page.locator(`//ul[@class="shortcuts"]//li[2]/a[1]`).click();

    await page.locator(`#createLeadForm_firstName`).fill(entry.Firstname);
    await page.locator(`#createLeadForm_lastName`).fill(entry.Lastname);
    await page.locator(`#createLeadForm_companyName`).fill(entry.Companyname);

    const sourcedropdown = page.locator('#createLeadForm_dataSourceId');
    await sourcedropdown.selectOption({label:entry.Source});
    
    const mcdropdown = page.locator('#createLeadForm_marketingCampaignId');
    await mcdropdown.selectOption({value:entry.MarketingCampaign});

    const mcdropdowncount = await mcdropdown.count();
    for (let index=0;index < mcdropdowncount;index++)
    {
        console.log("List of values in Marketing Campaign dropdown are :"+await mcdropdown.nth(index).innerText());
    }

    const industrydropdown = page.locator('#createLeadForm_industryEnumId');
    await industrydropdown.selectOption({index:entry.Industry});
    
    const currencydropdown = page.locator('#createLeadForm_currencyUomId');
    await currencydropdown.selectOption({value:entry.Preferredcurrency}); 
    
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    
    const countrydropdown = page.locator('#createLeadForm_generalCountryGeoId');
    await countrydropdown.selectOption({label:entry.Country});        
    
    const statedropdown = page.locator('#createLeadForm_generalStateProvinceGeoId');
    await statedropdown.selectOption({label:entry.State});  
    
    const statedropdowncount = await statedropdown.count();   
    const optionCount = await statedropdown.locator('option').count();
 
    for (let index=0;index < statedropdowncount;index++)
    {
        console.log("List of values in State dropdown are :"+"\n"+await statedropdown.nth(index).innerText());
        console.log(statedropdowncount);
        console.log('Count of all States are :', optionCount);

    }
    await page.locator(`.smallSubmit`).click();
    console.log("New Leads created successfully...");
    
    await page.waitForTimeout(5000);       

    })
}

