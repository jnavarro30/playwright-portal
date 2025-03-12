import StageData from '../00-data/stage-data.js';

class LogIn {
    async logIn(page) {
        await page.goto('https://portal-stage.independa.com/');
        await page.getByPlaceholder('Phone number').fill(StageData.CareManagerMobile);
        await page.getByRole('button', { name: 'Login via Text' }).click();
        await page.getByRole('spinbutton').first().fill('2');
        await page.getByRole('spinbutton').nth(1).fill('2');
        await page.getByRole('spinbutton').nth(2).fill('2');
        await page.getByRole('spinbutton').nth(3).fill('2');
        await page.getByRole('spinbutton').nth(4).fill('2');
    }
    async incorrectLogIn(page) {
        await page.goto('https://portal-stage.independa.com/');
        await page.getByPlaceholder('Phone number').fill(StageData.CareManagerMobile);
        await page.getByRole('button', { name: 'Login via Text' }).click();
        await page.getByRole('spinbutton').first().fill('2');
        await page.getByRole('spinbutton').nth(1).fill('2');
        await page.getByRole('spinbutton').nth(2).fill('2');
        await page.getByRole('spinbutton').nth(3).fill('2');
        await page.getByRole('spinbutton').nth(4).fill('1');
    }
    // async openLeftPanel(page) {
    //     await page.locator('.px-3').click();
    // }
    // async closeLeftPanel(page) {
    //    await page.locator('.h-6').click();
    // }
    // async homeBtn (page) {
    //     await page.locator('.h-6').click();;
    // }
}

export default new LogIn();