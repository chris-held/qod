var app = angular.module('quote-directives', []);

app.controller('QuoteController', ['$http', function($http){

	var me = this;

	this.checkCookie = function() {
		var qodId = $.cookie("qodId");
		return qodId || null;
	};

	this.getRandom = function(options) {
		//return a random number
		var opts = {
			upper: options.upper || 20,
			lower: options.lower || 1
		};
		return String(Math.floor(Math.random() * opts.upper) + opts.lower);
	};

	var id = this.checkCookie() || this.getRandom({
		upper: 12,
		lower: 1
	});

	//if no cookie set, set a cookie to expire in a day (quote of the day, and all)
	if(!this.checkCookie()) {
		$.cookie("qodId", id, {expires: 1});
	}

	this.quote = {};
	$http.get("data/quotes.json").success(function(data){
		me.quote = _.find(data, function(q){
			return q.id === id;
		});
	});
	
}]);

app.controller('QuoteListController', ['$http', function($http){
	var me = this;
	this.quotes = [];
	$http.get("data/quotes.json").success(function(data){
		me.quotes = data;
	});
}]);

app.controller('QuoteFormController', ['$http', function($http){
	var me = this;
}]);
