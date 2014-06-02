(function($){
    
    
    $.fn.biblerest = function(options){
        
        var self = this,
                
            settings = $.extend({
                url: "http://localhost:8888/bible/?callback=?",
                lookupUrl: "http://localhost:8888/bible/index.php/search/lookup/?callback=?"
            }, options),
            
            getLookup = function(){
                
            },
            
            getData = function(){
                
            };
        
    };
    
    
})(jQuery);


