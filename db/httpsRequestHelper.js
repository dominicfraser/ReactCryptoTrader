const https = require('https')
const queryArchive = require('./archiveDbQueryHelper')


class HttpsRequestHelper {
  constructor(){  }

  standardHttpsRequest(url, callback){
    https.get(url, (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        // consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
console.log('https data', parsedData);

          callback(parsedData)

        } catch (e) {
          console.error(e.message);
        }
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
    });
  }

//// ARCHIVE FILL METHOD
  archiveDayRatesRequest(urlPair, urlsArray, dateBeingLookedAt){
    https.get(urlPair[0], (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
console.log('url inside timeout', urlPair)
      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        // consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
console.log('external api hist data', parsedData);
          queryArchive.addHistDailyData(parsedData, dateBeingLookedAt)

          var nextUrlIndex = urlsArray.indexOf(urlPair) == urlsArray.length ? 0 : urlsArray.indexOf(urlPair) + 1
// console.log('nextUrlIndex', nextUrlIndex)
          var urlToLookAt = urlsArray[nextUrlIndex]
          var dateToLookAt = urlsArray[nextUrlIndex][1]

          setTimeout(() => {

            this.archiveDayRatesRequest(urlToLookAt, urlsArray, dateToLookAt)

          }, 10000)


        } catch (e) {
          console.error(e.message);
        }
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
    });

  }

}

module.exports = HttpsRequestHelper