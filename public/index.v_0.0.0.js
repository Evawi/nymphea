// [AIV_SHORT]  Build version: 0.0.0 - Monday, October 15th, 2018, 5:37:54 PM  
 var index =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "C:\\xampp\\htdocs\\goldenHedgehog\\nymphea/dist/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 153);
/******/ })
/************************************************************************/
/******/ ({

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//use to rout https://github.com/mtrpcic/pathjs


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

var version = '0.0.0';
console.log(version);

/*const AppRouter = Backbone.Router.extend({
    routes : {
        '' : 'dashboard'
    }
});*/

var initialize = function initialize() {
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

/***/ })

/******/ });
//# sourceMappingURL=index.v_0.0.0.js.map 