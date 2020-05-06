'use strict';

export default function searchNamePrefix(prefix, nameArray){
    let num = 0;

    for(let i = 0; i < nameArray.length; i++){
        if (nameArray[i].indexOf(prefix) == 0){
            num++;
        }
    }
    return prefix + num;
}