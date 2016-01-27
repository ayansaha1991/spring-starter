(function(){
  
  var linkDemo = function(){
    
      return  {
          restrict : "A" ,
          link : function(scope,elem,attr){
              elem.on("click", function(){
                alert("You have clicked me !!");
              });
            
          }
          
      };
    
  };
  
  angular.module("customersApp").directive("linkDemo", linkDemo);
  
}());