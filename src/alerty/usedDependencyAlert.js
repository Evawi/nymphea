'use strict';

/*var alertify ;
var notify ;
try {
    alertify =  require('../../../node_modules/alertifyjs/build/alertify.js');

}catch (err) {
    alertify = null
}
if(alertify){
    var cssStr = "../../../node_modules/alertifyjs/build/css/alertify.css";
    try{
        require(cssStr);
    }catch(err){}
}
try{
    notify =  require('../../../node_modules/devextreme/ui/notify.js');
}catch (err) {
    notify = null
}*/

class UsedDependencyAlert{
    constructor() {
        let SELF = this;

        this.reinit = this.reinit.bind(this);

        SELF.Notyfer;

        SELF.widgets_Devexpress;
        SELF.widgets_Alertify;
        SELF.widgets_Default = true;

        if(window.UI_settings){
            if(window.UI_settings.Notifer){
                switch (window.UI_settings.Notifer.type){
                    case "Alertify":  SELF.widgets_Alertify=true; break;
                    case "Devexpress":  SELF.widgets_Devexpress=true; break;
                    default: SELF.widgets_Default = true;
                }
            }
        }
    }
    f(){
        let SELF = this;
        if(window.UI_settings){
            if(window.UI_settings.Notifer){
                SELF.Notyfer = window.UI_settings.Notifer.ensure;
            }
        }
        if(SELF.widgets_Devexpress){
            this.DALAY = 1000
        }
        if(SELF.widgets_Alertify){
            SELF.Notyfer.set('notifier','position', 'top-center');
        }
    }
    reinit(){ //необходимо использовать в случае если невозможно задать параметры в index.html
        let SELF = this;
        if(window.UI_settings){
            if(window.UI_settings.Notifer){
                switch (window.UI_settings.Notifer.type){
                    case "Alertify":  SELF.widgets_Alertify=true; break;
                    case "Devexpress":  SELF.widgets_Devexpress=true; break;
                    default: SELF.widgets_Default = true;
                }
            }
        }
    }
    error(message){
        this.f();
        if(this.widgets_Devexpress){
            this.Notyfer(message, "error", this.DALAY);
        }else if(this.widgets_Alertify){
            this.Notyfer.error(message);
        }else{
            alert(message)
        }
    }
    warning(message){
        this.f();
        if(this.widgets_Devexpress){
            this.Notyfer(message, "warning", this.DALAY);
        }else if(this.widgets_Alertify){
            this.Notyfer.warning(message);
        }else{
            alert(message)
        }
    }
    message(message){
        this.f();
        if(this.widgets_Devexpress){
            this.Notyfer(message, "message", this.DALAY);
        }else if(this.widgets_Alertify){
            this.Notyfer.message(message);
        }else{
            alert(message)
        }
    }
    success(message){
        this.f();
        if(this.widgets_Devexpress){
            this.Notyfer(message, "success", this.DALAY);
        }else if(this.widgets_Alertify){
            this.Notyfer.success(message);
        }else{
            alert(message)
        }
    }
}
const Alert = new UsedDependencyAlert();
export default Alert