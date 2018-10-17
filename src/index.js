'use strict';
//use to rout https://github.com/mtrpcic/pathjs
// use to base cmp https://material-ui.com/guides/api/
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
// <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
//https://css-tricks.com/building-skeleton-screens-css-custom-properties/ для прелоадера


//import 'semantic-ui-css/semantic.min.js';
//import 'semantic-ui-css/semantic.min.css';

//import "devextreme/dist/js/dx.web.js";

//import 'devextreme/dist/css/dx.common.css';
//import 'devextreme/dist/css/dx.light.compact.css';

/*import StaffMODEL from './staff.model.js';

import NavigatorHANDLER,{getNavigatorCB} from './navigator/navigator.handler.js';
import UserHANDLER from './edit_user/user.handler.js';

import Main from './main/main.controller.js';
import NavigatorCtrl from './navigator/main.controller.js';
import EditUserCtrl from './edit_user/main.controller.js';
import EventsUserCtrl  from './events/main.controller.js';
import LogUserCtrl  from './log/main.controller.js';*/

import INDEX  from './class/index.class.js';
import MODEL  from './class/model.class.js';

import ALERTY  from './alerty/alerty.js';
/*let nymphea = function() {

    class initializeINDEX extends INDEX{
        patches(){
            return {
                "#/user":"User",
                "#/dashboard":"Dashboard"
            }
        }
        User(){
            console.log("s")
        }
        Dashboard(){
            console.log("dashboard")
        }
    }
    const initializeINDEXCTR = new initializeINDEX();
    initializeINDEXCTR.start();




};

new nymphea();
*/

class nymphea {
    ALERTY(){return ALERTY}
    INDEX(){return INDEX}
    MODEL(){return MODEL}
}
const NYMPHEA = new nymphea()
export default NYMPHEA