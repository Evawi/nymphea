'use strict';

// return:
// nonCorrectValue: 'null', 'undefined', 'NaN', 'Infinity'
// primitivType:    'boolean', 'string', 'number'
// objectType:      'object', 'array', 'function'
function typeIdent(value) {
    let type = typeof (value);

    if (type == 'number') {
        if (value == Infinity) {
            type = 'Infinity';
        } else
        if (isNaN(value)) {
            type = 'NaN';
        }
    } else

    if (type == 'object') {
        if (value == null) {
            type = 'null';
        } else
        if (Array.isArray(value)) {
            type = 'array';
        }
    }

    return type;
}

// Object -> array
function objToArr(obj) {
    let ret = [];
    for (let item in obj) {
        let el = obj[item];

        if (typeIdent(el) == 'object') {
            ret.push(objToArr(el));
        } else {
            ret.push(el);
        }
    }
    return ret;
}

// flat array
function flattenDeep(arr1) {
    return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

// Any type -> flat array
function getArr(value) {

    switch(typeIdent(value)){
        case('null'|| 'undefined' || 'NaN' || 'Infinity'):
            return "nonCorrectValue";
        case('string'):
            return Array.from(value);
        case('boolean' || 'number'):
            return Array.of(value);
        case('function'):
            return [value];        
        case('object'):
            return flattenDeep(objToArr(value));
        case('array'):
            return flattenDeep(value);
    }
    return [];
}

//------------------------------------------------
let arr = {z:{a:9,b:{r:5,t:7}},q:6,w:3}; 
console.log(getArr(arr));