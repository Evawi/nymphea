'use strict';
var alertify ;
var notify ;
try {
    alertify =  require('../../../node_modules/alertifyjs/build/alertify.js');

}catch (err) {
    alertify = null
}
if(alertify){
    var cssStr = "../../../node_modules/alertifyjs/build/css/alertify.css"
    try{
        require(cssStr);
    }catch(err){}
}
try{
    notify =  require('../../../node_modules/devextreme/ui/notify.js');
}catch (err) {
    notify = null
}

class UsedDependencyAlert{
    constructor() {
        if(notify){
            this.DALAY = 1000
        }
        if(alertify){
            alertify.set('notifier','position', 'top-center');
        }
    }
    error(message){
        if(notify){
            notify(message, "error", this.DALAY);
        }else if(alertify){
            alertify.error(message);
        }else{
            alert(message)
        }
    }
    warning(message){
        if(notify){
            notify(message, "warning", this.DALAY);
        }else if(alertify){
            alertify.warning(message);
        }else{
            alert(message)
        }
    }
    message(message){
        if(notify){
            notify(message, "message", this.DALAY);
        }else if(alertify){
            alertify.message(message);
        }else{
            alert(message)
        }
    }
    success(message){
        if(notify){
            notify(message, "success", this.DALAY);
        }else if(alertify){
            alertify.success(message);
        }else{
            alert(message)
        }
    }
}
const Alert = new UsedDependencyAlert();
export default Alert