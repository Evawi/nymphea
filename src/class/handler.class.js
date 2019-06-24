'use strict';
import AlertY         from '../alerty/alerty';

export default class Handler{
    constructor(props = {}) {
        this.CBS = {};
        this.STATE = {};
        this.HandlerName = props.name;

        this.clear     = this.clear.bind(this);
    }
    clear(){
        this.CBS = {};
        this.STATE = {};
    }
    setState(data){
        if(!data ) {              AlertY.error("I Can't setProps in "+this.HandlerName+", i haven't data"); return;}
        if(!_.isObject(data) ) {  AlertY.error("I Can't setProps in "+this.HandlerName+", data must be object"); return;}
        this.STATE.isEdit = true;
        this.STATE = $.extend(true,this.STATE,data);
    }
    getState(){
        return $.extend(true,{},this.STATE);
    }
    setCB(key,cb){
        if(!key ) {              AlertY.error("I Can't setUserCB in "+this.HandlerName+", i haven't key"); return;}
        if(!cb ) {               AlertY.error("I Can't setUserCB in "+this.HandlerName+", i haven't cb"); return;}
        this.CBS[key] = cb;
    }
    getCB(key){
        if(!key ) {              AlertY.error("I Can't getUserCB in "+this.HandlerName+", i haven't key"); return;}
        if(!this.CBS[key] ) {    AlertY.warning("CB with a key "+key+" not found"); }
        return this.CBS[key];
    }
}
