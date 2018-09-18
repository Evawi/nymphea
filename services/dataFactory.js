'use strict';

import {LoaderFactory} from './LoaderFactory.js';

export default function(controller, opts, request_method){
    console.log("request")
        this.baseUrl = "/ai/stat/";
        this.controller = controller;
        this.opts = opts;
        this.request_method = request_method || "POST";

        this.request = function(method, params) {

                method = this.verify_method(method);
                var url = this._build_url(method);
                var new_params = $.extend({}, this.opts, params);
                if (this.noMerge){
                        if (this.noMerge.method == method){
                                new_params = params
                        }
                }
                return LoaderFactory.get(url, new_params, this.request_method)
        }

        this.verify_method = function(method) {
                var meths = ["create", "read", "update", "delete"];
                if (meths.indexOf(method) > -1) {
                        return "/" + method;
                } else if (method == "") {
                        return "";
                } else {
                        throw new Error("Wrong method userd: " + method);
                }
        };
        this._build_url = function(mtd) {
                return this.baseUrl + this.controller + mtd;
        };
}
