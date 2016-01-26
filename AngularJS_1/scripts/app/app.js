(function(){
  
    var app = angular.module('customersApp',['ngRoute','ngResource']);  
    
    app.config(function($routeProvider) {

        $routeProvider
            .when('/', {
                controller: 'customersController',
                templateUrl: 'scripts/views/customers.html'
            })
            .when('/orders/:customerId', {
                controller: 'ordersController',
                templateUrl: 'scripts/views/orders.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());