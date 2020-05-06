'use strict';

import GetType from './getArray1.js';
const gt = new GetType();

export default function MergObjects() {

    if (!(this instanceof MergObjects)) {
        return new MergObjects();
    }

    this.deepCloneObj = function(obj){
        let objClone = {};
        for (let key in obj) {
            objClone[key] = obj[key]; 
            if (gt.typeIdent(obj[key]) == 'object'){
                this.deepCloneObj(obj[key]);
            }
        }
        return objClone;
    }

    // objMerge = (obj1 + obj2), priority obj1
    // objDiff = (objMerge - obj2)
    this.mergObj = function(obj1, obj2) {
        let objMerge = this.deepCloneObj(obj2);
        let objDiff = {};
    
        for (let key in obj1){
            
            if(!obj2.hasOwnProperty(key)){
                objDiff[key] = obj1[key];
            }else{
                if(obj2[key] != obj1[key]){
                    objDiff[key] = obj1[key];
                }
            }   
            
            objMerge[key] = obj1[key]; 
            
            if (gt.typeIdent(obj1[key]) == 'object'){
                this.mergObj(obj1[key],objMerge[key]);
            } 
        }
        return {objDiff, objMerge};
    }
}