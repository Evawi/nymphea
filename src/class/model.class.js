'use strict';
//SELF.ETALON - хранит в себе полученные данные, не изменяется в процессе использования. может быть изменена только после сохранения
import {LoaderFactory}  from '../services/LoaderFactory.js';

export default class Model{
    constructor(props = {}){
        if(props.parent) this.PARENT = props.parent;
        this.CTRL = props.ctrl || "";
        this.TARGET = props.target || "";  //используется в формировании url
        this.METHOD = props.method || "";
        this.useAlternativeRequestParams = false;
        this.useProcessResolve = ['create','read','update','delete'];
        this.MODEL = {};
        this.ETALON = {};
        this.requestRead ;
        this.promiseRead ;

        this.getEtalon = this.getEtalon.bind(this);
    }
    setUseAlternativeRequestParams(){
        this.useAlternativeRequestParams = true;  //используются не реквест методы а дополнительные контроллеры
    }
    setUseProcessResolve(arrRequestType){ //указывает типы запросов для которых используется toModelProcess, toEtalonProcess  or PARENT.delete на ответ от сервера, если не установлено, toModelProcess &  PARENT.delete используется для всех
        this.useProcessResolve = arrRequestType || [];
    }
    baseUrl(){
        return  window.server_url||"/";
    }
    setCtrlCtrl(ctrl){ //используется в формировании url
        if(!ctrl){
            this.CTRL = "";
        }else{
            this.CTRL = ctrl;}
    }
    setTargetCtrl(target){ //используется в формировании url
        if(!target){
            this.TARGET = "";
        }else{
            this.TARGET = "/" + target;
        }
    }
    setMethodCtrl(method){ //используется в формировании url
        if(!method){
            this.METHOD = "";
        }else{
            this.METHOD = "/" + method;
        }
    }
    setParameterCtrl(parameter){ //должен быть строкой типо test=1
        if(!parameter){
            this.PARAMETER = "";
        }else{
            this.PARAMETER = "?" + parameter;
        }
    }
    defaultModel(){
        return {}
    }
    clear(){
        this.MODEL =  $.extend(true,this.MODEL, this.defaultModel());
    }
    init(props = {}){
        this.clear();
        if(props.defaultData){
            this.toEtalonProcess(props.defaultData);
            this.MODEL = $.extend(true,this.MODEL, this.toModelProcess(props.defaultData));
        }
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
                    if(SELF.useProcessResolve.indexOf('create')+1) {
                        SELF.toEtalonProcess(data);
                        SELF.toModelProcess(data);
                    }
                    resolve(data)
                })
                .error(function(msg){
                    reject(msg)
                })

        });
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
        if(SELF.PARAMETER) url += SELF.PARAMETER;
        if(SELF.useAlternativeRequestParams){
            url += "/read";
            request_method = "POST"
        }
        SELF.requestRead = LoaderFactory.get(url, data||{}, request_method);
        SELF.promiseRead = new Promise(function(resolve,reject){
            SELF.requestRead
                .success(function(data){
                    SELF.toEtalonProcess(data);
                    if(SELF.useProcessResolve.indexOf('read')+1) SELF.toModelProcess(data);
                    resolve(data)
                })
                .error(function(msg){
                    reject(msg)
                })
        });
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
                    if(SELF.useProcessResolve.indexOf('update')+1) {
                        SELF.toEtalonProcess(data);
                        SELF.toModelProcess(data);
                    }
                    resolve(data)
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
                    if(SELF.useProcessResolve.indexOf('delete')+1) SELF.PARENT.delete(data?data.id:SELF.MODEL.id);
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
    toEtalonProcess(data){
        let SELF = this;
        SELF.ETALON = $.extend(true,{}, this.toModelProcess(data));
    }
    toModelProcess(){}
    toServerProcess(){}

    set(data,key,noExt,target){
        if(key || _.isNumber(key)){
            if(target|| _.isNumber(target)) {
                if(noExt){
                    this.MODEL[key][target] =  data; return
                }else{
                    this.MODEL[key][target]  =  $.extend(true,this.MODEL[key][target],data); return
                }
            }
            if(noExt){
                this.MODEL[key] =  data; return
            }else{
                this.MODEL[key] =  $.extend(true,this.MODEL[key],data); return
            }
        }else{
            if(noExt) {
                this.MODEL =  data; return;
            }
            this.MODEL = $.extend(true,this.MODEL,data); return;
        }

    }
    get(){
        return $.extend(true,{}, this.MODEL);
    }
    getEtalon(){
        return $.extend(true,{}, this.ETALON);
    }
    getJSON(){
        let mdlData = {};
        _.each(this.MODEL,function(node,key){
            mdlData[key] = node.get()
        })
        return $.extend(true,{}, mdlData);
    }
    isNew(){
        let SELF = this;
        if(this.MODEL.isNew) return true
        return false
    }
}