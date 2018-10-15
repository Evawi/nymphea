'use strict';

import Loader from './Loader.js';

export let LoaderFactory = {
	loaders : [],
	default_error : null,
	get : function(url, params, request_method) {
		var loader = new Loader(url, params, request_method,this.default_error);
		this.loaders.push(loader);
		return loader;
	},
	clear : function() {
		for (var i in this.loaders) {
			this.loaders[i].disable();
		}
		this.loaders = [];
	},
	setDefaultError : function(cb) {
		this.default_error = cb;
	}
};

