'use strict';

import {LoaderFactory}  from '../services/LoaderFactory.js';

export default class Model{
    constructor(props){
        this.CTRL = props.ctrl || "";
        this.TARGET;  //используется в формировании url
        this.MODEL = {}
        this.requestRead ;
        this.promiseRead ;
    }
    baseUrl(){
        return  window.server_url||"/ai/";
    }
    setTargetCtrl(target){ //используется в формировании url
        this.TARGET = "/" + target;
    }
    defaultModel(){
        return {}
    }
    clear(){
        this.MODEL =  $.extend(true,this.MODEL, this.defaultModel());
    }
    init(props = {}){
        this.clear();
        if(props.defaultData)this.MODEL = $.extend(true,this.MODEL, this.toModelProcess(props.defaultData));
    }

    create(data){
        let SELF = this;
        SELF.requestCreate = LoaderFactory.get(SELF.baseUrl()+SELF.CTRL, data||{}, "POST");
        SELF.promiseCreate = new Promise(function(resolve,reject){
            SELF.requestCreate
                .success(function(data){
                    SELF.toModelProcess(data);
                    resolve()
                })
                .error(function(msg){
                    reject(msg)
                })

        })
        return SELF.promiseCreate
    }
    getPromiseCreate(){
        return this.promiseCreate
    }

    read(data){
        let SELF = this;
        let url = SELF.baseUrl()+SELF.CTRL;
        if(SELF.TARGET) url += SELF.TARGET;

        SELF.requestRead = LoaderFactory.get(url, data||{}, "GET");
        SELF.promiseRead = new Promise(function(resolve,reject){
            SELF.requestRead
                .success(function(data){
                    SELF.toModelProcess(data);
                    resolve()
                })
                .error(function(msg){
                    reject(msg)
                })

        })
        return SELF.promiseRead
    }
    getPromiseRead(){
        return this.promiseRead
    }

    update(data){
        let SELF = this;
        SELF.requestUpdate = LoaderFactory.get(SELF.baseUrl()+SELF.CTRL, SELF.toServerProcess(data)||{}, "PUT");
        SELF.promiseUpdate  = new Promise(function(resolve,reject){
            SELF.requestUpdate
                .success(function(data){
                    SELF.toModelProcess(data);
                    resolve()
                })
                .error(function(msg){
                    reject(msg)
                })

        })
        return SELF.promiseUpdate
    }
    getPromiseUpdate(){
        return this.promiseUpdate
    }

    delete(data){
        let SELF = this;
        SELF.requestDelete = LoaderFactory.get(SELF.baseUrl()+SELF.CTRL, data||{} , "DELETE");
        SELF.promiseDelete  = new Promise(function(resolve,reject){
            SELF.requestDelete
                .success(function(request){
                    SELF.PARENT.delete(data.id);
                    resolve()
                })
                .error(function(msg){
                    reject(msg)
                })
        })
        return SELF.promiseDelete
    }
    getPromiseDelete(){
        return this.promiseDelete
    }
    toModelProcess(){}
    toServerProcess(){}

    set(){}
    get(){
        return $.extend(true,{}, this.MODEL);
    }
}