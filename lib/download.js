//adapted from https://stackoverflow.com/a/32134846/525824
const fs = require('fs');
const os = require('os');
const path = require('path');
const axios = require('axios').default;

//This default is necessary for running in Electron
axios.defaults.adapter = require('axios/lib/adapters/http');

/**
 * Download and store a file
 * @param {string} url
 * @param {string} destFileName
 */
module.exports = async (url, destFileName) => {

    const out = path.normalize(os.tmpdir() + '/' + destFileName);
    const writer = fs.createWriteStream(out);

    return axios({
        method: 'get',
        url: url,
        responseType: 'stream',
    }).then(response => {

        //ensure that the user can call `then()` only when the file has
        //been downloaded entirely.

        return new Promise((resolve, reject) => {
            response.data.pipe(writer);
            let error = null;
            writer.on('error', err => {
                error = err;
                writer.close();
                reject(err);
            });
            writer.on('close', () => {
                if (!error) {
                    resolve(out);
                }
                //no need to call the reject here, as it will have been called in the
                //'error' stream;
            });
        });
    });
}