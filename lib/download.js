//adapted from https://stackoverflow.com/a/32134846/525824
const fs = require('fs');
const os = require('os');
const path = require('path');
const request = require('request');


/**
 * @param {string} url
 * @param {string} destFileName
 * @param {*} finish
 * @param {*} fail
 */
module.exports = (url, destFileName, finish, fail) => {
    const out = path.normalize(os.tmpdir()+'/'+destFileName);
    const file = fs.createWriteStream(out);

    const sendReq = request.get(url);

    // verify response code
    sendReq.on('response', (response) => {
        if (response.statusCode !== 200) {
            return fail('Response status was ' + response.statusCode);
        }

        sendReq.pipe(file);
    });

    // close() is async, call cb after close completes
    file.on('finish', () => file.close(finish(out)));

    // check for request errors
    sendReq.on('error', (err) => {
        try{
            fs.unlink(dest);
        }catch(e){}
        return fail(err.message);
    });

    file.on('error', (err) => { // Handle errors
        try {
            fs.unlink(dest); // Delete the file async. (But we don't check the result)
        }catch(e){}
        return fail(err.message);
    });

    return out;
};