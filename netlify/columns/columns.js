const {google} = require('googleapis');
const {auth} = require('google-auth-library');

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SPREADSHEET_ID = '1J5Aj4v8Vte0W6nnYvoWgyG448MD5N07n_WFyocQtKsM'; // Your spreadsheet ID here
 // Update this range based on where you want to read/update

// Load client secrets from a file and setup the sheets API
async function authorize() {
  const client = await auth.fromJSON(require('./yt-search-394921-614db8eca796.json'));
  client.scopes = SCOPES;
  return client;
}

// Update a cell
async function updateCell(auth, RANGE, values) {
  const sheets = google.sheets({version: 'v4', auth});
  return await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: RANGE,
    valueInputOption: 'RAW',
    resource: {
      values  // Replace "New Value" with the value you want to set
    }
  });
}

// Read a cell
async function readCell(auth, RANGE) {
  console.log('readCel', RANGE)
  const sheets = google.sheets({version: 'v4', auth});
  const result = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: RANGE,
  });
  return result
}
// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  let message 
  let auth = await authorize()
  if (event.body && event.httpMethod === 'POST'
  ) message =JSON.parse(event.body)
  console.log(message)
  let topics = await readCell(auth, 'Sheet1!Q:Q') //read the topics
  if (event.httpMethod === 'POST') {
    let documents = await updateCell(auth, 'Sheet1!Q:Q', message) // write the document
  }

  return {statusCode: 200, body: JSON.stringify({ message: topics })}
  return { statusCode: 500, body: error.toString() }

  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
