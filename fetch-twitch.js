//use Fly.IO + websockets to stream data to client

const fs = require('fs')
const puppeteer = require( 'puppeteer' )
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}

const express = require('express')
const app = express()
const port = 3001

app.post('/rpc', async (req, res) => {
    let data = await getHTML(req.body.channelName)
    res.json(JSON.stringify(data))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




async function getHTML(channelName='zackrawrr'){
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

  await page.goto(`https://www.twitch.tv/${channelName}`, {
    waitUntil: "networkidle2",
    timeout: 0,
  })

  await delay(1000)
  await page.waitForFunction( function () {
    const el = document.querySelector( 'div[data-a-target="chat-welcome-message"].chat-line__status' )
    return !!el
  }, { poll: 250 } )

  const sel = '.chat-line__message, .chat-line__status, div[data-a-target="chat-line-message"]'
  await page.waitForSelector(sel) 
//  const text = await page.$$eval('*', els => els.map(e => e.textContent)) 
  const text = await page.$$eval(sel, els => els.map(e => e.textContent)) 
  await browser.close()
  console.log('texts', text)
  let json = JSON.parse(fs.readFileSync('twitch.json'))
  console.log(json.length)
  text.forEach(t => json.push(t))
  console.log(json.length)

  fs.writeFileSync('twitch.json', JSON.stringify(json))
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

// //use Fly.IO + websockets to stream data to client



// const puppeteer = require( 'puppeteer' )

// function delay(time) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, time)
//   })
// }
// console.log('hi')

// async function getHTML(){
//   console.log('hi')

//   const browser = await puppeteer.launch({
//     pipe:true
//   //   args: chromium.args,
//   //   defaultViewport: chromium.defaultViewport,
//   //   executablePath: await chromium.executablePath(),
//   //   headless: true,
//   //   ignoreHTTPSErrors: true,
//   //   args: ['--no-sandbox', '--enable-logging,', '--v=1', '--single-process'],
//   //   dumpio: true,
//   // })
//   })

//   const page = await browser.newPage()
//   await page.setViewport({
//     width: 1920,
//     height: 1080,
//   })

//   let url = 'http://www.paulgraham.com/getideas.html'
//   await page.goto(url, {
//     waitUntil: "networkidle2",
//     timeout: 0,
//   })

//   await delay(1000)
//   await page.waitForFunction( function () {
//     const el = document.querySelector( 'div[data-a-target="chat-welcome-message"].chat-line__status' )
//     return !!el
//   }, { poll: 250 } )

//   const sel = '.chat-line__message, .chat-line__status, div[data-a-target="chat-line-message"]'
//   await page.waitForSelector(sel) 
//   //const text = await page.$$eval('*', els => els.map(e => e.textContent)) 
//   const text = await page.$$eval(sel, els => els.map(e => e.textContent)) 
//   await browser.close()
//   console.log(text)
//   return text
// }

// exports.handler = async (event) => {
//   let text = getHTML()
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       'asdfasdfasdf': Math.random(),
//       text
//     }),
//     // // more keys you can return:
//     // headers: { "headerName": "headerValue", ... },
//     // isBase64Encoded: true,
//   }
// }

// getHTML()

// //1000 people writing to same document -> constitution which changes when lots of people vote
// //versioned line by line like git -> but with a consensus algorithm

// //get all the most mentioned stocks from wsb -> would be leading indicator for things like gamestop
// //but a noisy nonindicator for things like palantir

// //eventually -> twitch requests a robot to do shit for them -> botparty was cool as shit with very little effort 
// //scale botparty + scale remoteyear + make travel planning 10x faster hours -> seconds 
// //make the above collaborative+consensus 


// //renderbuffer is 100% responsible for not just having fun.

// // :twitch-comments fextralife find all comments relating to food 
// // :order instacart daily based on twitch