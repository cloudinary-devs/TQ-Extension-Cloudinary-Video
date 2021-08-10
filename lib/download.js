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
module.exports = (url, destFileName) => {


    const out = path.normalize(os.tmpdir() + '/' + destFileName);

    return axios.get(url, {responseType: 'stream'})
        .then(
            function success(response) {
                response.data.pipe(fs.createWriteStream(out));
                response.downloadedFilePath = out;
                return Promise.resolve(response);
            })
};