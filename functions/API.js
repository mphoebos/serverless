const fetch = require('node-fetch')

const API_ENDPOINT = 'https://api.bitsighttech.com/ratings/v1/companies/(COMPANY_GUID)/findings'

headers.append('Authorization', 'Basic' + base64.encode(AUTHORIZATION);

exports.handler = async (event, context) => {
  let response
  try {
    response = await fetch(API_ENDPOINT)
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response
    })
  }
}
