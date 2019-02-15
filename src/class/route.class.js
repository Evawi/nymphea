'use strict';

import ROUTER  from '../route/route.js';

var version = '[AIV]{version}[/AIV]';
console.log(version);
//префикс before_ у метода означает что этот метод будет вызван в ROUTER.map(key).enter(fnc)
//префикс after_ у метода означает что этот метод будет вызван в ROUTER.map(key).exit(fnc)
export default class ROUTE{
    constructor(props){
        let SELF = this;
        SELF.patches  = SELF.patches.bind(this);
        SELF.route    = SELF.route.bind(this);
        SELF.start    = SELF.start.bind(this);
    }
    static go(str,props){
        let NewStr
        if(props && props.needReload){
            NewStr = window.location.pathname+"#/"+str
            window.location =NewStr
        }else{
            NewStr = "#/"+str
            window.history.pushState(null, null, NewStr);
        }
     }
    route(){
        let SELF = this;
        let patches =  this.patches();
        _.each(patches,function(node,key){
            if(SELF[node]){
                if(SELF["before_"+node]){
                    ROUTER.map(key).enter(function(){
                        SELF["before_"+node](this.params)
                    });
                }
                ROUTER.map(key).to(function(){
                    SELF[node](this.params)
                });
                if(SELF["after_"+node]){
                    ROUTER.map(key).exit(function(){
                        SELF["after_"+node](this.params)
                    });
                }
            }
        })
    }
    start(){
        let SELF = this;
        SELF.route();
        ROUTER.rescue(function(){ //если путь не определен приходит сюда
            SELF.rescue() //должен быть функцией
        });
        ROUTER.root(SELF.root()); //домашний url должен быть строкой
        ROUTER.listen(true);
    }

}