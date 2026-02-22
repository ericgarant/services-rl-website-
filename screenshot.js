const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('file://' + path.resolve('index.html'));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  console.log('Screenshot saved.');
  await browser.close();
})();
