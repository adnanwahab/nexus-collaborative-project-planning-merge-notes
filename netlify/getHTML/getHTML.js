
const chromium = require("@sparticuz/chromium")
const { get } = require("express/lib/response")
const puppeteer = require("puppeteer-core")

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}
console.log('hi')

async function getHTML(){
  console.log('hi')

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: true,
    ignoreHTTPSErrors: true,
    args: ['--no-sandbox', '--enable-logging,', '--v=1', '--single-process'],
    dumpio: true,
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
  return text
}

exports.handler = async (event) => {
 
  const text = getHTML()
  return {
    statusCode: 200,
    body: JSON.stringify({text,
      'asdfasdfasdf':'asdfasfdasdfasfa'
    }),
    // // more keys you can return:
    // headers: { "headerName": "headerValue", ... },
    // isBase64Encoded: true,
  }
}

getHTML()