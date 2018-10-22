'use strict';
import ALERTY     from '../alerty/alerty.js';

export default function GetType(newData) {
    if (!(this instanceof GetType)) return new GetType(newData);
    let errorAlert = function(text,orData){
        ALERTY.error("Data type error! "+ text +" instead of OBJECT! Now use ", orData)
    };

    this.newData = newData;
    this.or = function(orData= {}) {
        let returnedArr = this.newData;
        switch (this.newData){
            case null : returnedArr = orData; errorAlert("NULL",orData); break;
            case undefined : returnedArr = orData; errorAlert("undefined",orData); break;
        }
        if(_.isNumber(this.newArr)){
            returnedArr = orData; errorAlert("Number",orData);
        }
        if(_.isString(this.newArr)){
            returnedArr = orData; errorAlert("String",orData);
        }
        if(_.isArray(this.newArr)){
            returnedArr = orData; errorAlert("Array",orData);
        }
        return returnedArr;
    }
}
