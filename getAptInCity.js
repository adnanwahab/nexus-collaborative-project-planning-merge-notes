const puppeteer = require('puppeteer');
const fs = require('fs').promises;

async function getApt(url, location) {
    const browser = await puppeteer.launch({ headless: true });  // Change to false if you want to view the browser
    const page = await browser.newPage();
  
    await page.goto(url);
    const qs = '.cy5jw6o.dir.dir-ltr a';
  
    let tweets = [];

    try {
        await page.waitForSelector(qs);
  
        tweets = await page.$$eval(qs, (tweetNodes) => {
            return tweetNodes.map(tweet => ({
                link: tweet.href
            }));
        });
  
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
  
    await browser.close();

    console.log(`writing ${location}_apt.json`)
    await fs.writeFile(`${location}_apt.json`, JSON.stringify(tweets, null, 2));
  
    return tweets;
}

// Example usage
let location = process.argv[2]
location = location.replace(', ','--')
const url = `https://www.airbnb.com/s/${location}/homes`

getApt(url, location)
    // .then(tweets => console.log(tweets))
    // .catch(err => console.error('An error occurred:', err));
