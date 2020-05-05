'use strict';

import GetType from './getArray1.js';
const gt = new GetType();

export default function MergObjects() {

    if (!(this instanceof MergObjects)) {
        return new MergObjects();
    }

    // Result merging - obj2
    // Return - difference
    this.mergObj = function(obj1, obj2){
    
        let difference = {};

        for (let key in obj1){

            if(!obj2.hasOwnProperty(key)){
                difference[key] = obj1[key];
            }else{
                if(obj2[key] != obj1[key]){
                    difference[key] = obj1[key];
                }
            }        

            obj2[key] = obj1[key]; 
            
            if (gt.typeIdent(obj1[key]) == 'object'){
                this.mergObj(obj1[key],obj2[key]);
            } 
        }
        return difference;
    }
}