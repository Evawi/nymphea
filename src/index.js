'use strict';
//use to rout https://github.com/mtrpcic/pathjs
// use to base cmp https://material-ui.com/guides/api/
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
// <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
//https://css-tricks.com/building-skeleton-screens-css-custom-properties/ для прелоадера


//jquery жрет очень много места
/*пример подключения
* new webpack.ProvidePlugin({
 $ : "jquery",
 Nymphea : ["../nymphea/nymphea.v_0.0.0.js",'default'], //подключение моих вп модулей
 _ : "underscore"
 }),
 */


import ALERTY     from './alerty/alerty.js';
import ROUTE      from './class/route.class.js';
import MODEL      from './class/model.class.js';
import HANDLER    from './class/handler.class.js';
import CONTROLLER from './class/controller.class.js';
import COMPONENT  from './class/component.class.jsx';
import VALUES     from './values/main.js';

class nymphea {}

const NYMPHEA = new nymphea();

NYMPHEA.ALERTY      = ALERTY;
NYMPHEA.ROUTE       = ROUTE;
NYMPHEA.MODEL       = MODEL;
NYMPHEA.HANDLER     = HANDLER;
NYMPHEA.CONTROLLER  = CONTROLLER;
NYMPHEA.COMPONENT   = COMPONENT;
NYMPHEA.VALUES      = VALUES;

export default NYMPHEA