import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium, Page } from '@playwright/test';

// Set default step timeout to 30 seconds
setDefaultTimeout(30 * 1000);

let browser: Browser;
let page: Page;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
});

Before(async function () {
  const context = await browser.newContext({
    baseURL: 'https://ecommerce-playground.lambdatest.io/'
  });
  page = await context.newPage();
  this.page = page;
  this.context = context;
});

After(async function () {
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser.close();
});
