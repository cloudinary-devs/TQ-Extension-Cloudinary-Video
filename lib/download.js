const fs = require('fs');
const os = require('os');
const path = require('path');
const axios = require('axios').default;

//This default is necessary for running in Electron
axios.defaults.adapter = require('axios/lib/adapters/http');

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

/**
 * Download and store a file
 * @param {string} url
 * @param {string} destFileName
 */
module.exports = async (url, destFileName) => {

    const out = path.normalize(os.tmpdir() + '/' + destFileName);
    const writer = fs.createWriteStream(out);

    const response =  await axios({
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
            reject(err);
        });
        writer.on('close', () => {
            if (!error) {
                resolve(out);//pass back the saved filename
            }
            //no need to call the reject here, as it will have been called in the
            //'error' stream;
        });
    });

}