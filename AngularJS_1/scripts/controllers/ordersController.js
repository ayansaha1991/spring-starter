(function(){
  
    var ordersController = function( $scope, $routeParams , customersService , getStateResorce) {
        
        var customerId = $routeParams.customerId;
        var customer = null;
        var states = [];
          
        function init() {
           $scope.customer = customersService.getCustomer(customerId);
           $scope.states = getStateResorce.getStateResource();
        }
        
        init();
        
    };
    
    ordersController.$inject = ['$scope' , '$routeParams', 'customersService' , 'getStateResorce'];
    angular.module('customersApp').controller('ordersController' , ordersController);
     
}());
