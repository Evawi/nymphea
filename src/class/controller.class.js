'use strict';

export default class Controller{
    constructor(props = {}) {
        let SELF = this;

        SELF.updateView          = SELF.updateView.bind(SELF);
        SELF.getRenderPromise    = SELF.getRenderPromise.bind(SELF);

        SELF.DataHandler = {};
        SELF.ViewHandler = {
            viewPromise:null,
            getRefs:null
        };
    }
    updateView(){
        let SELF = this;
        SELF.ViewHandler.viewPromise.then(function(){
            console.log("updateView ")
        })
    }
    init(props){
        let SELF = this;
        SELF.ViewHandler.target = props.target;
        SELF.render();
    }
    getTargetContent(){
        let SELF = this;
        return SELF.ViewHandler.getRefs()
    }
    getRenderPromise(){
        let SELF = this;
        return SELF.ViewHandler.viewPromise
    }

}
