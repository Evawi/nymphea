'use strict';

import ROUTER  from '../route/route.js';

var version = '[AIV]{version}[/AIV]';
console.log(version);

export default class ROUTE{
    constructor(props){
        let SELF = this;
        SELF.patches  = SELF.patches.bind(this);
        SELF.route    = SELF.route.bind(this);
        SELF.start    = SELF.start.bind(this);
    }
    route(){
        let SELF = this;
        let patches =  this.patches();
        _.each(patches,function(node,key){
            if(SELF[node]){
                ROUTER.map(key).to(function(){
                    SELF[node]()
                });
            }
        })
    }
    start(){
        let SELF = this;
        SELF.route();
        ROUTER.listen();
    }
}