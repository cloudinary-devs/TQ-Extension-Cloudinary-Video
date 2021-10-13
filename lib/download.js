const fs = require('fs');
const path = require('path');
const axios = require('axios').default;

//This default is necessary for running in Electron
axios.defaults.adapter = require('axios/lib/adapters/http');

/**
 * Download and store a file
 * @param {string} answer "answer1", "answer2", etc.. used for keying the async files response
 * @param {string} url     The url that is the answer
 * @param {string} destFileName  What name to use for the downloaded file
 */
exports.download = async (answer, url, destFileName) => {

    //console.table({download: arguments});

    const folder = path.resolve(__dirname, '..', 'var', 'files');
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
    const out = path.resolve(folder, destFileName);
    const writer = fs.createWriteStream(out);

    const response = await axios({
        method: 'get',
        url: url,
        responseType: 'stream',
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {

        let error = null;
        writer.on('error', err => {
            error = err;
            writer.close();
            const answerFormatted = answer.charAt(0).toUpperCase() + answer.substring(1).replace('swer','swer ');
            reject(`Trying to write ${answerFormatted} download to disk resulted in: ${err}`);
            console.error('%c'+`Trying to write ${answerFormatted} download to disk resulted in: ${err}`,'background-color:red');
        });
        writer.on('close', () => {
            if (!error) {
                resolve( //pass back the saved filename and answer it belongs to
                    {
                        answer: answer,
                        filePath: out
                    }
                );
            }
        });
    });
}
