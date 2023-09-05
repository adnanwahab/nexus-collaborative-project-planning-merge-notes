
const puppeteer = require( 'puppeteer' )

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}
console.log('hi')

async function getHTML(){
  console.log('hi')

  const browser = await puppeteer.launch({
    pipe:true
  //   args: chromium.args,
  //   defaultViewport: chromium.defaultViewport,
  //   executablePath: await chromium.executablePath(),
  //   headless: true,
  //   ignoreHTTPSErrors: true,
  //   args: ['--no-sandbox', '--enable-logging,', '--v=1', '--single-process'],
  //   dumpio: true,
  // })
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

  await delay(10000)
  await page.waitForFunction( function () {
    const el = document.querySelector( 'div[data-a-target="chat-welcome-message"].chat-line__status' )
    return !!el
  }, { polling: 250 } )

  const sel = '.chat-line__message, .chat-line__status, div[data-a-target="chat-line-message"]'
  await page.waitForSelector(sel) 
  const text = await page.$$eval(sel, els => els.map(e => e.textContent)) 
  await browser.close()
  console.log(text)
  return text
}

exports.handler = async (event) => {
 
  const text = getHTML()
  return {
    statusCode: 200,
    body: JSON.stringify({text,
      'asdfasdfasdf': Math.random()
    }),
    // // more keys you can return:
    // headers: { "headerName": "headerValue", ... },
    // isBase64Encoded: true,
  }
}

getHTML()