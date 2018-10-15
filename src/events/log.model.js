'use strict';
import {LoaderFactory}  from '.././myLib/services/LoaderFactory.js';
import Model            from '.././myLib/model/model.class.js';
import AlertY           from '.././myLib/alerty/alerty';
import EnvMODEL           from '.././env.model';

class UserModel extends Model{ //модель одной записи лога
    constructor(props){
        super({ctrl:"logs"});
        let SELF = this;
        SELF.PARENT = props.parent;
    }

    toModelProcess(data){
        let el = {
            id:            data.id,
            absence_type:  data.absence_type || "",
            start_date:    data.start_date || "",
            end_date:      data.end_date || ""
        };
        return el
    }
    toServerProcess(data){
       if(!data.id){
            AlertY.error("Нет id",{needAlert:true});
            return
        }
        let el = {
            id:            data.id,
            absence_type:  data.absence_type,
            start_date:    data.start_date || "",
            end_date:      data.end_date || ""
        };
        _.each(el,function(node,key){
            if(!node){
                delete el[key]
            }
        })
        return JSON.stringify(el)
    }
}

class LogModel extends Model{
    constructor(props){
        super({ctrl:"logs"});
        let SELF = this;
        this.DATA={}; //данные для быстрого просмотра списка, чтоб не ходить каждый раз в модели
    }
    absenceType(){
        return EnvMODEL.absenceType()
    }
    toModelProcess(data){
        let SELF = this;
        if(_.isEmpty(data.data) && data.message == "not allowed"){
            AlertY.warning("Нет доступа",{needAlert:true});
            return
        }
        if(_.isArray(data.data) ){
            _.each(data.data,function(node,key){
                if(_.isEmpty(node))return;
                let keyModel = node.id+"";
                SELF.MODEL[keyModel] = new UserModel({parent:SELF})
                SELF.MODEL[keyModel].init({defaultData:node});
                SELF.DATA[keyModel] = SELF.MODEL[keyModel].get();
            });
        }else{
            AlertY.error("LogModel toModelProcess can't process data, incorrect format ");
        }
        return $.extend(true,{}, this.MODEL)
    }
    get(){
        return $.extend(true,{}, this.MODEL);
    }
    getDATA(){
        return $.extend(true,{}, this.DATA);
    }
    delete(){}

}
const LogMODEL = new LogModel();
export default LogMODEL