'use strict';

// В общих чертах. Почти псевдокод. Тут нужно еще много доделать и уточнить. 

// 1. Проверка значения на корректность.null, undefined, NaN, Infinity,
function isEmpty(value, exception){
    if(value == null || value == undefined){
        return true;
    }
    else
    if(exception == true && value == ""){
        return true;
    }
    return false;
}

// 2. Во всех остальных случаях данные можно представить в виде массива
// с хотя бы одним значением.
function getArr(value) {
    let returnedArr = [];

    if(isEmpty(value,false)){
        return [];
    }
    
    for(var key in value){
        returnedArr.push(value[key]);
    }
    return returnedArr;
}

// Проверка кода
let arr = {q:1,w:2,e:function(){}};//[1,2,3];//"123";//['1','2','3'];//

console.log(getArr(arr));