define([], function() {

	var Loader = function(url, params, request_method, default_error) {
		request_method = request_method || "POST";
		var self = this;

		self._successCBS = [];
		self._successAlwaysCBS = [];
		self._errorCBS = [];
		self._errorAlwaysCBS = [];
		self._doneCBS = [];
		self._doneAlwaysCBS = [];
		self._call_all = true;

		self.success = function(cb) {
			self._successCBS.push(cb);
			return self;
		}
		self.successAlways = function(cb) {
			self._successAlwaysCBS.push(cb);
			return self;
		}
		self.error = function(cb) {
			self._errorCBS.push(cb);
			return self;
		}
		self.errorAlways = function(cb) {
			self._errorAlwaysCBS.push(cb);
			return self;
		}
		self.done = function(cb) {
			self._doneCBS.push(cb);
			return self;
		}
		self.doneAlways = function(cb) {
			self._doneAlwaysCBS.push(cb);
			return self;
		}
		self.disable = function() {
			self.call_all = false;
		}

		self._success = function(data) {
			self._call(self._successAlwaysCBS, [data]);
			if (self._call_all) {
				self._call(self._successCBS, [data]);
			}
		};
		self._error = function(string,errorMsg) {
                    if (self._errorAlwaysCBS.length == 0 && self._errorCBS.length == 0) {
                        if (default_error) {
                                default_error(string,errorMsg);
                        } else {
                            throw new Error("ajax error:"  + string);
                        }
                        return;
                    }

			self._call(self._errorAlwaysCBS, [string,errorMsg]);
			if (self._call_all) {
				self._call(self._errorCBS, [string,errorMsg]);
			}
		};
		self._done = function(data, status, string) {
			self._call(self._doneAlwaysCBS, [data, status, string]);
			if (self._call_all) {
				self._call(self._doneCBS, [data, status, string]);
			}
		};

		self._call = function(arr, args) {
			arr.forEach(function(item, i, arr) {
				item.apply(self, args)
			})
		}
		self.xhr = $.ajax({
					type : request_method,
					url : url,
					data : params,
					dataType : 'json',
					contentType : window.contentType ||'text/plain',
					headers: window.headers,
					success: function (data, status, xhr) {
						self._done(data, true, "");
						self._success(data);
					},
					error:function(xhr, status, error) {
						if(xhr.aborted) return;
						self._done(null, false, error);
						self._error(error,xhr.responseText);
					}
				});
	}

	return Loader;
});
