//use Fly.IO + websockets to stream data to client



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

  await page.goto("https://www.twitch.tv/psybear_tv", {
    waitUntil: "networkidle2",
    timeout: 0,
  })

  await delay(8000)
  await page.waitForFunction( function () {
    const el = document.querySelector( 'div[data-a-target="chat-welcome-message"].chat-line__status' )
    return !!el
  }, { timeout: 25000 } )

  const sel = '.chat-line__message, .chat-line__status, div[data-a-target="chat-line-message"]'
  await page.waitForSelector(sel) 
  const text = await page.$$eval('*', els => els.map(e => e.textContent)) 
//  const text = await page.$$eval(sel, els => els.map(e => e.textContent)) 
  await browser.close()
  console.log(text)
  return page.content()
}

exports.handler = async (event) => {
  let text = getHTML()
  return {
    statusCode: 200,
    body: JSON.stringify({
      'asdfasdfasdf': Math.random(),
      text
    }),
    // // more keys you can return:
    // headers: { "headerName": "headerValue", ... },
    // isBase64Encoded: true,
  }
}

getHTML()

//1000 people writing to same document -> constitution which changes when lots of people vote
//versioned line by line like git -> but with a consensus algorithm

//get all the most mentioned stocks from wsb -> would be leading indicator for things like gamestop
//but a noisy nonindicator for things like palantir

//eventually -> twitch requests a robot to do shit for them -> botparty was cool as shit with very little effort 
//scale botparty + scale remoteyear + make travel planning 10x faster hours -> seconds 
//make the above collaborative+consensus 


//renderbuffer is 100% responsible for not just having fun.

// :twitch-comments fextralife find all comments relating to food 
// :order instacart daily based on twitch