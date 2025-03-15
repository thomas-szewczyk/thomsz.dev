import { Page } from '@playwright/test';

export class LandingPage {
  constructor(private page: Page) {}

  async goTo() {
    await this.page.goto('/');
  }

  async getHeader() {
    return this.page.locator('header');
  }

  async getFooter() {
    return this.page.locator('footer');
  }

  async getAboutSection() {
    return this.page.locator('.about-me');
  }

  async getSkillsSection() {
    return this.page.locator('.skills');
  }

  async getCvSection() {
    return this.page.locator('.cv');
  }

  async getContactSection() {
    return this.page.locator('.contact');
  }
}
