/**
 *  Responsible for identifying common errors and providing guidance to the student
 *
 *  create base methods that are fairly generic and then add similarly named specific variations and cases.
 *      checkURL(url)
 *      checkURLProperty(url,prop)
 *      checkURLPropertyValue(url,prop,val,spec)
 *  combine/group function sets under ALL
 *      checkURLPropertyALL(url,prop,val)
 *
 */
const {forEach} = require("ramda");
module.exports = new class CommonErrorsAdvisor {

    advice=[];

    checkMissing(args){

    }

    /**
     * A very general url check
     * @param url
     * @returns {CommonErrorsAdvisor}
     */
    checkURL(url){
        if(!url){
            this.advice.push("The url is blank");
        }

        /**
         *  @todo-p1 need to add cases for
         *
         *  - not a resource url
         *  - wrong cloud name
         *  - missing asset
         *  - wrong order of url segments
         */

        return this;
    }

    pretty(){
        return "<ul><li>"+this.advice.join("</li><li>")+"</li></ul>";
    }
}