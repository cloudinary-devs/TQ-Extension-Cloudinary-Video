const path = require('path');
const Low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

module.exports = new class State {

    constructor() {
        //let storageFile = path.resolve(__dirname, '../../../../lib/', '..', 'var', 'state.json')
        let storageFile = path.resolve(__dirname, '..', 'var', 'state.json')
        let adaptor = new FileSync(storageFile)
        this.data = new Low(adaptor);
    }

    saveAnswers(helper) {
        this.data.set(`objectives.${helper.context.hackObject.objectiveName}.answers`, helper.validationFields).write();
    }

    getAnswers(objectiveName) {
        return this.data.get(`objectives.${objectiveName}.answers`);
    }

}
