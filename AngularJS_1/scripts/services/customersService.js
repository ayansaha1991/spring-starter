(function(){
    
    var customersService = function( $http ) {
        
        var factory = {};
        
        var customers = [
            {
              "id" : 1 ,
              "name" : "Ayan" ,
              "age" : 25 ,
              "joined" : "2012-02-13" ,
              "dept" : "IT & Services" ,
              "orders" : [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 9.9956
                    }
              ]
            },
            { 
              "id" : 2 ,
              "name" : "Asmita" ,
              "age" : 23 ,
              "joined" : "2013-02-13",
              "dept" : "HR",
              "orders" : [
                    {
                        id: 2,
                        product: 'Shoes',
                        total: 9.9956
                    },
                    {
                        id: 3,
                        product: 'Pants',
                        total: 9.9956
                    }
              ]
            },
            {
              "id" : 3 ,
              "name" : "Indra" ,
              "age" : 27 ,
              "joined" : "2014-02-13",
              "dept" : "Development",
              "orders" : [
                    {
                        id: 4,
                        product: 'Shoes',
                        total: 9.9956
                    }
              ]
            },
            {
              "id" : 4 ,
              "name" : "Sabya" ,
              "age" : 26 ,
              "joined" : "2011-02-13",
              "dept" : "Chira geche",
              "orders" : [
                    {
                        id: 5,
                        product: 'Shoes',
                        total: 9.9956
                    }
              ]
            }
        ];
        
        factory.getCustomers = function(){
          return customers;
        };
        
        factory.getCustomer = function(customerId){
            
            for (var i=0,len=customers.length;i<len;i++) {
                 
                 if (customers[i].id == parseInt(customerId)) {
                     //$scope.orders = $scope.customers[i].orders;
                     return customers[i];
                 }
                 
            }
            
            return {};
  
        };
        
        factory.getStates = function() {
            return $http.get('http://services.groupkt.com/state/get/IND/UP');
        };
        
        factory.getDetails = function(){
            
        };
        
        return factory ;
    };
    
    customersService.$inject = ['$http'];
    angular.module('customersApp' ).factory('customersService' , customersService);
  
}());