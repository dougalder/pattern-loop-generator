// Takes the screenshots used in docs/MANUAL.md and the README.
// Run from the tools folder:  npm install && node take-screenshots.js
// Uses a headless (no window) copy of Chromium. Nothing here touches your own computer.
const path = require("path");
const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");

const APP = "file://" + path.resolve(__dirname, "..", "pattern-loop-generator.html");
const OUT = path.resolve(__dirname, "..", "docs", "screenshots");
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function openApp(browser, { width, height, theme, mobile }){
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1, isMobile: !!mobile, hasTouch: !!mobile });
  await page.evaluateOnNewDocument(t => { try { localStorage.setItem("ll-theme", t); } catch (e){} }, theme);
  await page.goto(APP, { waitUntil: "load" });
  await sleep(2500);                       // let the first frames and thumbnails draw
  return page;
}

async function tab(page, name){
  await page.click(`#tabs button[data-pane="${name}"]`);
  await sleep(400);
}

(async () => {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true,
    defaultViewport: null
  });
  const shot = async (page, file) => {
    await page.screenshot({ path: path.join(OUT, file) });
    console.log("saved", file);
  };

  // Desktop, light appearance
  let page = await openApp(browser, { width: 1440, height: 900, theme: "light" });
  await shot(page, "01-main-light.png");
  await tab(page, "templates");
  await shot(page, "02-templates-tab.png");
  await tab(page, "lattice");
  await shot(page, "03-lattice-tab.png");
  await tab(page, "motion");
  await shot(page, "04-motion-tab.png");
  await tab(page, "colour");
  await shot(page, "05-colour-tab.png");
  await tab(page, "output");
  await shot(page, "06-export-tab.png");
  await tab(page, "sprites");
  await shot(page, "07-sprites-tab.png");
  await tab(page, "camera");
  await shot(page, "08-camera-tab.png");
  await tab(page, "about");
  await shot(page, "09-about-tab.png");
  await page.close();

  // Desktop, dark appearance, with a spiral template loaded
  page = await openApp(browser, { width: 1440, height: 900, theme: "dark" });
  await page.click('#tabs button[data-pane="templates"]');
  await sleep(300);
  await page.click('.tpl[data-tpl="4"]');   // "Vortex", a spiral arrangement
  await sleep(1500);
  await shot(page, "10-main-dark-spiral.png");
  await page.close();

  // Narrow, phone-sized, light
  page = await openApp(browser, { width: 390, height: 844, theme: "light", mobile: true });
  await shot(page, "11-phone-light.png");
  await page.close();

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
