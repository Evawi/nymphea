'use strict';
//use to rout https://github.com/mtrpcic/pathjs
// use to base cmp https://material-ui.com/guides/api/
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
// <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">


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
var version = '[AIV]{version}[/AIV]';
console.log(version);

/*const AppRouter = Backbone.Router.extend({
    routes : {
        '' : 'dashboard'
    }
});*/

let initialize = function() {
    /*NavigatorHANDLER.clearState();
    UserHANDLER.clearState();
    StaffMODEL.clear();
    StaffMODEL.read();


    const MainCtr = new Main();
    MainCtr.init();

    const ctrNavigator = new NavigatorCtrl();

    const ctrEditUser = new EditUserCtrl();
    ctrEditUser.init();

    const ctrEventsUser = new EventsUserCtrl();
    ctrEventsUser.init();

    const ctrLogUser = new LogUserCtrl();
    ctrLogUser.init();

    MainCtr.getRenderPromise().then(function(){
        ctrNavigator.init({target:MainCtr.getTargetNavigator()});
    });

    var appRouter = new AppRouter;
    appRouter.on('route:dashboard', function() {
        NavigatorHANDLER.setProps({section:"dashboard"});
        const dashboard = require.ensure('./dashboard/main.controller.js', function() {
            MainCtr.getRenderPromise().then(function(){
                let Ctrldashboard = require('./dashboard/main.controller.js');
                let screenCtr = new Ctrldashboard.default();
                screenCtr.init({target:MainCtr.getTargetContent()});
            })
        });
    });
    Backbone.history.start();*/
};
new initialize();