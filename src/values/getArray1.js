'use strict';

export default function GetType() {

    if (!(this instanceof GetType)) {
        return new GetType();
    }

    // return:
    // nonCorrectValue: 'null', 'undefined', 'NaN', 'Infinity'
    // primitivType:    'boolean', 'string', 'number'
    // objectType:      'object', 'array', 'function'
    this.typeIdent = function(value)  {
 
        let type = typeof (value);

        if (type == 'number') {
            if (value == Infinity) {
                type = 'Infinity';
            } else
            if (isNaN(value)) {
                type = 'NaN';
            } else
            if (Number.isInteger(value)){
                type = 'int';
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
    this.objToArr = function(obj)  {
        let ret = [];
        for (let item in obj) {
            let el = obj[item];

            if (this.typeIdent(el) == 'object') {
                ret.push(this.objToArr(el));
            } else {
                ret.push(el);
            }
        }
        return ret;
    }

    // flat array
    this.flattenDeep = function(arr1) {
        return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(this.flattenDeep(val)) : acc.concat(val), []);
    }

    // Any type -> flat array
    this.getArr = function(value) {

        switch(this.typeIdent(value)){
            case('null'|| 'undefined' || 'NaN' || 'Infinity'):
                return "nonCorrectValue";
            case('string'):
                return Array.from(value);
            case('boolean' || 'number'):
                return Array.of(value);
            case('function'):
                return [value];        
            case('object'):
                return this.flattenDeep(this.objToArr(value));
            case('array'):
                return this.flattenDeep(value);
        }
        return [];
    }

    // Type array transformation
    this.oneTypeArr = function(arr, type, test) {
        let slf = this;
 
        if(test){
            let tipedArr = arr.find(function(item) {
                console.log(item);
                return (slf.typeIdent(item) != type);
            });
            return Boolean(!tipedArr); 
        }
        else
        {
            let tipedArr = arr.map(function (item) {
                if (slf.typeIdent(item) != type) {
                    if (type == 'string') {
                        item += "";
                    }

                    if (type == 'number') {
                        item = +item;
                    }

                    if (type == 'bool') {
                        item = Boolean(item);
                    }

                    if (type == 'int') {
                        item = parseInt(item);
                    }  

                    if (type == 'data') {
                        if(typeof(item) == 'string'){
                            item = Date.parse(item);
                        }
                    }
                }
                return item;
            });
            return tipedArr;
        }
    }

}