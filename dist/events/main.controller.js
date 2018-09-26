'use strict';

import {createElement} from 'react';
import {render} from 'react-dom';

import LogMODEL   from './log.model.js';
import LogHANDLER from './log.handler.js';

import {
    checkAccessForEditEvents
} from '../access/access.handler.js';

import UserMODEL from '../access/access.model.js';

import AlertY         from '../myLib/alerty/alerty';

import MainView      from './main.component.jsx';
import GreedView     from './log_grid.component.jsx';
require("./log.less");

export default class Main_log{
    constructor(props){
        let SELF = this;

        this.setData            = this.setData.bind(this);
        this.clearSetting       = this.clearSetting.bind(this);
        this.open       = this.open.bind(this);
        this.save          = this.save.bind(this);
        this.remove        = this.remove.bind(this);

        SELF.DataHandler = {
            toViewPersonalList:[]
        };
        SELF.ViewHandler = {};
    }
    init(props){
        let SELF = this;
        LogHANDLER.setCB("log_user_open",SELF.open);
        SELF.ViewHandler.target = document.getElementById("popup_user");
        UserMODEL.getPromiseRead().then(function(){
            SELF.render();
        })
    }
    clearSetting(){
        let SELF = this;
        SELF.DataHandler.toViewPersonalList = [];
    }
    open(){
        let SELF = this;
        if(!LogHANDLER.getState().id){
            AlertY.error("Попытка открыть логи несуществующего сотрудника", {needAlert:true});
            return
        }
        SELF.clearSetting();
        LogMODEL.setTargetCtrl(LogHANDLER.getState().id);
        LogMODEL.read();
        SELF.ViewHandler.viewPromise.then(function(){
            SELF.setData();
            SELF.ViewHandler.open();
        });
    }
    setData(){
        let SELF = this;
        LogMODEL.getPromiseRead().then(function(){
            let data = LogMODEL.getDATA();
            let arr = _.toArray(data);
            SELF.ViewHandler.setData(arr)
        })
    }
    save(data){
        let id = data.key.id;
        let saveData = $.extend(true,{}, data.newData);
        saveData.id = id;
        let mdl = LogMODEL.get()[id] ;
        mdl.update(saveData);
        mdl.getPromiseUpdate().then(function(){
            AlertY.success("Измнения успешно сохранены",{needAlert:true});
        },function(msg){
            AlertY.error(msg,{needAlert:true});
        })
    }
    remove(data){
        let id = data.key.id;
        let reqData = {id:id}
        let mdl = LogMODEL.get()[id] ;
        mdl.delete(JSON.stringify(reqData));
        mdl.getPromiseDelete().then(function(){
            AlertY.success("Запись успешно удалена",{needAlert:true});
        },function(msg){
            AlertY.error(msg,{needAlert:true});
        })
    }
    render(){
        let SELF = this;
        SELF.ViewHandler.viewPromise = new Promise(function(resolve, reject) {
            render(
                createElement(MainView,{
                }), SELF.ViewHandler.target,function(obj){
                    SELF.ViewHandler.open       = this.open;
                    SELF.ViewHandler.close      = this.close;
                    SELF.ViewHandler.setDefault = this.setDefault;
                    SELF.ViewHandler.getRefs    = this.getRefs;
                    SELF.renderGrid(resolve);
                })
        })
    }
    renderGrid(resolve){
        let SELF = this;
        render(
            createElement(GreedView,{
                save:SELF.save,
                remove:SELF.remove,
                absenceTypeList:LogMODEL.absenceType().humanReadable,
                accessForEditEvents:checkAccessForEditEvents()
            }), SELF.ViewHandler.getRefs().grid ,function(obj){
                SELF.ViewHandler.setData    = this.setData;
                resolve()
            })
    }
}