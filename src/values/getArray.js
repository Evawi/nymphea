'use strict';
import ALERTY     from '../alerty/alerty.js';

export default function GetType(newData) {
    if (!(this instanceof GetType)) return new GetType(newData);
    let errorAlert = function(text,orData){
        ALERTY.error("Data type error! "+ text +" instead of ARRAY! Now use ", orData);
    };

    this.newData = newData;
    this.or = function(orData = []) {
        let returnedArr = this.newData;
        switch (this.newData){
            case null : returnedArr = orData; errorAlert("NULL",orData); break;
            case undefined : returnedArr = orData; errorAlert("undefined",orData); break;
        }
        if(_.isNumber(this.newData)){
            returnedArr = [this.newData]; errorAlert("Number",orData);
        }
        return returnedArr;
    }
    this.type = function(type){
        let returnedArr = this.newData;
        switch(type){
            case "INT": returnedArr = parseInt(); break;
        }
        return returnedArr;
    }
    function parseInt(){
       let parsed = [];
       for (var i = 0; i <  this.newData.length; i++) {
           let el =  this.newData[i];
            if(Number.isInteger(el)){
                parsed.push(el)
            }else if(typeof el == 'number'){
                parsed.push(parseInt(el))
            }else if(typeof el == 'string'){
                parsed.push(el - 0)
            } else {
                parsed.push(null)
            }
       }
       return parsed;
    }
}
