(function(){
    
    var getStateResorce = function( $resource ){
        
        resourceFactory = {};
        console.log('ngResource : ' , $resource);
        
        resourceFactory.getStateResource = function() {
          
          var States = $resource('http://services.groupkt.com/state/get/IND/:state' , 
                { state : 'all'} ) ;
                
          var states = States.query( function() {
            //var state = states[0]; 
            console.log('States in res factory :' , states.result);
            
          });
        };
        
        return resourceFactory;
    };
    
    getStateResorce.$inject = [ '$resource' ];
    angular.module('customersApp').factory('getStateResorce' , getStateResorce );
    
}());