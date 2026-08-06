import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

Given('I navigate to the home page', async function () {
  const homePage = new HomePage(this.page);
  await homePage.navigate();
});

When('I search for {string}', async function (productName: string) {
  const homePage = new HomePage(this.page);
  await homePage.searchProduct(productName);
});

Then('I should see search results for {string}', async function (productName: string) {
  const homePage = new HomePage(this.page);
  
  // Assert header locator visibility and text
  const searchHeader = homePage.getSearchHeaderLocator();
  await expect(searchHeader).toBeVisible();
  await expect(searchHeader).toHaveText(new RegExp(`Search - ${productName}`, 'i'));
  
  // Assert search results count
  const resultsCount = await homePage.getProductResultsCount();
  expect(resultsCount).toBeGreaterThanOrEqual(1);
});
