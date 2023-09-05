const chromium = require("@sparticuz/chromium")
const puppeteer = require("puppeteer-core")

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}

exports.handler = async (event) => {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  })

  const page = await browser.newPage()
  await page.setViewport({
    width: 1920,
    height: 1080,
  })

  await page.goto("https://www.twitch.tv/zackrawrr", {
    waitUntil: "networkidle2",
    timeout: 0,
  })
  const sel = ".text-fragment"
  await page.waitForSelector(sel) 
  const text = await page.$$eval(sel, els => els.map(e => e.textContent))
  console.log(text)

  await delay(1000)

  await browser.close()

  return {
    statusCode: 200,
    body: JSON.stringify(text),
    // // more keys you can return:
    // headers: { "headerName": "headerValue", ... },
    // isBase64Encoded: true,
  }
}