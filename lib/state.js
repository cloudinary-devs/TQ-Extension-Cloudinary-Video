const fs = require('fs')
const path = require('path');
const Low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

/**
 * Handles our specialized game state, just question answers and downloaded file paths for now
 */
module.exports = new class State {

    data;

    constructor() {
        let storageFile = path.resolve(__dirname, '..', 'var', 'state.json')
        let adaptor = new FileSync(storageFile)
        this.data = new Low(adaptor);
        console.log({low_data: this.data});
    }

    saveAnswers(helper) {
        this.data.set(`objectives.${helper.context.hackObject.objectiveName}.answers`, helper.validationFields).write();
    }

    getAnswers(objectiveName) {
        return this.data.get(`objectives.${objectiveName}.answers`);
    }

    saveDownloadedFilePaths(helper, downloadedFiles) {
        this.data.set(`objectives.${helper.context.hackObject.objectiveName}.files`, downloadedFiles).write();
    }

    /**
     * Returns a list of downloaded files for the objective. If a file is missing, it's path will be returned as FALSE.
     * There are no keys or indexes, so we need to keep the same count in order to match them up with answers.
     * @param objectiveName
     * @returns {string} A list of downloaded files, missing files will return as FALSE
     */
    getDownloadedFilePaths(objectiveName) {
        this.data.get(`objectives.${objectiveName}.files`).map(path => fs.existsSync(path)?path:false);
        return this.data.get(`objectives.${objectiveName}.files`);
    }

}

