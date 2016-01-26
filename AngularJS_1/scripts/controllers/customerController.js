(function(){
  
    var customersController = function( $scope , customersService) {
       
        $scope.sortBy = 'name' ;
        $scope.reverse = false ;
        $scope.states = [];
        $scope.customers = customersService.getCustomers();
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
        function init(){
          customersService.getStates()
            .success(function(states){
                $scope.states = states;
            })
            .error(function(){
               console.log("Error calling Rest url");
            });
        }
        
        init();   
        
    };
     
    customersController.$inject = ['$scope' , 'customersService' ];
    angular.module('customersApp').controller('customersController' , customersController);
  
}());


