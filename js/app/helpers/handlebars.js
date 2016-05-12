define([
	'handlebars'
], function (Handlebars) {
	var Helpers = {
		debug: function (value) {
			return JSON.stringify(value);
		}
	};

	return Helpers;
});
