
Write

Adnan Wahab
Using Puppeteer with AWS Lambda and Serverless
Kyle Higginson
Kyle Higginson

·
Follow

2 min read
·
Jul 1
5


1






Puppeteer
This article will talk you through how to use AWS Lambda to run automated UI scripts with Puppeteer and deployed using the Serverless framework.

Or just want to view it on Github? Click here!

Install the two dependencies required for this: @sparticuz/chromium and puppeteer-core. Your package.json will end up like this:
{
  "name": "aws-lambda-puppeteer-serverless",
  "author": {
    "name": "Kyle Higginson",
    "email": "kylehigginson20@gmail.com"
  },
  "scripts": {},
  "dependencies": {
    "@sparticuz/chromium": "^114.0.0",
    "puppeteer-core": "^20.7.4"
  }
}
2. Add your serverless.yml file, like so:

service: aws-lambda-puppeteer-serverless

provider:
  name: aws
  region: us-east-1
  runtime: nodejs18.x

functions:
  puppeteerExample:
    handler: run_puppeteer.handler
    timeout: 20
    events:
      - schedule: rate(10 minutes)
With this configuration, once deployed the lambda will run every 10 minutes.

3. Create a file named run_puppeteer.js at the root of your project, this will contain our handler for the lambda:

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