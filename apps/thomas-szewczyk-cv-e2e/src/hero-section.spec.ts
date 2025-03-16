import { test, expect, Locator } from '@playwright/test';
import { LandingPage } from './poms/landing-page.pom';

test.describe('Hero Section', () => {
  let landingPage: LandingPage;
  let talkButton: Locator;
  let cvButton: Locator;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await landingPage.goTo();

    talkButton = page.getByText(`Let’s Talk`);
    cvButton = page.getByText('Mein CV');
  });

  test.describe('Buttons Tests', () => {
    test('Displays and enables both buttons', async () => {
      await expect(talkButton).toBeVisible();
      await expect(talkButton).toBeEnabled();

      await expect(cvButton).toBeVisible();
      await expect(cvButton).toBeEnabled();
    });
  });
});
