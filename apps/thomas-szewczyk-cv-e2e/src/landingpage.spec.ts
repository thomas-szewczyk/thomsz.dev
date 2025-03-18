import { test, expect } from '@playwright/test';
import { LandingPage } from './poms/landing-page.pom';

test.describe('Landing Page Layout Tests', () => {
  let landingPage: LandingPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await landingPage.goTo();
  });

  test.describe('Header Tests', () => {
    test('Header should be visible', async () => {
      const header = await landingPage.getHeader();
      await expect(header).toBeVisible();
    });
  });

  test.describe('Footer Tests', () => {
    test('Footer should be visible', async () => {
      const footer = await landingPage.getFooter();
      await expect(footer).toBeVisible();
    });
  });

  test.describe('About Section Tests', () => {
    test('About section should be visible', async () => {
      const aboutSection = await landingPage.getAboutSection();
      await expect(aboutSection).toBeVisible();
    });
  });

  test.describe('Skills Section Tests', () => {
    test('Skills section should be visible', async () => {
      const skillsSection = await landingPage.getSkillsSection();
      await expect(skillsSection).toBeVisible();
    });
  });

  test.describe('CV Section Tests', () => {
    test('CV section should be visible', async () => {
      const cvSection = await landingPage.getCvSection();
      await expect(cvSection).toBeVisible();
    });
  });

  test.describe('Contact Section Tests', () => {
    test('Contact section should be visible', async () => {
      const contactSection = await landingPage.getContactSection();
      await expect(contactSection).toBeVisible();
    });
  });
});
