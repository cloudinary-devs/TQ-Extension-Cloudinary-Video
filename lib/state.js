const path = require('path');
const Low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

/**
 * Handles game state, just question answers... for now
 */
module.exports = new class State {

    data;

    constructor() {
        let storageFile = path.resolve(__dirname, '..', 'var', 'state.json')
        let adaptor = new FileSync(storageFile)
        this.data = new Low(adaptor);
        console.log({low_data:this.data});
    }

    saveAnswers(helper) {
        this.data.set(`objectives.${helper.context.hackObject.objectiveName}.answers`, helper.validationFields).write();
    }

    getAnswers(objectiveName) {
        return this.data.get(`objectives.${objectiveName}.answers`);
    }

}

