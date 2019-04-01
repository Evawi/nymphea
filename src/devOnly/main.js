'use strict';
import ALERTY     from '../alerty/alerty.js';

//класс созданный для диффиренциации девелоп это или нет, если девелоп возвращает соответствующие состояния

class devOnly{
    constructor() {
        const CSSClass = " isDevelop ";

        this.props = {
            CSSClass:CSSClass
        };
        this.STATE={
            isDev:false
        }
    }
    initDev(isDev){ //принимает true или false, задает значение, активна develop версия(true) или нет(false), default false
        if(_.isBoolean(isDev)) {
            this.STATE.isDev = isDev
        }else{

        }
    }
    isDev(){ //возвращает текущее значение this.STATE.isDev
        return this.STATE.isDev
    }
    getCSSClass(){
        if(this.STATE.isDev) return  this.props.CSSClass;
        return this.props.CSSClass+" hidden ";
    }
    log(text){
        if(this.STATE.isDev) return  console.log("DEV LOG: ",text)
    }
}

const devONLY = new devOnly()

export default devONLY