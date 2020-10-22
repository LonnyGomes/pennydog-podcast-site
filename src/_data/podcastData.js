const fs = require('fs');
const https = require('https');
var parser = require('xml2json');

const feedURLStr = 'https://feed.podbean.com/pennydog/feed.xml';
const outputFile = 'src/podcast-feed.json';

const getFeed = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';

            res.on('data', (d) => {
                data += d;
            });
            res.on('end', () => {
                resolve(data);
            });
            res.on('error', (err) => {
                reject(err);
            });
        });
    });
};

const saveFile = (outputPath, jsonStr) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(outputPath, jsonStr, (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve();
        });
    });
};

module.exports = async () => {
    let json = null;
    try {
        const feed = await getFeed(feedURLStr);

        const jsonStr = parser.toJson(feed);
        const jsonObj = JSON.parse(jsonStr);
        //console.log('to json -> %s', json);

        //await saveFile(outputFile, JSON.stringify(jsonObj.rss));

        json = jsonObj.rss;
    } catch (error) {
        console.error('Error', error);
    }

    return json;
};
