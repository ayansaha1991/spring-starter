(function(){
    
    var app = angular.module("directiveModule", []);
    
    app.directive("helloDirective" , function(){
      
        return {
           template : "Hello world Worked "
        };
        
    });
    
}());