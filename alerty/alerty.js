'use strict';

var alertify =  require('../../../node_modules/alertifyjs/build/alertify.js');
require("../../../node_modules/alertifyjs/build/css/alertify.css");

//возможные props, props - всегда объект или undef
//onlyDev - только для дева
//needStack - нужен ли стектрейс
//needAlert - выводить попап
class AlertYClass{
    constructor() {
        const PREFIX = "AlertY   HOTTABYCH";

        this.MessageName = {
            "error":   PREFIX + "-Error   ",
            "warning": PREFIX + "-Warning ",
            "success": PREFIX + "-Success ",
            "message": PREFIX + "-Message "
        }
        alertify.set('notifier','position', 'top-center');
    }
    error(message,props){
        if(isDEVELOP){
            console.log("%c ----- DEVELOP LOG start", 'color: #033E6B; font-weight: bold;');
            console.log(new Error().stack);
            console.log("%c ----- DEVELOP LOG and", 'color: #033E6B; font-weight: bold;');
        }
        if(props && props.onlyDev){
            if (isDEVELOP)console.log("%c"+this.MessageName.error+" : "+message, 'color: #BC263D; font-weight: bold;');
        }
        if(props && props.needAlert){
            alertify.error(message);
            console.log("%c"+this.MessageName.error+" : "+message, 'color: #BC263D; font-weight: bold;');
        }
        if(_.isEmpty(props)){
            console.log("%c"+this.MessageName.error+" : "+message, 'color: #BC263D; font-weight: bold;');
        }
    }
    warning(message,props){
        if(isDEVELOP){
            console.log("%c ----- DEVELOP LOG start", 'color: #033E6B; font-weight: bold;');
            console.log(new Error().stack, 'color: #427195; font-size:90%');
            console.log("%c ----- DEVELOP LOG and", 'color: #033E6B; font-weight: bold;');
        }
        if(props && props.onlyDev){
            if (isDEVELOP)console.log("%c"+this.MessageName.warning+" : "+message, 'color: #FF814B; font-weight: bold;');
        }
        if(props && props.needAlert){
            alertify.warning(message);
            console.log("%c"+this.MessageName.warning+" : "+message, 'color: #FF814B; font-weight: bold;');
        }
        if(_.isEmpty(props)){
            console.log("%c"+this.MessageName.warning+" : "+message, 'color: #FF814B; font-weight: bold;');
        }
    }
    message(message,props){
        if(props && props.onlyDev){
            if(isDEVELOP) console.info("%c"+this.MessageName.message+" : "+message, 'color: #3598AB; font-weight: bold;');
        }
        if(props && props.needAlert){
            alertify.message(message);
            console.log("%c"+this.MessageName.message+" : "+message, 'color: #3598AB; font-weight: bold;');
        }
        if(_.isEmpty(props)){
            console.info("%c"+this.MessageName.message+" : "+message, 'color: #3598AB; font-weight: bold;');
        }
    }
    success(message,props){
        if(props && props.onlyDev){
            if(isDEVELOP) {
                console.log("%c"+this.MessageName.success+" : "+message, 'color: #0C8155; font-weight: bold;');
            }
        }
        if(props && props.needAlert){
            alertify.success(message);
            console.log("%c"+this.MessageName.success+" : "+message, 'color: #0C8155; font-weight: bold;');
        }

        if(_.isEmpty(props)){
            console.log("%c"+this.MessageName.success+" : "+message, 'color: #0C8155; font-weight: bold;');
        }
    }
}

const AlertY = new AlertYClass()

export default AlertY