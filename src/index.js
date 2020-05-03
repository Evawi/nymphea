'use strict';

var version = require("../package.json");
var myversion = JSON.stringify(version);
window.NYMPHEA_ver = JSON.parse(myversion).version;


import ALERTY     from './alerty/alerty.js';  //уведомления
import ROUTE      from './class/route.class.js'; //переходы по страницам
import MODEL      from './class/model.class.js'; //модель данных
import HANDLER    from './class/handler.class.js'; //дополнительные методы и объекты для работы прилодения, связь модулей приложения
import CONTROLLER from './class/controller.class.js'; // логика модулей приложения
import VALUES     from './values/main.js'; // получение и приведение данных к типам и виду
import CAST       from './cast/main.js'; // изменение размерности и парсинги


import {LoaderFactory}  from './services/LoaderFactory.js'; //доступ к модулю запросов без дефолтных методов модели

import FileGenerator    from './services/fileGenerator.js'; //генерация файлов

import DevONLY from './devOnly/main.js';

class nymphea {};


/* ДЛЯ ЛОГОВ, так как ока сервиса нет, не активен*/
//import SENDER     from './sender/main.js'; //отправка сервисных данных, логи и статистика
/*__webpack_require__.oe = function (err) {
    console.log("__webpack_require__ ",err)
}*/
/*window.onerror = function (msg, url, lineNo, columnNo, error) {
    SENDER.flogs({
        title: "Event: Error",
        log:{
            type: msg,
            stack:error.stack,
        }
    }).send()
}*/
const NYMPHEA = new nymphea();

NYMPHEA.ALERTY      = ALERTY;
NYMPHEA.ROUTE       = ROUTE;
NYMPHEA.MODEL       = MODEL;
NYMPHEA.HANDLER     = HANDLER;
NYMPHEA.CONTROLLER  = CONTROLLER;
NYMPHEA.VALUES      = VALUES; //форматирование и приведение занчений
NYMPHEA.CAST        = CAST; // приведение  виду или к значению
//NYMPHEA.SENDER      = SENDER; //отправка флогсов или стат

NYMPHEA.LoaderFactory  = LoaderFactory;
NYMPHEA.FileGenerator  = FileGenerator;

NYMPHEA.DevONLY     = DevONLY;     //возвращаемые параметры для использования только в дев версии

export default NYMPHEA