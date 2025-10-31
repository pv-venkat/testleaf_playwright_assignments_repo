import { test } from "@playwright/test";
import * as XLSX from "xlsx";

function getExcelData(filePath: string, sheetName: string) {

  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(worksheet);
} 
const loginData :any= getExcelData("./Data/excelData.xlsx", "Sheet1");
for (const data of loginData) {
test(`Login test with username: ${data["username"]}`, async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill("#username", data["username"]);
    await page.fill("#password", data["password"]);
    console.log("Leaftaps user name is:" , data["username"]);
    console.log("Leaftaps password is:" ,data["password"]);
    await page.locator(".decorativeSubmit").click();
    await page.waitForTimeout(5000); 
  });
}