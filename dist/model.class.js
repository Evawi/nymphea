'use strict';

import {LoaderFactory}  from '../services/LoaderFactory.js';

export default class Model{
    constructor(props){
        this.CTRL = props.ctrl || "";
        this.TARGET = props.target || "";  //используется в формировании url
        this.METHOD = props.method || "";
        this.useAlternativeRequestParams = false;
        this.MODEL = {}
        this.requestRead ;
        this.promiseRead ;
    }
    setUseAlternativeRequestParams(){
        this.useAlternativeRequestParams = true;  //используются не кеквест методы а дополнительные контроллеры
    }
    baseUrl(){
        return  window.server_url||"/ai/";
    }
    setCtrlCtrl(ctrl){ //используется в формировании url
        this.CTRL = ctrl;
    }
    setTargetCtrl(target){ //используется в формировании url
        this.TARGET = "/" + target;
    }
    setMethodCtrl(method){ //используется в формировании url
        this.METHOD = "/" + method;
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
        let request_method = "POST";
        let url = SELF.baseUrl()+SELF.CTRL;
        if(SELF.TARGET) url += SELF.TARGET;
        if(SELF.METHOD) url += SELF.METHOD;
        if(SELF.useAlternativeRequestParams){
            url += "/create";
            request_method = "POST"
        }
        SELF.requestCreate = LoaderFactory.get(url, SELF.toServerProcess(data)||{}, request_method);
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
        let request_method = "GET";
        let url = SELF.baseUrl()+SELF.CTRL;
        if(SELF.TARGET) url += SELF.TARGET;
        if(SELF.METHOD) url += SELF.METHOD;
        if(SELF.useAlternativeRequestParams){
            url += "/read";
            request_method = "POST"
        }
        SELF.requestRead = LoaderFactory.get(url, data||{}, request_method);
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
        let request_method = "PUT";
        let url = SELF.baseUrl()+SELF.CTRL;
        if(SELF.TARGET) url += SELF.TARGET;
        if(SELF.METHOD) url += SELF.METHOD;
        if(SELF.useAlternativeRequestParams){
            url += "/update";
            request_method = "POST"
        }
        SELF.requestUpdate = LoaderFactory.get(url, SELF.toServerProcess(data)||{}, request_method);
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
        let request_method = "DELETE";
        let url = SELF.baseUrl()+SELF.CTRL;
        if(SELF.TARGET) url += SELF.TARGET;
        if(SELF.METHOD) url += SELF.METHOD;
        if(SELF.useAlternativeRequestParams){
            url += "/delete";
            request_method = "POST"
        }
        SELF.requestDelete = LoaderFactory.get(url, data||{} , request_method);
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

    set(){

    }
    get(){
        return $.extend(true,{}, this.MODEL);
    }
}