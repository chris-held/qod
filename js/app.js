
var app = angular.module('qod', ['quote-directives', 'ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/quote.html',
        controller: 'QuoteController'
      }).
      when('/quotes', {
        templateUrl: 'templates/quote-list.html',
        controller: 'QuoteListController'
      }).
      when('/add', {
      	templateUrl: 'templates/quote-form.html',
      	controller: 'QuoteFormController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
