'use strict';
import AlertY         from '../myLib/alerty/alerty';


class LogHandler{
    constructor() {
        this.CBS = {};
        this.STATE = {};
        //id:""  id выбранного сотрудника для чтения логов
    }
    setState(data){
        if(!data ) {              AlertY.error("I Can't setProps in LogHandler, i haven't data"); return;}
        if(!_.isObject(data) ) {  AlertY.error("I Can't setProps in LogHandler, data must be object"); return;}
        this.STATE.isEdit = true;
        this.STATE = $.extend(true,this.STATE,data);
    }
    getState(){
        return $.extend(true,{},this.STATE);
    }
    setCB(key,cb){
        if(!key ) {              AlertY.error("I Can't setUserCB in LogHandler, i haven't key"); return;}
        if(!cb ) {               AlertY.error("I Can't setUserCB in LogHandler, i haven't cb"); return;}
        if(this.CBS[key] ) {     AlertY.warning("CB c ключом "+key+" уже существует и был перезаписан", {onlyDev:true}); }
        this.CBS[key] = cb;
    }
    getCB(key){
        if(!key ) {              AlertY.error("I Can't getUserCB in LogHandler, i haven't key"); return;}
        if(!this.CBS[key] ) {    AlertY.warning("CB with a key "+key+" not found"); }
        return this.CBS[key];
    }
}

const LogHANDLER = new LogHandler();

export default LogHANDLER
