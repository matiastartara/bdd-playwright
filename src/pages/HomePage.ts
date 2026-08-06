import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchHeader: Locator;
  readonly productResults: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[name="search"]').first();
    this.searchButton = page.locator('button[type="submit"], button:has-text("Search")').first();
    this.searchHeader = page.locator('h1.h4');
    this.productResults = page.locator('.product-layout');
  }

  async navigate(): Promise<void> {
    await this.page.goto('/');
  }

  async searchProduct(productName: string): Promise<void> {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  getSearchHeaderLocator(): Locator {
    return this.searchHeader;
  }

  async getProductResultsCount(): Promise<number> {
    return await this.productResults.count();
  }
}
